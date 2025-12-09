import { OpenRouter } from "@openrouter/sdk";
import dotenv from 'dotenv';

dotenv.config();

let client: OpenRouter | null = null;

export const connectOpenRouter = (): OpenRouter => {
  if (client) return client;

  const apiKey = process.env.OPENROUTER_API_KEY;
  console.log('Api Key is:', apiKey)

  client = new OpenRouter({ apiKey });
  return client;
};


export const openRouterClient = connectOpenRouter();

export default openRouterClient;
