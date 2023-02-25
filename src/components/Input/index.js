import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Input = styled.input`
  width: 100%;
  height: ${({ height }) => height};
  background: #444444;
  border: 2px solid #444444;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  padding: 12px;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 2px solid #910048;
  }
`;

export default function MainInput(props) {
  const { type, height, placeholder, onChange, value, name } = props;

  return <Input type={type} height={height} value={value} name={name} placeholder={placeholder} onChange={onChange} />;
}

MainInput.propTypes = {
  type: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

MainInput.defaultProps = {
  type: null,
  height: null,
  placeholder: null,
  value: null,
  name: null,
  onChange: () => {},
};
