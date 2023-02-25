import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  background: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 2px;
`;

const AlertText = styled.span`
  color: ${({ textColor }) => textColor};
  padding: 5px;
  font-weight: 600;
  font-size: 11px;
`;

export default function AlertComponent(props) {
  const { width, bgColor, borderColor, icon, textColor, text } = props;

  return (
    <Alert width={width} bgColor={bgColor} borderColor={borderColor}>
      <Icon src={icon} />
      <AlertText textColor={textColor}>{text}</AlertText>
    </Alert>
  );
}

AlertComponent.propTypes = {
  width: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  icon: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string,
};

AlertComponent.defaultProps = {
  width: null,
  bgColor: null,
  borderColor: null,
  icon: null,
  textColor: '#111111',
  text: null,
};
