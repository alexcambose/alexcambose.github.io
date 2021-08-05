import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import fontFaces from '../fonts/fontFaces';
import { Normalize } from 'styled-normalize';
import theme from '@/theme';
const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  * {
    box-sizing: border-box;
  }
  body {
      font-family: "TT Norms", georgia, serif;
      background-color: ${({ theme }) => theme.palette.background};
  }
  html {
    font-size: clamp(.7rem, 0.5vw + 2vh ,1rem);
  }
`;

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};
export default Layout;
