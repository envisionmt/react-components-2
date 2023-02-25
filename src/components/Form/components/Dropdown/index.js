import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import colors from '../../../../util/colors';

const StyledDropdown = styled.select`
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  color: ${colors.white};
  height: 3em;
  padding: 1em;
  margin-bottom: 1.2em;
  width: 100%;
  ${space}
  font-size: 1em;
  font-weight: 300;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightDarker};
    text-transform: none;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondaryLighter};
    outline: none;
  }
`;

const Dropdown = ({ options, placeholder, ...props }) => {
  return (
    <StyledDropdown {...props}>
      {placeholder && (
        <option key="placeholder" value="">
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })).isRequired,
  placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
  placeholder: null,
};

export default Dropdown;
