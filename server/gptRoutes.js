import { Router } from 'express';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const router = Router();

const openAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route('/').get(async (req, res) => res.send('GPT is awake'));

router.route('/').post(async (req, res) => {
  const { gptPrompt } = req.body;

  try {
    const completion = await openAI.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{'role': 'system', 'content': 'You are an assistant that helps nomads experiment a new city in the best ways that suits their hobbies, personality, sports, timeframe, etc'}, {'role': 'user', 'content': gptPrompt}],
      temperature: 0.85,
      max_tokens: 1000
    });
    console.log(completion);
    const experiences = completion;
    res.status(200).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'There was an error processing your request'});
  }
});

export default router;
