import React, { useState, useEffect } from 'react';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []); // Fetch events when component mounts

    const fetchEvents = () => {
        fetch('http://localhost:5000/api/events')
            .then(response => response.json())
            .then(data => {
                setEvents(data); // Assuming data is an array of events
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    const handleDeleteEvent = (eventId) => {
        fetch(`http://localhost:5000/api/events/${eventId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(deletedEvent => {
                console.log('Event deleted successfully:', deletedEvent);
                // Update events state by filtering out the deleted event
                fetchEvents();
            })
            .catch(error => {
                console.error('Error deleting event:', error);
            });
    };

    return ( <
        div >
        <
        h2 > Event List < /h2> <
        ul > {
            events.map(event => ( <
                li key = { event._id } >
                <
                h3 > { event.Title } < /h3> <
                p > { new Date(event.Date).toLocaleDateString() }
                at { event.Time } < /p> <
                p > { event.Description } < /p> <
                button onClick = {
                    () => handleDeleteEvent(event._id) } > Delete < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default EventList;