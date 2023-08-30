const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Tag = sequelize.define('Tag', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tag;
