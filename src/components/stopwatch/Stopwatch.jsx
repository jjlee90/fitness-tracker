import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./stopwatch.css"

export default function Stopwatch() {
  // keep track of number of milliseconds timer has been on
  const [time, setTime] = React.useState(0)
  // keeps track when the timer is on
  const [timerOn, setTimeOn] = React.useState(false)

  // function will run when time varaible changes.
  React.useEffect(() => {
    let interval = null

    // if timer is on
    if (timerOn) {
      // interval = setInterval 10 is 1 hundreth of a second. every 10 milliseconds increase the time by 10 milliseconds
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      //clear interval takes in a interval that has been set and will clear it
      clearInterval(interval)
    }
    // clears interval when you leave the page
    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div>
      {/* Link to get back to the home page */}
      <Link to="/nav">Home</Link>

      <div className="timer">
        {/* keeps track of minutes 60k milliseconds is one minute*/}
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        {/* seconds. 1000 is 1 second. round down with math.floor */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        {/* when number goes up to 100 go back down to 0. only show 2 digits */}
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="timer">
        {/* if timer is not on and time == 0 then show start button */}
        {!timerOn && time == 0 && (
          // arrow function sets timer to true and starts the time
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}

        {/* if timer is on show stop button */}
        {timerOn && <button onClick={() => setTimeOn(false)}>Stop</button>}

        {/* if timer is not on and time does not equal zero show resume button */}

        {!timerOn && time !== 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}

        {/* if timer is not on and time is greater than 0 show reset button */}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  )
}
