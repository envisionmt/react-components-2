import React from 'react';
import styled from '@emotion/styled';

// Components
import { InfiniteArtworkGrid } from '../../../components/Artwork/InfiniteGrid';
import { HeaderSplash } from '../../../components/HeaderSplash';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
`;

export function ArtworkHome() {
  return (
    <Wrapper>
      <HeaderSplash height="10vh" />
      <InfiniteArtworkGrid queryKey={['artwork', 'marketplace']} queryParams={{ type: 'NFT' }} />
    </Wrapper>
  );
}
