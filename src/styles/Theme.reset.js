import { createGlobalStyle, css } from "styled-components";
import "./Theme.types";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    
    ${(/** @type {{ theme: Theme }} */ { theme }) => css`
      background-color: ${theme.color.background.light};
      color: ${theme.color.text.black};
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    all: unset;
  }
`;
