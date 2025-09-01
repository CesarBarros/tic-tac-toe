import styled, { css } from "styled-components";
import { Button } from "~/components/Button";

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

export const ResetScoresBtn = styled(Button)`
  ${(/** @type ButtonParams */ { theme }) => css`
    background-color: ${theme.color.background.primary};
    color: ${theme.color.text.white};
    flex: 1;
  `}
`;

export const ResetGameBtn = styled(Button)`
  ${(/** @type ButtonParams */ { theme }) => css`
    background-color: ${theme.color.background.secondary};
    color: ${theme.color.text.black};
    flex: 1;
  `}
`;

export const ButtonsContainer = styled("div")`
  ${(/** @type ButtonParams */ { theme }) => css`
    display: flex;
    gap: ${theme.spacing}px;
  `}
`;
