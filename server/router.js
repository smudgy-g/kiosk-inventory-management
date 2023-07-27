const router = require('express').Router();
const supplier = require('./controllers/suppliercontroller');
const client = require('./controllers/clientcontroller');
const product = require('./controllers/productcontroller');
const order = require('./controllers/ordercontroller');

// client routes
router.post('/client', client.createClient);
router.get('/client/:id', client.getClient);

// suppplier routes
router.get('/supplier:clientId', supplier.getSuppliers);
router.post('/supplier', supplier.createSupplier);

// product routes
router.post('/product', product.createProduct);

// order routes
router.post('/order', order.createOrder);

module.exports = router;
