import styled, { css } from "styled-components";

export const Button = styled("button")`
  ${(/** @type ScoreBoardContainerParams */ { theme }) => css`
    background-color: ${theme.color.background.light};
    color: ${theme.color.text.black};
    border: none;
    padding: ${theme.spacing * 2}px ${theme.spacing * 4}px;
    border-radius: ${theme.spacing}px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    margin-top: ${theme.spacing * 2}px;
    text-align: center;

    &:disabled {
      background-color: ${theme.color.background.light};
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
