import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { Wrapper, StyledButton } from './styled';

export function MoreButton({ children, onClick }) {
  return (
    <>
      <Wrapper>
        <StyledButton onClick={onClick}>{children}</StyledButton>
      </Wrapper>
    </>
  );
}

MoreButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  onClick: PropTypes.func.isRequired,
};
