import React from 'react';

// Components
import { HeaderSplash } from '../../components/HeaderSplash';
import { DeviceGrid } from '../../components/Devices/Grid';
import { Loader } from '../../components/Loader';

// Hooks
import { useAllDevices } from '../../hooks/data';

// Styled
import { Wrapper, MainWrapper, HeadTopic, DeviceItemsWrapper } from './styles';

export function Devices() {
  const devices = useAllDevices({ limit: 100 });

  return (
    <Wrapper>
      <MainWrapper>
        <HeaderSplash>
          <HeadTopic>Displays</HeadTopic>
        </HeaderSplash>
        <DeviceItemsWrapper>
          {devices.isLoading && <Loader />}
          {!devices.isLoading && <DeviceGrid devices={devices.data.devices} showAddNew />}
        </DeviceItemsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
