// import { PrismaClient } from '@prisma/client';
import { prisma } from '../prisma/client.js';
import { sendOrder } from '../services/orderService.js';
export async function createOrder(req, res) {
  try {
    const { clientId, supplierId, products, price } = req.body;

    if (!supplierId || !clientId || !price || !products)
      res.status(400).send('Incomplete fields.');
    const order = await prisma.order.create({
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
      },
      include: {
        products: true,
      },
    });
    res.status(201).send(order);
    await sendOrder(clientId, supplierId, products);
  } catch (error) {
    res.status(400).send(`Error creating new order: ${error}`);
  }
}
