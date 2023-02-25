import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Loader } from '../../Loader';
import { ArtworkCard } from '../Card';

// Hooks
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useAllArtworkInfinite, useSingleCollectionInfinite } from '../../../hooks/data';

// Styled
import { Wrapper, FlexContainer, GridItem, LoadingMore } from './styled';

export function InfiniteArtworkGrid({ queryKey, queryParams, limit }) {
  const loadMoreRef = useRef();
  const artwork = useAllArtworkInfinite(queryKey, queryParams, limit);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: artwork.fetchNextPage,
    enabled: artwork.hasNextPage,
  });

  return (
    <Wrapper>
      <FlexContainer padding="12px" paddingLarge="24px">
        {artwork?.data?.pages?.map((page) => (
          <React.Fragment key={`page-${page.nextOffset}`}>
            {page.artwork?.map((art) => (
              <GridItem key={art.id}>
                <ArtworkCard artwork={art} collectionId={artwork?.artist?.playlistId} />
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </FlexContainer>
      <LoadingMore ref={loadMoreRef}>
        {(artwork.isFetchingNextPage || artwork.isLoading) && <Loader />}
        {!artwork.isFetchingNextPage &&
          !artwork.isLoading &&
          !artwork.hasNextPage &&
          artwork.data?.pages.length > 1 && <span>No more artwork...</span>}
      </LoadingMore>
    </Wrapper>
  );
}

InfiniteArtworkGrid.propTypes = {
  queryKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  queryParams: PropTypes.object,
  limit: PropTypes.number,
};

InfiniteArtworkGrid.defaultProps = {
  queryParams: {},
  limit: 12,
};

export function InfiniteSingleCollectionGrid({ id, queryParams, limit, isOwner }) {
  const loadMoreRef = useRef();
  const collection = useSingleCollectionInfinite(id, queryParams, limit);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: collection?.fetchNextPage,
    enabled: collection?.hasNextPage,
  });

  return (
    <Wrapper>
      <FlexContainer padding="12px" paddingLarge="24px">
        {collection?.data?.pages?.map((page) => (
          <React.Fragment key={`page-${page.nextOffset}`}>
            {page?.collection?.artwork?.map((art) => (
              <GridItem key={art.id}>
                <ArtworkCard
                  artwork={art}
                  collectionId={id}
                  isOwner={isOwner}
                  isCollectionPlayable={!['USER_UPLOAD', 'NFT_IMPORT'].includes(page?.collection?.playlistType)}
                />
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </FlexContainer>
      <LoadingMore ref={loadMoreRef}>
        {(collection.isFetchingNextPage || collection.isLoading) && <Loader />}
        {!collection.isFetchingNextPage &&
          !collection.isLoading &&
          !collection.hasNextPage &&
          collection.data?.pages?.length > 1 && <span>No more artwork...</span>}
        {collection.data?.pages?.length === 1 && collection.data?.pages?.[0]?.collection?.artwork?.length === 0 && (
          <span>No artwork...</span>
        )}
      </LoadingMore>
    </Wrapper>
  );
}

InfiniteSingleCollectionGrid.propTypes = {
  id: PropTypes.string.isRequired,
  queryParams: PropTypes.object,
  limit: PropTypes.number,
  isOwner: PropTypes.bool.isRequired,
};

InfiniteSingleCollectionGrid.defaultProps = {
  queryParams: {},
  limit: 30,
};
