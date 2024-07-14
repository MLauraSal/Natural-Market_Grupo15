// models/Producto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');
const Categoria = require('./categoriasModels.js');
const Proveedor = require('./proveedoresModel.js');

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.TEXT
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'id_categoria'
    }
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    references: {
      model: Proveedor,
      key: 'id_proveedor'
    }
  }
}, {
  tableName: 'Productos',
  timestamps: false
});

Producto.belongsTo(Categoria, { foreignKey: 'id_categoria' });
Producto.belongsTo(Proveedor, { foreignKey: 'id_proveedor' });

module.exports = Producto;
