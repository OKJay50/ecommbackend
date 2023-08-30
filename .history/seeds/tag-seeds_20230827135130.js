const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'High-Tech',
  },
  {
    tag_name: 'Casual',
  },
  // Add more tags here
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
