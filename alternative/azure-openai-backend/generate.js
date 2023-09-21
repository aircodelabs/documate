// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const {OpenAIClient, AzureKeyCredential} = require("@azure/openai");

const PagesTable = aircode.db.table('pages');
const {env} = process;

async function generateEmbeddings(project) {
  // Find all the pages without embeddings
  const pages = await PagesTable
    .where({ project, embedding: null })
    .find();

  if (!pages || pages.length === 0) {
    return { ok: 1 };
  }

  // Replace newlines with spaces for OpenAI embeddings
  const inputs = pages.map(page => page.content.replace(/\n/g, ' '));
  
  try {
    const client = new OpenAIClient(env.AZURE_OPENAI_ENDPOINT,
                                  new AzureKeyCredential(env.AZURE_OPENAI_KEY));
    const deploymentId = env.AZURE_OPENAI_EMBEDDING;

    const embeddings = [];
    for (let i = 0; i < inputs.length; i += 16) {
      const { data, usage } = await client.getEmbeddings(
        deploymentId,
        inputs.slice(i, i + 16),
      );
      embeddings.push(...data);
    }

    const updatedPage = pages.map((page, index) => ({
      _id: page._id,
      embedding: embeddings[index].embedding,
    }));

    for (let i = 0; i < updatedPage.length; i += 100) {
      await PagesTable.save(updatedPage.slice(i, i + 100));
    }
  
    return { ok: 1 };
  } catch (error) {
    console.error(`Failed to generate embeddings for ${project}: ${error.message}`);
    throw error;
  }
}

module.exports = {
  generateEmbeddings,
}
