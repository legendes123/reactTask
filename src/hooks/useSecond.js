import { useState, useEffect } from 'react';

function parseTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  return seconds;
}
const useSecond = (finishTime) => {
  const [timeLeft, setTimeLeft] = useState(finishTime - Date.now());

  useEffect(() => {
    if(timeLeft > 0) {
      setTimeout(() => setTimeLeft(finishTime - Date.now()), 1000);
    }
  }, [finishTime, timeLeft]);

  return parseTime(timeLeft);
}

export default useSecond;
