const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await prisma.$connect();
    console.log('🌋 connected to database.');
    
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port} 🛰`);
    });

  } catch (error) {
    console.log('Error connecting to DB.', error);
  }
})();

module.exports = { prisma };
