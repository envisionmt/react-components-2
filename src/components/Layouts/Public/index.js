import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { lighten, darken } from 'polished';
import { ThemeProvider } from 'emotion-theming';
import { envisionClient } from '@envision/utils';

import GlobalStyles from './GlobalStyles';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const theme = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    white: '#fff',
    black: '#000',
    base: '#171717',
    baseLighter: lighten(0.08, '#171717'),
    baseDarker: darken(0.05, '#171717'),
    primary: 'linear-gradient(280deg, #eb2426, #73113c)',
    primaryLighter: `linear-gradient(280deg, ${lighten(0.05, '#eb2426')}, ${lighten(0.05, '#73113c')})`,
    primaryDarker: `linear-gradient(280deg, ${darken(0.05, '#eb2426')}, ${darken(0.05, '#73113c')})`,
    secondary: '#333333',
    secondaryLighter: lighten(0.1, '#333333'),
    secondaryDarker: darken(0.1, '#333333'),
    light: '#d5d3d3',
    lightLighter: lighten(0.1, '#d5d3d3'),
    lightDarker: darken(0.2, '#d5d3d3'),
    facebookBlue: '#3C5999',
    facebookBlueLighter: lighten(0.05, '#3C5999'),
    facebookBlueDarker: darken(0.05, '#3C5999'),
    error: '#eb2426',
    success: '#2AD177',
    info: '#6173CF',
    alert: '#ffc107',
  },
};

const PublicLayout = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const credentials = envisionClient.getCredentials();

    if (credentials.accessToken) {
      history.replace('/login');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PublicLayout;
