import { prisma } from '../prisma/client.js';

export async function createClient(req, res) {
  try {
    const { companyName, email, contactName } = req.body;

    if (!companyName || !email || !contactName)
      return res.status(400).send('Incomplete fields.');

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
    res.status(201).send(newClient);
  } catch (error) {
    res.status(400).send(`Error creating new client: ${error}`);
  }
}

export async function getClient(req, res) {
  try {
    const clientId = req.params.clientId;
    const client = await prisma.client.findUnique({
      where: {
        id: parseInt(clientId),
      },
    });
    res.status(200).send(client);
  } catch (error) {
    res.status(404).send('Client not found.');
  }
}
