const db = require('../config/db');

const Cart = {
    getItemsByUserId: (userId, callback) => {
        db.query('SELECT * FROM cart WHERE user_id = ?', [userId], callback);
    },
    addItem: (userId, productId, quantity, callback) => {
        db.query('INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?', [userId, productId, quantity, quantity], callback);
    },
    updateItem: (userId, productId, quantity, callback) => {
        db.query('UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?', [quantity, userId, productId], callback);
    },
    deleteItem: (userId, productId, callback) => {
        db.query('DELETE FROM cart WHERE user_id = ? AND product_id = ?', [userId, productId], callback);
    }
};

module.exports = Cart;