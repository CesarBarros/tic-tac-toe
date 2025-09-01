import { useCallback, useState } from "react";

/**
 * @typedef {'X' | 'O' | null} Player
 * @typedef {Array<Player>} BoardState
 * @typedef {'X' | 'O' | 'draw' | null} GameResult
 */

/**
 * Custom hook for managing the Tic-Tac-Toe game state.
 *
 * @returns {{
 *   board: BoardState,
 *   currentPlayer: Player,
 *   gameOver: boolean,
 *   makeMove: (index: number) => boolean,
 *   makeRandomMove: () => void,
 *   resetGame: () => void,
 *   winner: GameResult,
 * }} The current game state and actions.
 */
export const useGameState = () => {
  /** @type {[BoardState, import("react").Dispatch<import("react").SetStateAction<BoardState>>]} */
  const [board, setBoard] = useState(Array(9).fill(null));
  /** @type {[Player, import("react").Dispatch<import("react").SetStateAction<Player>>]} */
  const [currentPlayer, setCurrentPlayer] = useState("X");
  /** @type {[GameResult, import("react").Dispatch<import("react").SetStateAction<GameResult>>]} */
  const [winner, setWinner] = useState(null);
  /** @type {[boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>]} */
  const [gameOver, setGameOver] = useState(false);

  /**
   * Checks if there's a winner on the current board state.
   * @param {BoardState} boardState - The current state of the game board.
   * @returns {Player | null} The winning player ('X' or 'O') or null if no winner.
   */
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

  /**
   * Checks if the game is a draw.
   * @param {BoardState} boardState - The current state of the game board.
   * @returns {boolean} True if it's a draw, false otherwise.
   */
  const checkDraw = useCallback((boardState) => {
    return boardState.every((cell) => cell !== null);
  }, []);

  /**
   * Handles a player's move on the board.
   * @param {number} index - The index of the cell where the player made a move.
   * @returns {boolean} True if the move was successful, false if the cell is already taken or game is over.
   */
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

  const makeRandomMove = useCallback(() => {
    const availableMoves = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((val) => val !== null);

    if (availableMoves.length > 0) {
      const randomIndex =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      makeMove(randomIndex);
    }
  }, [board, makeMove]);

  /**
   * Resets the game to its initial state.
   */
  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setGameOver(false);
  }, []);

  return {
    board,
    currentPlayer,
    gameOver,
    makeMove,
    makeRandomMove,
    resetGame,
    winner,
  };
};
