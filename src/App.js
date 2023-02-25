import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { MetaMaskProvider } from 'metamask-react';
import { NotificationsProvider } from 'reapop';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import RouteWithLayout from './components/RouteWithLayout';

// ------ Logged In Pages ------- //
import { ArtworkHome } from './pages/Artwork/Home';
import { ArtworkDetails } from './pages/Artwork/Details';
import { ArtworkLatest } from './pages/Artwork/Latest';
import { ArtistHome } from './pages/Artists/Home';
import { ArtistDetails } from './pages/Artists/Details';
import { CollectionHome } from './pages/Collections/Home';
import { CollectionDetails } from './pages/Collections/Details';
import { DigitalCanvas } from './pages/Checkout/DigitalCanvas';
import { NFTSuccessPage } from './pages/NFT/Success';
import { NFTImport } from './pages/NFT/Import';
import { OrderConfirmation } from './pages/Order/Confirmation';
import AccountOverview from './pages/Account/AccountOverview';

// ---------- Logged Out Pages ----------- //
import Home from './pages/Home';
import About from './pages/About';
import Brand from './pages/Brand';
import { Pricing } from './pages/Pricing';
import ForIndustryGalleries from './pages/ForIndustry/Galleries';
import Partners from './pages/ForIndustry/Partners';
import { AccountSetup } from './pages/AccountSetup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';

import reducer from './reducer';

const queryClient = new QueryClient();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk)));

// TODO: Set this based on NODE_ENV
// const stripePromise = loadStripe('pk_test_CwFNQLF0fkyOp98BpMWd97hD');
const stripePromise = loadStripe('pk_live_8YPTwOAeydlQbXQKYSHVDAI6');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MetaMaskProvider>
        <Elements stripe={stripePromise}>
          <NotificationsProvider>
            <DndProvider backend={HTML5Backend}>
              <BrowserRouter>
                <Switch>
                  {/* Home Routes */}
                  <RouteWithLayout exact path={['/', '/home']} component={Home} layout="MAIN" isPublic />

                  {/* Pricing Routes */}
                  <RouteWithLayout exact path={['/pricing']} component={Pricing} layout="MAIN" isPublic />

                  {/* Artist Routes */}
                  <RouteWithLayout
                    exact
                    path={['/artists', '/discover/artists']}
                    component={ArtistHome}
                    layout="MAIN"
                    isPublic
                  />
                  <RouteWithLayout
                    path={['/artist/:id', '/artists/:id']}
                    component={ArtistDetails}
                    layout="MAIN"
                    isPublic
                  />

                  {/* Artwork Routes */}
                  <RouteWithLayout
                    exact
                    path={['/artwork', '/marketplace']}
                    component={ArtworkHome}
                    layout="MAIN"
                    isPublic
                  />
                  <RouteWithLayout exact path="/artwork/latest" component={ArtworkLatest} layout="MAIN" isPublic />
                  <RouteWithLayout path="/artwork/:id" component={ArtworkDetails} layout="MAIN" isPublic />

                  {/* Collection Routes */}
                  <RouteWithLayout
                    exact
                    path={['/collections', '/discover/collections']}
                    component={CollectionHome}
                    layout="MAIN"
                    isPublic
                  />
                  <RouteWithLayout
                    path={['/collections/:id', '/playlists/:id']}
                    component={CollectionDetails}
                    layout="MAIN"
                    isPublic
                  />

                  {/* NFT Routes */}
                  <RouteWithLayout
                    exact
                    path={['/nft/import', '/importnft', '/wallets', '/wallet']}
                    component={NFTImport}
                    layout="MAIN"
                  />
                  <RouteWithLayout exact path="/nft/success/:id" component={NFTSuccessPage} layout="MAIN" />

                  {/* Order Confirmation */}
                  <RouteWithLayout exact path="/order/confirmation" component={OrderConfirmation} layout="MAIN" />

                  {/* Account Routes */}
                  <RouteWithLayout exact path="/account/overview" component={AccountOverview} layout="ACCOUNT" />

                  {/* Public Account Routes */}
                  <RouteWithLayout exact path="/account-setup" component={AccountSetup} layout="MAIN" isPublic />
                  <RouteWithLayout exact path="/forgot-password" component={ForgotPassword} layout="MAIN" isPublic />
                  <RouteWithLayout
                    exact
                    path="/reset-password/:token"
                    component={ResetPassword}
                    layout="PUBLIC"
                    isPublic
                  />

                  {/* Digital Canvas & Checkout Routes */}
                  <RouteWithLayout path="/canvas/p/:size" component={DigitalCanvas} layout="MAIN" isPublic />
                  <RouteWithLayout
                    path="/checkout/digitalCanvas"
                    component={DigitalCanvas}
                    layout="CHECKOUT"
                    isPublic
                  />

                  {/* Public Info Routes */}
                  <RouteWithLayout path={['/partners', '/partner']} component={Partners} layout="MAIN" isPublic />
                  <RouteWithLayout path="/about" component={About} layout="MAIN" isPublic />
                  <RouteWithLayout path="/brand" component={Brand} layout="MAIN" isPublic />
                  <RouteWithLayout path={['/contact', '/contactus']} component={Contact} layout="MAIN" isPublic />

                  <RouteWithLayout
                    path="/forindustry/galleries"
                    component={ForIndustryGalleries}
                    layout="MAIN"
                    isPublic
                  />
                  <RouteWithLayout path="*" component={PageNotFound} layout="MAIN" isPublic />
                </Switch>
              </BrowserRouter>
            </DndProvider>
          </NotificationsProvider>
        </Elements>
      </MetaMaskProvider>
    </Provider>
  </QueryClientProvider>
);

export default App;
