import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

// Comopnents
import GlobalStyles from './GlobalStyles';
import { MainMenu } from './components/MainMenu';
import { Header } from './components/Header';
import Modal from './components/Modal';
import { DeviceMenu } from '../../DeviceMenu';
import { SigninMenu } from '../../SigninMenu';
import CheckoutCartSideNavigation from '../../CartSideNavigation';
import Footer from '../../Footer';

import { useUser } from '../../../hooks/data';

// Theme
import { theme } from './theme';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ContentContainer = styled.div`
  position: relative;
  transition: 0.5s;
  min-width: calc(100% - 228px);
  width: 100%;
  min-height: 100vh;
`;
const FlexWrapper = styled.div`
  display: flex;
`;
const MainLayout = ({ children }) => {
  const user = useUser();
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <FlexWrapper>
          <MainMenu />
          <ContentContainer>
            {children}
            <Footer />
          </ContentContainer>
        </FlexWrapper>
        <SigninMenu />
        {user.data?.user && <DeviceMenu />}
        <CheckoutCartSideNavigation />
        <Modal />
      </Wrapper>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default MainLayout;
