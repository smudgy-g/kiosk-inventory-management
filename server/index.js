const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const app = express();
const port = process.env.PORT;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    //connect to database
    await prisma.$connect();
    console.log('connected to database.');

    // run server
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port} 🛰`);
    });

    app.on('close', () => {
      prisma.$disconnect();
      console.log('Disconnected from databse.');
    });
  } catch (error) {
    console.log('Error connecting to DB.', error);
  }
})();

module.exports = { prisma }