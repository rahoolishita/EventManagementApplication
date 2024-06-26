const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET all events
router.get('/', eventController.getAllEvents);

// GET single event by ID (optional)
// router.get('/:id', eventController.getEventById);

// POST create event
router.post('/', eventController.createEvent);

// DELETE event by ID
router.delete('/:id', eventController.deleteEvent);

module.exports = router;