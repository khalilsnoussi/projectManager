// src/App.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './myCalendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const myEventsList = [
    {
      title: 'Meeting',
      start: new Date(2024, 6, 7, 10, 0),
      end: new Date(2024, 6, 7, 12, 0),
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
