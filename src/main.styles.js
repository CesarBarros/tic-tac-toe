import styled, { css } from "styled-components";
import "~/styles/Theme.types";

export const AppContainer = styled("main")`
  ${(/** @type {{ theme: Theme }} */ { theme }) => css`
    background-color: ${theme.color.background.light};
    min-height: 100vh;
  `}
`;
