import { CharacterTextSplitter } from "langchain/text_splitter";
import axios from 'axios';
import aircode from 'aircode';

const loader = async () => {
  const files = await aircode.db.table('_files').where().find();
  const fileUrls = files.map((file) => {
		return file.url;
	});

  const promises = fileUrls.map((fileUrl) => {
    return axios.get(fileUrl);
  });

  const responses = await Promise.all(promises);

  const splitter = new CharacterTextSplitter({
    separator: '\n\n',
  });

  const texts = responses.map((res) => {
    return res.data;
  })
  const docs = await splitter.createDocuments(texts);
  return docs;
}

export default { loader };
