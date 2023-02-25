import React from 'react';
import PropTypes from 'prop-types';

// Assets
import IconDisplay from '../../../assets/images/icons/icon-display.svg';
import IconPlus from '../../../assets/images/icons/icon-plus.svg';

// Styled
import { RootWrapper, DisplayIcon, PlusIcon, DeviceCardName, DeviceId } from './styled';

export function DeviceCard({ device, cardType, onClick }) {
  return (
    <RootWrapper cardType={cardType} onClick={onClick}>
      {cardType !== 'add' && (
        <>
          <DisplayIcon src={IconDisplay} />
          <DeviceCardName>{device?.name}</DeviceCardName>
          <DeviceId>{device?.uid}</DeviceId>
        </>
      )}

      {cardType === 'add' && (
        <>
          <PlusIcon src={IconPlus} />
          <DeviceCardName>Add New Display</DeviceCardName>
        </>
      )}
    </RootWrapper>
  );
}

DeviceCard.propTypes = {
  device: PropTypes.object,
  cardType: PropTypes.string,
  onClick: PropTypes.func,
};

DeviceCard.defaultProps = {
  device: null,
  cardType: 'item',
  onClick: () => {},
};
