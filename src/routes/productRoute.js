const express = require('express');
const {
    getAllProducts,
    getProduct,
    createProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);

module.exports = router;
