import { prisma } from '../prisma/client.js';

export async function getClientDetails(id) {
  await prisma.$connect();
  const client = await prisma.client.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return client;
}
