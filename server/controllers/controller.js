// import the Prisma client from the index.js file
const prisma = require('../index');

// SUPPLIER QUERIES

async function getSuppliers(req, res) {
  try {
    const suppliers = await prisma.supplier.findMany();
    res.status(200).send(suppliers);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}

async function createSupplier(req, res) {
  try {
    console.log(req.body);
    const { companyName, email, contactName, clientId } = req.body;
    if (!companyName || !email || !contactName || !clientId)
      res.status(400).send('Incomplete fields.');

    const foundSupplier = await prisma.supplier.findUnique({
      where: {
        companyName: companyName,
      },
    });
    if (foundSupplier)
      res.status(404).send('Supplier already exists: ', foundSupplier);
    const newSupplier = await prisma.supplier.create({
      data: {
        companyName: companyName,
        email: email,
        contactName: contactName,
        clientId: clientId,
      },
    });
    res.status(201).send('New supplier created!', newSupplier);
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

// CLIENT QUERIES

async function createClient(req, res) {
  try {
    console.log(req.body);
    const { companyName, email, contactName } = req.body;
    if (!companyName || !email || !contactName)
      res.status(400).send('Incomplete fields.');
    const foundClient = await prisma.client.findUnique({
      where: {
        email: email,
      },
    });
    if (foundClient) res.status(404).send('Client already exists');
    const newClient = await prisma.client.create({
      data: {
        companyName: companyName,
        email: email,
        contactName: contactName,
      },
    });
    res.status(201).send('New client created!', newClient);
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

// PRODUCT QUERIES
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
  getSuppliers,
  createSupplier,
  createClient,
  createProduct,
};
