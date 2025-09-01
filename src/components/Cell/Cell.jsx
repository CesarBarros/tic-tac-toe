import * as S from "./Cell.styles";

export const Cell = (/** @type CellParams */ { player, onClick, index }) => {
  return (
    <S.CellContainer
      onClick={() => onClick(index)}
      disabled={!!player}
      {...{ player }}
    >
      {player}
    </S.CellContainer>
  );
};
