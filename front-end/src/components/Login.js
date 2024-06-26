// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onLogin function passed from App.js
    onLogin(form.username, form.password);
    // Redirect logic can also be handled here if needed
    navigate('/Home'); // Redirect to Home page after successful login
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Don't have an account? <Link to="/">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
