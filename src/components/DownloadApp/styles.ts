import styled, { css } from "styled-components";

export const DownloadApp = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryOpacity};
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
      padding: ${theme.spacings.gap72} ${theme.spacings.gap24};
    }
  `};
`;

export const ContentLeft = styled.div`

`;

export const H3 = styled.h3`
    ${({ theme }) => css`
      color: ${theme.colors.blackNormal};
      line-height: 120%;
      font-size: 4.8rem;
      font-weight: 500;

      span {
        color: ${theme.colors.primaryNormal};
      }

      @media screen and (max-width: ${theme.containers.containerXl}) {
        font-size: 3.2rem;
      }
    `};
`;

export const P = styled.p`
    ${({ theme }) => css`
      color: ${theme.colors.blackNormal};
      margin: ${theme.spacings.gap24} 0 ${theme.spacings.gap56} 0;
      font-size: 2rem;
      line-height: 150%;
      width: 70%;

      @media screen and (max-width: ${theme.containers.containerXl}) {
        width: 100%;
        font-size: 1.8rem;
      }
    `};
`;

export const ButtonDownloadsContainer = styled.div`
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      gap: ${theme.spacings.gap32};

      @media screen and (max-width: ${theme.containers.containerXl}) {
        flex-wrap: wrap;
      }
    `};
`;

export const ContentRight = styled.div`
      ${({ theme }) => css`
      @media screen and (max-width: ${theme.containers.containerXl}) {
        display: none;
      }
      `};
`;

export const CanvasBasic = styled.div`
  ${({ theme }) => css`
      width: 380px;
      height: 380px;
      border-radius: 56px;
      background: ${theme.colors.primaryNormal};
      display: flex;
      align-items: center;
      justify-content: center;
  `};
`;

export const Image = styled.img`
      width: 180px;
`;
