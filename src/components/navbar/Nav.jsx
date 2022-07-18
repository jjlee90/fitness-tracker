import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul className="homeLinks">
        <li>
          <Link to="timer">Clock</Link>
        </li>

        <li>
          <Link to="create">Create Exercise Record</Link>
        </li>
        <li>
          <Link to="calendar">Calendar</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="stopwatch">Stopwatch</Link>
        </li>
        <li>
          <Link to="countdown">Countdown</Link>
        </li>
      </ul>
    </div>
  )
}
