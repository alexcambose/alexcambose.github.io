import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import fontFaces from '../fonts/fontFaces';
import { Normalize } from 'styled-normalize';
import theme from '@/theme';
import 'react-slideshow-image/dist/styles.css';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '@/hooks/useSiteMetadata';

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
  title: string;
  description: string;
  transitionStatus?: 'exiting' | 'entering';
}
const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  title,
  description,
  transitionStatus,
}) => {
  const data = useSiteMetadata();
  // if (transitionStatus === 'exiting') return null;

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Helmet htmlAttributes={{ lang: data.lang }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <main>{children}</main>
    </ThemeProvider>
  );
};
export default Layout;
