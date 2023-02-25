import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';

import useWindowDimensions from '../../hooks/useWindowDimensions';

const Wrapper = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  display: flex;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  width: ${({ slideWidth }) => slideWidth}px;
  position: absolute;
  top: 0;
  left: ${({ slideOffset }) => slideOffset}px;
  transition: ${({ animate }) => (animate ? 'left 0.45s ease' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getBreakpoint = (screenWidth, breakpoints) => {
  if (screenWidth >= breakpoints.large.width) {
    return 'large';
  }

  if (screenWidth >= breakpoints.medium.width) {
    return 'medium';
  }

  return 'small';
};

const Carousel = forwardRef(({ items, renderItem, breakpoints, column, height, padding }, ref) => {
  const wrapperRef = useRef(null);
  const { width } = useWindowDimensions();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [touchStartLocation, setTouchStartLocation] = useState(0);
  const [isTouchable, setIsTouchable] = useState(false);
  const [slidesVisible, setSlidesVisible] = useState(breakpoints[getBreakpoint(width, breakpoints)].slidesToShow);
  const [slideState, setSlideState] = useState({
    slides: items.map((item) => ({
      id: uuid(),
      item,
    })),
    currentSlide: 0,
    reordered: false,
    animate: false,
    animating: false,
    navDirection: null,
  });

  useEffect(() => {
    setCarouselWidth(wrapperRef.current.clientWidth);
    setSlideState({ ...slideState, slides: slideState.slides.map((slide) => ({ ...slide, id: uuid() })) });

    const handleResize = () => {
      setCarouselWidth(wrapperRef.current.clientWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fires after slides have been reordered from a navigation event. Enables animation.
  useEffect(() => {
    if (slideState.reordered) {
      let currentSlide;

      if (slideState.navDirection === 'prev') {
        currentSlide = 0;
      }

      if (slideState.navDirection === 'next') {
        currentSlide = slidesVisible;
      }

      setSlideState({ ...slideState, reordered: false, animate: true, currentSlide });
    }
  }, [slideState.reordered]);

  // Handles animation
  useEffect(() => {
    if (slideState.animate && !slideState.animating) {
      setSlideState({ ...slideState, animating: true });

      const { slides } = slideState;
      let trimmedSlides;

      if (slideState.navDirection === 'prev') {
        trimmedSlides = slides.slice(0, slides.length - slidesVisible);
      }

      if (slideState.navDirection === 'next') {
        trimmedSlides = slides.slice(slidesVisible);
      }

      setTimeout(() => {
        setSlideState((prevState) => ({
          ...prevState,
          slides: trimmedSlides,
          currentSlide: 0,
          animate: false,
          animating: false,
        }));
      }, 500);
    }
  }, [slideState.animate]);

  useEffect(() => {
    setSlidesVisible(breakpoints[getBreakpoint(width, breakpoints)].slidesToShow);
  }, [width]);

  useImperativeHandle(ref, () => ({
    handlePrevious() {
      if (slideState.animate || slideState.animating || slideState.reordered) return;
      const nomadSlides = slideState.slides
        .slice(slideState.slides.length - slidesVisible)
        .map((item) => ({ ...item, id: uuid() }));

      setSlideState({
        ...slideState,
        slides: [...nomadSlides, ...slideState.slides],
        reordered: true,
        currentSlide: slideState.currentSlide + slidesVisible,
        navDirection: 'prev',
      });
    },

    handleNext() {
      if (slideState.animate || slideState.animating || slideState.reordered) return;
      const nomadSlides = slideState.slides.slice(0, slidesVisible).map((item) => ({ ...item, id: uuid() }));
      setSlideState({
        ...slideState,
        slides: [...slideState.slides, ...nomadSlides],
        reordered: true,
        navDirection: 'next',
      });
    },
  }));

  const handlePrevious = () => {
    if (slideState.animate || slideState.animating || slideState.reordered) return;
    const nomadSlides = slideState.slides
      .slice(slideState.slides.length - slidesVisible)
      .map((item) => ({ ...item, id: uuid() }));

    setSlideState({
      ...slideState,
      slides: [...nomadSlides, ...slideState.slides],
      reordered: true,
      currentSlide: slideState.currentSlide + slidesVisible,
      navDirection: 'prev',
    });
  };

  const handleNext = () => {
    if (slideState.animate || slideState.animating || slideState.reordered) return;
    const nomadSlides = slideState.slides.slice(0, slidesVisible).map((item) => ({ ...item, id: uuid() }));
    setSlideState({
      ...slideState,
      slides: [...slideState.slides, ...nomadSlides],
      reordered: true,
      navDirection: 'next',
    });
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStartLocation(touch.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.changedTouches && e.changedTouches.length) {
      // const touch = e.changedTouches[0];
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const differenceX = touch.clientX - touchStartLocation;
    if (differenceX < 0) {
      handleNext();
    } else if (differenceX > 0) {
      handlePrevious();
    }
  };

  const handleMouseDown = (e) => {
    // const y = e.offsetY;
    setTouchStartLocation(e.offsetX);
    setIsTouchable(true);
    // console.log(x);
    // isDrawing = true;
  };

  const handleMouseMove = (e) => {
    if (isTouchable === true) {
      // console.log(e.offsetX);
      setTouchStartLocation(e.offsetX);
    }
  };

  const handleMouseUp = (e) => {
    // console.log(e);
    if (isTouchable === true) {
      // drawLine(context, x, y, e.offsetX, e.offsetY);
      const differenceX = e.movementX - touchStartLocation;
      if (differenceX < 0) {
        handleNext();
      } else if (differenceX > 0) {
        handlePrevious();
      }
      setTouchStartLocation(0);
      setIsTouchable(false);
    }
  };

  const renderItems = () => {
    return slideState.slides.map((item, i) => {
      const slideWidth = carouselWidth / column;
      const baseOffset = slideWidth * slideState.currentSlide;
      let slideOffset = ((carouselWidth + padding) / slidesVisible) * i;

      slideOffset = column === 2 ? slideOffset : slideOffset - 200 * i;

      return (
        <CarouselItem
          key={item.id || item.title}
          slideWidth={slideWidth}
          slideOffset={-baseOffset + slideOffset}
          animate={slideState.animate}
        >
          {renderItem(item.item)}
        </CarouselItem>
      );
    });
  };

  return (
    <Wrapper height={height}>
      <InnerWrapper
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={wrapperRef}
      >
        {renderItems()}
      </InnerWrapper>
    </Wrapper>
  );
});

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  breakpoints: PropTypes.object,
  column: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
};

Carousel.defaultProps = {
  breakpoints: {
    small: { width: 640, slidesToShow: 1 },
    medium: { width: 832, slidesToShow: 2 },
    large: { width: 1024, slidesToShow: 2 },
  },
  column: 2,
  height: 100,
  padding: 0,
};

export default Carousel;
