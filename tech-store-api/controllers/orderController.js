const Order = require('../models/Order');

exports.createOrder = (req, res) => {
    const userId = req.user.id;
    const { totalAmount } = req.body;

    Order.create(userId, totalAmount, (err) => {
        if (err) return res.status(500).json({ message: 'Failed to create order' });
        res.status(201).json({ message: 'Order created successfully' });
    });
};

exports.getUserOrders = (req, res) => {
    const userId = req.user.id;

    Order.getByUserId(userId, (err, orders) => {
        if (err) return res.status(500).json({ message: 'Failed to fetch orders' });
        res.status(200).json(orders);
    });
};