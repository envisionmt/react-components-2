import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  CollectionTitle,
  CollectionDescription,
  CardContent,
  ThumbnailContainer,
  ThumbnailAspectRatioBox,
  ThumbnailImage,
  CardText,
} from './styled';

export const CollectionCard = ({ collection }) => {
  const history = useHistory();

  return (
    <CardContent onClick={() => history.push(`/collections/${collection.id}`)}>
      <ThumbnailContainer>
        <ThumbnailAspectRatioBox>
          <ThumbnailImage src={collection?.media?.images?.thumbnail} />
        </ThumbnailAspectRatioBox>
      </ThumbnailContainer>
      <CardText>
        <CollectionTitle>{collection?.name}</CollectionTitle>
        <CollectionDescription>{collection?.description}</CollectionDescription>
      </CardText>
    </CardContent>
  );
};

CollectionCard.propTypes = {
  collection: PropTypes.object.isRequired,
};
