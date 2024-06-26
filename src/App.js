// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import GuestList from './components/GuestList';
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './css/styles.css';

const App = () => {
  const handleLogin = (username, password) => {
    // Replace with actual authentication logic (e.g., API call)
    if (username === 'Saqib' && password === 'Saqib@121') {
      console.log('Login successful');
      return true; // Return true for successful login
    } else {
      console.log('Invalid credentials');
      return false; // Return false for failed login
    }
  };

  return (
    <Router>
      <AppContent handleLogin={handleLogin} />
    </Router>
  );
};

const AppContent = ({ handleLogin }) => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-event" element={<EventForm />} />
            <Route path="/event-list" element={<EventList />} />
            <Route path="/guest-list" element={<GuestList />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

export default App;
