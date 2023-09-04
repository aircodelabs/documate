import { Redis } from "ioredis";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { RedisCache } from "langchain/cache/ioredis";
import { HumanMessage, SystemMessage } from 'langchain/schema';
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RetrievalQAChain } from 'langchain/chains';

import { chatPrompt, formattedPrompt } from './prompt'
import knowledge from './knowledge';

const chatMap = new Map<string, Chat>();

interface IBaseInfo {
    userId: string;
}

interface IOptions {
    openAIApiKey: string;
    temperature: number;
    maxRetries: number;
    maxConcurrency: number;
    cache?: RedisCache | boolean;
	stream?: boolean;
}

type ICommand = 'stop' | 'pure' | 'vectorLLM' | 'fileSearch';

class Chat {
    private model: ChatOpenAI;
    
    private abortSignal: AbortController;
    
    private baseInfo: IBaseInfo;

    constructor(userId: string) {
        const options: IOptions = {
          openAIApiKey: process.env.OPENAI_API_KEY as string,
          temperature: 0, // 0-1, the lower the value, the higher the confidence level.
          maxRetries: 2,
          maxConcurrency: 10,
          cache: true,
		  stream: true,
        };
        
        if (process.env.REDIS_URI && process.env.REIDS_URI?.startsWith('redis://')) {
            // See https://github.com/redis/ioredis for connection options
            const client = new Redis(process.env.REDIS_URI);
            const cache = new RedisCache(client);
            options.cache = cache;
        }
        
        this.abortSignal = new AbortController();
        this.model = new ChatOpenAI(options);
        this.baseInfo = {
          userId,
        };
    }

    static getInstance(userId: string): Chat {
      if (chatMap.has(userId)) {
        return chatMap.get(userId) as Chat;
      } else {
        const chat = new Chat(userId);
        chatMap.set(userId, chat);
        return chat;
      }
    }

    public cacel(): void {
        this.abortSignal.abort();
    }

    private async searchFromPureLLM(question: string): Promise<string> {
      const systemPrompt = await formattedPrompt();
      const response = await this.model.call([
        new SystemMessage(systemPrompt),
        new HumanMessage(question),
        ], {
          callbacks: [
            {
              handleLLMNewToken(token: string) {
                console.log({ token }); // todo
              },
            },
          ],
      });

      return response.content;
    }

    private async searchFromVectorLLM(vectorStore: any, question: string): Promise<string> {
      // Initialize a retriever wrapper around the vector store
      const vectorStoreRetriever = vectorStore.asRetriever();

      const chain = RetrievalQAChain.fromLLM(this.model, vectorStoreRetriever, {
        prompt: chatPrompt,
      });

      const res = await chain.call({
        query: question,
        field: 'aircode',
        question,
      }, {
        // signal: this.signal 支持取消 signal
      });

      return res.text;
    }

    private async searchFromVector(vectorStore: HNSWLib, question: string): Promise<string> {
      const result = await vectorStore.similaritySearch(question, 1);
      if (Array.isArray(result) && result.length !== 0) {
        console.log('Hit knowledge base');
        return result[0].pageContent;
      } else {
        console.log('Do not hit knowledge base, we will get response from openapi');
        return '';
      }
    }

    public async question(projectName: string, question: string, command: ICommand): Promise<string> {
	  const step1 = Date.now();
      const documents = await knowledge.loader(projectName);
      if (documents.length === 0) {
		  throw new Error('no documents in this project');
	  }
		
	  const step2 = Date.now();
	  console.log('steps loader', step2 - step1);
	  const start = Date.now();
      const allVectorStore = await HNSWLib.fromDocuments(documents, new OpenAIEmbeddings({
        openAIApiKey: process.env.openAIApiKey,
      }));
      const similarityDocuments = await allVectorStore.similaritySearch(question);
	  const step3 = Date.now();
	  console.log('steps similarity', step3 - step2);
	  // todo, 获取到 reference
		
      const pureVectorStore = await HNSWLib.fromDocuments(similarityDocuments, new OpenAIEmbeddings({
        openAIApiKey: process.env.openAIApiKey,
      }));
	  const step4 = Date.now();
	  console.log('steps pureVectorStore', step4 - step3);
		
      let result = '';
      switch(command) {
        case 'pure': result = await this.searchFromPureLLM(question); break;
        case 'stop': this.cacel(); break;
        case 'fileSearch': result = await this.searchFromVector(pureVectorStore, question); break;
        case 'vectorLLM':
        default: result = await this.searchFromVectorLLM(pureVectorStore, question); break;
      }

	  console.log('gpt', Date.now() - step4);

      return result;
    }
}

export default Chat;
