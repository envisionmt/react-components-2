import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Hooks
import { useSubscriptionPrices } from '../../../hooks/data';
import { useDeviceDownload } from '../../../hooks/useDeviceDownload';

// Imports
import { addCartItem } from '../../../store/checkout/actions';
import { openSigninMenu } from '../../../store/signinMenu/actions';
import { Button } from '../../Button';

// Styled
import { Wrapper, SignupText, ButtonWrapper, Divider, BreakWrapper } from './styled';

export function SubscribeCard({ user }) {
  const dispatch = useDispatch();
  const subscriptions = useSubscriptionPrices();

  const handleAddSubscription = React.useCallback(() => {
    const tierOne = subscriptions.data[1];
    const subscription = {
      id: tierOne?.id,
      price: tierOne?.metadata.MSRPPrice,
      priceId: tierOne?.metadata.MSRPPriceID,
      name: tierOne?.name,
      quantity: 1,
      type: 'Subscriptions',
    };

    dispatch(addCartItem(subscription));
  });

  const handleSignUp = () => {
    dispatch(openSigninMenu());
  };

  return (
    <Wrapper>
      <SignupText>
        {user?.data ? (
          <>
            <div>This artwork is included in the envision subscription along with 3000 other artworks. </div>
            <br />
            <Button type="button" color="red" onClick={handleAddSubscription}>
              Become a Subscriber
            </Button>
            <BreakWrapper>
              <Divider /> <div>OR</div> <Divider />
            </BreakWrapper>
            <div>
              This artwork is available for license in our mobile app.{' '}
              <button type="button" className="text" onClick={() => useDeviceDownload()}>
                Download here
              </button>{' '}
              to begin enjoying digital art on your home television or Digital Canvas today.
            </div>
          </>
        ) : (
          <>
            <div>This artwork is included in the envision subscription along with 3000 other artworks.</div>
            <br />
            <div>Join envision today!</div>
            <br />
            <ButtonWrapper>
              <Button type="button" color="red" onClick={handleSignUp}>
                Login/Signup
              </Button>
            </ButtonWrapper>
            <BreakWrapper>
              <Divider /> <div>OR</div> <Divider />
            </BreakWrapper>
            <div>
              <button type="button" className="text" onClick={() => useDeviceDownload()}>
                Download the app here
              </button>{' '}
              to rent this artwork for 30 days and display digital art on your Smart TV or Digital Canvas today.
            </div>
          </>
        )}
      </SignupText>
    </Wrapper>
  );
}

SubscribeCard.propTypes = {
  user: PropTypes.object.isRequired,
};
