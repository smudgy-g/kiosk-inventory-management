import { Router } from 'express';
import * as supplier from './controllers/suppliercontroller';
import * as client from './controllers/clientcontroller';
import * as product from './controllers/productcontroller';
import * as order from './controllers/ordercontroller';

export const router = new Router();
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

module.exports = router;
