import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavItemWrapper = styled.li`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: #2d2d2d;
    width: 15px;
    height: 2px;
    top: 18px;
    left: 27px;
  }
`;

const NavMenuLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: block;
  padding: 5px 15px 8px 55px;
  color: ${({ active }) => (active ? 'white' : 'rgb(179, 179, 179)')};

  &:hover {
    color: white;
  }

  span {
    display: inline-block;
    vertical-align: top;
  }
`;

export function SubnavItem({ to, label, activeFor }) {
  function getActive() {
    const pathList = [];
    if (!activeFor) pathList.push(to);
    if (activeFor) pathList.push(activeFor);

    let isActive = false;
    pathList.flat().forEach((path) => {
      if (path.includes('!') && location.pathname === path.split('!')[1]) {
        isActive = true;
        return;
      }
      if (location.pathname.includes(path)) isActive = true;
    });
    return isActive;
  }

  return (
    <NavItemWrapper>
      <NavMenuLink to={to} active={getActive()}>
        <span>{label}</span>
      </NavMenuLink>
    </NavItemWrapper>
  );
}

SubnavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  activeFor: PropTypes.arrayOf(PropTypes.string),
};

SubnavItem.defaultProps = {
  activeFor: null,
};
