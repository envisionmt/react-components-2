import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const RootWrapper = styled.div``;

const SwitchButton = styled.button`
  background-color: ${({ bg }) => bg};
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  width: 96px;
  height: 36px;
  position: relative;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background-color: ${({ bg }) => bg};
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const ButtonText = styled.span`
  background-color: white;
  border-radius: 12px;
  width: 36px;
  height: 36px;
  top: 0;
  left: ${({ left }) => left};
  position: absolute;
  transition: left ease 0.5s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

export default function SwitchToggleButton(props) {
  const { onState, onClick } = props;

  return (
    <RootWrapper>
      <SwitchButton type="button" bg={onState ? '#910048' : '#444444'} onClick={onClick}>
        <ButtonText left={onState ? '60px' : '0px'} />
      </SwitchButton>
    </RootWrapper>
  );
}

SwitchToggleButton.propTypes = {
  onState: PropTypes.bool,
  onClick: PropTypes.func,
};

SwitchToggleButton.defaultProps = {
  onState: false,
  onClick: () => {},
};
