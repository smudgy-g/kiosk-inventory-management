import { prisma } from '../prisma/client.js';

export async function getProductId(id) {
  const result = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (result) return result.productId;
  else return result;
}

export async function getProductsBySupplier(id) {
  const result = await prisma.product.findMany({
    where: {
      supplierId: parseInt(id),
    },
  });
  return result;
}

export async function createProduct(supplierId, productId, productName, price) {
  const result = await prisma.product.create({
    data: {
      supplierId: parseInt(supplierId),
      productId: parseInt(productId),
      name: productName,
      price: parseFloat(price),
    },
  });
  return result;
}
