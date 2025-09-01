import { useEffect, useState } from "react";

export const useTimer = (onTimeOut, gameOver, currentPlayer) => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeLeft(5);
    setIsActive(!gameOver);
  }, [currentPlayer, gameOver]);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0 && !gameOver) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            onTimeOut();
            return 5;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, gameOver, onTimeOut]);

  return { timeLeft, isActive };
};
