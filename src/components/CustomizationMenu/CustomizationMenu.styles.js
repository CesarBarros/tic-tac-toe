import styled, { css } from "styled-components";
import { Button } from "~/components/Button";

export const CustomizationButton = styled(Button)`
  ${(/** @type CustomizationButtonProps */ { theme, showMenu }) => css`
    position: fixed;
    top: 20px;
    right: ${showMenu ? "270px" : "20px"};
    background: ${theme.color.background.white};
    border: solid ${theme.spacing / 2}px ${theme.color.border.gray} !important;
    border: none;
    padding: ${theme.spacing * 2}px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 30px;
    transition: right 0.3s ease;
    z-index: ${theme.zIndex.highest};
    width: 40px;
    height: 40px;
  `}
`;

export const CustomizationTitle = styled("h4")`
  ${(/** @type CustomizationTitleProps */ { theme }) => css`
    color: ${theme.color.text.white};
    top: 0px;
  `}
`;

export const CustomizationMenuWrapper = styled("div")`
  ${(
    /** @type CustomizationMenuWrapperProps & { theme: Theme, colors: CustomColors } */ {
      theme,
      showMenu,
    }
  ) => css`
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${theme.color.background.primary};
    padding: 20px;
    border-radius: 10px;
    border: 2px solid ${theme.color.text.white};
    z-index: ${theme.zIndex.highest};
    min-width: 250px;
    transform: ${showMenu ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
  `}
`;

export const ColorInput = styled("input").attrs({ type: "color" })`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ColorLabel = styled("label")`
  ${(/** @type ColorLabelProps */ { theme }) => css`
    color: ${theme.color.text.white};
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  `}
`;
