import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Select = styled.select`
  width: 100%;
  height: 48px;
  background: #444444;
  border: 2px solid #444444;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 10px;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 2px solid #910048;
  }
`;

const SelectOption = styled.option`
  border: 1px solid #444444;
`;

export default function SelectComponent(props) {
  const { value, name, onChange, options, disabledState } = props;

  return (
    <>
      {disabledState ? (
        <Select value={value} name={name} onChange={onChange} disabled>
          <SelectOption value="owner">Owner</SelectOption>
        </Select>
      ) : (
        <Select value={value} name={name} onChange={onChange}>
          {options.map((option) => (
            <SelectOption value={option.value} key={option.value}>
              {option.label}
            </SelectOption>
          ))}
        </Select>
      )}
    </>
  );
}

SelectComponent.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  disabledState: PropTypes.bool,
};

SelectComponent.defaultProps = {
  value: '',
  name: '',
  onChange: () => {},
  options: [],
  disabledState: false,
};
