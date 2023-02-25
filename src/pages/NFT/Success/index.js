import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';
import { VideoPlayer } from '@envision/player';

// Components
import { Loader } from '../../../components/Loader';
import MainButton from '../../../components/Button/MainButton';

// Hooks
import { useSingleArtwork, useUser } from '../../../hooks/data';

// Styled
import {
  Wrapper,
  ConfettiCanvas,
  ContentWrapper,
  MainPanel,
  ArtDetails,
  PreviewWrapper,
  ArtworkName,
  ArtistWrapper,
  ArtistImage,
  ArtistName,
  CallToAction,
  CallToActionInner,
  Greeting,
  Description,
} from './styled';

export function NFTSuccessPage() {
  const { id } = useParams();
  const history = useHistory();
  const user = useUser();
  const artwork = useSingleArtwork(id);

  // Setup confetti
  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas', max: 160 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    return () => confetti.clear();
  }, []);

  const artist = artwork.data?.artist;

  return (
    <Wrapper>
      {artwork.isLoading && <Loader />}
      {!artwork.isLoading && (
        <ContentWrapper>
          <MainPanel>
            <ArtDetails>
              <PreviewWrapper>
                <VideoPlayer
                  videoUrl={artwork.data?.media.video.dash}
                  posterUrl={artwork.data?.media.image.low.landscape}
                  artistName=""
                  rotate={artwork.data?.orientation === 'portrait'}
                  initialize
                  muted
                  showLogo={false}
                  showLoading={false}
                />
              </PreviewWrapper>
              <ArtworkName>{artwork.data?.name}</ArtworkName>
              <ArtistWrapper>
                <ArtistImage src={artist.media.images.avatar} />
                <ArtistName to={`/artists/${artist.slug || artist.id}`}>{artist.displayName}</ArtistName>
              </ArtistWrapper>
            </ArtDetails>
            <CallToAction>
              <CallToActionInner>
                <Greeting>Congratulations</Greeting>
                <Description>
                  You have purchased an NFT of this artwork. You can access this artwork in your My Purchases
                  collection, and it can be displayed on any envision supported device.
                </Description>
                <MainButton
                  title="View My Purchases"
                  onClick={() => history.push(`/collections/${user.data?.user.purchasedCollection}`)}
                  color="red"
                  borderColor="#171717"
                />
              </CallToActionInner>
            </CallToAction>
          </MainPanel>
        </ContentWrapper>
      )}
      <ConfettiCanvas id="confetti-canvas" />
    </Wrapper>
  );
}
