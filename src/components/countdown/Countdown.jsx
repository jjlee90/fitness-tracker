import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Countdown() {
  const [time, setTime] = React.useState(null);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevState) => prevState - 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const handleChange = (e) => {
    setTimeOn(true);
    setTime(e.value.target);
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <input type="number" placeholder="Set Timer" value={time} />
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={handleChange}>Start</button>
        <button onClick={() => setTimeOn(false)}>Stop</button>
        <button onClick={() => setTimeOn(true)}>Resume</button>
        <button onClick={() => setTime(600000)}>Reset</button>
      </div>
    </div>
  );
}
