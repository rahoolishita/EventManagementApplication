const Task = require('../models/Task');

const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.getAllTasks();
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createTask = async(req, res) => {
    const taskData = req.body;

    try {
        const newTask = await Task.createTask(taskData);
        res.json(newTask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getAllTasks,
    createTask
    // Add other CRUD functions as needed
};