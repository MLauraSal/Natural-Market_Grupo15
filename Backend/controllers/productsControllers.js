const Product = require('../models/productsModels.js');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Error fetching products');
    }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Error al obtener el producto' });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    product.set(req.body);
    await product.save();
    return res.json({ msg: "Producto actualizado con éxito!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error al actualizar el producto" });
  }
};

const createProduct = async (req, res) => {
    try {
        const { name, img, description, price, stock } = req.body;
        const newProduct = await Product.create({ name, img, description, price, stock });
        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).send('Error creating product');
    }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { id } });
    return res.json({ msg: 'Producto eliminado con éxito!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error al eliminar el producto" });
  }
};
module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
