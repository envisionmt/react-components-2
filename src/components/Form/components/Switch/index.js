import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Close, Checkmark } from '@emotion-icons/ionicons-sharp';

const Wrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.baseLighter};
  width: 90px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 2em;
`;

const Toggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${({ theme, value }) => (value ? theme.colors.primary : theme.colors.baseLighter)};
  margin-top: 2px;
  margin-left: ${({ value }) => (value ? '40px' : '2px')};
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input`
  display: none;
`;

const Switch = ({ name, defaultValue, onChange, ...props }) => {
  const checkbox = useRef(null);
  const [value, setValue] = useState(defaultValue);
  const handleClick = useCallback(() => {
    checkbox.current.click();
  });

  const handleChange = useCallback(() => {
    onChange({ target: { name, value: !value } });
    setValue(!value);
  });

  return (
    <Wrapper onClick={handleClick}>
      <Toggle value={value}>{value ? <Checkmark /> : <Close />}</Toggle>
      <Checkbox type="checkbox" ref={checkbox} name={name} checked={value} onChange={handleChange} {...props} />
    </Wrapper>
  );
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  defaultValue: false,
  onChange: () => {},
};

export default Switch;
