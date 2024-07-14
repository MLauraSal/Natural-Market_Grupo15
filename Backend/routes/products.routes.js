

const express = require('express');
const { getAllProductos, getProductoById, createProducto, updateProducto, deleteProducto } = require('../controllers/productsControllers.js');

const router = express.Router();

router.get('/', getAllProductos);
router.get('/:id', getProductoById);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;

