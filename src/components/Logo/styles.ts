import styled, { css } from "styled-components";

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    color: ${theme.colors.primaryNormal};
  `}
`;
