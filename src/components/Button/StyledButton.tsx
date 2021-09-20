import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${theme.isDark ? "#f9f9ed" : "#FFF"};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.isDark ? "#000" : "#000"};
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
  }

  .harvest_btn {
    background-color: ${({ theme, color }) => (theme.isDark ? "#f9f9ed" : "#FFF")};
    color: ${({ theme, color }) => (theme.isDark ? "#000" : "#000")};
  }

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
      ${variant({
    variants: styleVariants,
  })}
      ${layout} ${space};
`;

export const ExtendedButton = styled(StyledButton)`
  background-color: ${({ theme, color }) => (theme.isDark ? "#d1f4a4" : "#2d7265")};
  color: ${({ theme, color }) => (theme.isDark ? "#000" : "#FFF")};
  padding: 15px 0px;
  border-radius: 50px;
`;

export default StyledButton;
