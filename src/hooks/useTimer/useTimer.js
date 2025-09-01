import { useEffect, useState } from "react";

/**
 * Custom hook for managing a countdown timer in the game.
 *
 * @param {()=> void} onTimeOut - Callback function to execute when the timer reaches zero.
 * @param {boolean} gameOver - Indicates if the game is over.
 * @param {string} currentPlayer - The current player, used to reset the timer on player change.
 * @returns {{
 *   timeLeft: number,
 *   isActive: boolean,
 * }} An object containing the remaining time and timer activity status.
 */
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
