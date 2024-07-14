// controllers/proveedorController.js
const Proveedor = require('../models/proveedoresModel.js');

const getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proveedores' });
  }
};

const getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) {
      res.json(proveedor);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

const createProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proveedor' });
  }
};

const updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) {
      await proveedor.update(req.body);
      res.json(proveedor);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proveedor' });
  }
};

const deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) {
      await proveedor.destroy();
      res.json({ message: 'Proveedor eliminado' });
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};

module.exports = {
  getAllProveedores,
  getProveedorById,
  createProveedor,
  updateProveedor,
  deleteProveedor
};
