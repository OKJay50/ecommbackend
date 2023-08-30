const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'High-Tech',
  },
  {
    tag_name: 'Casual',
  },

];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
