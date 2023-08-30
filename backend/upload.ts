// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import Chat from './lib/chat';

export default async function (params: any, context: any) {
  console.log('Received params:', params);
  const { projectName , fileName, content } = params;
  
  const file = await aircode.files.upload(content, `${projectName}-${fileName}`);

  await aircode.db.table('projects').save({ projectName, fileName, fileUrl: file.url });
  
  return {
    file,
  };
};
