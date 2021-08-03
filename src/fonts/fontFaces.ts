import TTNormsRegular from './TTNorms-Regular.otf';
import TTNormsBold from './TTNorms-Bold.otf';
import TTNormsBoldItalic from './TTNorms-BoldItalic.otf';
import TTNormsLight from './TTNorms-Light.otf';
import TTNormsItalic from './TTNorms-Italic.otf';
import TTNormsBlack from './TTNorms-Black.otf';
import TTNormsBlackItalic from './TTNorms-BlackItalic.otf';
import { css } from 'styled-components';

export default css`
  @font-face {
    font-family: 'TT Norms';
    src: url(${TTNormsRegular}) format('opentype');
  }

  @font-face {
    font-family: 'TT Norms';
    font-weight: 900;
    src: url(${TTNormsBlack}) format('opentype');
  }
  @font-face {
    font-family: 'TT Norms';
    font-weight: 900;
    font-style: italic;
    src: url(${TTNormsBlackItalic}) format('opentype');
  }
  @font-face {
    font-family: 'TT Norms';
    font-weight: bold;
    src: url(${TTNormsBold}) format('opentype');
  }
  @font-face {
    font-family: 'TT Norms';
    font-weight: bold;
    font-style: italic;
    src: url(${TTNormsBoldItalic}) format('opentype');
  }
  @font-face {
    font-family: 'TT Norms';
    font-style: italic;
    src: url(${TTNormsItalic}) format('opentype');
  }
  @font-face {
    font-family: 'TT Norms';
    font-weight: 300;
    src: url(${TTNormsLight}) format('opentype');
  }
`;
