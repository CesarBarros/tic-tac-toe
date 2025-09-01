import { useCallback, useState } from "react";

export const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const makeMove = useCallback(
    (index) => {
      if (board[index]) return false;

      const newBoard = [...board];
      newBoard[index] = Math.random() > 0.5 ? "X" : "O";
      setBoard(newBoard);

      return true;
    },
    [board]
  );

  return {
    board,
    makeMove
  };
};
