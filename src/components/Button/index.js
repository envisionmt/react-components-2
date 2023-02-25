import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import { Loader } from '../Loader';

// Styled
import { StyledButton } from './styled';

export function Button({ to, href, children, pending, ...props }) {
  if (to) {
    return (
      <StyledButton to={to} as={Link} pending={pending} {...props}>
        {pending && <Loader size="16px" />}
        {!pending && children}
      </StyledButton>
    );
  }

  if (href) {
    return (
      <StyledButton href={href} as="a" pending={pending} {...props}>
        {pending && <Loader size="16px" />}
        {!pending && children}
      </StyledButton>
    );
  }

  return (
    <StyledButton type="button" as="button" pending={pending} {...props}>
      {pending && <Loader size="16px" />}
      {!pending && children}
    </StyledButton>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  pending: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Button.defaultProps = {
  to: null,
  href: null,
  pending: false,
  children: null,
};
