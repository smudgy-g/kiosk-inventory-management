// import the Prisma client from the index.js file
const prisma = require('../index');

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

async function getClient(req, res) {
  // use the id
  try {
    const clientId = req.params.id;
    const client = await prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });
    res.status(200).send(client);
  } catch (error) {
    res.status(404).send('Client not found.');
  }
}

module.exports = {
  createClient,
  getClient,
};
