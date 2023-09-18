// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const OpenAI = require('openai');

const PagesTable = aircode.db.table('pages');

async function generateEmbeddings(project) {
  // Find all the pages without embeddings
  const pages = await PagesTable
    .where({ project, embedding: null })
    .find();

  if (!pages || pages.length === 0) {
    return { ok: 1 };
  }

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

    for (let i = 0; i < updatedPage.length; i += 100) {
      await PagesTable.save(updatedPage.slice(i, i + 100));
    }
  
    return { ok: 1 };
  } catch (error) {
    console.error(`Failed to generate embeddings for ${project}`);
    throw error;
  }
}

module.exports = {
  generateEmbeddings,
}
