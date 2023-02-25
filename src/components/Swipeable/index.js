import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import { Item, AppContainer } from './components';

import Carousel from './Carousel';
// CREDITS for Carousel:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca

const ReactSwipeable = forwardRef((props, ref) => {
  const { PreviewComponent, items } = props;

  return (
    // <AppContainer>
    <Carousel title="Carousel" ref={ref}>
      {items.map((item) => (
        <PreviewComponent key={item?.content?.id} artwork={item} />
      ))}
    </Carousel>
    // </AppContainer>
    // <Item img={item?.media ? item?.media?.image?.low?.landscape : ''} />
  );
});

ReactSwipeable.propTypes = {
  PreviewComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  items: PropTypes.array,
};

ReactSwipeable.defaultProps = {
  items: {},
};

export default ReactSwipeable;
