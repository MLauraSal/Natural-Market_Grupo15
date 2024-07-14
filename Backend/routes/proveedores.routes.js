
const express = require('express');
const { getAllProveedores, getProveedorById, createProveedor, updateProveedor, deleteProveedor } = require('../controllers/proveedoresControllers.js');

const router = express.Router();

router.get('/', getAllProveedores);
router.get('/:id', getProveedorById);
router.post('/', createProveedor);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedor);

module.exports = router;
