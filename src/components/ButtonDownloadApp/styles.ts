import styled, { css } from "styled-components";

export const Link = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.blackDark};
    padding: ${theme.spacings.gap8} ${theme.spacings.gap32};
    border-radius: 4px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #252525;

    img {
      width: 38px;
    }

    @media screen and (max-width: ${theme.containers.containerS}) {
      width: 100%;
      justify-content: center;
    }
  `};
`;

export const Div = styled.div`
  width: 48px;
`;

export const Image = styled.img`
  width: 32px;
  transition: width 0.4s;
`;

export const P = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.whiteDark};
    font-weight: 300;
    line-height: 160%;
    margin-left: ${theme.spacings.gap16};
    font-size: 1.6rem;

    span {
      font-weight: 600;
      font-size: 2rem;
    }
  `};
`;
