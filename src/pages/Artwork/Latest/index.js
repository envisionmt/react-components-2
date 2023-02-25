import React from 'react';

import { InfiniteArtworkGrid } from '../../../components/Artwork/InfiniteGrid';
import { DiscoverHeader } from '../../../components/DiscoverHeader';

import { Wrapper } from './styled';

export function ArtworkLatest() {
  return (
    <Wrapper>
      <DiscoverHeader activeLink="latest" />
      <InfiniteArtworkGrid queryKey={['artwork', 'Latest']} />
    </Wrapper>
  );
}
