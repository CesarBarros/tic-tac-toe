import { useEffect } from "react";
import { GameBoard } from "~/components/GameBoard";
import { GameStatusMessage } from "~/components/GameStatusMessage";
import { ScoreBoard } from "~/components/ScoreBoard";
import { useGameState } from "~/hooks/useGameState";
import { useScore } from "~/hooks/useScore";
import * as S from "./game.styles";

export const Game = () => {
  const { board, currentPlayer, makeMove, resetGame, winner } = useGameState();
  const { scores, matchWinner, resetScores, updateScore } = useScore();

  useEffect(() => {
    if (winner) return updateScore(winner);
  }, [winner, updateScore]);

  return (
    <S.GamerContainer>
      Gamer Page
      {matchWinner && (
        <S.MatchWinnerMessage>
          Jogador {matchWinner} venceu as 11 partidas!
        </S.MatchWinnerMessage>
      )}
      <ScoreBoard
        {...{ scores, matchWinner }}
        onResetScores={resetScores}
        onResetGame={resetGame}
      />
      <GameStatusMessage {...{ winner, currentPlayer }} />
      <GameBoard board={board} onCellClick={makeMove} />
    </S.GamerContainer>
  );
};
