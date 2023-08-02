import { Router } from 'express';
import * as supplier from './controllers/supplier.controller.js';
import * as client from './controllers/client.controller.js';
import * as product from './controllers/product.controller.js';
import * as order from './controllers/order.controller.js';

export const router = Router();
// client
router.post('/client', client.createClient);
router.get('/client/:clientId', client.getClient);

// supplier
router.get('/supplier/:clientId', supplier.getSuppliers);
router.post('/supplier/details/', supplier.getDetails);
router.post('/supplier', supplier.createSupplier);
router.delete('/supplier', supplier.deleteSupplier);

// product
router.post('/product', product.createProduct);
router.get('/product/:supplierId', product.getProductsBySupplier);
router.get('/product/all/:cid', product.getAllProducts);

// order
router.post('/order', order.createOrder);
