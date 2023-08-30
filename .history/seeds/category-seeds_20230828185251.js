import { Category } = require('../models/Category');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Clothing',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
