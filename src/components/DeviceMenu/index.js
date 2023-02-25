import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { DeviceCard } from './components/DeviceCard';
import MainButton from '../Button/MainButton';
import { Loader } from '../Loader';

// Hooks
import { useAllDevices, useUser } from '../../hooks/data';
import { usePlayOnDevices } from '../../hooks/mutations';
import { useClickOutside } from '../../hooks/useClickOutside';

// Actions
import { closeDeviceMenu } from '../../store/deviceMenu/actions';
import { openModal } from '../../store/app/actions';

// Assets
import Back from '../../assets/images/icons/Back.png';
import Add from '../../assets/images/icons/Add.png';

// Styled
import {
  RootWrapper,
  TitleWrapper,
  Title,
  CloseIcon,
  DeviceListWrapper,
  DeviceCardWrapper,
  ButtonWrapper,
  DevicePairWrapper,
  IconWrapper,
  Header,
  Body,
  TextContainer,
  Wrapper,
} from './styled';

export function DeviceMenu() {
  const dispatch = useDispatch();
  const user = useUser();
  const devices = useAllDevices({ limit: 100 });
  const playOnDevicesMutation = usePlayOnDevices();
  const deviceMenu = useSelector((state) => state.deviceMenu);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const ref = React.useRef(null);
  const [isActive] = useClickOutside(ref, false, deviceMenu.menuOpen);

  useEffect(() => {
    if (isActive) {
      dispatch(closeDeviceMenu());
    }
  }, [isActive]);

  const handleClose = () => {
    dispatch(closeDeviceMenu());
  };

  const handleDeviceClick = (deviceId) => {
    if (selectedDevices.includes(deviceId)) {
      setSelectedDevices((prev) => prev.filter((d) => d !== deviceId));
    } else {
      setSelectedDevices((prev) => [...prev, deviceId]);
    }
  };

  const handlePlayClick = async () => {
    await playOnDevicesMutation.mutateAsync({
      id: user.data?.user.id,
      params: { ...deviceMenu.contentToPlay, deviceIds: selectedDevices },
    });
  };

  const handleNewDevice = async () => {
    dispatch(openModal({ modal: 'DEVICE', params: {} }));
  };

  function handleUpdate(id) {
    dispatch(openModal({ modal: 'DEVICE', params: { id } }));
  }

  return (
    <Wrapper touched={deviceMenu.touched} open={deviceMenu.menuOpen}>
      <RootWrapper touched={deviceMenu.touched} open={deviceMenu.menuOpen} ref={ref}>
        {devices.isLoading && <Loader />}
        {!devices.isLoading && (
          <>
            <TitleWrapper>
              <Title>Choose display</Title>
              <CloseIcon src={Back} onClick={handleClose} />
            </TitleWrapper>
            <DeviceListWrapper>
              <DevicePairWrapper onClick={handleNewDevice}>
                <IconWrapper>
                  <img src={Add} alt="pair display" />
                </IconWrapper>
                <TextContainer>
                  <Header>Pair New Display</Header>
                  <Body>
                    Exhibit your art collection or NFTs on another Smart Television or Digital Canvas by pairing a
                    display
                  </Body>
                </TextContainer>
              </DevicePairWrapper>
              {devices.data?.devices.map((device) => (
                <DeviceCardWrapper key={device.id}>
                  <DeviceCard
                    device={device}
                    selectedDevices={selectedDevices}
                    onClick={() => handleDeviceClick(device.id)}
                    handleUpdate={() => handleUpdate(device.id)}
                  />
                </DeviceCardWrapper>
              ))}
            </DeviceListWrapper>
            <ButtonWrapper>
              <MainButton type="button" color="red" borderColor="#333333" title="Play" onClick={handlePlayClick} />
            </ButtonWrapper>
          </>
        )}
      </RootWrapper>
    </Wrapper>
  );
}
