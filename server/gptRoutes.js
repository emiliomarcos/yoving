import { Router } from 'express';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const router = Router();

const configuration = new Configuration({apiKey: process.env.OpenAIApi});
const openAI = new OpenAIApi(configuration);

router.route('/').get(async (req, res) => res.send('GPT is awake'));

router.route('/').post(async (req, res) => {
  const { gptPrompt } = req.body;

  try {
    const data = await openAI.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{'role': 'system', 'content': 'You are an assistant that helps nomads experiment a new city in the best ways that suits their hobbies, personality, sports, timeframe, etc'}, {'role': 'user', 'content': gptPrompt}],
      temperature: 0.85,
      max_tokens: 1000
    });
    console.log(data.data);
    const experiences = data.data
    res.status(200).json()
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'There was an error processing your request'});
  }
});

export default router;
