import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux
import { closeMainMenu } from '../../../../../../../store/mainMenu/actions';

// Styled
import { NavItemWrapper, NavMenuLink, NavMenuToggle, SubmenuWrapper, ExpandIcon, NavOuterLink } from './styled';

/**
 * How active states work.
 * By default the nav item will be marked active if the path passed in the 'to' prop is contained within the pathname.
 * This behavior can be overridden using the 'activeFor' prop. You can supply an array of paths to match against.
 * Matching is inclusive, meaning that `/artists' will also match with any subpaths, such as '/artists/:artistId'.
 * Prepending a path with '!' will do an exact match, meaning that '!/artists' will only match '/artists', and not subpaths.
 */
export function NavItem({ children, to, icon: Icon, label, activeFor, href }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  let WrapperElement;
  if (children) {
    WrapperElement = NavMenuToggle;
  } else if (href) {
    WrapperElement = NavOuterLink;
  } else {
    WrapperElement = NavMenuLink;
  }

  const getActive = () => {
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
  };

  useEffect(() => {
    setExpanded(getActive());
  }, [getActive()]);

  const handleClick = () => {
    setExpanded(!expanded);
    if (window.innerWidth < 1024) {
      dispatch(closeMainMenu());
    }
  };

  return (
    <NavItemWrapper>
      <WrapperElement
        to={to}
        active={getActive()}
        expanded={expanded}
        onClick={handleClick}
        href={href}
        target={href && '_blank'}
      >
        {!Icon.$$typeof ? <img src={Icon} alt="icon" /> : <Icon size={25} />}
        <span>{label}</span>
        {children && <ExpandIcon size={10} expanded={expanded} />}
      </WrapperElement>
      {children && <SubmenuWrapper expanded={expanded}>{children}</SubmenuWrapper>}
    </NavItemWrapper>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  activeFor: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.arrayOf(PropTypes.string),
};

NavItem.defaultProps = {
  to: null,
  children: null,
  activeFor: null,
  href: null,
};
