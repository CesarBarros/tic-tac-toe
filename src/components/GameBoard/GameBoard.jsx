import { Cell } from "~/components/Cell";
import * as S from "./GameBoard.styles";

export const GameBoard = (
  /** @type GameBoardParams */ { board, onCellClick }
) => {
  return (
    <S.GameBoardContainer>
      {board.map((cell, index) => (
        <Cell key={index} player={cell} onClick={onCellClick} index={index} />
      ))}
    </S.GameBoardContainer>
  );
};
