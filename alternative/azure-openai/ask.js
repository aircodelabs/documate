// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const {OpenAIClient, AzureKeyCredential} = require("@azure/openai");
const { create, insertMultiple, searchVector } = require('@orama/orama');
const tokenizer = require('gpt-3-encoder');

const MAX_CONTEXT_TOKEN = 5000;
const PagesTable = aircode.db.table('pages');

const {env} = process;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function streamChatCompletions(client, deploymentId, messages, options) {
  const events = client.listChatCompletions(deploymentId, messages, options);
  const stream = new ReadableStream({
    async start(controller) {
      for await (const event of events) {
        const choice = event.choices[0];
        if(choice && choice.delta && choice.delta.content) {
          const chars = [...choice.delta.content];
          for(let i = 0; i < chars.length; i++) {
            controller.enqueue(chars[i]);
            await sleep(10);
          }
        }
      }
      controller.close();
    },
  });

  return stream;
}

module.exports = async function (params, context) {
  if (!process.env.AZURE_OPENAI_KEY) {
    console.log('Missing environment variable AZURE_OPENAI_KEY. Abort.');
    context.status(400);
    return {
      error:
        'You are missing some params, please open AirCode and find the details in Logs section',
    };
  }

  if (!params.question) {
    console.log('Missing param `question`. Abort.');
    context.status(400);
    return {
      error:
        'You are missing some params, please open AirCode and find the details in Logs section',
    };
  }

  try {
    const client = new OpenAIClient(env.AZURE_OPENAI_ENDPOINT,
                                  new AzureKeyCredential(env.AZURE_OPENAI_KEY));
    const embeddingDeploymentId = env.AZURE_OPENAI_EMBEDDING;
    const deploymentId = env.AZURE_OPENAI_DEPLOYMENT;

    // Moderate the content
    const question = params.question.trim();

    // Create embedding from the question
    const { data: [ { embedding }] } = await client.getEmbeddings(
      embeddingDeploymentId,
      [question.replace(/\n/g, ' ')],
    );
    
    // Get all pages
    const { project = 'default' } = params;
    const pages = await PagesTable
      .where({ project })
      .projection({ path: 1, title: 1, content: 1, embedding: 1, _id: 0 })
      .find();

    // Search vectors to generate context
    const memDB = await create({
      schema: {
        path: 'string',
        title: 'string',
        content: 'string',
        embedding: 'vector[1536]',
      },
    });
    await insertMultiple(memDB, pages);

    const { hits } = await searchVector(memDB, {
      vector: embedding,
      property: 'embedding',
      similarity: 0.8,  // Minimum similarity. Defaults to `0.8`
      limit: 10,        // Defaults to `10`
      offset: 0,        // Defaults to `0`
    });

    let tokenCount = 0;
    let contextSections = '';

    for (let i = 0; i < hits.length; i += 1) {
      const { content } = hits[i].document;
      const encoded = tokenizer.encode(content);
      tokenCount += encoded.length;

      if (tokenCount >= MAX_CONTEXT_TOKEN && contextSections !== '') {
        break;
      }

      contextSections += `${content.trim()}\n---\n`;
    }

    // Ask gpt
    const prompt = `You are a very kindly assistant who loves to help people. Given the following sections from documatation, answer the question using only that information, outputted in markdown format. If you are unsure and the answer is not explicitly written in the documentation, say "Sorry, I don't know how to help with that." Always trying to anwser in the spoken language of the questioner.

Context sections:
${contextSections}

Question:
${question}

Answer as markdown (including related code snippets if available):`

    const messages = [{
      role: 'user',
      content: prompt,
    }];

    const stream = streamChatCompletions(client,
      deploymentId,
      messages,
      { 
        maxTokens: 512,
        temperature: 0.4,
      });

    return stream;
  } catch (error) {
    console.error(error);
    context.status(500);
    return {
      error: 'Failed to generate anwser.',
    };
  }
}

