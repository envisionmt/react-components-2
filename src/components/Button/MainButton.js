import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  padding: 12px 24px 12px 24px;
  background: ${({ color }) => (color === 'red' ? '#910048' : '#333333')};
  border-radius: 12px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.025em;
  border: 4px solid ${({ color }) => (color === 'red' ? '#910048' : '#333333')};
  &:hover {
    border: 4px solid ${({ color }) => (color === 'red' ? '#ba567a' : '#444444')};
  }

  &:active {
    border: 4px solid ${({ color }) => (color === 'red' ? ' #33001a' : '#171616')};
  }

  &:focus {
    outline: none !important;
    border: 4px solid ${({ color }) => (color === 'red' ? ' #33001a' : '#171616')};
  }
`;

export default function MainButton(props) {
  const { type, title, color, borderColor, onClick, ...rest } = props;

  return (
    <Button type={type} color={color} borderColor={borderColor} onClick={onClick} {...rest}>
      {title}
    </Button>
  );
}

MainButton.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
};

MainButton.defaultProps = {
  type: 'button',
  title: null,
  color: null,
  borderColor: null,
  onClick: () => {},
};
