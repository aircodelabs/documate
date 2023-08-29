// @see https://docs.aircode.io/guide/functions/
// import aircode from 'aircode';
import Chat from './chat';

export default async function (params: any, context: any) {
  console.log('Received params:', params);
  
  const chat = Chat.getInstance(params.userId);

  const response = await chat.question(params.question, params.command);
  console.log(response);
  
  return {
    response,
  };
};
