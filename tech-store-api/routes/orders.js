const express = require('express');
const {
    createOrder,
    getUserOrders
} = require('../controllers/orderController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware); // All routes require auth

router.post('/', createOrder);
router.get('/', getUserOrders);

module.exports = router;