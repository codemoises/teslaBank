import styled, { css } from "styled-components";

export const Nav = styled.nav`

`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  ${({ theme }) => css`
    position: relative;
    margin-left: ${theme.spacings.gap16};
    padding: ${theme.spacings.gap8} 0;
    width: auto;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    padding: ${theme.spacings.gap8} 12px;
    position: relative;
    color: ${theme.colors.blackNormal};
    font-weight: 600;
    font-size: 1.8rem;

    &:hover {
      color: ${theme.colors.primaryNormal};
    }
  `}
`;

export const NavBar = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.containerXl};
    margin: 0 auto;
    padding: ${theme.spacings.gap32};
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => css`
    @media screen and (max-width: ${theme.containers.containerL}) {
      display: none;
    }
  `}
  `}
`;

export const Div = styled.div`
  display: flex;
  gap: 2.5px;

`;
