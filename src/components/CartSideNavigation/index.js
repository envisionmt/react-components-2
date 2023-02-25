import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStripe } from '@stripe/react-stripe-js';
import { useNotifications } from 'reapop';
import CurrencyFormat from 'react-currency-format';

// Imports
import CartNavigationItem from './CartNavigationItem';
import MainButton from '../Button/MainButton';
import { Button } from '../Button';
import IconClose from '../../assets/images/icons/icon-close.svg';

// Redux
import { closeCheckoutCartSideNavigation, checkoutCart, addCartItem } from '../../store/checkout/actions';
import { CHECKOUT_CART_SUCCESS, CHECKOUT_CART_FAILURE } from '../../store/checkout/constants';

// Hooks
import { useSubscriptionPricing } from '../../hooks/data';
import { useClickOutside } from '../../hooks/useClickOutside';

// Styled
import {
  Wrapper,
  RootWrapper,
  TitleWrapper,
  Title,
  CloseIcon,
  DeviceListWrapper,
  DeviceNavigationCardWrapper,
  ButtonWrapper,
  TotalPriceWrapper,
  TotalPriceLabel,
  TotalPrice,
  FlexContainer,
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeSubtitle,
  Price,
  Flex,
} from './styled';

export default function CartSideNavigation() {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const checkoutCartData = useSelector((state) => state.checkout);
  const displayItems = checkoutCartData?.displayItems;

  const pricing = useSubscriptionPricing();
  const [submitting, setSubmitting] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subOpen, setSubOpen] = useState(true);
  const ref = React.useRef(null);
  const [isActive] = useClickOutside(ref, false, checkoutCartData.isOpen);

  const convertFloat = (price) => {
    if (price) {
      return parseFloat(price.replace(/,/g, ''));
    }
    return 0;
  };

  useEffect(() => {
    let totalPriceTemp = 0;
    if (displayItems) {
      displayItems.forEach((displayItem) => {
        const displayItemPrice = convertFloat(displayItem?.price) * displayItem.quantity;
        totalPriceTemp += displayItemPrice;
      });
      setTotalPrice(totalPriceTemp);
    }
  }, [displayItems]);

  useEffect(() => {
    if (isActive) {
      dispatch(closeCheckoutCartSideNavigation());
    }
  }, [isActive]);

  const handleCloseDeviceNav = useCallback(() => {
    dispatch(closeCheckoutCartSideNavigation());
  });

  const handleAddSubscription = useCallback(() => {
    const subscription = {
      id: pricing?.data?.FULL.monthly.id,
      price: `${parseInt(pricing?.data?.FULL.monthly.price, 10) / 100}`,
      priceId: pricing?.data?.FULL.monthly.id,
      name: 'Premium Subscription',
      quantity: 1,
      type: 'Subscriptions',
    };

    dispatch(addCartItem(subscription));
    setSubOpen(false);
  });

  const handleClickQty = () => {};

  const handleClickCheckout = useCallback(async () => {
    try {
      if (submitting) return;
      setSubmitting(true);
      const params = {
        products: displayItems,
      };
      const result = await dispatch(checkoutCart(params));

      await stripe.redirectToCheckout({ sessionId: result.payload.id });

      if (result.type === CHECKOUT_CART_SUCCESS) {
        notify({
          status: 'success',
          title: 'Checkout Successful',
          message: 'Your checkout has completed successfully.',
        });
        setSubmitting(false);
        return;
      }
      if (result.type === CHECKOUT_CART_FAILURE) {
        notify({
          status: 'error',
          title: 'Checkout Failed',
          message: 'Your checkout could not be completed successfully.',
        });
        setSubmitting(false);
        return;
      }
    } catch (e) {
      setSubmitting(false);
      notify({
        status: 'error',
        title: 'Checkout Failed',
        message: 'Your checkout could not be completed successfully.',
      });
    }
  });

  return (
    <Wrapper open={checkoutCartData?.isOpen}>
      <RootWrapper open={checkoutCartData?.isOpen} ref={ref}>
        <TitleWrapper>
          <Title>Your Cart</Title>
          <CloseIcon src={IconClose} onClick={handleCloseDeviceNav} />
        </TitleWrapper>
        <DeviceListWrapper>
          {displayItems?.map((displayItem) => (
            <DeviceNavigationCardWrapper key={displayItem.id}>
              <CartNavigationItem
                cart={displayItem}
                displayItems={displayItems}
                onClickQty={() => handleClickQty(displayItem)}
              />
            </DeviceNavigationCardWrapper>
          ))}
        </DeviceListWrapper>
        {subOpen && (
          <>
            {!displayItems.filter((e) => e.type === 'Subscriptions').length > 0 && (
              <SubscribeWrapper>
                <Flex>
                  <SubscribeTitle>Subscribe To envision</SubscribeTitle>
                  <CloseIcon src={IconClose} onClick={() => setSubOpen(false)} />
                </Flex>
                <SubscribeSubtitle>Experience the best of envision with an exclusive subscription.</SubscribeSubtitle>
                <FlexContainer>
                  <Price>$99/mo</Price>
                  <Button type="submit" color="red" onClick={handleAddSubscription}>
                    Add Subscription
                  </Button>
                </FlexContainer>
              </SubscribeWrapper>
            )}
          </>
        )}
        <ButtonWrapper>
          <TotalPriceWrapper>
            <TotalPriceLabel>Total</TotalPriceLabel>
            {/* <TotalPrice>$ {totalPrice?.toFixed(2)}</TotalPrice> */}
            <CurrencyFormat
              value={totalPrice?.toFixed(2)}
              displayType="text"
              thousandSeparator
              prefix="$"
              renderText={(value) => <TotalPrice>{value}</TotalPrice>}
            />
          </TotalPriceWrapper>
          <MainButton type="button" color="red" borderColor="#333333" title="Checkout" onClick={handleClickCheckout} />
        </ButtonWrapper>
      </RootWrapper>
    </Wrapper>
  );
}

CartSideNavigation.propTypes = {
  // devices: PropTypes.array,
};

CartSideNavigation.defaultProps = {
  // devices: [],
};
