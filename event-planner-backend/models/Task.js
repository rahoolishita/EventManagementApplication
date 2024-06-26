const db = require('../utils/db');

const Task = {
    getAllTasks: async() => {
        try {
            const response = await db.allDocs({ include_docs: true });
            return response.rows.map(row => row.doc);
        } catch (err) {
            console.error('Error fetching tasks:', err);
            throw err;
        }
    },

    createTask: async(taskData) => {
        try {
            const response = await db.post(taskData);
            return response;
        } catch (err) {
            console.error('Error creating task:', err);
            throw err;
        }
    }
};

module.exports = Task;