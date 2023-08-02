import { prisma } from '../prisma/client.js';
import { getSupplierDetails } from '../models/supplierModel.js';

export async function getSuppliers(req, res) {
  try {
<<<<<<< HEAD:server/controllers/supplier.controller.js
    const id = req.params.clientId;
    const result = await supplier.getSuppliersByClient(id);
    res.status(200).send(result);
=======
    const { client } = req.params.clientId;
    const suppliers = await prisma.supplier.findMany({
      where: {
        clientId: client,
      },
    });

    res.status(200).send(suppliers);
>>>>>>> parent of 41d1b6a (feat: modularise server):server/controllers/suppliercontroller.js
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}
export async function getDetails(req, res) {
  try {
    const { id } = req.body;
    const data = await getSupplierDetails(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(`Error getting supplier details: ${error}`);
  }
}

export async function createSupplier(req, res) {
  try {
    const { companyName, email, contactName, clientId } = req.body;
    if (!companyName || !email || !contactName || !clientId)
      res.status(400).send('Incomplete fields.');
<<<<<<< HEAD:server/controllers/supplier.controller.js
    const found = supplier.checkSupplierByEmail(email);
    if (found) {
      return res.status(404).send('Supplier already exists.');
    }
    console.log('data', { companyName, email, contactName, clientId });
    const result = await supplier.createSupplier({
      companyName,
      email,
      contactName,
      clientId,
    });
    res.status(201).send(result);
=======
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
>>>>>>> parent of 41d1b6a (feat: modularise server):server/controllers/suppliercontroller.js
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

export async function deleteSupplier(req, res) {
  // update the client supplier list and keeep the supplier in the DB!
  try {
    const { supplierId } = req.body;
<<<<<<< HEAD:server/controllers/supplier.controller.js
    console.log(supplierId);

    const result = supplier.deleteSupplier(supplierId);
=======
    const result = await prisma.supplier.delete({
      where: {
        id: supplierId,
      },
    });

>>>>>>> parent of 41d1b6a (feat: modularise server):server/controllers/suppliercontroller.js
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}
