import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    background-color: white;
    border-radius: 4px;
    width: 25%;
    padding: ${theme.spacings.gap24};

    &:hover {
      img {
        width: 42px;
      }
    }
  `};
`;

export const Image = styled.img`
  transition: width 0.4s;
  width: 36px;
`;

export const Div = styled.div`
  ${({ theme }) => css`
    height: 50px;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${theme.containers.containerXl}) {
      width: 100%;
    }
  `};
`;

export const H5 = styled.h5`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.blackNormal};
    font-weight: 500;
    margin: ${theme.spacings.gap24} 0;
  `};
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    margin-bottom: ${theme.spacings.gap24};
    font-size: 1.6rem;
    line-height: 160%;
    font-weight: 500;
  `};
`;

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.primaryNormal};
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      color: #cb162e;
    }
  `};
`;
