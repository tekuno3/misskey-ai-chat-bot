import type groqClient from '../groq.ts';

// `groq-sdk`から型を取得する方法がわからなかったので……
type GroqChatCompletionsCreate = typeof groqClient.chat.completions.create;
type ChatCompletionMessageParamArr = Parameters<
  GroqChatCompletionsCreate
>[0]['messages'];
type ChatCompletionMessageParam = ChatCompletionMessageParamArr[number];

export default ChatCompletionMessageParam;
