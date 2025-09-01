import styled, { css } from "styled-components";

export const CellContainer = styled("button")`
  ${(/** @type CellContainerParams */ { theme, player, colors }) => css`
    width: 80px;
    height: 80px;
    background-color: ${colors.cell};
    border: ${theme.spacing / 2}px solid ${colors.cellBorder};
    border-radius: ${theme.spacing * 2}px;
    font-size: 24px;
    font-weight: bold;
    cursor: ${player ? "default" : "pointer"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${player === "X" ? colors.playerX : colors.playerO};
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:hover {
      background-color: ${player
        ? colors.cell
        : theme.color.background.secondary};
      transform: ${player ? "none" : "scale(1.05)"};
      transition: background-color 1s ease, transform 0.2s ease;
    }
    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
