import React from 'react';
import PropTypes from 'prop-types';
import { useNotifications } from 'reapop';

// Components
import { Button } from '../Button';
import { HeaderSplash } from '../HeaderSplash';

// Styled
import {
  ArtistName,
  VideoAspectRatioBoxHeader,
  SplashWrapper,
  ArtistPic,
  ArtistPicWrapper,
  ButtonWrapper,
  ArtistDescription,
} from './styled';

export const ArtistHeader = ({ artist, image }) => {
  const { notify } = useNotifications();
  const [more, setMore] = React.useState(false);
  function handleCopy() {
    notify({
      status: 'success',
      title: 'Copied to Clipboard',
      message: 'The share link for this artist was copied to your clipboard.',
    });
  }

  return (
    <>
      <SplashWrapper>
        <VideoAspectRatioBoxHeader>
          <img src={image} alt="header splash" />
        </VideoAspectRatioBoxHeader>
        <ArtistPicWrapper>
          <ArtistPic>
            <img src={artist?.data?.media?.images?.avatar} alt={artist?.data?.displayName} />
          </ArtistPic>
        </ArtistPicWrapper>
      </SplashWrapper>
      <HeaderSplash justifyContent="flex-start" padding="0px 24px 24px 24px" paddingLarge="0px 48px 48px 48px">
        <ButtonWrapper>
          <Button type="button" className="share" color="red" onClick={handleCopy}>
            Share
          </Button>
        </ButtonWrapper>
        <ArtistName>{artist?.data?.displayName}</ArtistName>
        {artist?.data?.bio && (
          <ArtistDescription more={more}>
            {more ? artist?.data?.bio : artist?.data?.bio?.slice(0, 200)}
            <button type="button" onClick={() => setMore(!more)}>
              {artist?.data?.bio.length > 200 && (more ? '...Show less' : '...Show more')}
            </button>
          </ArtistDescription>
        )}
      </HeaderSplash>
    </>
  );
};

ArtistHeader.propTypes = {
  artist: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};
