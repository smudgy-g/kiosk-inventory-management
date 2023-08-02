import * as product from '../models/product.model.js';
import { getSuppliersByClient } from '../models/supplier.model.js';

export async function createProduct(req, res) {
  try {
    const { supplierId, productId, productName, price } = req.body;
    const product = { supplierId, productId, productName, price };
    if (!supplierId || !productName || !price)
      res.status(400).send('Incomplete fields.');
    const result = await product.createProduct(product);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(`Error creating new product: ${error}`);
  }
}

export async function getProductsBySupplier(req, res) {
  try {
    const id = parseInt(req.params.supplierId);
    const result = await product.getProductsBySupplier(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function getAllProducts(req, res) {
  try {
    let list = [];
    const id = req.params.cid;
    const suppliers = await getSuppliersByClient(id);
    if (suppliers) {
      const sIDs = suppliers.map((e) => e.id);
      for (const el of sIDs) {
        const products = await product.getProductsBySupplier(el);
        list = list.concat(products);
      }
    }
    res.status(200).send(list);
  } catch (error) {
    console.log(error);
  }
}
