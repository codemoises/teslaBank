import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-family: ${({ theme }) => theme.font.family.default};
}

img,
svg {
  max-width: 100%;
  height: auto;
  display: block;
}

p {
  margin: 0;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.secondary};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: ${({ theme }) => theme.font.family.default};
}

h6 {
  font-size: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacings.gap8};
}

button,
input {
  border: 0;

  &:focus {
    border: 0;
  }
}

body {
  background-color: ${({ theme }) => theme.colors.whiteNormal};
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}
`;
