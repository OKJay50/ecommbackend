const { Tag } = require('../models');

const tagController = {
  // Get all tags
  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.findAll();
      res.json(tags);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Create a new tag
  createTag: async (req, res) => {
    try {
      const newTag = await Tag.create(req.body);
      res.status(201).json(newTag);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Update a tag by ID
  updateTag: async (req, res) => {
    try {
      const updatedTag = await Tag.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(updatedTag);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Delete a tag by ID
  deleteTag: async (req, res) => {
    try {
      await Tag.destroy({
        where: { id: req.params.id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = tagController;
