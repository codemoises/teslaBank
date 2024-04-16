import styled, { css } from "styled-components";

export const Nav = styled.nav``;

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacings.gap16};
  `}
`;

export const Div = styled.div`
  ${({ theme }) => css`
    transition-duration: 0.5s;
    margin: ${theme.spacings.gap8} 0;
    width: 32px;
    height: 2px;
    background-color: ${theme.colors.blackNormal};
  `}
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

export const MobileNavBar = styled.div`
    display: none;

    ${({ theme }) => css`
    @media screen and (max-width: ${theme.containers.containerL}) {
      display: inline-block;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacings.gap16} ${theme.spacings.gap32};
    }
  `}
`;
