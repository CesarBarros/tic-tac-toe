import styled, { css } from "styled-components";

export const GameBoardContainer = styled("div")`
  ${(/** @type GameBoardContainerParams */ { theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 80px);
    gap: ${theme.spacing}px;
    background: ${theme.color.background.white};
    padding: ${theme.spacing * 2}px;
    border-radius: ${theme.spacing * 3}px;
    margin: ${theme.spacing * 4}px auto;
  `}
`;
