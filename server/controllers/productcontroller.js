const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createProduct(req, res) {
  try {
    console.log(req.body);
    const { supplierId, productId, name, price } = req.body;
    if (!supplierId || !name || !price)
      res.status(400).send('Incomplete fields.');

    await prisma.$connect();
    const newClient = await prisma.product.create({
      data: {
        supplierId: supplierId,
        productId: productId,
        name: name,
        price: price,
      },
    });
    res.status(201).send('New client created!', newClient);

    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

module.exports = {
  createProduct,
};
