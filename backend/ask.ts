// @see https://docs.aircode.io/guide/functions/
// import aircode from 'aircode';
import Chat from './lib/chat';

export default async function (params: any, context: any) {	
  if (process.env.TOKEN && context.headers.token !== process.env.TOKEN) {
	  throw new Error('no authorize');
  }
	
  console.log('Received params:', params);
  
  const chat = Chat.getInstance(params.userId);

  const response = await chat.question(params.project || 'default', params.question, params.command);
  console.log(response);
  
  return {
    response,
  };
};
