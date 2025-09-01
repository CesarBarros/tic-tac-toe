import { ThemeProvider } from "styled-components";

import "./Theme.types";
import { GlobalStyle } from "./Theme.reset";
import { Theme } from "./Theme.styles";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
