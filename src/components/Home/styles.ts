import styled, { css } from "styled-components";

export const Home = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    padding-top: 24px;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      padding: ${theme.spacings.gap40} ${theme.spacings.gap24};
    }
  `}}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap24};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${theme.containers.containerL}) {
      padding: ${theme.spacings.gap40} ${theme.spacings.gap24};
    }
  `}
`;

export const HomeContentLeft = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 65vw;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${theme.containers.containerL}) {
      width: 100%;
    }
  `};
`;

export const ContentLeft = styled.div``;

export const H1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    line-height: 110%;
    font-size: 8.8rem;

    @media screen and (max-width: ${theme.containers.containerL}) {
      font-size: 6.4rem;
    }

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 4.8rem;
    }
  `};
`;

export const HomeDescription = styled.p`
  ${({ theme }) => css`
    width: 90%;
    color: ${theme.colors.blackNormal};
    font-weight: 500;
    line-height: 160%;
    font-size: 2.4rem;
    margin-top: ${theme.spacings.gap24};

    @media screen and (max-width: ${theme.containers.containerL}) {
      width: 100%;
    }
    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 1.8rem;
    }
  `};
`;

export const HomeBenefits = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.spacings.gap24};
    margin: ${theme.spacings.gap56} 0;
  `};
`;

export const Benefits = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.gap24};
  `}
`;

export const HomeGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.gap48};

    @media screen and (max-width: ${theme.containers.containerS}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `};
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.gap32};

    @media screen and (max-width: ${theme.containers.containerS}) {
      display: none;
    }
  `}
`;

export const HomeContentRight = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 35vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      display: none;
    }

    img {
      height: 100%;
    }
  `}
`;

export const CardImg = styled.img`
  width: 380px;
  height: 380px;
`;
