import { prisma } from '../prisma/client.js';

export async function createProduct(req, res) {
  try {
    const { supplierId, productId, productName, price } = req.body;
    if (!supplierId || !productName || !price)
      res.status(400).send('Incomplete fields.');
    const newProduct = await prisma.product.create({
      data: {
        supplierId: parseInt(supplierId),
        productId: parseInt(productId),
        name: productName,
        price: parseFloat(price),
      },
    });
    res.status(201).send(newProduct);
    console.log('new product', newProduct);
  } catch (error) {
    res.status(400).send(`Error creating new product: ${error}`);
  }
}

export async function getProducts(req, res) {
  try {
    const id = parseInt(req.params.supplierId);
    const products = await prisma.product.findMany({
      where: {
        supplierId: id,
      },
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
}
