import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

import MainButton from '../../../Button/MainButton';

import IconCart from '../../../../assets/images/icons/icon-cart.svg';
import logo from '../../../../assets/images/header/logo.png';

import { openCheckoutCartSideNavigation } from '../../../../store/checkout/actions';

const RootWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 96px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
`;

const NavStartWrapper = styled.div``;

const Logo = styled.img`
  width: 212px;
  height: 26px;
  margin-left: 20px;
  cursor: pointer;
`;

const NavEndWrapper = styled.div``;

const NavItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  float: left;
  margin-right: 20px;
  cursor: pointer;
`;

const CartIcon = styled.img`
  width: 22px;
  height: auto;
`;

const CheckoutHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkoutCartData = useSelector((state) => state.checkout.checkoutCartData);

  const handleClickNavItem = (menu) => () => {
    history.push(`/checkout/${menu}`);
  };

  const handleClickCart = () => {
    dispatch(
      openCheckoutCartSideNavigation({
        params: {
          isOpen: true,
          displayItems: checkoutCartData?.params?.displayItems,
        },
      })
    );
  };

  return (
    <RootWrapper>
      <NavStartWrapper>
        <Logo src={logo} onClick={() => history.push(`/`)} />
      </NavStartWrapper>
      <NavEndWrapper>
        <NavItemList>
          <NavItem onClick={handleClickNavItem('digitalCanvas')}>Digital Canvas</NavItem>
          <NavItem onClick={handleClickNavItem('forIndustry')}>For Industry</NavItem>
          <NavItem onClick={handleClickCart}>
            <CartIcon src={IconCart} alt="icon-cart" />
          </NavItem>
          <NavItem>
            <MainButton color="red" borderColor="#111111" title="Connect Wallet" />
          </NavItem>
        </NavItemList>
      </NavEndWrapper>
    </RootWrapper>
  );
};

export default CheckoutHeader;
