import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<
  Pick<ButtonProps, 'backgroundColor' | 'textColor' | 'hover' | 'borderRadius'>
>`
  ${({ theme, backgroundColor, textColor, hover, borderRadius }) => css`
    font-family: ${theme.font.family.default};
    background-color: ${backgroundColor ? theme.colors.primaryNormal : 'transparent'};
    padding: 12px 32px;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${textColor ? theme.colors.primaryNormal : theme.colors.whiteNormal};
    border-radius: ${borderRadius ? '4px' : '0'};

    &:hover {
      background-color: ${hover ?  theme.colors.primaryHover : ''};
    }
  `}
`;
