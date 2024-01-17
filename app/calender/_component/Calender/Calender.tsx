"use client"
import { useState } from 'react';
import './Calender.css'

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date:any) => {
    setSelectedDate(date);
    // You can add additional logic here, like opening a modal or triggering an event.
  };

  // You can customize this logic to generate calendar days based on your requirements.
  const renderCalendarDays = () => {
    // For simplicity, let's create a calendar for the current month with 30 days.
    const daysInMonth = 30;
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(2024, 0, i); // Assuming January 2024 for this example
      days.push(
        <div
          key={i}
          className={`day ${selectedDate && selectedDate.getDate() === i ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <h2>Scheduler Calendar</h2>
      <div className="days">{renderCalendarDays()}</div>
      {/* Add additional components or features as needed */}
    </div>
  );
};

export default Calender;
