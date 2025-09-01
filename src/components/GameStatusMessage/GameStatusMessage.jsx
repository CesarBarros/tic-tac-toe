import * as S from "./GameStatusMessage.styles";

export const GameStatusMessage = (
  /** @type GameStatusMessageParams */ { winner, currentPlayer, matchWinner }
) => {
  const getMessage = () => {
    if (winner === "draw") return "Empate!";
    if (winner) return `O Jogador ${winner} venceu!`;
    return `Está na vez do Jogador ${currentPlayer}`;
  };

  if (matchWinner) {
    return (
      <S.MatchWinnerMessage>
        Jogador {matchWinner} venceu as 11 partidas!
      </S.MatchWinnerMessage>
    );
  }

  return (
    <S.GameStatusMessageContainer {...{ winner }}>
      {getMessage()}
    </S.GameStatusMessageContainer>
  );
};
