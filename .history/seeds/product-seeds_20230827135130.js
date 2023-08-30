const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 999.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'T-shirt',
    price: 19.99,
    stock: 25,
    category_id: 2,
  },
  // Add more products here
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
