const Cart = require('../models/Cart');

exports.getCart = (req, res) => {
    Cart.getItemsByUserId(req.user.id, (err, items) => {
        if (err) return res.status(500).json({ message: 'Failed to fetch cart' });
        res.status(200).json(items);
    });
};

exports.addToCart = (req, res) => {
    const { productId, quantity } = req.body;
    Cart.addItem(req.user.id, productId, quantity, (err) => {
        if (err) return res.status(500).json({ message: 'Failed to add item' });
        res.status(201).json({ message: 'Item added to cart' });
    });
};

exports.updateCartItem = (req, res) => {
    const { productId, quantity } = req.body;
    Cart.updateItem(req.user.id, productId, quantity, (err) => {
        if (err) return res.status(500).json({ message: 'Failed to update item' });
        res.status(200).json({ message: 'Cart item updated' });
    });
};

exports.removeCartItem = (req, res) => {
    const { productId } = req.body;
    Cart.deleteItem(req.user.id, productId, (err) => {
        if (err) return res.status(500).json({ message: 'Failed to remove item' });
        res.status(200).json({ message: 'Item removed from cart' });
    });
};