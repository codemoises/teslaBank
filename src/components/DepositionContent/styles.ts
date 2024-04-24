import styled, { css } from "styled-components";

export const Div = styled.div`
  ${({ theme }) => css`
    width: 30%;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      width: 100%;
    }
  `};
`;

export const H4 = styled.h4`
  ${({ theme }) => css`
    transition: border 0.2s;
    border-left: 3px solid ${theme.colors.primaryNormal};
    text-transform: uppercase;
    color: ${theme.colors.blackNormal};
    font-weight: 500;
    padding-left: ${theme.spacings.gap16};
    font-size: 2.4rem;
  `};
`;

export const P = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.gap24};
    line-height: 160%;
    color: ${theme.colors.blackNormal};
    font-size: 1.8rem;
  `};
`;
