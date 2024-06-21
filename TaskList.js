import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([{ task: 'Book venue', deadline: '2023-01-10' }]);
  const [task, setTask] = useState({ task: '', deadline: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ task: '', deadline: '' });
  };

  return (
    <div>
      <h2>Task List</h2>
      <form onSubmit={handleAddTask}>
        <div className="form-group">
          <label>Task</label>
          <input type="text" name="task" value={task.task} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required />
        </div>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.task} - {task.deadline}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
