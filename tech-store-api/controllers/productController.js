const Product = require('../models/Product');

exports.getProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) return res.status(500).json({ message: 'Failed to fetch products' });
        res.status(200).json(products);
    });
};