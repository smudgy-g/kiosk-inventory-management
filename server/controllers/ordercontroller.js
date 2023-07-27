const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createOrder(req, res) {
  try {
    const { clientId, supplierId, products, price } = req.body;
    if (!supplierId || !clientId || !price || !products)
      res.status(400).send('Incomplete fields.');

    await prisma.$connect();
    const order = await prisma.order.create({
      data: {
        clientId: parseInt(clientId),
        supplierId: parseInt(supplierId),
        price: parseFloat(price),
        products: {
          create: products.map(({ productId, quantity }) => ({
            product: { connect: { id: parseInt(productId) } },
            quantity: parseInt(quantity),
          })),
        },
      },
      include: {
        products: true,
      },
    });
    res.status(201).send(order);

    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new order: ${error}`);
  }
}

module.exports = { createOrder };
