const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users/register
router.post('/register', userController.registerUser);

// POST /api/users/login
router.post('/login', userController.loginUser);

// Add other routes as needed

module.exports = router;