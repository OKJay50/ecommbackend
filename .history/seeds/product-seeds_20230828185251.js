import { Product } = require('../models/Product');

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

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
