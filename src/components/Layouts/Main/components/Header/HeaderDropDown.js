import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import DropDownListItem from '../../../../Dropdown/DropdownListItem';

const Dropdown = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 57px;
  right: 30px;
  overflow: hidden;
  box-shadow: 2px 0px 6px rgb(0 0 0 / 45%);
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
`;

const HeaderDropdown = ({ listItems = [], onClose, onLogout }) => {
  return (
    <Dropdown>
      <MenuBaseContainer>
        {listItems.map((item) => (
          <DropDownListItem key={item.id} item={item} onClick={item.onClick} onClose={onClose} onLogout={onLogout} />
        ))}
      </MenuBaseContainer>
    </Dropdown>
  );
};

HeaderDropdown.propTypes = {
  listItems: PropTypes.array,
  onClose: PropTypes.func,
  onLogout: PropTypes.func,
};

HeaderDropdown.defaultProps = {
  listItems: [],
  onClose: () => {},
  onLogout: () => {},
};

export default HeaderDropdown;
