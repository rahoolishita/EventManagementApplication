import React from 'react';

const Calendar = () => {
  // This would be fetched from the backend
  const events = [
    { id: 1, title: 'Event 1', date: '2023-01-01', time: '10:00' },
    { id: 2, title: 'Event 2', date: '2023-02-01', time: '12:00' },
  ];

  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <p>{event.date} at {event.time} - {event.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
