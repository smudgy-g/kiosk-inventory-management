const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port} 🛰`);
});
