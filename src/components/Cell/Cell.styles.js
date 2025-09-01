import styled, { css } from "styled-components";

export const CellContainer = styled("button")`
  ${(/** @type CellContainerParams */ { theme, player }) => css`
    width: 80px;
    height: 80px;
    background-color: ${theme.color.background.gold.light};
    border: ${theme.spacing / 2}px solid ${theme.color.background.gold.dark};
    border-radius: ${theme.spacing * 2}px;
    font-size: 24px;
    font-weight: bold;
    cursor: ${player ? "default" : "pointer"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${player === "X" ? theme.color.text.black : theme.color.text.primary};
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:hover {
      background-color: ${player
        ? theme.color.background.gold.light
        : theme.color.background.secondary};
      transform: ${player ? "none" : "scale(1.05)"};
      transition: background-color 1s ease, transform 0.2s ease;
    }
    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
