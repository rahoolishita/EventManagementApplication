import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Optional: For styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/create-event">Create Event</Link></li>
          <li><Link to="/event-list">Event List</Link></li>
          <li><Link to="/guest-list">Guest List</Link></li>
          <li><Link to="/task-list">Task List</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
