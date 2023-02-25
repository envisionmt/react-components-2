import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MenuWrapper = styled.nav`
  padding: 0 10px;
  margin-bottom: 20px;
  border-bottom: 1px dashed #333;
  max-width: 228px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export function NavMenu({ children }) {
  return (
    <MenuWrapper>
      <ul>{children}</ul>
    </MenuWrapper>
  );
}

NavMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
