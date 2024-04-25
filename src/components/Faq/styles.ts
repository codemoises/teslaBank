import styled, { css } from "styled-components";

export const Faq = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteNormal};
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap96} ${theme.spacings.gap32};

    @media screen and (max-width: ${theme.containers.containerXl}) {
      padding: ${theme.spacings.gap72} ${theme.spacings.gap32};
    }
  `};
`;

export const TopRow = styled.div`
  text-align: center;
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    margin: ${theme.spacings.gap16} 0;
    font-size: 4.8rem;
    font-weight: 500;

    @media screen and (max-width: ${theme.containers.containerL}) {
      font-size: 3.2rem;
    }
  `};
`;

export const P = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    font-size: 2.4rem;

    @media screen and (max-width: ${theme.containers.containerL}) {
      font-size: 1.8rem;
    }
  `};
`;

export const FaqOptionContainer = styled.div`
  ${({ theme }) => css`
    width: 70%;
    margin: ${theme.spacings.gap72} auto 0 auto;

    @media screen and (max-width: ${theme.containers.containerL}) {
      width: 100%;
      margin: ${theme.spacings.gap40} auto 0 auto;
    }
  `};
`;
