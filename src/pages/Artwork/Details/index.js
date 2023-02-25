import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNotifications } from 'reapop';
import { Helmet } from 'react-helmet';

// Components
import { Loader } from '../../../components/Loader';
import { InfiniteArtworkGrid } from '../../../components/Artwork/InfiniteGrid';
import { HistoryCard } from '../../../components/Artwork/HistoryCard';
import { BuyCard } from '../../../components/Artwork/BuyCard';
import { SubscribeCard } from '../../../components/Artwork/SubscribeCard';
import { ControlCard } from '../../../components/Artwork/ControlCard';
import { ArtworkHeader } from '../../../components/ArtworkHeader';

// Hooks
import { useSingleArtwork, useTokens, useUser } from '../../../hooks/data';

// Styled
import {
  RootWrapper,
  Title,
  SubTitle,
  ArtistWrapper,
  ArtistImage,
  DetailsWrapper,
  ArtistName,
  DescriptionWrapper,
  DescriptionText,
  LoadWrapper,
  MoreWrapper,
  MoreSubTitle,
} from './styled';

export function ArtworkDetails() {
  const { notify } = useNotifications();
  const { id } = useParams();
  const artwork = useSingleArtwork(id);
  const tokens = useTokens(id);

  const user = useUser();
  const menu = useSelector((state) => state.mainMenu);

  useEffect(() => {
    if (artwork.isError) {
      notify({ status: 'error', title: 'Uh oh!', message: 'There was a problem loading artwork data.' });
    }
    if (tokens.isError) {
      notify({ status: 'error', title: 'Uh oh!', message: 'There was a problem loading token data.' });
    }
  }, [artwork.isError, tokens.isError]);

  useEffect(() => {}, [menu]);

  function getArtworkOrientation() {
    if (!artwork.isFetched) return 'landscape';
    const { orientation, sourceFile } = artwork.data;
    if (orientation === 'portrait') return 'portrait';
    if (!sourceFile.metadata) return 'landscape';

    const aspectRatio = sourceFile.metadata.width / sourceFile.metadata.height;
    if (aspectRatio > 0.95 && aspectRatio < 1.05) return 'square';
    if (aspectRatio < 1) return 'portrait';
    return 'landscape';
  }

  const artist = artwork.data?.artist;
  const orientation = getArtworkOrientation();

  return (
    <RootWrapper>
      {artwork.isLoading && (
        <LoadWrapper>
          <Loader />
        </LoadWrapper>
      )}
      {!artwork.isLoading && (
        <>
          <Helmet>
            <meta property="og:site_name" content={`${artwork.data?.name} by ${artist.displayName}`} />
            <meta property="og:title" content={`${artwork.data?.name} by ${artist.displayName}`} />
            <meta property="og:description" content="envision - Digital Canvas NFT Artwork Displays" />
            <meta property="og:image" content={artwork.data?.media.image.medium.square} />
            <meta
              property="og:url"
              content={`https://envision.com/artwork/${artwork.data?.slug ? artwork.data?.slug : artwork.data?.id}`}
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@envision" />
            <meta name="twitter:url" content="<%= meta.appUrl %>" />
            <meta name="twitter:title" content={`${artwork.data?.name} by ${artist.displayName}`} />
            <meta name="twitter:description" content="envision - Digital Canvas NFT Artwork Displays" />
            <meta name="twitter:image:alt" content="envision Logo" />
          </Helmet>
          <ArtworkHeader artwork={artwork} orientation={orientation} menu={menu} />

          <div className="info">
            <DetailsWrapper>
              <DescriptionWrapper className="container">
                <Title>{artwork.data?.name}</Title>
                <ArtistWrapper>
                  <ArtistImage src={artist.media.images.avatar} />
                  <ArtistName to={`/artists/${artist.slug || artist.id}`}>{artist.displayName}</ArtistName>
                </ArtistWrapper>
                <DescriptionText>
                  <SubTitle>Description</SubTitle>
                  <p>{artwork.data?.description}</p>
                </DescriptionText>
              </DescriptionWrapper>
              <div className="container" id="two">
                {artwork.data?.artworkType === 'NFT' && (
                  <BuyCard artwork={artwork.data} token={tokens.data?.available[0]} user={user} />
                )}
                {artwork.data?.artworkType === 'OPEN' && !artwork.data?.playable && <SubscribeCard user={user} />}
                {artwork.data?.playable && <ControlCard artwork={artwork.data} />}
                <br />
                <HistoryCard artwork={artwork} tokens={tokens} />
              </div>
            </DetailsWrapper>
          </div>
          <MoreWrapper>
            <MoreSubTitle>More from the Artist</MoreSubTitle>
            <InfiniteArtworkGrid
              queryKey={['artist', artist.id, 'artwork']}
              queryParams={{ filter: `artistId:${artist.id}` }}
            />
          </MoreWrapper>
        </>
      )}
    </RootWrapper>
  );
}
