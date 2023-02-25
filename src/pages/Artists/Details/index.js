import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNotifications } from 'reapop';
import { Helmet } from 'react-helmet';

// Components
import { Loader } from '../../../components/Loader';
import { ArtistHeader } from '../../../components/ArtistHeader';
import { InfiniteSingleCollectionGrid } from '../../../components/Artwork/InfiniteGrid';

// Hooks
import { useSingleArtist } from '../../../hooks/data';

// Styled
import { Wrapper } from './styled';

export function ArtistDetails() {
  const { notify } = useNotifications();
  const { id } = useParams();
  const artist = useSingleArtist(id);

  useState(() => {
    if (artist.isError) {
      notify({ status: 'error', title: 'Uh oh!', message: 'There was a problem loading artist data.' });
    }
  }, [artist.isError]);

  return (
    <Wrapper>
      {artist.isLoading && <Loader />}
      {!artist.isLoading && (
        <>
          <Helmet>
            <meta property="og:site_name" content={artist.data?.displayName} />
            <meta property="og:title" content={artist.data?.displayName} />
            <meta property="og:description" content="envision - Digital Canvas NFT Artwork Displays" />
            <meta property="og:image" content={artist.data?.media?.images?.avatar} />
            <meta
              property="og:url"
              content={`https://envision.com/artist/${artist.data.slug ? artist.data?.slug : artist.data?.id}`}
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@envision" />
            <meta name="twitter:url" content="<%= meta.appUrl %>" />
            <meta name="twitter:title" content={artist.data?.displayName} />
            <meta name="twitter:description" content="envision - Digital Canvas NFT Artwork Displays" />
            <meta name="twitter:image:alt" content="envision Logo" />
          </Helmet>
          <ArtistHeader image="" artist={artist} />
          {artist.isFetched && (
            <InfiniteSingleCollectionGrid
              id={artist.data.playlistId}
              queryParams={{ type: 'complete' }}
              isOwner={false}
            />
          )}
        </>
      )}
    </Wrapper>
  );
}
