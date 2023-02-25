import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { lighten, darken } from 'polished';

import GlobalStyles from '../../Main/GlobalStyles';

import { Header } from '../../Main/components/Header';
import { MainMenu } from '../../Main/components/MainMenu';

const RootWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #222222;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const ContentBlack = styled.div`
  position: relative;
  height: 100%;
  transition: 0.5s;
`;

const theme = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    white: '#fff',
    black: '#000',
    whiteFaded: 'rgba(255,255,255,0.8)',
    base: '#171717',
    baseLighter: '#222',
    baseDarker: '#121212',
    primary: '#6173CF',
    primaryDarker: '#4a5ec8',
    primaryLighter: '#4a5ec8',
    primary2: '#222222',
    secondary: '#333333',
    secondaryLighter: lighten(0.1, '#333333'),
    secondaryDarker: darken(0.1, '#333333'),
    light: '#d5d3d3',
    lightLighter: lighten(0.1, '#d5d3d3'),
    lightDarker: darken(0.2, '#d5d3d3'),
    error: '#eb2426',
    errorDarker: darken(0.15, '#eb2426'),
    success: '#2AD177',
    info: '#6173CF',
    alert: '#ffc107',
  },
};

const LandingPageLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <RootWrapper>
        <Wrapper>
          <GlobalStyles />
          <MainMenu />
          <Header />
          <ContentBlack>{children}</ContentBlack>
        </Wrapper>
      </RootWrapper>
    </ThemeProvider>
  );
};

LandingPageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default LandingPageLayout;
