const { Category } = require('../models');

const categoryController = {
  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Create a new category
  createCategory: async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Update a category by ID
  updateCategory: async (req, res) => {
    try {
      const updatedCategory = await Category.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(updatedCategory);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Delete a category by ID
  deleteCategory: async (req, res) => {
    try {
      await Category.destroy({
        where: { id: req.params.id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = categoryController;
