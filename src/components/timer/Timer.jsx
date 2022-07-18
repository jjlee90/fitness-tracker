import { useTimer } from "./useTimer";

export const Timer = () => {
  const { seconds, start, stop } = useTimer();

  return (
    <div className="counter-container">
      <button className="start-button" onClick={start}>
        start
      </button>
      <button className="stop-button" onClick={stop}>
        stop
      </button>
      <p id="counter">{seconds}</p>
    </div>
  );
};
