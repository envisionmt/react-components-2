import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { removeCartItem, updateCartItem } from '../../store/checkout/actions';

const RootWrapper = styled.div`
  width: 100%;
  background: #333333;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: ${({ isBorder }) => (isBorder ? '2px solid #b4b4b4' : '2px solid #333333')};

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.025em;
    text-decoration-line: underline;
    color: #a5a5a5;
  }
`;

const DisplayInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 12px 12px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 12px 0px 12px;
`;

const DeviceCardName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  margin-bottom: 6px;
`;

const FrameColor = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #a5a5a5;
  margin-bottom: 6px;
`;

const PriceWrapper = styled.div`
  flex-basis: ${({ fb }) => fb};
  max-width: ${({ mw }) => mw};
  display: flex;
  align-items: flex-end;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const QuantityWrapper = styled.div`
  width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #444444;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 6px;
  margin-top: 12px;
  flex-basis: ${({ fb }) => fb};
  max-width: ${({ mw }) => mw};
`;
const PlusIcon = styled.span`
  font-size: 20px;
`;

const Quantity = styled.span`
  font-weight: 600;
  font-size: 11px;
`;

const MinusIcon = styled.span`
  border: 1px solid #fff;
  width: 8px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${({ fb }) => fb};
  max-width: ${({ mw }) => mw};
  text-align: ${({ ta }) => ta};

  button {
    text-decoration: 0;
    background: transparent;
    border: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    letter-spacing: 0.025em;
    text-decoration-line: underline;
    color: #a5a5a5;
  }
`;

export default function Cart(props) {
  const dispatch = useDispatch();
  const { cart, displayItems } = props;

  const convertFloat = (price) => {
    if (price) {
      return parseFloat(price.replace(/,/g, ''));
    }
    return 0;
  };

  const price = cart.price ? Math.round((convertFloat(cart.price) + Number.EPSILON) * 100) / 100 : 0;

  const [quantity, setQuantity] = useState(cart.quantity);
  const [itemPrice, setItemPrice] = useState(price);

  const handleUpdateCartItem = (displayItemsTemp) => {
    dispatch(updateCartItem(displayItemsTemp));
  };

  const handleClickQuantity = (type) => () => {
    let quantityTemp = 0;
    if (type === 'plus') {
      quantityTemp = quantity + 1;
      setQuantity(quantity + 1);
    } else if (type === 'minus') {
      if (quantity > 0) {
        quantityTemp = quantity - 1;
        setQuantity(quantity - 1);
      }
    }
    const itemTotalPrice = price * quantityTemp;
    setItemPrice(itemTotalPrice);

    const displayItemsTemp = [];
    displayItems.forEach((displayItem) => {
      if (displayItem.id === cart.id) {
        displayItem.quantity = quantityTemp;
      }
      displayItemsTemp.push(displayItem);
    });
    handleUpdateCartItem(displayItemsTemp);
  };

  const handleRemoveItem = () => {
    dispatch(removeCartItem(cart));
  };

  return (
    <RootWrapper>
      <CardInfo>
        <FlexContainer fb="75%" mw="75%">
          {cart.type === 'display' && (
            <>
              <DeviceCardName>Digital Canvas</DeviceCardName>
              <FrameColor>{`Size: ${cart.size}"`}</FrameColor>
            </>
          )}
          {cart.type === 'frame' && (
            <>
              <DeviceCardName>Frame</DeviceCardName>
              <FrameColor>{`Color: ${cart.color}`}</FrameColor>
              <FrameColor>{`Size: ${cart.size}"`}</FrameColor>
            </>
          )}
          {cart.type === 'Subscriptions' && (
            <>
              <DeviceCardName>{cart.name}</DeviceCardName>
              <FrameColor>{`Price: $${itemPrice / 12}/mo`}</FrameColor>
            </>
          )}
        </FlexContainer>
        <FlexContainer fb="25%" mw="25%" ta="end">
          <button type="button" onClick={handleRemoveItem}>
            Remove
          </button>
        </FlexContainer>
      </CardInfo>
      <DisplayInfoWrapper>
        <PriceWrapper fb="75%" mw="75%">
          <CurrencyFormat
            value={itemPrice?.toFixed(2)}
            displayType="text"
            thousandSeparator
            prefix="$"
            renderText={(value) => (
              <Price>
                {value} {cart.type === 'subscription' && <span>/yr</span>}
              </Price>
            )}
          />
        </PriceWrapper>
        <QuantityWrapper fb="25%" mw="25%">
          <MinusIcon onClick={handleClickQuantity('minus')} />
          <Quantity>{quantity}</Quantity>
          <PlusIcon onClick={handleClickQuantity('plus')}>+</PlusIcon>
        </QuantityWrapper>
      </DisplayInfoWrapper>
    </RootWrapper>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
  displayItems: PropTypes.array,
  // onClick: PropTypes.func,
};

Cart.defaultProps = {
  cart: {},
  displayItems: [],
  // onClick: () => {},
};
