import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { envisionClient } from '@envision/utils';
import { useNotifications } from 'reapop';

// Components
import { Button } from '../../Button';
import { Item } from './Item';

// Hooks
import { useSingleCollectionInfinite } from '../../../hooks/data';

// Assets
import IconClose from '../../../assets/images/icons/icon-close.svg';

// Styled
import { RootWrapper, ModalHeader, Title, CloseModalIcon, ListWrapper } from './styled';

function AddArtworkOrderModal({ closeModal, id }) {
  const collection = useSingleCollectionInfinite(id, '', 100);
  const [artworks, setArtworks] = useState();
  const [loading, setLoading] = useState(false);
  const { notify } = useNotifications();

  const handleCloseModal = () => {
    closeModal();
  };

  useEffect(() => {
    if (collection.data) {
      setArtworks(collection?.data?.pages?.[0]?.collection?.artwork);
    }
  }, [collection.data]);

  const saveData = async () => {
    setLoading(true);
    const artworkIds = artworks.map((artwork) => artwork.id);
    const response = await envisionClient.post(`/v2/collections/${id}/order`, artworkIds);
    collection.refetch();

    if (response.status === 200) {
      notify(
        {
          status: 'success',
          title: 'Reorder Success',
          message: 'Playlist artwork has been reordered!',
        },
        setLoading(false)
      );
    } else {
      notify(
        {
          status: 'error',
          title: 'Reorder Failed',
          message: 'Failed to updated artwork order!',
        },
        setLoading(false)
      );
    }
  };

  return (
    <RootWrapper>
      <ModalHeader>
        <Title>Reorder Artwork</Title>
        <CloseModalIcon src={IconClose} onClick={handleCloseModal} />
      </ModalHeader>
      <DragDropContext
        onDragEnd={(result) => {
          const { destination, source } = result;

          if (!destination) return;
          if (destination.index === source.index) return;

          const newArtworks = [...artworks];
          const [reorderedItem] = newArtworks.splice(source.index, 1);
          newArtworks.splice(destination.index, 0, reorderedItem);

          setArtworks(newArtworks);
        }}
      >
        <Droppable droppableId="artworkList">
          {(provided, snapshot) => (
            <ListWrapper {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
              {artworks?.map((art, index) => (
                <Item key={art.id} index={index} art={art} />
              ))}
              {provided.placeholder}
            </ListWrapper>
          )}
        </Droppable>
      </DragDropContext>
      <Button type="button" color={!loading && 'red'} onClick={saveData} disabled={loading}>
        Save Order
      </Button>
    </RootWrapper>
  );
}

AddArtworkOrderModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default AddArtworkOrderModal;
