import React, { useRef, useState } from 'react';
import { useNotifications } from 'reapop';

// Components
import { Loader } from '../../../components/Loader';
import { ArtistCard } from '../../../components/Artists/Card';
import { DiscoverHeader } from '../../../components/DiscoverHeader';

// Hooks
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useAllArtistsInfinite } from '../../../hooks/data';

// Styled
import { Wrapper, FlexContainer, LoadingMore } from './styled';

export function ArtistHome() {
  const loadMoreRef = useRef();
  const { notify } = useNotifications();
  const artists = useAllArtistsInfinite('artists');
  const limit = '100';
  const artistNames = useAllArtistsInfinite('artistNames', {}, limit);

  useState(() => {
    if (artists.isError) {
      notify({ status: 'error', title: 'Uh oh!', message: 'There was a problem loading artist data.' });
    }
  }, [artists.isError]);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: artists?.fetchNextPage,
    enabled: artists?.hasNextPage,
  });

  return (
    <Wrapper>
      <DiscoverHeader activeLink="artists" artistNames={artistNames} />
      {!artists.isLoading && (
        <>
          <FlexContainer flexBasis={1 / 2}>
            {artists?.data?.pages?.map((page) => (
              <React.Fragment key={`page-${page.nextOffset}`}>
                {page.artists?.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </React.Fragment>
            ))}
          </FlexContainer>
        </>
      )}
      <LoadingMore ref={loadMoreRef}>
        {(artists.isFetchingNextPage || artists.isLoading) && <Loader />}
        {!artists.isFetchingNextPage && !artists.isLoading && !artists.hasNextPage && <span>No more artists...</span>}
      </LoadingMore>
    </Wrapper>
  );
}
