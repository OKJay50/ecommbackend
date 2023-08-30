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
