import React, { useState, useEffect } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ task: '', deadline: '', eventId: '' });
    const [events, setEvents] = useState([]);
    const [eventMap, setEventMap] = useState({});

    useEffect(() => {
        fetchTasks();
        fetchEvents();
    }, []);

    const fetchTasks = () => {
        fetch('http://localhost:5000/api/tasks')
            .then(response => response.json())
            .then(data => {
                setTasks(data); // Assuming data is an array of tasks
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    };

    const fetchEvents = () => {
        fetch('http://localhost:5000/api/events')
            .then(response => response.json())
            .then(data => {
                setEvents(data); // Assuming data is an array of events
                // Create a map of event IDs to event titles for quick lookup
                const eventMap = data.reduce((acc, event) => {
                    acc[event._id] = event.Title;
                    return acc;
                }, {});
                setEventMap(eventMap);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({...task, [name]: value });
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        // Send task data to backend
        fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            })
            .then(response => response.json())
            .then(newTask => {
                setTasks([...tasks, newTask]); // Assuming newTask is the new task object added
                setTask({ task: '', deadline: '', eventId: '' }); // Reset the task form
                fetchTasks(); // Reload tasks after adding a new task
            })
            .catch(error => {
                console.error('Error adding task:', error);
            });
    };

    return ( <
        div >
        <
        h2 > Task List < /h2> <
        form onSubmit = { handleAddTask } >
        <
        div className = "form-group" >
        <
        label > Task < /label> <
        input type = "text"
        name = "task"
        value = { task.task }
        onChange = { handleChange }
        required / >
        <
        /div> <
        div className = "form-group" >
        <
        label > Deadline < /label> <
        input type = "date"
        name = "deadline"
        value = { task.deadline }
        onChange = { handleChange }
        required / >
        <
        /div> <
        div className = "form-group" >
        <
        label > Select Event < /label> <
        select name = "eventId"
        value = { task.eventId }
        onChange = { handleChange }
        required >
        <
        option value = "" > Select Event < /option> {
            events.map(event => ( <
                option key = { event._id }
                value = { event._id } > { event.Title } < /option>
            ))
        } <
        /select> <
        /div> <
        button type = "submit" > Add Task < /button> <
        /form> <
        div style = {
            { maxHeight: '300px', overflowY: 'auto', marginTop: '20px' } } >
        <
        table style = {
            { width: '100%', borderCollapse: 'collapse' } } >
        <
        thead >
        <
        tr >
        <
        th style = {
            { border: '1px solid #ddd', padding: '8px', textAlign: 'left' } } > Task < /th> <
        th style = {
            { border: '1px solid #ddd', padding: '8px', textAlign: 'left' } } > Deadline < /th> <
        th style = {
            { border: '1px solid #ddd', padding: '8px', textAlign: 'left' } } > Event < /th> <
        /tr> <
        /thead> <
        tbody style = {
            { overflowY: 'scroll' } } > {
            tasks.map((task, index) => ( <
                tr key = { index } >
                <
                td style = {
                    { border: '1px solid #ddd', padding: '8px' } } > { task.task } < /td> <
                td style = {
                    { border: '1px solid #ddd', padding: '8px' } } > { new Date(task.deadline).toLocaleDateString() } < /td> <
                td style = {
                    { border: '1px solid #ddd', padding: '8px' } } > { eventMap[task.eventId] } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div> <
        /div>
    );
};

export default TaskList;