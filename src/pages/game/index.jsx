import { useEffect } from "react";
import { GameBoard } from "~/components/GameBoard";
import { GameStatusMessage } from "~/components/GameStatusMessage";
import { ScoreBoard } from "~/components/ScoreBoard";
import { useGameState } from "~/hooks/useGameState";
import { useScore } from "~/hooks/useScore";
import * as S from "./game.styles";
import { Timer } from "~/components/Timer";
import { useTimer } from "~/hooks/useTimer";

export const Game = () => {
  const {
    board,
    currentPlayer,
    gameOver,
    makeMove,
    makeRandomMove,
    resetGame,
    winner,
  } = useGameState();
  const { scores, matchWinner, resetScores, updateScore } = useScore();
  const { timeLeft } = useTimer(makeRandomMove, gameOver, currentPlayer);

  useEffect(() => {
    if (winner) return updateScore(winner);
  }, [winner, updateScore]);

  return (
    <S.GamerContainer>
      {gameOver && (
        <GameStatusMessage {...{ winner, currentPlayer, matchWinner }} />
      )}
      {!gameOver && !matchWinner && (
        <Timer timeLeft={timeLeft} currentPlayer={currentPlayer} />
      )}
      <ScoreBoard
        {...{ scores, matchWinner }}
        onResetScores={resetScores}
        onResetGame={resetGame}
      />
      <GameBoard board={board} onCellClick={makeMove} />
    </S.GamerContainer>
  );
};
