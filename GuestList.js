import React, { useState } from 'react';

const GuestList = () => {
  const [guests, setGuests] = useState([{ name: 'John Doe', rsvp: 'Yes' }]);
  const [guest, setGuest] = useState({ name: '', rsvp: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuest({ ...guest, [name]: value });
  };

  const handleAddGuest = (e) => {
    e.preventDefault();
    setGuests([...guests, guest]);
    setGuest({ name: '', rsvp: '' });
  };

  return (
    <div>
      <h2>Guest List</h2>
      <form onSubmit={handleAddGuest}>
        <div className="form-group">
          <label>Guest Name</label>
          <input type="text" name="name" value={guest.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>RSVP</label>
          <select name="rsvp" value={guest.rsvp} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button type="submit">Add Guest</button>
      </form>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest.name} - {guest.rsvp}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
