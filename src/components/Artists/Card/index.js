import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, ThumbnailContainer, ArtistTitle, TextContainer, ArtistBio } from './styled';

export function ArtistCard({ artist }) {
  return (
    <StyledLink to={`/artists/${artist?.slug || artist?.id}`}>
      <ThumbnailContainer>
        <img key={`${artist?.id}`} src={artist?.media?.images?.avatar} alt="artist avatar" />
      </ThumbnailContainer>
      <TextContainer>
        <ArtistTitle>{artist?.displayName}</ArtistTitle>
        <ArtistBio>{artist?.bio}</ArtistBio>
      </TextContainer>
    </StyledLink>
  );
}

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    displayName: PropTypes.string,
    bio: PropTypes.string,
    slug: PropTypes.string,
    media: PropTypes.shape({
      images: PropTypes.shape({
        avatar: PropTypes.string,
      }),
    }),
  }).isRequired,
};
