import styled, { css } from "styled-components";

export const BenefitsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.gap24};
  `}
`;

export const P = styled.p`
  font-size: 1.8rem;
`
