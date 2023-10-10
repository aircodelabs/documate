// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const crypto = require('crypto');
const tokenizer = require('gpt-3-encoder');
const { generateEmbeddings } = require('./generate');

const MAX_TOKEN_PER_CHUNK = 8191;

const PagesTable = aircode.db.table('pages');

// Split the page content into chunks base on the MAX_TOKEN_PER_CHUNK
function getContentChunks(content) {
  const encoded = tokenizer.encode(content);
  const tokenChunks = encoded.reduce(
    (acc, token) => (
      acc[acc.length - 1].length < MAX_TOKEN_PER_CHUNK
        ? acc[acc.length - 1].push(token)
        : acc.push([token]),
      acc
    ),
    [[]],
  );
  return tokenChunks.map(tokens => tokenizer.decode(tokens));
}

module.exports = async function(params, context) {
  if (!process.env.OPENAI_API_KEY) {
    console.log('Missing environment variable OPENAI_API_KEY. Abort.');
    context.status(400);
    return {
      error: 'You are missing some params, please open AirCode and find the details in Logs section',
    };
  }

  const { operation, project = 'default' } = params;

  if (!['add', 'delete', 'clean', 'generate'].includes(operation)) {
    console.log(`Operation ${operation} is not supported. Abort.`);
    context.status(400);
    return {
      error: 'You are missing some params, please open AirCode and find the details in Logs section',
    };
  }

  if (operation === 'clean') {
    // Delete all the stored pages
    await PagesTable.where({ project }).delete();
    return { ok: 1 };
  }

  if (operation === 'generate') {
    await generateEmbeddings(project);
    return { ok: 1 };
  }

  const { path, title = '', content = '' } = params;

  if (!path) {
    console.log('Missing param `path`. Abort.');
    context.status(400);
    return {
      error: 'You are missing some params, please open AirCode and find the details in Logs section',
    };
  }

  console.log(`${operation} page with path ${path}`);

  if (operation === 'delete') {
    // Delete single page
    await PagesTable.where({ project, path }).delete();
    return { ok: 1 };
  }

  // Generate checksum for the page, so we can determine if this page is changed
  const checksum = crypto.createHash('md5').update(content).digest('hex');
  const existed = await PagesTable.where({
    project,
    path,
  }).findOne();

  if (existed) {
    if (existed.checksum === checksum) {
      console.log('This page\'s content is still fresh. Skip regenerating.');
      return { ok: 1 };
    } else {
      // Delete the exist one since we will regenerate it
      await PagesTable.where({ project, path }).delete();
    }
  }

  const chunks = getContentChunks(content);
  const pagesToSave = chunks.map((chunk, index) => ({
    project,
    path,
    title,
    checksum,
    chunkIndex: index,
    content: chunk,
    embedding: null,
  }))

  // Save the result to database
  for (let i = 0; i < pagesToSave.length; i += 100) {
    await PagesTable.save(pagesToSave.slice(i, i + 100));
  }

  return { ok: 1 };
};
