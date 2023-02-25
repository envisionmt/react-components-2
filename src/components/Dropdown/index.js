import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import DropDownListItem from './DropdownListItem';

const Dropdown = styled.div`
  position: absolute;
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  overflow: hidden;
  z-index: 9999;
`;

const MenuBaseContainer = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.45);
  float: ${({ float }) => float};
`;

const CustomDropdown = ({
  visible,
  listItems = [],
  itemIndex,
  marginTop,
  marginLeft,
  onClose,
  onClickShare,
  onClickShareSubMenu,
  onClickAddToCollection,
  onRemoveClick,
}) => {
  if (!visible) return null;

  return (
    <Dropdown marginTop={marginTop} marginLeft={marginLeft}>
      <MenuBaseContainer float={itemIndex % 3 === 2 ? 'right' : 'left'}>
        {listItems.map((item) => (
          <DropDownListItem
            key={item.id}
            item={item}
            itemIndex={itemIndex}
            onClose={onClose}
            onClickShare={onClickShare}
            onClickShareSubMenu={onClickShareSubMenu}
            onClickAddToCollection={onClickAddToCollection}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </MenuBaseContainer>
    </Dropdown>
  );
};

CustomDropdown.propTypes = {
  listItems: PropTypes.array,
  itemIndex: PropTypes.number,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onClickShare: PropTypes.func,
  onClickShareSubMenu: PropTypes.func,
  onClickAddToCollection: PropTypes.func,
  onRemoveClick: PropTypes.func,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
};

CustomDropdown.defaultProps = {
  listItems: [],
  itemIndex: 0,
  visible: false,
  onClose: () => {},
  onClickShare: () => {},
  onClickShareSubMenu: () => {},
  onClickAddToCollection: () => {},
  onRemoveClick: () => {},
  marginTop: null,
  marginLeft: null,
};

export default CustomDropdown;
