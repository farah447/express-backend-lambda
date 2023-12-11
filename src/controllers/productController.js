const Product = require('../models/productModel')

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            message: 'all the products are returned',
            products: [
                { id: 1, title: "apple1", price: 320 },
                { id: 2, title: "apple2", price: 420 },
                { id: 3, title: "apple3", price: 520 },
            ]
        });
    } catch (error) {
        return res.status(500).send('error occurred');
    };
};

const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            const error = new Error(`product is not found with this id ${id}`);
            error.status = 404;
            throw error;
        }
        res.status(200).json({
            message: 'single the products are returned',
            payload: product,
        });
    } catch (error) {
        return res.status(500).send('error occurred');
    }
};

const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({
            message: 'product is created',
            payload: newProduct,
        });
    } catch (error) {
        return res.status(500).send('error occurred');
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
};