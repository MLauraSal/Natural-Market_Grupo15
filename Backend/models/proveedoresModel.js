// models/Proveedor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_proveedor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'Proveedores',
  timestamps: false
});

module.exports = Proveedor;
