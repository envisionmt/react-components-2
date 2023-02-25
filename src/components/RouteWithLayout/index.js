import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { envisionClient } from '@envision/utils';
import NotificationsSystem, { atalhoTheme, useNotifications } from 'reapop';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Helmet } from 'react-helmet';

// Components
import PublicLayout from '../Layouts/Public';
import MainLayout from '../Layouts/Main';
import AccountLayout from '../Layouts/Account';
import LandingPageLayout from '../Layouts/LoggedOut/Landing';
import CheckoutLayout from '../Layouts/LoggedOut/Checkout';

// Hooks
import { useQuery } from '../../hooks/useQuery';
import { useScrollToTop } from '../../hooks/useScrollToTop';

// Actions
import { setAuthenticated, setImpersonating } from '../../store/app/actions';
import { fetchUser } from '../../store/user/actions';
import { FETCH_USER_FAILURE } from '../../store/user/constants';

// Assets
import envisionLogoLarge from '../../assets/images/envision-logo-large.png';

const RouteWithLayout = ({ component: Component, layout, isPublic, ...rest }) => {
  const { notifications, dismissNotification, notify } = useNotifications();
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useQuery();
  const user = useSelector((state) => state.user);

  useScrollToTop();

  useEffect(() => {
    const checkAuth = async () => {
      const runAs = query.get('run-as');
      const refreshToken = query.get('refresh');

      if (runAs) {
        envisionClient.setRunAs(runAs);
        await envisionClient.refreshAuth(refreshToken);
      }

      if (envisionClient.getImpersonated()) {
        dispatch(setImpersonating(true));
      }

      const creds = envisionClient.getCredentials();

      if (!creds.accessToken) {
        envisionClient.clearAuth();
        if (!isPublic) history.replace('/login');
        return;
      }

      dispatch(setAuthenticated());

      const result = await dispatch(fetchUser());

      if (result.type === FETCH_USER_FAILURE) {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'There was a problem loading your user data.',
        });
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const signedOut = {
      app_id: 'b4ykxm1s',
      custom_launcher_selector: '#signed_out_link',
    };

    const signedIn = {
      app_id: 'b4ykxm1s',
      email: `${user?.data?.user?.email}`,
      user_id: `${user?.data?.user?.id}`,
      created_at: `${user?.data?.user?.createdAt}`,
      custom_launcher_selector: '#signed_in_link',
    };

    if (window.Intercom) {
      window.Intercom('boot', signedOut);
      if (user?.data?.user) {
        window.Intercom('update', signedIn);
      } else {
        window.Intercom('shutdown');
        window.Intercom('update', signedOut);
      }
    }
  }, [user]);

  function renderExtras() {
    return (
      <>
        <Helmet>
          <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon-180x180.png" />
          <link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/assets/favicons/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
          <link rel="manifest" href="/assets/favicons/manifest.json" />
          <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <meta name="description" content="envision - Digital Canvas NFT Artwork Displays" />
          <meta name="author" content="envision, Inc" />
          <meta name="follow" content="index, follow" />
          <meta property="fb:app_id" content="" />

          <meta property="og:site_name" content="envision" />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="envision - Digital Canvas NFT Artwork Displays" />
          <meta property="og:url" content="<%= meta.appUrl %>" />
          <meta property="og:title" content="envision" />
          <meta property="og:image" content={envisionLogoLarge} />
          <meta property="og:image:alt" content="envision Logo" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@envision" />
          <meta name="twitter:url" content="<%= meta.appUrl %>" />
          <meta name="twitter:title" content="envision" />
          <meta name="twitter:description" content="envision - Digital Canvas NFT Artwork Displays" />
          <meta name="twitter:image:alt" content="envision Logo" />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png" />
          <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <NotificationsSystem
          notifications={notifications}
          dismissNotification={(id) => dismissNotification(id)}
          theme={atalhoTheme}
        />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </>
    );
  }

  const renderLayout = (routeProps) => {
    switch (layout) {
      case 'MAIN':
        return (
          <MainLayout {...routeProps}>
            <Component {...routeProps} />
            {renderExtras()}
          </MainLayout>
        );
      case 'PUBLIC':
        return (
          <PublicLayout {...routeProps}>
            <Component {...routeProps} />
            {renderExtras()}
          </PublicLayout>
        );
      case 'ACCOUNT':
        return (
          <AccountLayout {...routeProps}>
            <Component {...routeProps} />
            {renderExtras()}
          </AccountLayout>
        );
      case 'LANDING':
        return (
          <LandingPageLayout {...routeProps}>
            <Component {...routeProps} />
            {renderExtras()}
          </LandingPageLayout>
        );
      case 'CHECKOUT':
        return (
          <CheckoutLayout {...routeProps}>
            <Component {...routeProps} />
            {renderExtras()}
          </CheckoutLayout>
        );
      default:
        return (
          <MainLayout {...routeProps}>
            <Component {...routeProps} />
            {renderExtras()}
          </MainLayout>
        );
    }
  };

  return <Route {...rest} render={(routeProps) => renderLayout(routeProps)} />;
};

RouteWithLayout.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired,
  isPublic: PropTypes.bool,
};

RouteWithLayout.defaultProps = {
  isPublic: false,
};

export default RouteWithLayout;
