import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./calendarDisplay.css";
import "react-calendar/dist/Calendar.css";

export default function CalendarDisplay() {
  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <Calendar className="calendar" />
      </div>
    </div>
  );
}
