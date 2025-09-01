import { useCallback, useState } from "react";

export const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = useCallback((boardState) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of winningLines) {
      const [a, b, c] = line;
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }
    return null;
  }, []);

  const checkDraw = useCallback((boardState) => {
    return boardState.every((cell) => cell !== null);
  }, []);

  const makeMove = useCallback(
    (index) => {
      if (board[index] || gameOver) return false;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        setGameOver(true);
      } else if (checkDraw(newBoard)) {
        setWinner("draw");
        setGameOver(true);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }

      return true;
    },
    [board, currentPlayer, checkWinner, checkDraw, gameOver]
  );

  return {
    board,
    currentPlayer,
    gameOver,
    winner,
    makeMove,
  };
};
