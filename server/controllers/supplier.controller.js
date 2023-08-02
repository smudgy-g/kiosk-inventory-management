import * as supplier from '../models/supplier.model.js';

export async function getSuppliers(req, res) {
  try {
    const { client } = req.params.clientId;
    const result = await supplier.getSuppliersByClient(client);
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
    const data = { companyName, email, contactName, clientId };
    if (!companyName || !email || !contactName || !clientId)
      res.status(400).send('Incomplete fields.');
    const found = supplier.checkSupplierByEmail(email);
    if (found) {
      return res.status(404).send('Supplier already exists.', found);
    }

    const result = await supplier.createSupplier(data);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(`Error creating new supplier: ${error}`);
  }
}

export async function deleteSupplier(req, res) {
  try {
    const { supplierId } = req.body;
    const result = supplier.deleteSupplier(supplierId);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(`Error getting suppliers: ${error}`);
  }
}
