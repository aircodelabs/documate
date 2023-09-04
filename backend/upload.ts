// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import Chat from './lib/chat';
import knowledge from './lib/knowledge';

const finishAction = async (projectName: string, mode: string) => {
  if (mode === 'clear') {
	  const projects = await aircode.db.table('projects').where({ projectName }).projection({ _id: 1 }).find();
	  await aircode.db.table('projects').delete(projects);
	  return;
  };
	
  const documents = await knowledge.generateDocs(projectName);
  const contents = documents.map((document) => {
	 return {
		 projectName: projectName,
		 content: document.pageContent
	  }
  });

  if (mode === 'all') {
	  const documents = await aircode.db.table('documents').where({ projectName }).find();
	  await aircode.db.table('documents').delete(documents);

	  const chunkSize = 99;
	  for (let i = 0; i < contents.length; i += chunkSize) {
	     const subArray = contents.slice(i, i + chunkSize);
	     await aircode.db.table('documents').save(subArray);
	  }
	  
	  const projects = await aircode.db.table('projects').where({ projectName }).projection({
		  _id: 1,
	  }).find();
	  await aircode.db.table('projects').delete(projects);
  } else {
	  await aircode.db.table('documents').save(contents);
  }
}

const uploadAction = async (projectName: string, fileName: string, content: string) => {	  
  const result = await aircode.db.table('projects').save({ projectName, fileName, content });

  return result;
}

export default async function (params: any, context: any) {
  if (process.env.TOKEN && context.headers.token !== process.env.TOKEN) {
	  throw new Error('no authorize');
  }
  console.log('Received params:', params);

  const project = params.project || 'default';

  if (params.state === 'finish') {
	  await finishAction(project, params.mode);
  }	else {
	  await uploadAction(project, params.fileName, params.content);
  }
  return {
	  success: true
  };
};
