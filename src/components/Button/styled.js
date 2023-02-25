import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import { space } from 'styled-system';

const baseStyles = ({ color, disabled }) =>
  css`
    width: 100%;
    padding: 12px 24px 12px 24px;
    background: ${color === 'red' ? '#910048' : '#333333'};
    border-radius: 12px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    cursor: ${disabled ? 'auto' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.025em;
    border: 4px solid ${color === 'red' ? '#910048' : '#333333'};
    &:hover {
      border: 4px solid ${color === 'red' ? '#ba567a' : '#444444'};
    }

    &:active {
      border: 4px solid ${color === 'red' ? ' #33001a' : '#171616'};
    }

    &:focus {
      outline: none !important;
      border: 4px solid ${color === 'red' ? ' #33001a' : '#171616'};
    }
  `;

const primaryStyles = ({ bgColor, theme }) => css`
  background: ${bgColor || theme.colors.accent};
  border: 4px solid ${bgColor || theme.colors.accent};
  color: ${theme.colors.white};

  &:hover {
    border: 4px solid ${bgColor || theme.colors.accentAlt};
  }
`;

const secondaryStyles = ({ bgColor, theme }) => css`
  background: ${bgColor || theme.colors.base3};
  border: 4px solid ${bgColor || theme.colors.base3};
  color: ${theme.colors.white};

  &:hover {
    border: 4px solid ${bgColor || theme.colors.base4};
  }
`;

const ghostStyles = ({ bgColor, theme }) =>
  css`
    background: none;
    border: 1px solid ${bgColor || theme.colors.white};
    box-shadow: none;

    &:hover {
      background: ${bgColor || theme.colors.white};
      border: 1px solid ${bgColor || theme.colors.white};
      color: ${theme.colors.base1};
    }
  `;

const disabledStyles = ({ theme }) => {
  return css`
    background: ${theme.colors.base4};
    border: 1px solid ${theme.colors.base4};
    color: ${theme.colors.base6};

    &:hover {
      background: ${theme.colors.base4};
      border: 1px solid ${theme.colors.base4};
      color: ${theme.colors.base6};
      cursor: not-allowed;
    }
  `;
};

const blockStyles = css`
  display: block;
  width: 100%;
`;

const roundStyles = css`
  border-radius: 100px;
`;

const smallStyles = () =>
  css`
    height: 32px;
    padding: 0px 12px;
    border-radius: 32px;
  `;

export const StyledButton = styled('button', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) &&
    !['primary', 'secondary', 'block', 'round', 'outline', 'ghost', 'right', 'small', 'pending'].includes(prop),
})`
  ${baseStyles}
  ${({ primary }) => primary && primaryStyles}
  ${({ secondary }) => secondary && secondaryStyles}
  ${({ ghost }) => ghost && ghostStyles}
  ${({ block }) => block && blockStyles}
  ${({ round }) => round && roundStyles}
  ${({ small }) => small && smallStyles}
  ${({ disabled }) => disabled && disabledStyles}
  ${space}
`;
