import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLabel = styled.label`
  margin-bottom: 0.5em;
  display: inline-block;
`;

const Label = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Label.defaultProps = {
  children: null,
};

export default Label;
