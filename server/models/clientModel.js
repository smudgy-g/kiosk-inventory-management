const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getClientDetails(id) {
  await prisma.$connect();
  const client = await prisma.client.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return client;
}

module.exports = {
  getClientDetails,
};
