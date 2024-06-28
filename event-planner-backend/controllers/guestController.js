const Guest = require('../models/Guest');

const getAllGuests = async(req, res) => {
    try {
        const guests = await Guest.getAllGuests();
        res.json(guests);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createGuest = async(req, res) => {
    const guestData = req.body;
    const { eventId } = req.body;

    if (!eventId) {
        return res.status(400).json({ status: 400, msg: 'Event ID is required' });
    }

    try {
        const newGuest = await Guest.createGuest({...guestData, eventId });
        res.json(newGuest);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


module.exports = {
    getAllGuests,
    createGuest
    // Add other CRUD functions as needed
};