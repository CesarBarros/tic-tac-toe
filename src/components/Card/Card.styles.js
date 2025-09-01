import styled, { css } from "styled-components";

export const CardGroupContainer = styled("div")`
  ${(/** @type CardGroupContainerParams */ { theme }) => css`
    display: flex;
    gap: ${theme.spacing}px;
    justify-content: space-between;
  `}
`;

export const CardContainer = styled("div")`
  ${(/** @type CardGroupContainerParams */ { theme }) => css`
    border: ${theme.spacing / 2}px solid ${theme.color.border.gray};
    border-radius: ${theme.spacing * 2}px;
    padding: ${theme.spacing * 2}px;

    align-items: end;
    display: flex;
    flex-direction: column;
    line-height: normal;
  `}
`;

export const CardTitle = styled("span")`
  ${(/** @type CardGroupContainerParams */ { theme }) => css`
    color: ${theme.color.text.black};
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
  `}
`;

export const CardSubTitle = styled("span")`
  ${(/** @type CardGroupContainerParams */ { theme }) => css`
    color: ${theme.color.text.black};
    font-size: 12px;
  `}
`;
