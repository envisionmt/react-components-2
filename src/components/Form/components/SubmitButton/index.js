import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import PropTypes from 'prop-types';

import { Loader } from '../../../Loader';

const baseStyles = ({ bgColor, bgHoverColor, theme }) =>
  css`
    background: ${bgColor || theme.colors.primary};
    border: 1px solid ${bgColor || theme.colors.primary};
    border-radius: 2px;
    cursor: pointer;
    font-weight: 300;
    font-size: 1.1em;
    color: ${theme.colors.white};
    text-decoration: none;
    text-align: center;
    margin-bottom: 1.2em;
    padding: 1em 1.8em;
    transition: background 0.2s ease, border-color 0.2s ease;
    display: inline-block;
    padding: 0.5em 1.8em;

    &:hover {
      background: ${bgHoverColor || theme.colors.primaryLighter};
    }
  `;

const blockStyles = css`
  display: block;
  width: 100%;
  padding: 1em 1.8em;
`;

const roundStyles = css`
  border-radius: 100px;
`;

const ghostStyles = ({ bgColor, theme }) =>
  css`
    background: none;
    border: 1px solid ${bgColor || theme.colors.whiteFaded};

    &:hover {
      background: ${bgColor || theme.colors.white};
      border: 1px solid ${bgColor || theme.colors.white};
      color: ${theme.colors.black};
    }
  `;

const outlineStyles = ({ theme }) =>
  css`
    border: 2px solid ${theme.colors.white};
  `;

const rightStyles = () =>
  css`
    float: right;
  `;

const smallStyles = () =>
  css`
    padding: 0.5em 1em;
  `;

const disabledStyles = ({ theme }) => {
  return css`
    background: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondaryDarker};
    color: ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.secondaryDarker};
      color: ${theme.colors.primary};
      cursor: not-allowed;
    }
  `;
};

const StyledButton = styled('button', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['block', 'round', 'outline', 'ghost', 'right', 'small'].includes(prop),
})`
  ${baseStyles}
  ${({ block }) => block && blockStyles}
  ${({ round }) => round && roundStyles}
  ${({ outline }) => outline && outlineStyles}
  ${({ ghost }) => ghost && ghostStyles}
  ${({ right }) => right && rightStyles}
  ${({ small }) => small && smallStyles}
  ${({ disabled }) => disabled && disabledStyles}
`;

const SubmitButton = ({ children, submitting, disabled, ...props }) => {
  return (
    <StyledButton type="submit" disabled={submitting || disabled} {...props}>
      {submitting && <Loader size="28px" type="ZEN_CIRCLE" color="white" />}
      {!submitting && children}
    </StyledButton>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  submitting: PropTypes.bool,
  disabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
  children: null,
  submitting: false,
  disabled: false,
};

export default SubmitButton;
