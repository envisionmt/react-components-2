import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// Components
import { CollectionItem } from '../CollectionItem';
import { Loader } from '../../../../../../Loader';

const MenuWrapper = styled.nav`
  padding: 0 10px;
  margin-bottom: 10px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const MenuTitle = styled.span`
  display: inline-block;
  padding: 0 18px;
  font-size: 13px;
  text-transform: uppercase;
  color: rgb(179, 179, 179);
  position: relative;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: -10px;
`;

export function CollectionMenu({ collections, title, droppable }) {
  return (
    <MenuWrapper>
      <MenuTitle>
        {title}
        {collections.isLoading && (
          <LoaderWrapper>
            <Loader size="15px" />
          </LoaderWrapper>
        )}
      </MenuTitle>

      {!collections.isLoading && (
        <ul>
          {collections.data?.collections.map((collection) =>
            collection.playlistType === 'STANDARD' ? (
              <CollectionItem key={collection.id} collection={collection} droppable={droppable} />
            ) : null
          )}
        </ul>
      )}
    </MenuWrapper>
  );
}

CollectionMenu.propTypes = {
  collections: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  droppable: PropTypes.bool,
};

CollectionMenu.defaultProps = {
  droppable: false,
};
