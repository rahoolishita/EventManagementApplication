const db = require('../utils/db');

const Guest = {
    getAllGuests: async() => {
        try {
            const response = await db.allDocs({ include_docs: true });
            return response.rows.map(row => row.doc);
        } catch (err) {
            console.error('Error fetching guests:', err);
            throw err;
        }
    },

    createGuest: async(guestData) => {
        try {
            const response = await db.post(guestData);
            return response;
        } catch (err) {
            console.error('Error creating guest:', err);
            throw err;
        }
    }
};

module.exports = Guest;