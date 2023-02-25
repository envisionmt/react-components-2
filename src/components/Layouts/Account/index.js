import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { lighten, darken } from 'polished';
import { envisionClient } from '@envision/utils';

// Components
import GlobalStyles from '../Main/GlobalStyles';
import Navigation from './AccountNavigation';
import { Header } from '../Main/components/Header';

// Hooks
import { useQuery } from '../../../hooks/useQuery';

// Actions
import { setAuthenticated, setImpersonating } from '../../../store/app/actions';
import { fetchUser } from '../../../store/user/actions';
import { FETCH_USER_SUCCESS } from '../../../store/user/constants';
import { fetchSubscription } from '../../../store/subscription/actions';

const RootWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #910048 0%, #111111 100%);
  position: fixed;
`;

const Wrapper = styled.div`
  width: 1008px;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const ContentBlack = styled.div`
  height: 100%;
  position: relative;
  margin-left: 240px;
  padding-top: 65px;
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

const AccountLayout = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useQuery();
  const app = useSelector((state) => state.app);

  // Fetch data that is used throughout the app
  useEffect(() => {
    const authenticate = async () => {
      const runAs = query.get('run-as');
      const refreshToken = query.get('refresh');

      if (runAs) {
        envisionClient.setRunAs(runAs);
        await envisionClient.refreshAuth(refreshToken);
      }

      if (envisionClient.getImpersonated()) {
        dispatch(setImpersonating(true));
      }

      if (!app?.data?.authenticated) {
        const creds = envisionClient.getCredentials();

        if (!creds.accessToken) {
          envisionClient.clearAuth();
          history.replace('/login');
          return;
        }

        dispatch(setAuthenticated());
      }

      const result = await dispatch(fetchUser());
      if (result.type === FETCH_USER_SUCCESS) {
        await dispatch(fetchSubscription(result?.payload?.user?.id));
      }
    };

    authenticate();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RootWrapper>
        <Header />
        <Wrapper>
          <GlobalStyles />
          <Navigation />
          <ContentBlack>{children}</ContentBlack>
        </Wrapper>
      </RootWrapper>
    </ThemeProvider>
  );
};

AccountLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AccountLayout;
