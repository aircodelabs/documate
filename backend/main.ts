// @see https://docs.aircode.io/guide/functions/
// import aircode from 'aircode';
import Chat from './lib/chat';

export default async function (params: any, context: any) {
  console.log('Received params:', params);
  
  const chat = Chat.getInstance(params.projectName); // 使用 projectName 作为实例 id

  const response = await chat.question(params.projectName, params.question, params.command);
  console.log(response);
  
  return {
    response,
  };
};
