import { Card, CardGroup } from "~/components/Card";
import * as S from "./ScoreBoard.styles";

export const ScoreBoard = (
  /** @type ScoreBoardParams */ {
    scores,
    matchWinner,
    onResetScores,
    onResetGame,
  }
) => {
  const handleNewTurn = () => {
    onResetScores();
    onResetGame();
  };

  return (
    <S.ScoreBoardContainer>
      <S.ScoreBoardTitle>Placar</S.ScoreBoardTitle>

      <CardGroup>
        <Card title="Jogador X" subtitle={`Vitórias ${scores.X}`} />
        <Card title="Jogador O" subtitle={`Vitórias ${scores.O}`} />
      </CardGroup>

      <S.ButtonsContainer>
        <S.ResetScoresBtn label="Zerar Placar" onClick={handleNewTurn} />
        <S.ResetGameBtn label="Nova Partida" onClick={onResetGame} disabled={!!matchWinner} />
      </S.ButtonsContainer>
    </S.ScoreBoardContainer>
  );
};
