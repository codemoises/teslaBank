import styled, { css } from "styled-components";

export const About = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteNormal};
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap96} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      padding: ${theme.spacings.gap40} ${theme.spacings.gap24};
    }
  `};
`;

export const AboutContentLeft = styled.div`
  ${({ theme }) => css`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      display: none;
    }
  `};
`;

export const SmartphoneImg = styled.img`
  width: 380px;
  height: 800px;
`;

export const AboutContentRight = styled.div`
  ${({ theme }) => css`
    width: 50vw;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      width: 100vw;
    }
  `};
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    font-weight: 500;
    font-size: 4.8rem;

    span {
      color: ${theme.colors.primaryDark};
    }

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 3.2rem;
    }
  `};
`;

export const P = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    font-size: 1.9rem;
    line-height: 150%;
    margin-top: ${theme.spacings.gap24};
    font-weight: 500;

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 1.8rem;
    }
  `};
`;

export const ContentRight = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.gap32};
  `};
`;
