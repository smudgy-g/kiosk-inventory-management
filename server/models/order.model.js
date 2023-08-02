import { prisma } from '../prisma/client.js';

export async function createOrder(
  clientId,
  supplierId,
  products,
  price,
  comment,
  date
) {
  const result = await prisma.order.create({
    data: {
      clientId: parseInt(clientId),
      supplierId: parseInt(supplierId),
      price: parseFloat(price),
      products: {
        create: products.map(({ id, quantity }) => ({
          product: { connect: { id: parseInt(id) } },
          quantity: parseFloat(quantity),
        })),
      },
      comment: comment,
      date: date,
    },
    include: {
      products: true,
    },
  });
  return result;
}