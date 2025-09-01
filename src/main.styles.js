import styled, { css } from "styled-components";
import "~/styles/Theme.types";

export const AppContainer = styled("main")`
  ${(/** @type {{ theme: Theme }} */ { theme }) => css`
    align-items: center;
    background-color: ${theme.color.background.light};
    display: flex;
    justify-content: center;
    min-height: 100vh;
  `}
`;
