import { Router } from 'express';
import * as supplier from './controllers/suppliercontroller.js';
import * as client from './controllers/clientcontroller.js';
import * as product from './controllers/productcontroller.js';
import * as order from './controllers/ordercontroller.js';

export const router = Router();
// client
router.post('/client', client.createClient);
router.get('/client/:clientId', client.getClient);

// supplier
router.get('/supplier/:clientId', supplier.getSuppliers);
router.post('/supplier/', supplier.createSupplier);
router.delete('/supplier', supplier.deleteSupplier);

// product
router.post('/product', product.createProduct);
router.get('/product/:supplierId', product.getProducts);

// order
router.post('/order', order.createOrder);
