import PrismaClient from '@prisma/client';
const prisma = new PrismaClient();

export async function createProduct(req, res) {
  try {
    const { supplierId, productId, productName, price } = req.body;
    console.log(req.body);
    if (!supplierId || !productName || !price)
      res.status(400).send('Incomplete fields.');

    await prisma.$connect();
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
    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new product: ${error}`);
  }
}

export async function getProducts(req, res) {
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

// export default {
//   createProduct,
//   getProducts,
// };
