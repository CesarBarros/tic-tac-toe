import styled, { css } from "styled-components";

export const TimerContainer = styled("div")`
  ${(/** @type TimerContainerParams */ { theme, timeLeft }) => css`
    background: ${theme.color.background.white};
    border: 2px solid
      ${timeLeft <= 2
        ? theme.color.notification.error
        : theme.color.background.white};
    padding: ${theme.spacing * 2}px;
    border-radius: ${theme.spacing * 2}px;
    margin: ${theme.spacing * 3}px auto;
    text-align: center;
  `}
`;

export const TimerCount = styled("div")`
  ${(/** @type TimerContainerParams */ { theme, timeLeft }) => css`
    color: ${timeLeft <= 2
      ? theme.color.notification.error
      : theme.color.text.black};
    font-size: 24px;
    font-weight: 800;
  `}
`;

export const TimerPlayer = styled("div")`
  ${(/** @type TimerContainerParams */ { theme }) => css`
    color: ${theme.color.text.black};
    font-size: 16px;
  `}
`;
