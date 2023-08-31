const express = require('express');
const categoryController = require('../controllers/categoryController.js');
const productController = require('../controllers/productController.js');
const tagController = require('../controllers/tagController.js');

const router = express.Router();

// Categories Routes
router.get('/Category', categoryController.getAllCategories);
router.post('/Category', categoryController.createCategory);
router.put('/Category/:id', categoryController.updateCategory);
router.delete('/Category/:id', categoryController.deleteCategory);

// Products Routes
router.get('/Product', productController.getAllProducts);
router.post('/Product', productController.createProduct);
router.put('/Product/:id', productController.updateProduct);
router.delete('/Product/:id', productController.deleteProduct);

// Tags Routes
router.get('/Tag', tagController.getAllTags);
router.post('/Tag', tagController.createTag);
router.put('/Tag/:id', tagController.updateTag);
router.delete('/Tag/:id', tagController.deleteTag);

module.exports = router;
