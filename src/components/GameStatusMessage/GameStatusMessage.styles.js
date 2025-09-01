import styled, { css } from "styled-components";

const GameStatusMessageContainerModifiers = {
  draw: (
    /** @type GameStatusMessageContainerModifiersParams */ { theme }
  ) => css`
    color: ${theme.color.notification.warning};
  `,
  success: (
    /** @type GameStatusMessageContainerModifiersParams */ { theme }
  ) => css`
    color: ${theme.color.notification.success};
  `,
};

export const GameStatusMessageContainer = styled("div")`
  ${(/** @type GameStatusMessageContainerParams */ { theme, winner }) => css`
    color: ${theme.color.text.black};
    font-size: 14px;
    font-weight: bold;

    ${!!winner &&
    GameStatusMessageContainerModifiers[winner === "draw" ? "draw" : "success"](
      { theme }
    )}
  `}
`;
