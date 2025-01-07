import React from 'react'
import './styles/calendar.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarComponent = () => {
  return (
    <div className='calendar-section'>
      <Calendar className='dashboard-calendar'/>
    </div>
  )
}

export default CalendarComponent