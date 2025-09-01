import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import * as S from "./main.styles";
import { CustomThemeProvider } from "~/styles";
import { Game } from "~/pages/game";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <S.AppContainer>
        <Game />
      </S.AppContainer>
    </CustomThemeProvider>
  </StrictMode>
);
