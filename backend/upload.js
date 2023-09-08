// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const crypto = require('crypto');
const util = require('util');
const { generateEmbeddings } = require('./generate');

const PagesTable = aircode.db.table('pages');

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
      await PagesTable.delete(existed);
    }
  }

  // Save the result to database
  await PagesTable.save({
    project,
    path,
    title,
    checksum,
    content,
    embedding: null,
  });

  return { ok: 1 };
};
