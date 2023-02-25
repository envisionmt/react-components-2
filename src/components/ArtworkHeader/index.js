import React from 'react';
import PropTypes from 'prop-types';
import { VideoPlayer } from '@envision/player';
import { useNotifications } from 'reapop';

// Components
import { HeaderSplash } from '../HeaderSplash';
import { Button } from '../Button';

// Assets
import more from '../../assets/images/icons/icon-more.svg';
import mute from '../../assets/images/icons/muted.png';

// Styled
import { Wrapper, ArtworkContainer, AspectRatioBox, Frame, ActionButtonContainer } from './styled';

export function ArtworkHeader({ orientation, artwork, menu }) {
  const { notify } = useNotifications();
  const [muted, setMuted] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(
      `https://envision.com/artwork/${artwork.data.slug ? artwork.data.slug : artwork.data.id}`
    );
    notify({
      status: 'success',
      title: 'Copied to Clipboard',
      message: 'The share link for this artwork was copied to your clipboard.',
    });
  }

  return (
    <Wrapper>
      <HeaderSplash height="100%" padding="60px 24px 24px 24px" paddingLarge="60px 48px 36px 48px">
        <ArtworkContainer>
          <AspectRatioBox muted={muted}>
            <Frame
              orientation={orientation}
              menu={menu?.menuOpen ? 'max-width: calc(100vw - 228px);' : 'max-width: 100vw;'}
              rotate={artwork?.data?.orientation === 'portrait'}
            >
              <VideoPlayer
                videoUrl={artwork.data?.media.video.hls}
                posterUrl={artwork.data?.media.image.low.landscape}
                artistName=""
                initialize
                rotate={artwork?.data?.orientation === 'portrait'}
                autoplay
                muted={muted}
                showLogo={false}
                showLoading={false}
              />
            </Frame>
            <button type="button" onClick={() => setMuted(!muted)}>
              <img src={mute} alt="mute button" />
            </button>
          </AspectRatioBox>
        </ArtworkContainer>
        <ActionButtonContainer>
          <Button type="button" className="more">
            <img src={more} alt="more" />
          </Button>
          <Button type="button" className="share" onClick={handleCopy}>
            Share
          </Button>
        </ActionButtonContainer>
      </HeaderSplash>
    </Wrapper>
  );
}

ArtworkHeader.propTypes = {
  artwork: PropTypes.object.isRequired,
  orientation: PropTypes.string.isRequired,
  menu: PropTypes.bool.isRequired,
};
