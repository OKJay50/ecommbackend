const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 1,
  },
  {
    product_id: 1,
    tag_id: 2,
  },
  // Add more product-tag associations here
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
