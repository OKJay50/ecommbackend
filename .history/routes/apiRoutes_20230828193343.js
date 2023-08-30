const express = require('express');
const router = express.Router();

import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { getAllTags, createTag, updateTag, deleteTag } from '../controllers/tagController';

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

module.exports = router;
