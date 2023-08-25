import { prisma } from '../prisma/client.js';

export async function getProductId(id) {
  await prisma.$connect();
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return product.productId;
}

