import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Components
import { DeviceCard } from '../Card';

// Actions
import { openModal } from '../../../store/app/actions';

// Styled
import { Wrapper, FlexContainer, GridItem } from './styled';

export function DeviceGrid({ devices, showAddNew }) {
  const dispatch = useDispatch();

  function handleCreate() {
    dispatch(openModal({ modal: 'DEVICE', params: {} }));
  }

  function handleUpdate(id) {
    dispatch(openModal({ modal: 'DEVICE', params: { id } }));
  }

  return (
    <Wrapper>
      <FlexContainer>
        {showAddNew && (
          <GridItem>
            <DeviceCard cardType="add" onClick={handleCreate} />
          </GridItem>
        )}
        {devices?.map((device) => (
          <GridItem key={device.id}>
            <DeviceCard device={device} onClick={() => handleUpdate(device.id)} />
          </GridItem>
        ))}
        {!devices.length > 0 && !showAddNew && <span>No devices...</span>}
      </FlexContainer>
    </Wrapper>
  );
}

DeviceGrid.propTypes = {
  devices: PropTypes.array.isRequired,
  showAddNew: PropTypes.bool,
};

DeviceGrid.defaultProps = {
  showAddNew: false,
};
