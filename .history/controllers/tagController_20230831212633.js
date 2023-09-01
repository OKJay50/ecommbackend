const Tag = require('../models/Tag.js');

const getAllTags = async (req, res) => {
  console.log('getAllTags');
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTag = async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTag = async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedTag);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTag = async (req, res) => {
  try {
    await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTags,
  createTag,
  updateTag,
  deleteTag,
};
