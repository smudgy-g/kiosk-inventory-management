const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getProductId(id) {
  await prisma.$connect();
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return product.productId;
}

module.exports = {
  getProductId,
};
