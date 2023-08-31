const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'default_database',
  process.env.DB_USER || 'default_user',
  process.env.DB_PASSWORD || 'default_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: 3301
  }
);


module.exports = sequelize;
