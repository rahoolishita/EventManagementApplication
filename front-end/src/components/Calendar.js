import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data); // Assuming data is an array of events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <p>{event.Date} at {event.Time} - {event.Title}</p>
            <p>Description: {event.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
