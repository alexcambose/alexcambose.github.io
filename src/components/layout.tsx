import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import fontFaces from '../fonts/fontFaces';
import { Normalize } from 'styled-normalize';
import theme from '@/theme';
const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  body {
      font-family: "TT Norms", georgia, serif;
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
