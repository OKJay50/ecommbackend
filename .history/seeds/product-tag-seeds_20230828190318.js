import ProductTag from '../models/ProductTag';

const productTagData = [
  {
    product_id: 1,
    tag_id: 1,
  },
  {
    product_id: 1,
    tag_id: 2,
  },

];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
