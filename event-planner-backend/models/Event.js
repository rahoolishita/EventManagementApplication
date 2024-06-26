const db = require('../utils/db');

const Event = {
    getAllEvents: async() => {
        try {
            const response = await db.allDocs({ include_docs: true });
            return response.rows.map(row => row.doc);
        } catch (err) {
            console.error('Error fetching events:', err);
            throw err;
        }
    },

    getEventById: async(eventId) => {
        try {
            const response = await db.get(eventId);
            return response;
        } catch (err) {
            console.error(`Error fetching event with ID ${eventId}:`, err);
            throw err;
        }
    },

    createEvent: async(eventData) => {
        try {
            const response = await db.post(eventData);
            return response;
        } catch (err) {
            console.error('Error creating event:', err);
            throw err;
        }
    },

    deleteEventById: async(eventId) => {
        try {
            const event = await Event.getEventById(eventId);
            const response = await db.remove(event._id, event._rev);
            return response;
        } catch (err) {
            console.error(`Error deleting event with ID ${eventId}:`, err);
            throw err;
        }
    }
};

module.exports = Event;