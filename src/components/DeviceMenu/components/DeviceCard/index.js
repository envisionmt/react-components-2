import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import IconDisplay from '../../../../assets/images/icons/icon-display.svg';
import Settings from '../../../../assets/images/icons/Settings.png';

const RootWrapper = styled.div`
  width: 100%;
  background: #333333;
  padding: 24px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: ${({ isBorder }) => (isBorder ? '2px solid #b4b4b4' : '2px solid #333333')};
`;

const DisplayInfoWrapper = styled.div`
  margin: 0 24px;
`;

const DeviceCardName = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 6px;
`;

const DeviceId = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
`;

const IconWrapper = styled.div``;

export function DeviceCard({ device, selectedDevices, onClick, handleUpdate }) {
  return (
    <RootWrapper isBorder={!!selectedDevices.includes(device.id)} onClick={onClick}>
      <IconWrapper>
        <img src={IconDisplay} alt="display icon" />
      </IconWrapper>
      <DisplayInfoWrapper>
        <DeviceCardName>{device.name}</DeviceCardName>
        <DeviceId>{device.uid}</DeviceId>
      </DisplayInfoWrapper>
      <IconWrapper onClick={handleUpdate}>
        <img src={Settings} alt="display settings" />
      </IconWrapper>
    </RootWrapper>
  );
}

DeviceCard.propTypes = {
  device: PropTypes.object,
  selectedDevices: PropTypes.array,
  onClick: PropTypes.func,
  handleUpdate: PropTypes.func,
};

DeviceCard.defaultProps = {
  device: {},
  selectedDevices: [],
  onClick: () => {},
  handleUpdate: () => {},
};
