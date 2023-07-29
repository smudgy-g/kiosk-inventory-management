const router = require('express').Router();
const supplier = require('./controllers/suppliercontroller');
const client = require('./controllers/clientcontroller');
const product = require('./controllers/productcontroller');
const order = require('./controllers/ordercontroller');

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
