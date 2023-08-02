import * as supplier from '../models/supplier.model.js';

export async function getSuppliers(req, res) {
  try {
    const id = req.params.clientId;
    const result = await supplier.getSuppliersByClient(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}
export async function getDetails(req, res) {
  try {
    const { id } = req.body;
    const data = await supplier.getSupplierDetails(id);
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
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

export async function deleteSupplier(req, res) {
  // update the client supplier list and keeep the supplier in the DB!
  try {
    const { supplierId } = req.body;
    console.log(supplierId);

    const result = supplier.deleteSupplier(supplierId);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}
