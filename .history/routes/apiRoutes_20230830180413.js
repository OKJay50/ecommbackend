const express = require ('express');

const { createCategory,  deleteCategory,  getAllCategories,  updateCategory } = require  ('../controllers/categoryController.js');


import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from '../controllers/productController.js';

import {
  createTag,
  deleteTag,
  getAllTags,
  updateTag,
} from '../controllers/tagController.js';

const router = express.Router();
// Check Routes With Tutor
// Categories Routes
router.get('/Category', getAllCategories);
router.post('/Category', createCategory);
router.put('/Category/:id', updateCategory);
router.delete('/Category/:id', deleteCategory);

// Products Routes
router.get('/Product', getAllProducts);
router.post('/Product', createProduct);
router.put('/Product/:id', updateProduct);
router.delete('/Product/:id', deleteProduct);

// Tags Routes
router.get('/Tag', getAllTags);
router.post('/Tag', createTag);
router.put('/Tag/:id', updateTag);
router.delete('/Tag/:id', deleteTag);

export default router;
