import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import { space } from 'styled-system';

const baseStyles = ({ color, colorHover, bgColor, bgColorHover, border, borderRadius, theme }) =>
  css`
    background: ${bgColor || theme.colors.primary};
    border: ${border || 'none'};
    border-radius: ${borderRadius || '0px'};
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    text-transform: uppercase;
    color: ${color || theme.colors.white};
    outline: none;

    &:hover {
      background: ${bgColorHover || theme.colors.primaryDarker};
      color: ${colorHover || theme.colors.white};
    }
  `;

const StyledButton = styled('button', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['color', 'colorHover', 'bgColor', 'bgColorHover', 'border', 'borderRadius'].includes(prop),
})`
  ${baseStyles}
  ${space}
`;

const IconButton = ({ icon: Icon, size, ...props }) => {
  return (
    <StyledButton {...props}>
      <Icon width={size} />
    </StyledButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.string,
};

IconButton.defaultProps = {
  size: '20px',
};

export default IconButton;
