import { GameBoard } from "~/components/GameBoard";
import { GameStatusMessage } from "~/components/GameStatusMessage";
import { useGameState } from "~/hooks/useGameState";
import * as S from "./gamer.styles";

export const Gamer = () => {
  const { board, currentPlayer, makeMove, winner } = useGameState();

  return (
    <S.GamerContainer>
      Gamer Page
      <GameStatusMessage {...{ winner, currentPlayer }} />
      <GameBoard board={board} onCellClick={makeMove} />
    </S.GamerContainer>
  );
};
