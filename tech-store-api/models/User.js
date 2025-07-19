const db = require('../config/db');

const User = {
    create: (email, password, callback) => {
        db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], callback);
    },
    findByEmail: (email, callback) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }
};

module.exports = User;