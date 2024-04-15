import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<
  Pick<ButtonProps, 'backgroundColor' | 'textColor'>
>`
  ${({ theme, backgroundColor, textColor }) => css`
    background-color: ${backgroundColor ? theme.colors.primaryNormal : 'transparent'};
    padding: 12px 32px;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${textColor ? theme.colors.primaryNormal : theme.colors.whiteNormal};
  `}
`;
