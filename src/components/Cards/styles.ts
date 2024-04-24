import styled, { css } from "styled-components";

export const Cards = styled.section`

`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap96} ${theme.spacings.gap24};
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  `};
`;

export const H3 = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    text-transform: uppercase;
    color: ${theme.colors.primaryNormal};
  `};
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    width: 50%;
    color: ${theme.colors.blackNormal};
    line-height: 120%;
    font-size: 5.6rem;
    font-weight: 500;
    margin-bottom: 24px;

    @media screen and (max-width: ${theme.containers.containerL}) {
      font-size: 3.2rem;
      width: 100%;
    }
  `};
`;

export const P = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    width: 65%;
    line-height: 160%;

    @media screen and (max-width: ${theme.containers.containerL}) {
      font-size: 1.8rem;
      width: 100%;
    }
  `};
`;

export const Image = styled.img`
    margin: 48px 0;
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    gap: 32px;

    @media screen and (max-width: ${theme.containers.containerM}) {
      flex-wrap: wrap;
      gap: 24px;
    }
  `};
`;
