const { PrismaClient } = require('@prisma/client');
const { sendOrder } = require('../services/orderService.js');
const { getSupplierDetails } = require('./suppliercontroller');
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
    console.log(order);
    res.status(201).send(order);
    await sendOrder(clientId, supplierId, products);
    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new order: ${error}`);
  }
}

//get suuplierDetails
//get clientdetails
//get product details

module.exports = { createOrder };
