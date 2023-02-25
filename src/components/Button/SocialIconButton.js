import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  height: ${({ height }) => height};
  background: ${({ bgColor }) => bgColor};
  border-radius: 12px;
  border: 1px solid ${({ bgColor }) => bgColor};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default function SocialIconButton(props) {
  const { height, bgColor, onClick, icon } = props;

  return (
    <Button height={height} bgColor={bgColor} onClick={onClick}>
      <Icon src={icon} />
    </Button>
  );
}

SocialIconButton.propTypes = {
  height: PropTypes.string,
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

SocialIconButton.defaultProps = {
  height: null,
  icon: null,
  bgColor: null,
  onClick: () => {},
};
