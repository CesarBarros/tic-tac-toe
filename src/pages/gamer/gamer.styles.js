import styled, { css } from "styled-components";
import "~/styles/Theme.types";

export const GamerContainer = styled("section")`
  ${(/** @type {{ theme: Theme }} */ { theme }) => css`
    max-width: ${theme.container.maxWidth};
  `}
`;
