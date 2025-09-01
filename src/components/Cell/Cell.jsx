import * as S from "./Cell.styles";

export const Cell = (/** @type CellParams */ { player, onClick, index, colors }) => {
  return (
    <S.CellContainer
      onClick={() => onClick(index)}
      disabled={!!player}
      {...{ player, colors }}
    >
      {player}
    </S.CellContainer>
  );
};
