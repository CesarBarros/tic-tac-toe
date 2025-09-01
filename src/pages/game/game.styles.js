import styled, { css } from "styled-components";

export const GamerContainer = styled("section")`
  ${(/** @type {{ theme: Theme }} */ { theme }) => css`
    max-width: ${theme.container.maxWidth};
  `}
`;