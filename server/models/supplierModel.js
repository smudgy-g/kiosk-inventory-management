// import { PrismaClient } from '@prisma/client';
import { prisma } from '../prisma/client.js';

export async function getSupplierDetails(id) {
  await prisma.$connect();
  const supplier = await prisma.supplier.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return supplier;
}
