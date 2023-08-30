const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Clothing',
  },
  // Add more categories here
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
