import * as model from '../models/client.model.js';

export async function createClient(req, res) {
  try {
    const { companyName, email, contactName } = req.body;
    const client = { companyName, email, contactName };
    if (!companyName || !email || !contactName)
      return res.status(400).send('Incomplete fields.');
    const found = await model.checkEmail(email);
    if (found) return res.status(404).send();
    const result = await model.createClient(client);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(`Error creating new client: ${error}`);
  }
}

export async function getClient(req, res) {
  try {
    const id = req.params.clientId;
    const result = await model.getDetails(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send('Client not found.');
  }
}
