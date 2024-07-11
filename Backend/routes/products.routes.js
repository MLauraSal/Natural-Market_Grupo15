const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers.js');

router.get('/all', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProductById);
router.post('/new', productsControllers.createProduct);
router.put('/:id', productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);



module.exports = router;