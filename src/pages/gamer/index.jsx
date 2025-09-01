import { GameBoard } from "~/components/GameBoard";
import { useGameState } from "~/hooks/useGameState";
import * as S from "./gamer.styles";

export const Gamer = () => {
  const gameState = useGameState();

  return (
    <S.GamerContainer>
      Gamer Page
      <GameBoard board={gameState.board} onCellClick={gameState.makeMove} />
    </S.GamerContainer>
  );
};
