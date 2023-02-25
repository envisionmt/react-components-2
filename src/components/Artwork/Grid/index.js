import React from 'react';
import PropTypes from 'prop-types';

// Components
import { ArtworkCard } from '../Card';

// Hooks
import { useUser } from '../../../hooks/data';

// Styled
import { Wrapper, FlexContainer, GridItem } from './styled';

export function ArtworkGrid({ collection }) {
  const user = useUser();

  return (
    <Wrapper>
      <FlexContainer padding="12px" paddingLarge="24px">
        {collection.artwork?.map((art) => (
          <GridItem key={art.id}>
            <ArtworkCard
              artwork={art}
              collectionId={collection.id}
              isOwner={collection.creator.id === user.data?.user?.id}
            />
          </GridItem>
        ))}
        {!collection.artwork && <span>There is no artwork in this playlist...</span>}
      </FlexContainer>
    </Wrapper>
  );
}

ArtworkGrid.propTypes = {
  collection: PropTypes.object.isRequired,
};
