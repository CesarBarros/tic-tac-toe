import styled, { css } from "styled-components";

export const GamerContainer = styled("section")`
  ${(/** @type {{ theme: Theme }} */ { theme }) => css`
    max-width: ${theme.container.maxWidth};
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