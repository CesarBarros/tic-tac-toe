import { useCallback, useState } from "react";

/**
 * @typedef {'X' | 'O'} PlayerScore
 * @typedef {{X: number, O: number}} Scores
 * @typedef {'X' | 'O' | null} MatchWinner
 */

/**
 * Custom hook for managing game scores and determining the match winner.
 *
 * @returns {{
 *   scores: Scores,
 *   matchWinner: MatchWinner,
 *   updateScore: (winner: PlayerScore | 'draw') => void,
 *   resetScores: () => void,
 * }} The current scores, match winner, and score management functions.
 */
export const useScore = () => {
  /** @type {[Scores, import("react").Dispatch<import("react").SetStateAction<Scores>>]} */
  const [scores, setScores] = useState({ X: 0, O: 0 });
  /** @type {[MatchWinner, import("react").Dispatch<import("react").SetStateAction<MatchWinner>>]} */
  const [matchWinner, setMatchWinner] = useState(null);

  /**
   * Updates the score for a given winner. If a player reaches 11 points, they become the match winner.
   * @param {PlayerScore | 'draw'} winner - The player who won the round ('X' or 'O'), or 'draw'.
   */
  const updateScore = useCallback((winner) => {
    if (winner && winner !== "draw") {
      setScores((prev) => {
        const newScores = { ...prev, [winner]: prev[winner] + 1 };
        if (newScores[winner] >= 11) {
          setMatchWinner(winner);
        }
        return newScores;
      });
    }
  }, []);

  /**
   * Resets all scores to zero and clears the match winner.
   */
  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0 });
    setMatchWinner(null);
  }, []);

  return {
    scores,
    matchWinner,
    updateScore,
    resetScores,
  };
};
