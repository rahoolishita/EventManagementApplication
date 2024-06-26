const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');

// GET all guests
router.get('/', guestController.getAllGuests);

// POST create guest
router.post('/', guestController.createGuest);

module.exports = router;