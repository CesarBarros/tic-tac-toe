import styled, { css } from "styled-components";

export const ScoreBoardContainer = styled("div")`
  ${(/** @type ScoreBoardContainerParams */ { theme }) => css`
    display: grid;
    gap: ${theme.spacing}px;
    background: ${theme.color.background.white};
    padding: ${theme.spacing * 2}px;
    border-radius: ${theme.spacing * 2}px;
    margin: ${theme.spacing * 3}px auto;
  `}
`;

export const ScoreBoardTitle = styled("h3")`
  ${(/** @type ScoreBoardContainerParams */ { theme }) => css`
    margin: ${theme.spacing}px auto;
  `}
`;

export const MatchWinnerMessage = styled("div")`
  ${(/** @type MatchWinnerMessageParams */ { theme }) => css`
    color: ${theme.color.notification.success};
    font-size: 18px;
    font-weight: bold;
    margin: ${theme.spacing * 3}px auto;
  `}
`;

export const ResetScoresBtn = styled("button")`
  ${(/** @type ScoreBoardContainerParams */ { theme }) => css`
    background-color: ${theme.color.background.primary};
    color: ${theme.color.text.white};
    border: none;
    padding: ${theme.spacing * 2}px ${theme.spacing * 4}px;
    border-radius: ${theme.spacing}px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    margin-top: ${theme.spacing * 2}px;
    text-align: center;
  `}
`;
