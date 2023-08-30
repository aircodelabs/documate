import { CharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";

import axios from 'axios';
import aircode from 'aircode';

const generateDocs = async (projectName: string): Promise<Document[]> => {
  const files = await aircode.db.table('projects').where({ projectName }).find();
  const promises = files.map((file) => {
    return aircode.files.download({ 
		url: file.fileUrl 
	}, {
		dataType: 'string',
	});
  });
  const texts = await Promise.all(promises) as string[];
	
  const splitter = new CharacterTextSplitter({
    separator: '\n\n',
  });
  const docs = await splitter.createDocuments(texts);

  return docs;
}

const loader = async (projectName: string): Promise<Document[]> => {
	const documents = await aircode.db.table('documents').where({ projectName }).find(); // projectName, fileName, content

	const docs = documents.map((doc) => {
		return new Document({ pageContent: doc.content });
	});
	return docs;
};

export default { loader, generateDocs };
