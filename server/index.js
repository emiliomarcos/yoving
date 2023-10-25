import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import gptRoutes from './gptRoutes.js';

dotenv.config();

const app = express();

app.use(cors())
app.use(cors({
  origin: ['http://127.0.0.1:5173']
}))

app.use('/gpt', gptRoutes);

app.get('/', async (req, res) => {
  res.send('Server is awake');
})

function startServer() {
  app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
  })
}

startServer();
