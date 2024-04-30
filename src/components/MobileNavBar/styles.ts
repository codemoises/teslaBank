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
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  transition-duration: 5s;
  background-color: ${({ theme }) => theme.colors.whiteNormal};
`;

export const Li = styled.li`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    margin: ${theme.spacings.gap40} 0;
    padding: ${theme.spacings.gap8} 0;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.blackNormal};
    font-size: 2.4rem;
    font-weight: 600;
    padding: ${theme.spacings.gap8} ${theme.spacings.gap24};

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
