import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import canvas_49_black from '../../../assets/images/digital-canvas/Gif-49-black.gif';
import canvas_49_white from '../../../assets/images/digital-canvas/Gif-49-white.gif';
import canvas_49_brown from '../../../assets/images/digital-canvas/Gif-49-wood.gif';
import canvas_49_no_frame from '../../../assets/images/digital-canvas/Gif-49-none.gif';

import canvas_55_black from '../../../assets/images/digital-canvas/Gif-55-black.gif';
import canvas_55_white from '../../../assets/images/digital-canvas/Gif-55-white.gif';
import canvas_55_brown from '../../../assets/images/digital-canvas/Gif-55-wood.gif';
import canvas_55_no_frame from '../../../assets/images/digital-canvas/Gif-55-none.gif';

import canvas_65_black from '../../../assets/images/digital-canvas/Gif-65-black.gif';
import canvas_65_white from '../../../assets/images/digital-canvas/Gif-65-white.gif';
import canvas_65_brown from '../../../assets/images/digital-canvas/Gif-65-wood.gif';
import canvas_65_no_frame from '../../../assets/images/digital-canvas/Gif-65-none.gif';

import canvas_75_black from '../../../assets/images/digital-canvas/Gif-75-black.gif';
import canvas_75_white from '../../../assets/images/digital-canvas/Gif-75-white.gif';
import canvas_75_brown from '../../../assets/images/digital-canvas/Gif-75-wood.gif';
import canvas_75_no_frame from '../../../assets/images/digital-canvas/Gif-75-none.gif';

import canvas_86_black from '../../../assets/images/digital-canvas/Gif-86-black.gif';
import canvas_86_white from '../../../assets/images/digital-canvas/Gif-86-white.gif';
import canvas_86_brown from '../../../assets/images/digital-canvas/Gif-86-wood.gif';
import canvas_86_no_frame from '../../../assets/images/digital-canvas/Gif-86-none.gif';

import canvas_98_black from '../../../assets/images/digital-canvas/Gif-98-black.gif';
import canvas_98_white from '../../../assets/images/digital-canvas/Gif-98-white.gif';
import canvas_98_brown from '../../../assets/images/digital-canvas/Gif-98-wood.gif';
import canvas_98_no_frame from '../../../assets/images/digital-canvas/Gif-98-none.gif';

const CanvasContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CanvasImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: auto;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
`;

const ImageAspectRatioBox = styled.div`
  width: 100%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
  position: relative;

  @media (min-width: 700px) and (max-height: 599px) {
    padding-bottom: 110%;
    width: auto;
    left: -4%;
  }

  @media (min-width: 700px) and (min-height: 600px) {
    padding-bottom: 130%;
    width: auto;
    left: -13%;
  }

  @media (min-width: 700px) and (min-height: 750px) {
    padding-bottom: 150%;
    width: auto;
    left: -25%;
  }

  @media (min-width: 1000px) and (max-height: 699px) {
    padding-bottom: 80%;
    width: auto;
    left: 10%;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    padding-bottom: 100%;
    width: auto;
    left: 0%;
  }

  @media (min-width: 1000px) and (min-height: 800px) {
    padding-bottom: 120%;
    width: auto;
    left: -10%;
  }

  @media (min-width: 1000px) and (min-height: 1000px) {
    padding-bottom: 150%;
    width: auto;
    left: -24%;
  }

  @media (min-width: 1400px) and (min-height: 1150px) {
    padding-bottom: 175%;
    width: auto;
    left: -37%;
  }

  @media (min-width: 1400px) and (min-height: 1250px) {
    padding-bottom: 190%;
    width: auto;
    left: -44%;
  }

  @media (min-width: 1400px) and (min-height: 1450px) {
    padding-bottom: 220%;
    width: auto;
    left: -59%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;

  @media (min-width: 390px) {
    transform: scale(0.9);
  }

  @media (min-width: 451px) {
    transform: scale(0.8);
  }

  @media (min-width: 700px) {
    transform: none;
    width: auto;
  }
`;

export function CanvasImage({ size, color }) {
  let canvasImagePath = canvas_55_black;

  if (size === '49') {
    if (color === 'Black') {
      canvasImagePath = canvas_49_black;
    } else if (color === 'White') {
      canvasImagePath = canvas_49_white;
    } else if (color === 'Wooden') {
      canvasImagePath = canvas_49_brown;
    } else if (color === 'No frame') {
      canvasImagePath = canvas_49_no_frame;
    }
  } else if (size === '55') {
    if (color === 'Black') {
      canvasImagePath = canvas_55_black;
    } else if (color === 'White') {
      canvasImagePath = canvas_55_white;
    } else if (color === 'Wooden') {
      canvasImagePath = canvas_55_brown;
    } else if (color === 'No frame') {
      canvasImagePath = canvas_55_no_frame;
    }
  } else if (size === '65') {
    if (color === 'Black') {
      canvasImagePath = canvas_65_black;
    } else if (color === 'White') {
      canvasImagePath = canvas_65_white;
    } else if (color === 'Wooden') {
      canvasImagePath = canvas_65_brown;
    } else if (color === 'No frame') {
      canvasImagePath = canvas_65_no_frame;
    }
  } else if (size === '75') {
    if (color === 'Black') {
      canvasImagePath = canvas_75_black;
    } else if (color === 'White') {
      canvasImagePath = canvas_75_white;
    } else if (color === 'Wooden') {
      canvasImagePath = canvas_75_brown;
    } else if (color === 'No frame') {
      canvasImagePath = canvas_75_no_frame;
    }
  } else if (size === '86') {
    if (color === 'Black') {
      canvasImagePath = canvas_86_black;
    } else if (color === 'White') {
      canvasImagePath = canvas_86_white;
    } else if (color === 'Wooden') {
      canvasImagePath = canvas_86_brown;
    } else if (color === 'No frame') {
      canvasImagePath = canvas_86_no_frame;
    }
  } else if (size === '98') {
    if (color === 'Black') {
      canvasImagePath = canvas_98_black;
    } else if (color === 'White') {
      canvasImagePath = canvas_98_white;
    } else if (color === 'Wooden') {
      canvasImagePath = canvas_98_brown;
    } else if (color === 'No frame') {
      canvasImagePath = canvas_98_no_frame;
    }
  }

  return (
    <CanvasContent>
      <CanvasImageWrapper>
        <ImageContainer>
          <ImageAspectRatioBox paddingBottom={`${(1 / 1) * 100}`}>
            <div>
              <StyledImage src={canvasImagePath} alt="canvas-image" />
            </div>
          </ImageAspectRatioBox>
        </ImageContainer>
      </CanvasImageWrapper>
    </CanvasContent>
  );
}

CanvasImage.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

CanvasImage.defaultProps = {
  size: '',
  color: '',
};
