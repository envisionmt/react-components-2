import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Components
import MainButton from '../../Button/MainButton';

// Actions
import { openDeviceMenu } from '../../../store/deviceMenu/actions';

// Styled
import { Wrapper } from './styled';

export function ControlCard({ artwork }) {
  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(openDeviceMenu({ artworkId: artwork.id, playlistId: artwork.artist.playlistId }));
  }

  return (
    <Wrapper>
      <div>This artwork is included in your subscription.</div>
      <br />
      <MainButton title="Play Now" color="red" borderColor="#222222" onClick={handlePlay} />
    </Wrapper>
  );
}

ControlCard.propTypes = {
  artwork: PropTypes.object.isRequired,
};
