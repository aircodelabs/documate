// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const OpenAI = require('openai');

const PagesTable = aircode.db.table('pages');

async function generateEmbeddings(project) {
  // Find all the pages without embeddings
  const pages = await PagesTable
    .where({ project, embedding: null })
    .find();

  // Replace newlines with spaces for OpenAI embeddings
  const input = pages.map(page => page.content.replace(/\n/g, ' '));
  
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  
    const { data, usage } = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input,
    });

    const updatedPage = pages.map((page, index) => ({
      _id: page._id,
      embedding: data[index].embedding,
    }));

    await PagesTable.save(updatedPage);
  
    return { ok: 1 };
  } catch (error) {
    console.error(`Failed to generate embeddings for ${path}`);
    throw error;
  }
}

module.exports = {
  generateEmbeddings,
}
