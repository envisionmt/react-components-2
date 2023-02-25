import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

import useElementSize from '../../../hooks/useElementSize';

import { CollectionPreview } from '../Preview';

import {
  CarouselWrapper,
  CollectionsWrapper,
  Slide,
  InnerWrapper,
  NavButton,
  PrevIcon,
  NextIcon,
  NavWrapper,
} from './styled';

export function CollectionCarousel({ title, collections, itemHeight }) {
  const containerRef = useRef();
  const [containerWidth] = useElementSize(containerRef);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(collections.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages - 1) setCurrentPage(() => currentPage + 1);
  }, [currentPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (currentPage > 0) setCurrentPage(() => currentPage - 1);
  }, [currentPage]);

  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    onSwipedLeft: () => {
      handleNext();
    },
    onSwipedRight: () => {
      handlePrev();
    },
  });
  useEffect(() => {
    if (containerWidth <= 499) {
      setItemsPerPage(1);
    }
    if (containerWidth >= 500 && containerWidth <= 849) {
      setItemsPerPage(2);
    }
    if (containerWidth >= 850 && containerWidth <= 1023) {
      setItemsPerPage(3);
    }
    if (containerWidth >= 1024 && containerWidth <= 1439) {
      setItemsPerPage(3);
    }
    if (containerWidth >= 1440) {
      setItemsPerPage(4);
    }
  }, [itemsPerPage, containerWidth]);

  // Update our page length if collection length changes
  useEffect(() => {
    setTotalPages(() => Math.ceil(collections.length / itemsPerPage));
  }, [collections.length, itemsPerPage]);

  const padding = 36;
  const margin = 16;
  const itemWidth = (containerWidth - padding - margin * (itemsPerPage > 1 ? itemsPerPage : 1)) / itemsPerPage;
  const offset =
    currentPage > 0 ? currentPage * itemsPerPage * (itemWidth + margin) : currentPage * (containerWidth - margin);
  return (
    <CarouselWrapper {...handlers}>
      <h2>{title}</h2>
      <NavWrapper active={totalPages - 1 === 0}>
        <NavButton type="button" onClick={handlePrev} active={currentPage > 0}>
          <PrevIcon />
        </NavButton>
        <NavButton type="button" onClick={handleNext} active={currentPage < totalPages - 1}>
          <NextIcon />
        </NavButton>
      </NavWrapper>
      <CollectionsWrapper ref={containerRef}>
        <InnerWrapper offset={offset}>
          {collections.map((collection, index) => (
            <Slide itemWidth={itemWidth} itemHeight={itemHeight || itemWidth}>
              <CollectionPreview collection={collection} itemIndex={index} />
            </Slide>
          ))}
        </InnerWrapper>
      </CollectionsWrapper>
    </CarouselWrapper>
  );
}

CollectionCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  collections: PropTypes.array.isRequired,
  itemHeight: PropTypes.number,
};

CollectionCarousel.defaultProps = {
  itemHeight: 420,
};
