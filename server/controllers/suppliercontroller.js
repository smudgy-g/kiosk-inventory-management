const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSuppliers(req, res) {
  try {
    // get suppliers for client using client id
    const { client } = req.params.clientId;

    await prisma.$connect();
    const suppliers = await prisma.supplier.findMany({
      where: {
        clientId: client,
      },
    });

    res.status(200).send(suppliers);
    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}

async function createSupplier(req, res) {
  try {
    const { companyName, email, contactName, clientId } = req.body;
    if (!companyName || !email || !contactName || !clientId)
      res.status(400).send('Incomplete fields.');

    await prisma.$connect();
    const foundSupplier = await prisma.supplier.findUnique({
      where: {
        companyName: companyName,
      },
    });
    if (foundSupplier) {
      return res.status(404).send();
    }

    const newSupplier = await prisma.supplier.create({
      data: {
        companyName: companyName,
        email: email,
        contactName: contactName,
        clientId: parseInt(clientId),
      },
    });
    res.status(201).send(newSupplier);
    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

module.exports = {
  getSuppliers,
  createSupplier,
};