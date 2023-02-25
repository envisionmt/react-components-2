import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';

const baseStyles = ({ theme }) =>
  css`
    background: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 5px;
    color: ${theme.colors.white};
    padding: 1em;
    margin-bottom: 1.2em;
    width: 100%;
    font-size: 1em;
    font-weight: 300;

    ::placeholder {
      color: ${theme.colors.lightDarker};
      text-transform: none;
    }

    &:focus {
      border: 1px solid ${theme.colors.secondaryLighter};
      outline: none;
    }
  `;

const inlineStyles = () =>
  css`
    display: inline-block;
  `;

const StyledTextarea = styled('textarea', {
  shouldForwardProp: (prop) => isPropValid(prop) && !['inline'].includes(prop),
})`
  ${baseStyles}
  ${({ inline }) => inline && inlineStyles}
`;

const TextArea = ({ type, ...props }) => {
  return <StyledTextarea type={type} {...props} />;
};

TextArea.propTypes = {
  type: PropTypes.string,
};

TextArea.defaultProps = {
  type: 'text',
};

export default TextArea;
