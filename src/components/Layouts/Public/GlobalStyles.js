import React from 'react';
import { Global, css } from '@emotion/core';
import colors from '../../../util/colors';

import OpenSansRegular from '../../../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansItalic from '../../../assets/fonts/OpenSans/OpenSans-Italic.ttf';
import OpenSansLight from '../../../assets/fonts/OpenSans/OpenSans-Light.ttf';
import OpenSansLightItalic from '../../../assets/fonts/OpenSans/OpenSans-LightItalic.ttf';
import OpenSansSemiBold from '../../../assets/fonts/OpenSans/OpenSans-SemiBold.ttf';
import OpenSansSemiBoldItalic from '../../../assets/fonts/OpenSans/OpenSans-SemiBoldItalic.ttf';
import OpenSansBold from '../../../assets/fonts/OpenSans/OpenSans-Bold.ttf';
import OpenSansBoldItalic from '../../../assets/fonts/OpenSans/OpenSans-BoldItalic.ttf';
import OpenSansExtraBold from '../../../assets/fonts/OpenSans/OpenSans-ExtraBold.ttf';
import OpenSansExtraBoldItalic from '../../../assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf';

const styles = css`
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansRegular}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansItalic}) format('truetype');
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansLight}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansSemiBold}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansExtraBold}) format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansExtraBoldItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  * {
    font-family: 'OpenSans', Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    font-weight: 500;
    color: white;
  }

  html,
  body {
    background: ${colors.base};
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${colors.base};
  }

  p {
    font-size: 1rem;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
