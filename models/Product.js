const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false, // Product name cannot be null
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false, // Price cannot be null
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      isNumeric: true,
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category',
      key: 'id',
    },
  },
});

module.exports = Product;
