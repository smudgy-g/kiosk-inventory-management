const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSupplierDetails(id) {
  await prisma.$connect();
  const supplier = await prisma.supplier.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return supplier;
}

module.exports = {
  getSupplierDetails,
};
