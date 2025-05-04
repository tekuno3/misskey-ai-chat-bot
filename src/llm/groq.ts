import Groq from 'groq-sdk';

const groq = new Groq({
  // 以下の2つはデフォルトで取ってきてくれるらしいので
  // apiKey: Deno.env.get('GROQ_API_KEY'),
  // baseURL: Deno.env.get('GROQ_BASE_URL'),
});

export default groq;
