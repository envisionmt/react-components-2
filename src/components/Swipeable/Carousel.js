import React, { useReducer, Children, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

import { Wrapper, CarouselContainer, CarouselSlot, PREV, NEXT } from './styles';

const initialState = { pos: 0, sliding: false, dir: NEXT };

function reducer(state, { type, numItems }) {
  switch (type) {
    case 'reset':
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const Carousel = forwardRef((props, ref) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const numItems = Children.count(children);

  const slide = (dir) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  useImperativeHandle(ref, () => ({
    handlePrevious() {
      slide(PREV);
    },

    handleNext() {
      slide(NEXT);
    },
  }));

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {Children.map(children, (child, index) => (
            <CarouselSlot order={getOrder({ index, pos: state.pos, numItems })}>{child}</CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      {/* <SlideButton onClick={() => slide(PREV)} float="left">
        Prev
      </SlideButton>
      <SlideButton onClick={() => slide(NEXT)} float="right">
        Next
      </SlideButton> */}
    </div>
  );
});

Carousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Carousel.defaultProps = {};

export default Carousel;
