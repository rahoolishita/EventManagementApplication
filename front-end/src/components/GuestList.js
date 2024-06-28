import React, { useState, useEffect } from 'react';

const GuestList = () => {
    const [guests, setGuests] = useState([]);
    const [guest, setGuest] = useState({ name: '', rsvp: '', eventId: '' });
    const [events, setEvents] = useState([]);
    const [eventMap, setEventMap] = useState({});

    useEffect(() => {
        fetchEvents();
        fetchGuests();
    }, []); // Fetch events and guests when component mounts

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

    const fetchGuests = () => {
        fetch('http://localhost:5000/api/guests')
            .then(response => response.json())
            .then(data => {
                setGuests(data); // Assuming data is an array of guests
            })
            .catch(error => {
                console.error('Error fetching guests:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGuest({...guest, [name]: value });
    };

    const handleAddGuest = (e) => {
        e.preventDefault();
        // Send guest data to backend
        fetch('http://localhost:5000/api/guests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guest),
            })
            .then(response => response.json())
            .then(newGuest => {
                setGuests([...guests, newGuest]); // Assuming newGuest is the new guest 
                setGuest({ name: '', rsvp: '', eventId: '' }); // Reset the guest form
                fetchGuests(); // Reload guests after adding a new guest
            })
            .catch(error => {
                console.error('Error adding guest:', error);
            });
    };

    return ( <
        div >
        <
        h2 > Guest List < /h2> <
        form onSubmit = { handleAddGuest } >
        <
        div className = "form-group" >
        <
        label > Guest Name < /label> <
        input type = "text"
        name = "name"
        value = { guest.name }
        onChange = { handleChange }
        required / >
        <
        /div> <
        div className = "form-group" >
        <
        label > RSVP < /label> <
        select name = "rsvp"
        value = { guest.rsvp }
        onChange = { handleChange }
        required >
        <
        option value = "" > Select < /option> <
        option value = "Yes" > Yes < /option> <
        option value = "No" > No < /option> <
        /select> <
        /div> <
        div className = "form-group" >
        <
        label > Select Event < /label> <
        select name = "eventId"
        value = { guest.eventId }
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
        button type = "submit" > Add Guest < /button> <
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
            { border: '1px solid #ddd', padding: '8px', textAlign: 'left' } } > Name < /th> <
        th style = {
            { border: '1px solid #ddd', padding: '8px', textAlign: 'left' } } > RSVP < /th> <
        th style = {
            { border: '1px solid #ddd', padding: '8px', textAlign: 'left' } } > Event < /th> <
        /tr> <
        /thead> <
        tbody style = {
            { overflowY: 'scroll' } } > {
            guests.map((guest, index) => ( <
                tr key = { index } >
                <
                td style = {
                    { border: '1px solid #ddd', padding: '8px' } } > { guest.name } < /td> <
                td style = {
                    { border: '1px solid #ddd', padding: '8px' } } > { guest.rsvp } < /td> <
                td style = {
                    { border: '1px solid #ddd', padding: '8px' } } > { eventMap[guest.eventId] } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div> <
        /div>
    );
};

export default GuestList;