import styled, { css } from "styled-components";

export const FaqContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.gap32} 0;
    min-height: 175px;

    &:nth-child(2) {
      border-top: 1px solid #ffe9ec;
      border-bottom: 1px solid #ffe9ec;
    }

    @media screen and (max-width: ${theme.containers.containerXl}) {
      min-height: 125px;
    }
  `};
`;

export const Article = styled.article`
  width: 100%;
  cursor: pointer;
`;

export const Accordion = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.spacings.gap16} ${theme.spacings.gap16};
  `};
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageIconFaq = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.gap0} ${theme.spacings.gap16};
    padding: ${theme.spacings.gap16};
    border-radius: ${theme.spacings.gap8};
    transition: width 0.4s;
    width: 64px;
    background-color: ${theme.colors.primaryOpacity};

    @media screen and (max-width: ${theme.containers.containerXl}) {
      display: none;
    }
  `};
`;

export const ImageIconAccordion = styled.img`
  transition: width 0.5s;
  width: 32px;
`;

export const Painel = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.gap24} ${theme.spacings.gap16};
    display: none;
    overflow: hidden;
  `};
`;

export const P = styled.p`
  ${({ theme }) => css`
    line-height: 160%;
    color: ${theme.colors.blackNormal};
    font-size: 1.8rem;
  `};
`;

export const Question = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.gap8};

    @media screen and (max-width: ${theme.containers.containerXl}) {
      margin-left: 0;
    }
  `};
`;

export const H4 = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.blackNormal};
    font-weight: 500;
    font-size: 2rem;
  `};
`;
