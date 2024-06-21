import React, { useState } from 'react';

const EventForm = () => {
  const [event, setEvent] = useState({ title: '', date: '', time: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic here
    console.log('Event Created: ', event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Event Title</label>
        <input type="text" name="title" value={event.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input type="time" name="time" value={event.time} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={event.description} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
