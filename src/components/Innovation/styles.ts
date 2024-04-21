import styled, { css } from "styled-components";

export const Innovation = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryOpacity};
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap96} 0;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      padding: ${theme.spacings.gap72} ${theme.spacings.gap24};
    }
  `};
`;

export const H5 = styled.h5`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.gap16};
    font-size: 2rem;

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 1.8rem;
    }
  `};
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    line-height: 120%;
    font-size: 4.8rem;
    font-weight: 500;

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 1.8rem;
    }
  `};
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryNormal};

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 3.2rem;
    }
  `};
`;

export const ContainerCards = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.gap64};
  `};
`;

export const CardsInnovationGrid = styled.div`
    ${({ theme }) => css`
      margin: ${theme.spacings.gap32} 0;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: ${theme.spacings.gap24};

      @media screen and (max-width: ${theme.containers.containerXl}) {
        flex-wrap: wrap;
      }
    `};
`;
