import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css'; // Optional: For styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Event Planner. All rights reserved.</p>
      <nav>
        <Link to="/about-us">About Us</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;
