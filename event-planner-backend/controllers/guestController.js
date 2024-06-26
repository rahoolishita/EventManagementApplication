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

    try {
        const newGuest = await Guest.createGuest(guestData);
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