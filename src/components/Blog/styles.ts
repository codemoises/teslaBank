import styled, { css } from "styled-components";

export const Blog = styled.section``;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap96} ${theme.spacings.gap24};
  `};
`;

export const TopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 64px;
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: 4.8rem;
    font-weight: 500;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      font-size: 3.2rem;
    }
  `};
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const P = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.primaryNormal};

    @media screen and (max-width: ${theme.containers.containerM}) {
      font-size: 1.6rem;
    }
  `};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 32px;

    @media screen and (max-width: ${theme.containers.containerM}) {
      width: 24px;
    }
  `};
`;

export const ContainerPost = styled.div`
    ${({ theme }) => css`
      display: flex;
      align-items: stretch;
      gap: 32px;

      @media screen and (max-width: ${theme.containers.containerL}) {
        flex-wrap: wrap;
      }
    `};
`;