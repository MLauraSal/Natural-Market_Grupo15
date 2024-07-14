// syncModels.js
const sequelize = require('../db/db.js');
const Usuario = require('./userModel.js');
const Categoria = require('./categoriasModels.js');
const Proveedor = require('./proveedoresModel.js');
const Producto = require('./productsModels.js');

const syncModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Tablas sincronizadas");
  } catch (error) {
    console.error("Error al sincronizar las tablas:", error);
  }
};

module.exports = syncModels;
