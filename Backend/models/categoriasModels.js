// models/Categoria.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');

const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'Categorias',
  timestamps: false
});

module.exports = Categoria;
