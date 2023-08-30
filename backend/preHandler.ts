// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import knowledge from './lib/knowledge';

export default async function (params: any, context: any) {
  const documents = await knowledge.generateDocs(params.projectName);

  const contents = documents.map((document) => {
	 return {
		 projectName: params.projectName,
		 // todo, fileName
		 content: document.pageContent
	  }
  });

  await aircode.db.table('documents').save(contents);
	
  return {
    success: true
  };
};
