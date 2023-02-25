import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

// Styles
import { ListItem } from '../styled';

export const Item = ({ art, index }) => (
  <>
    <Draggable draggableId={art.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <img src={art?.media?.image?.low?.square} alt={art.name} /> {art?.name} - {art?.artist?.displayName}
        </ListItem>
      )}
    </Draggable>
  </>
);

Item.propTypes = {
  art: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
