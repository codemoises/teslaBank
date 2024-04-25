import styled, { css } from "styled-components";

export const BlogContent = styled.article`
  ${({ theme }) => css`
    width: 32%;
    flex-grow: 1;

    @media screen and (max-width: ${theme.containers.containerL}) {
      width: 100%;
    }
  `};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    border-radius: 16px;

    @media screen and (max-width: ${theme.containers.containerL}) {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  `};
`;

export const H3 = styled.h3`
  font-size: 2.8rem;
  line-height: 120%;
  margin: 32px 0 16px 0;
  font-weight: 500;
`;

export const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 160%;
`;
