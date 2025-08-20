const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  res.send('List of products');
});

// POST create product
router.post('/', (req, res) => {
  res.send('Add a new product');
});

module.exports = router;
