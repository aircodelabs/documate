import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
	PromptTemplate
} from "langchain/prompts";

const systemPrompt = `You are a helpful assistant of {field} field. Use the following pieces of context to answer the users question. If you don't know the answer, just say that you don't know, don't try to make up an answer. \n {context}`;
const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(systemPrompt);
const humanPrompt = 'My question is ${question}, please help me to solve this question';
const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanPrompt);

const template = PromptTemplate.fromTemplate(systemPrompt);

const formattedPrompt = async () => {
	const prompt = await template.format({
	  field: process.env.FIELD,
		context: '',
	});
	return prompt;
}

const chatPrompt = ChatPromptTemplate.fromPromptMessages([systemMessagePrompt, humanMessagePrompt]);
export {
	chatPrompt,
	formattedPrompt,
}; 
