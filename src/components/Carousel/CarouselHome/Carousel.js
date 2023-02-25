import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { VideoPlayer } from '@envision/player';

// Assets
import arrowRightIcon from '../../Images/ArrowRight.svg';
import arrowLeftIcon from '../../Images/ArrowLeft.svg';

// Styled
import {
  Slide,
  CarouselWrapper,
  ArrowContainer,
  ArrowRight,
  ArrowLeft,
  ArrowIconLeft,
  ArrowIconRight,
  VideoAspectRatioBoxHeader,
  VideoFrame,
  CarouselText,
} from './styled';

export default function Carousel({ content, slideData }) {
  const history = useHistory();
  const { setSlideDirection, setSlideIn, setIndex, numSlides, slideIn, index } = slideData;

  function Arrow(arrowProps) {
    const { direction, clickFunction } = arrowProps;
    return direction === 'left' ? (
      <ArrowLeft onClick={clickFunction}>
        <ArrowIconLeft src={arrowLeftIcon} />
      </ArrowLeft>
    ) : (
      <ArrowRight onClick={clickFunction}>
        <ArrowIconRight src={arrowRightIcon} />
      </ArrowRight>
    );
  }

  function onArrowClick(direction) {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === 'left' ? 'right' : 'left';

    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick('right');
      }

      if (e.keyCode === 37) {
        onArrowClick('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => onArrowClick('right'), 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <>
      <ArrowContainer left="0" onClick={() => onArrowClick('left')}>
        <Arrow direction="left" clickFunction={() => onArrowClick('left')} />
      </ArrowContainer>
      <Slide in={slideIn}>
        <CarouselWrapper>
          <VideoAspectRatioBoxHeader>
            <VideoFrame>
              <VideoPlayer
                videoUrl={content.data?.media.video.hls}
                artistName=""
                rotate={content.data?.rotate}
                initialize
                autoplay
                muted
                clickToPlayFallback
                showLogo={false}
                showLoading={false}
              />
              <CarouselText in={slideIn} onClick={() => history.push(`/artwork/${content?.data.id}`)}>
                <h1>{content?.data?.artist.displayName}</h1>
                <h4>{content?.data?.name}</h4>
              </CarouselText>
            </VideoFrame>
          </VideoAspectRatioBoxHeader>
        </CarouselWrapper>
      </Slide>
      <ArrowContainer right="0" onClick={() => onArrowClick('left')}>
        <Arrow direction="right" clickFunction={() => onArrowClick('right')} />
      </ArrowContainer>
    </>
  );
}

Carousel.propTypes = {
  content: PropTypes.shape({
    data: PropTypes.object,
  }),
  slideData: PropTypes.shape({
    setSlideDirection: PropTypes.func,
    setSlideIn: PropTypes.func,
    setIndex: PropTypes.func,
    numSlides: PropTypes.number,
    slideIn: PropTypes.string,
    index: PropTypes.number,
  }),
};

Carousel.defaultProps = {
  content: {},
  slideData: {},
};
