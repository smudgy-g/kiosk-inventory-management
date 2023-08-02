import * as model from '../models/order.model.js';
import { sendOrder } from '../services/order.service.js';

export async function createOrder(req, res) {
  try {
    const { clientId, supplierId, products, price, comment, date } = req.body;
    const order = { clientId, supplierId, products, price, comment, date };

    if (!supplierId || !clientId || !price || !products)
      res.status(400).send('Incomplete fields.');

    const result = await model.createOrder(order);
    await sendOrder(clientId, supplierId, products, comment, date);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(`Error creating new order: ${error}`);
  }
}
