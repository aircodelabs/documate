// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const OpenAI = require('openai');
const { create, insertMultiple, searchVector } = require('@orama/orama');
const tokenizer = require('gpt-3-encoder');
const { OpenAIStream } = require('ai');

const MAX_CONTEXT_TOKEN = 1500;
const PagesTable = aircode.db.table('pages');

module.exports = async function (params, context) {
  if (!process.env.OPENAI_API_KEY) {
    console.log('Missing environment variable OPENAI_API_KEY. Abort.');
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
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Moderate the content
    const question = params.question.trim();
    const { results: moderationRes } = await openai.moderations.create({
      input: question,
    });
    if (moderationRes[0].flagged) {
      console.log('The user input contains flagged content.', moderationRes[0].categories);
      context.status(403);
      return {
        error: 'Question input didn\'t meet the moderation criteria.',
        categories: moderationRes[0].categories,
      };
    }

    // Create embedding from the question
    const { data: [ { embedding }] } = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: question.replace(/\n/g, ' '),
    });
    
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
    const prompt = `You are a very kindly assistant who loves to help people. Given the following sections from documatation, answer the question using only that information, outputted in markdown format. If you are unsure and the answer is not explicitly written in the documentation, say "Sorry, I don't know how to help with that.", otherwise try to answer the question in the spoken language of the questioner.

Context sections:
${contextSections}

Question:
${question}

Answer as markdown (including related code snippets if available):`

    const messages = [{
      role: 'user',
      content: prompt,
    }];

    const response = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      max_tokens: 512,
      temperature: 0.4,
      stream: true,
    })

    // Transform the response into a readable stream
    const stream = OpenAIStream(response);
    return stream;
  } catch (error) {
    console.error(error);
    context.status(500);
    return {
      error: 'Failed to generate anwser.',
    };
  }
}
