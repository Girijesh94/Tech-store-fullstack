const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ message: 'Error hashing password' });

        User.create(email, hashedPassword, (err) => {
            if (err) return res.status(500).json({ message: 'User registration failed' });
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, user) => {
        if (err || !user) return res.status(401).json({ message: 'Invalid email or password' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) return res.status(401).json({ message: 'Invalid email or password' });

            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
            res.status(200).json({ token });
        });
    });
};