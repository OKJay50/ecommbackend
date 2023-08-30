import express from 'express';

import getAllCategories from '../controllers/categoryController.js';
import createCategory from '../controllers/categoryController.js';
import updateCategory from '../controllers/categoryController.js';
import deleteCategory from '../controllers/categoryController.js';


import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

import {
  getAllTags,
  createTag,
  updateTag,
  deleteTag,
} from '../controllers/tagController.js';

const router = express.Router();
// Check Routes With Tutor
// Categories Routes
router.get('/categories', getAllCategories);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

// Products Routes
router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Tags Routes
router.get('/tags', getAllTags);
router.post('/tags', createTag);
router.put('/tags/:id', updateTag);
router.delete('/tags/:id', deleteTag);

export default router;
