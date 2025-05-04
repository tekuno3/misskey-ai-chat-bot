import { err, ok, ResultAsync } from 'neverthrow';
import groqClient from '@/src/llm/groq.ts';
import ChatCompletionMessageParam from './types/ChatCompletionMessageParam.ts';

function chat(messages: ChatCompletionMessageParam[], groq = groqClient) {
  const completionMayThrow = groq.chat.completions.create({
    messages,
    model: 'llama-3.3-70b-versatile',
  });

  const completion = ResultAsync.fromPromise(completionMayThrow, (e) => e);

  return completion.andThen((v) => {
    const message = v.choices.at(0)?.message.content ?? null;
    return message ? ok(message) : err(message);
  });

}

export default chat;
