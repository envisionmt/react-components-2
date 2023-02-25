import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

// Hooks
import { useAddToCollection } from '../../../../../../../hooks/mutations';

// Styled
import { ItemWrapper, ItemLink } from './styled';
import { useUser } from '../../../../../../../hooks/data';

export function CollectionItem({ collection, droppable }) {
  const user = useUser();
  const userEditable = droppable && collection.playlistType === 'STANDARD';
  const addToCollectionMutation = useAddToCollection();

  const [collected, drop] = useDrop({
    accept: userEditable ? 'artwork' : 'none',
    drop: (item) => {
      if (userEditable) {
        addToCollectionMutation.mutate({ id: collection.id, artworkId: item.id });
      }
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver(), canDrop: !!monitor.canDrop() }),
  });

  return (
    <ItemWrapper ref={drop} draggingOver={collected.isOver && userEditable} canDrop={collected.canDrop}>
      <ItemLink to={`/collections/${user.data?.user.favorites === collection.id ? 'favorites' : collection.id}`}>
        {collection.name}
      </ItemLink>
    </ItemWrapper>
  );
}

CollectionItem.propTypes = {
  collection: PropTypes.object.isRequired,
  droppable: PropTypes.bool,
};

CollectionItem.defaultProps = {
  droppable: false,
};
