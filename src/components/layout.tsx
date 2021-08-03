import React from 'react';
import { createGlobalStyle } from 'styled-components';
import fontFaces from '../fonts/fontFaces';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  body {
      font-family: "TT Norms", georgia, serif;
  }
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Normalize />;
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}
