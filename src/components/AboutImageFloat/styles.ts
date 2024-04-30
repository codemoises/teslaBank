import styled, { css } from "styled-components";

export const ImageFloat = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.gap96};
    height: ${theme.spacings.gap96};
    position: absolute;
    padding: ${theme.spacings.gap24};
    border-radius: ${theme.spacings.gap16};
    background-color: ${theme.colors.primaryOpacity};
  `}
`;
