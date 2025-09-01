import { Card, CardGroup } from "~/components/Card/Card";
import * as S from "./ScoreBoard.styles";

export const ScoreBoard = (
  /** @type ScoreBoardParams */ { scores, matchWinner, onResetScores }
) => {
  return (
    <S.ScoreBoardContainer>
      <S.ScoreBoardTitle>Placar</S.ScoreBoardTitle>

      <CardGroup>
        <Card title="Jogador X" subtitle={`Vitórias ${scores.X}`} />
        <Card title="Jogador O" subtitle={`Vitórias ${scores.O}`} />
      </CardGroup>

      {matchWinner && (
        <S.MatchWinnerMessage>
          Jogador {matchWinner} venceu as 11 partidas!
        </S.MatchWinnerMessage>
      )}

      <S.ResetScoresBtn onClick={onResetScores}>Zerar Placar</S.ResetScoresBtn>
    </S.ScoreBoardContainer>
  );
};
