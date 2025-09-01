import { useEffect } from "react";
import { GameBoard } from "~/components/GameBoard";
import { GameStatusMessage } from "~/components/GameStatusMessage";
import { ScoreBoard } from "~/components/ScoreBoard";
import { useGameState } from "~/hooks/useGameState";
import { useScore } from "~/hooks/useScore";
import * as S from "./gamer.styles";

export const Gamer = () => {
  const { board, currentPlayer, makeMove, winner } = useGameState();
  const { scores, matchWinner, resetScores, updateScore } = useScore();

  useEffect(() => {
    if (winner) return updateScore(winner);
  }, [winner, updateScore]);

  return (
    <S.GamerContainer>
      Gamer Page
      <ScoreBoard {...{ scores, matchWinner }} onResetScores={resetScores} />
      <GameStatusMessage {...{ winner, currentPlayer }} />
      <GameBoard board={board} onCellClick={makeMove} />
    </S.GamerContainer>
  );
};
