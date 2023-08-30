const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const ProductTag = sequelize.define('ProductTag', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Product',
      key: 'id',
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Tag',
      key: 'id',
    },
  },
});

module.exports = ProductTag;
