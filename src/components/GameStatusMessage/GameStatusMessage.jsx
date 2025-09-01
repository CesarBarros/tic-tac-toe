import * as S from "./GameStatusMessage.styles";

export const GameStatusMessage = (
  /** @type GameStatusMessageParams */ { winner, currentPlayer }
) => {
  const getMessage = () => {
    if (winner === "draw") return "Empate!";
    if (winner) return `O Jogador ${winner} venceu!`;
    return `Está na vez do Jogador ${currentPlayer}`;
  };

  return (
    <S.GameStatusMessageContainer winner={winner}>{getMessage()}</S.GameStatusMessageContainer>
  );
};
