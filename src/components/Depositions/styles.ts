import styled, { css } from "styled-components";

export const Depositions = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteNormal};
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

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    line-height: 130%;
    font-size: 4.8rem;
    font-weight: 500;

    span {
      font-weight: 400;
    }

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 3.2rem;
    }
  `};
`;

export const DepositionsContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.gap96};
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      flex-wrap: wrap;
      gap: ${theme.spacings.gap64};
    }
  `};
`;
