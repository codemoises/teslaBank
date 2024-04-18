import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<
  Pick<ButtonProps, 'backgroundColor' | 'textColor' | 'hover' | 'borderRadius' | 'height' | 'icon' | 'media'>
>`
  ${({ theme, backgroundColor, textColor, hover, borderRadius, height, icon, media }) => css`
    display: ${icon ? 'flex' : ''};
    align-items:${icon ? 'center' : ''};
    height: ${height};
    font-family: ${theme.font.family.default};
    background-color: ${backgroundColor ? theme.colors.primaryNormal : 'transparent'};
    padding: 12px 32px;
    font-size: 1.8rem;
    font-weight: ${icon ? "500" : "600"};
    color: ${textColor ? theme.colors.primaryNormal : theme.colors.whiteNormal};
    border-radius: ${borderRadius ? '4px' : '0'};

    &:hover {
      background-color: ${hover ?  theme.colors.primaryHover : ''};
    }

    &:hover img {
      width: 32px;
    }

    @media screen and (max-width: ${theme.containers.containerS}) {
      width: ${media ? '100%' : ''};
      justify-content: ${media ? 'center' : ''};
    }
  `}
`;

export const Div = styled.div`
    width: 60px;
`;

export const IconButton = styled.img`
    ${({ theme }) => css`
      transition: width 0.4s ease;
      margin-left: ${theme.spacings.gap16};
      width: 24px;
    `}
`;
