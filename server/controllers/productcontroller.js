// import the Prisma client from the index.js file
const prisma = require('../index');

async function createProduct(req, res) {
  try {
    console.log(req.body);
    const { supplierId, productId, name, price } = req.body;
    if (!supplierId || !name || !price)
      res.status(400).send('Incomplete fields.');

    const newClient = await prisma.product.create({
      data: {
        supplierId: supplierId,
        productId: productId,
        name: name,
        price: price,
      },
    });
    res.status(201).send('New client created!', newClient);
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

module.exports = {
  createProduct,
};