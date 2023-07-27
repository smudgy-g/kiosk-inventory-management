const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createClient(req, res) {
  try {
    // console.log(req.body);
    const { companyName, email, contactName } = req.body;

    if (!companyName || !email || !contactName)
      return res.status(400).send('Incomplete fields.');

    await prisma.$connect();

    const foundClient = await prisma.client.findUnique({
      where: {
        email: email,
      },
    });

    if (foundClient) return res.status(404).send();

    const newClient = await prisma.client.create({
      data: {
        companyName: companyName,
        email: email,
        contactName: contactName,
      },
    });

    console.log(newClient);
    res.status(201).send(newClient);
    await prisma.$disconnect;
  } catch (error) {
    res.status(400).send(`Error creating new client: ${error}`);
  }
}

async function getClient(req, res) {
  // use the id
  try {
    const clientId = req.params.clientId;

    await prisma.$connect();
    const client = await prisma.client.findUnique({
      where: {
        id: parseInt(clientId),
      },
    });
    res.status(200).send(client);

    await prisma.$disconnect;
  } catch (error) {
    res.status(404).send('Client not found.');
  }
}

module.exports = {
  createClient,
  getClient,
};
