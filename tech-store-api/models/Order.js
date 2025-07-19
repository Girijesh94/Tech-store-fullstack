const db = require('../config/db');

const Order = {
    create: (userId, totalAmount, callback) => {
        db.query('INSERT INTO orders (user_id, total_amount) VALUES (?, ?)', [userId, totalAmount], callback);
    },
    getByUserId: (userId, callback) => {
        db.query('SELECT * FROM orders WHERE user_id = ?', [userId], callback);
    }
};

module.exports = Order;