import React, { useState } from 'react';

const EventForm = () => {
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');

    const EventHandle = (e) => {
        e.preventDefault();
        const temp = window.confirm('Check your details again....');
        if (temp) {
            const data = {
                Title,
                Description,
                Date,
                Time
            };

            fetch('http://localhost:5000/api/events', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then((res) => res.json())
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        alert(response.msg);
                    } else if (response.status === 400) {
                        alert(response.msg);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return ( <
        div className = 'main-create' >
        <
        div className = "create-event-container" >
        <
        form onSubmit = { EventHandle } >
        <
        div className = "form-group" >
        <
        label > Event Title < /label> <
        input type = "text"
        value = { Title }
        onChange = {
            (e) => setTitle(e.target.value) }
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label > Date < /label> <
        input type = "date"
        value = { Date }
        onChange = {
            (e) => setDate(e.target.value) }
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label > Time < /label> <
        input type = "time"
        value = { Time }
        onChange = {
            (e) => setTime(e.target.value) }
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label > Description < /label> <
        textarea name = "description"
        value = { Description }
        onChange = {
            (e) => setDescription(e.target.value) }
        required >
        < /textarea> <
        /div> <
        button type = "submit" > Create Event < /button> <
        /form></div > < /div>
    );
};

export default EventForm;