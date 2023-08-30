const { Product } = require('../models/Product');

const productController = {
  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Create a new product
  createProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Update a product by ID
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Delete a product by ID
  deleteProduct: async (req, res) => {
    try {
      await Product.destroy({
        where: { id: req.params.id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
