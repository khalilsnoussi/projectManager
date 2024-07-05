import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './myCalendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleAddEvent = () => {
    const newEvent = { title, start: new Date(start), end: new Date(end) };
    onAddEvent(newEvent);
    setTitle('');
    setStart('');
    setEnd('');
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', width: '100%' }}
      />
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
        />
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};


export default MyCalendar;
