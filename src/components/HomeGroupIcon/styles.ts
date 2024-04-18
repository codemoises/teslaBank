import styled, { css } from "styled-components";

export const Div = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Img = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.gap32};
    transition: 0.4s all ease;

    &:hover {
      width: 40px;
      cursor: pointer;
    }
  `};
`;
