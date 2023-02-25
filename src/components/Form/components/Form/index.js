import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: block;
`;

const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Form.defaultProps = {
  children: null,
};

export default Form;
