import { prisma } from '../prisma/client.js';

export async function getClientDetails(id) {
  const client = await prisma.client.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return client;
}

export async function createClient({company, email, contact}) {
  const client = await prisma.client.create({
    data: {
      companyName: company,
      email: email,
      contactName: contact,
    },
  });
  return client
}

export async function checkEmail (email) {
  const result = await prisma.client.findUnique({
    where: {
      email: email,
    },
  });

  return result;
}

export async function getDetails (id) {
  const result = await prisma.client.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return result;
}