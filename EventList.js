import React from 'react';

const EventList = () => {
  // This would be fetched from the backend
  const events = [
    { id: 1, title: 'Event 1', date: '2023-01-01', time: '10:00', description: 'Event 1 Description' },
    { id: 2, title: 'Event 2', date: '2023-02-01', time: '12:00', description: 'Event 2 Description' },
  ];

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date} at {event.time}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
