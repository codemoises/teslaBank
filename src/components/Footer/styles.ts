import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteLight};
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap32} ${theme.spacings.gap24};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      flex-wrap: wrap;
      gap: ${theme.spacings.gap24};
      text-align: center;
      justify-content: center;
    }
  `};
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 160%;

  span {
    font-weight: 600;
  }
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media screen and (max-width: ${theme.containers.containerM}) {
      display: flex;
    }
  `};
`;

export const P2 = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 600;
    color: ${theme.colors.primaryNormal};
  `};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.gap16};
  `};
`;
