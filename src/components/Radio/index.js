import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  cursor: pointer;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const RadioButton = (props) => {
  const { label, checked, onChange } = props;

  return (
    <Label>
      <Input type="radio" value="small" checked={checked} onChange={onChange} />
      {label}
    </Label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
};

export default RadioButton;
