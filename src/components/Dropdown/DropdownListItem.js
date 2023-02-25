import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import IconRight from '../../assets/images/dropdown/icon-right.svg';

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 12px;
  transition: all 0.3s ease-out;
  border-bottom: 1px solid #444444;
  background: #333333;
  cursor: pointer;

  &:hover {
    background: #444444;
  }
`;

const DropDownSubMenu = styled.li`
  position: relative;
`;

const DropDownSubMenuItem = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 12px;
  transition: all 0.3s ease-out;
  background: #333333;
  border-bottom: 1px solid #444444;
  cursor: pointer;

  &:hover {
    background: #444444;
  }
`;

const SubMenuContainer = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  list-style: none;
  padding: 0;
  top: 0;
  left: ${({ left }) => left};
  margin-top: -1px;
  position: absolute;
  z-index: 1000;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.45);
`;

const MenuItemTitle = styled.div`
  display: flex;
  align-items: center;
`;

const ItemIcon = styled.img`
  width: 20px;
  margin-right: 12px;
`;

const ItemTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const MenuItemRightIcon = styled.div``;

const ItemRightIcon = styled.img`
  width: 5.6px;
  height: 10.5px;
`;

const DropDownListItem = ({
  item,
  itemIndex,
  onClose,
  onClickShare,
  onClickShareSubMenu,
  onClickAddToCollection,
  onRemoveClick,
  onLogout,
  onClick,
}) => {
  const history = useHistory();
  const [isShownSubMenu, setIsShownSubMenu] = useState(false);

  const handleClickMenuItem = (listItem) => () => {
    if (listItem.id === 'share') {
      onClickShare();
    }
    if (listItem.id === 'account-settings') {
      history.push(`/account/overview`);
    }
    if (listItem.id === 'delete') {
      onRemoveClick();
    }
    if (listItem.id === 'logout') {
      onLogout();
    }
    if (listItem.id === 'login') {
      onClick();
    }
    if (listItem.id === 'signup') {
      onClick();
    }
    onClose();
  };

  const handleClickSubMenu = (menuItem, subMenuItem) => {
    if (menuItem.id === 'share') {
      onClickShareSubMenu(subMenuItem);
    } else if (menuItem.id === 'addToCollection') {
      onClickAddToCollection(subMenuItem);
    }
  };

  return (
    <>
      {!item.hasSubMenu ? (
        <MenuItem key={item.id} onClick={handleClickMenuItem(item)}>
          <MenuItemTitle>
            {item.icon && <ItemIcon src={item.icon} />}
            <ItemTitle>{item.title}</ItemTitle>
          </MenuItemTitle>
        </MenuItem>
      ) : (
        <DropDownSubMenu onMouseEnter={() => setIsShownSubMenu(true)} onMouseLeave={() => setIsShownSubMenu(false)}>
          <DropDownSubMenuItem>
            <MenuItemTitle>
              {item.icon && <ItemIcon src={item.icon} />}
              <ItemTitle>{item.title}</ItemTitle>
            </MenuItemTitle>
            <MenuItemRightIcon>
              <ItemRightIcon src={IconRight} />
            </MenuItemRightIcon>
          </DropDownSubMenuItem>
          {isShownSubMenu && (
            <SubMenuContainer left={itemIndex % 3 === 2 ? '-96%' : '100%'}>
              {item?.subMenu.map((subItem) => (
                <MenuItem key={subItem.id} onClick={() => handleClickSubMenu(item, subItem)}>
                  <MenuItemTitle>
                    {subItem.icon && <ItemIcon src={subItem.icon} />}
                    <ItemTitle>{subItem.title}</ItemTitle>
                  </MenuItemTitle>
                </MenuItem>
              ))}
            </SubMenuContainer>
          )}
        </DropDownSubMenu>
      )}
    </>
  );
};

DropDownListItem.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  onClickShare: PropTypes.func,
  onClickShareSubMenu: PropTypes.func,
  onClickAddToCollection: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onLogout: PropTypes.func,
};

DropDownListItem.defaultProps = {
  item: {},
  itemIndex: 0,
  onClick: () => {},
  onClose: () => {},
  onClickShare: () => {},
  onClickShareSubMenu: () => {},
  onClickAddToCollection: () => {},
  onRemoveClick: () => {},
  onLogout: () => {},
};

export default DropDownListItem;
