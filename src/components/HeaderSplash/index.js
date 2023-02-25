import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

export function HeaderSplash({ children, color, padding, paddingLarge, height, justifyContent }) {
  return (
    <Wrapper
      color={color}
      padding={padding}
      height={height}
      paddingLarge={paddingLarge}
      justifyContent={justifyContent}
    >
      {children}
    </Wrapper>
  );
}

HeaderSplash.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
  paddingLarge: PropTypes.string,
  justifyContent: PropTypes.string,
  height: PropTypes.string,
};

HeaderSplash.defaultProps = {
  color: null,
  padding: null,
  paddingLarge: null,
  justifyContent: null,
  height: null,
};
