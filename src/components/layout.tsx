import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import fontFaces from '../fonts/fontFaces';
import { Normalize } from 'styled-normalize';
import theme from '@/theme';
import 'react-slideshow-image/dist/styles.css';
import { Helmet } from 'react-helmet';
import 'react-image-gallery/styles/css/image-gallery.css';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  * {
    box-sizing: border-box;
  }
  body {
      font-family: "TT Norms", georgia, serif;
      background-color: ${({ theme }) => theme.palette.background};
      color: ${({ theme }) => theme.palette.white};
      overflow-x: hidden;
  }
  html {
    font-size: clamp(.7rem, 0.5vw + 2vh ,1rem);
    scroll-behavior: smooth;
  }
  .indicators {
    align-items: center;
    height: 3rem;
  }
  /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: green;
}
`;

interface ILayoutProps {
  children: React.ReactNode;
  transitionStatus?: 'exiting' | 'entering';
}
const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  transitionStatus,
}) => {
  // if (transitionStatus === 'exiting') return null;

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />

      <main>{children}</main>
    </ThemeProvider>
  );
};
export default Layout;
