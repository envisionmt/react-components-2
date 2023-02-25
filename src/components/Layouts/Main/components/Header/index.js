import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { envisionClient } from '@envision/utils';
import { useUser } from '../../../../../hooks/data';

// Components
import Dropdown from './HeaderDropDown';
import OutsideAlerter from '../../../../OutsideAlerter';

// Actions
import {
  toggleCheckoutCartSideNavigation,
  closeCheckoutCartSideNavigation,
} from '../../../../../store/checkout/actions';
import { toggleMainMenu } from '../../../../../store/mainMenu/actions';
import { device } from '../../../../../configs/DeviceConfig';
import { toggleDeviceMenu, closeDeviceMenu } from '../../../../../store/deviceMenu/actions';
import { closeSigninMenu, toggleSigninMenu } from '../../../../../store/signinMenu/actions';

// Assets
import logo from '../../../../../assets/images/header/logo.png';
import logoMobile from '../../../../../assets/images/header/logo-mobile.svg';
import IconMenu from '../../../../../assets/images/icons/icon-menu.svg';
import Devices from '../../../../../assets/images/icons/Devices.png';
import ShoppingEmpty from '../../../../../assets/images/icons/shopping-empty.svg';
import ShoppingFilled from '../../../../../assets/images/icons/shopping-filled.svg';
import IconUserLoggedIn from '../../../../../assets/images/icons/Account_Filled.svg';
import IconUserLoggedOut from '../../../../../assets/images/icons/Account_Outlined.svg';

// Styled
import {
  Wrapper,
  NavStartWrapper,
  Logo,
  LogoMobile,
  NavEndWrapper,
  NavIconWrapper,
  NavStartMenuIcon,
  NavEndCartIconWrapper,
  NavEndCartIcon,
  LoginLink,
  NavEndUserIconWrapper,
  NavEndUserIcon,
} from './styled';

export function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const user = useUser();
  const checkoutCartData = useSelector((state) => state.checkout);
  const [isClickDropIcon, setIsClickDropIcon] = useState(false);

  const dropDownList = [
    { id: 'account-settings', title: 'Account Settings', hasSubMenu: false },
    { id: 'logout', title: 'Logout', hasSubMenu: false },
  ];

  const dropDownListLogout = [
    { id: 'login', title: 'Login', hasSubMenu: false, onClick: () => history.push('/login') },
    { id: 'signup', title: 'Sign Up', hasSubMenu: false, onClick: () => history.push('/signup') },
  ];

  const handleClickMenu = () => {
    dispatch(toggleMainMenu());
  };

  const handleClickCart = () => {
    dispatch(closeDeviceMenu());
    dispatch(closeSigninMenu());
    dispatch(toggleCheckoutCartSideNavigation());
  };

  const handleClickLogout = () => {
    setIsClickDropIcon(false);
    envisionClient.clearAuth();
    history.push('/');
    window.location.reload();
  };

  const handleClickUserIcon = () => {
    if (user?.data?.user) {
      setIsClickDropIcon(!isClickDropIcon);
    } else {
      handleClickLogout();
    }
  };

  const handleClickDeviceIcon = () => {
    dispatch(closeSigninMenu());
    dispatch(closeCheckoutCartSideNavigation());
    dispatch(toggleDeviceMenu());
  };

  const handleToggle = () => {
    dispatch(toggleSigninMenu());
  };

  return (
    <>
      <Wrapper>
        <NavStartWrapper>
          {!location.pathname.includes('/account') && (
            <NavIconWrapper>
              <NavStartMenuIcon src={IconMenu} onClick={handleClickMenu} />
            </NavIconWrapper>
          )}
          {user?.data?.user && <div className="fill" />}
          {checkoutCartData?.displayItems.length > 0 && <div className="fill" />}
        </NavStartWrapper>
        <Logo device={device} src={logo} onClick={() => history.push('/home')} />
        <LogoMobile device={device} src={logoMobile} onClick={() => history.push('/home')} />
        <NavEndWrapper>
          {user?.data?.user ? (
            <>
              {checkoutCartData?.displayItems.length > 0 && (
                <NavEndCartIconWrapper>
                  <NavEndCartIcon
                    src={checkoutCartData?.displayItems ? ShoppingFilled : ShoppingEmpty}
                    onClick={handleClickCart}
                  />
                </NavEndCartIconWrapper>
              )}
              <NavEndCartIconWrapper>
                <NavEndCartIcon src={Devices} onClick={handleClickDeviceIcon} />
              </NavEndCartIconWrapper>
              <OutsideAlerter onClickOutside={() => setIsClickDropIcon(false)}>
                <NavEndUserIconWrapper onClick={handleClickUserIcon}>
                  <NavEndUserIcon src={user?.data?.user ? IconUserLoggedIn : IconUserLoggedIn} />
                </NavEndUserIconWrapper>
                {isClickDropIcon && (
                  <Dropdown
                    listItems={dropDownList}
                    onLogout={handleClickLogout}
                    onClose={() => setIsClickDropIcon(false)}
                  />
                )}
              </OutsideAlerter>
            </>
          ) : (
            <>
              <LoginLink onClick={handleToggle}>
                <NavEndUserIconWrapper>
                  <NavEndUserIcon src={user?.data?.user ? IconUserLoggedIn : IconUserLoggedOut} />
                </NavEndUserIconWrapper>
                {isClickDropIcon && (
                  <Dropdown
                    listItems={dropDownListLogout}
                    onLogout={handleClickLogout}
                    onClose={() => setIsClickDropIcon(false)}
                  />
                )}
              </LoginLink>
            </>
          )}
        </NavEndWrapper>
      </Wrapper>
    </>
  );
}
