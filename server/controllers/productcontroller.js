const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createProduct(req, res) {
  try {
    const { supplierId, productId, name, price } = req.body;
    if (!supplierId || !name || !price)
      res.status(400).send('Incomplete fields.');

    await prisma.$connect();
    const newProduct = await prisma.product.create({
      data: {
        supplierId: parseInt(supplierId),
        productId: parseInt(productId),
        name: name,
        price: parseFloat(price),
      },
    });
    res.status(201).send(newProduct);

    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new product: ${error}`);
  }
}

async function getProducts(req, res) {
  try {
    const id = parseInt(req.params.supplierId);
    await prisma.$connect();
    const products = await prisma.product.findMany({
      where: {
        supplierId: id,
      },
    });
    res.status(200).send(products);
    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  createProduct,
  getProducts,
};
