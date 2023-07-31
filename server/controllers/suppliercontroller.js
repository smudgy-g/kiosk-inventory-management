import { prisma } from '../prisma/client.js';

export async function getSuppliers(req, res) {
  try {
    const { client } = req.params.clientId;
    const suppliers = await prisma.supplier.findMany({
      where: {
        clientId: client,
      },
    });

    res.status(200).send(suppliers);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}

export async function createSupplier(req, res) {
  try {
    const { companyName, email, contactName, clientId } = req.body;
    if (!companyName || !email || !contactName || !clientId)
      res.status(400).send('Incomplete fields.');
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
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

export async function deleteSupplier(req, res) {
  try {
    const { supplierId } = req.body;
    const result = await prisma.supplier.delete({
      where: {
        id: supplierId,
      },
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}
