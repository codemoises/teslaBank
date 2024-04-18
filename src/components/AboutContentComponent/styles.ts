import styled, { css } from "styled-components";
import { AboutContentComponentProps } from ".";

export const Div = styled.div<Pick<AboutContentComponentProps, "border">>`
  ${({ theme, border }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.gap48} ${theme.spacings.gap0};
    border-top: ${border ? '1px solid #ffe9ec' : ''};
    border-bottom: ${border ? '1px solid #ffe9ec' : ''};
  `};
`;

export const Img = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.gap0} ${theme.spacings.gap16};
    padding: ${theme.spacings.gap16};
    border-radius: ${theme.spacings.gap8};
    width: 64px;
    transition: width 0.4s;
    background-color: ${theme.colors.primaryOpacity};

    &:hover {
      width: 70px;
    }

    @media screen and (max-width: ${theme.containers.containerXl}) {
      display: none;
    }
  `}
`;

export const TextDiv = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.gap16};

    @media screen and (max-width: ${theme.containers.containerXl}) {
      margin-left: ${theme.spacings.gap0};
    }
  `};
`;

export const H4 = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    font-weight: 500;
    font-size: 2.4rem;
    margin-bottom: ${theme.spacings.gap8};
  `};
`;

export const P = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    line-height: 150%;
    color: ${theme.colors.blackNormal};
  `};
`;
