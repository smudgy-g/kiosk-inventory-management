import express, { json } from 'express';
import cors from 'cors';
import config from 'dotenv';
import {router} from './router.js';

config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port} 🛰`);
});
