import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors())
app.use(cors({
  origin: ['http://127.0.0.1:5173']
}))

app.get('/', async (req, res) => {
  res.send('Server is awake');
})
