const Event = require('../models/Event');
const Guest = require('../models/Guest');
const Task = require('../models/Task');

const getAllEvents = async(req, res) => {
    try {
        const events = await Event.getAllEvents();
        for (const event of events) {
            event.guests = await Guest.getGuestsByEventId(event._id);
            event.tasks = await Task.getTasksByEventId(event._id);
        }
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createEvent = async(req, res) => {
    const eventData = req.body;

    try {
        // Parse and validate Date
        eventData.Date = new Date(eventData.Date);

        // Check if Date is valid
        if (isNaN(eventData.Date.getTime())) {
            return res.status(400).json({ status: 400, msg: 'Invalid date or time format.' });
        }

        const newEvent = await Event.createEvent(eventData);
        res.json(newEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const deleteEvent = async(req, res) => {
    const eventId = req.params.id;

    try {
        const deletedEvent = await Event.deleteEventById(eventId);
        res.json(deletedEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getAllEvents,
    createEvent,
    deleteEvent
};