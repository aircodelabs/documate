// @see https://docs.aircode.io/guide/functions/
// import aircode from 'aircode';
import Chat from './lib/chat';

export default async function (params: any, context: any) {
  if (context.headers.)
	
  console.log('Received params:', params);
  
  const chat = Chat.getInstance(params.userId);

  const response = await chat.question(params.projectName, params.question, params.command);
  console.log(response);
  
  return {
    response,
  };
};
