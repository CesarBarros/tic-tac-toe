import { useCallback, useState } from "react";

export const useScore = () => {
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [matchWinner, setMatchWinner] = useState(null);

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
