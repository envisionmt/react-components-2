import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const slideIn = keyframes`
  from { left: -480px; }
  to { left: 0px; }
`;
const slideOut = keyframes`
  from { left: 0px; }
  to { left: -480px; }
`;
const fadeIn = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  animation: ${(props) => (props.in ? fadeIn : fadeOut)} 1s linear forwards;
`;

export const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  height: 100%;
  background-size: cover;
  justify-content: flex-start;
  align-items: center;
  background-position: center;

  @media (max-width: 767px) {
    background-image: ${(props) => props.backgroundImageSmall};
  }

  @media (min-width: 768px) {
    background-image: ${(props) => props.backgroundImageMed};
  }

  @media (min-width: 1024px) {
    background-image: ${(props) => props.backgroundImageLarge};
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
  width: 100%;
  height: 100%;
  max-width: 459px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    padding: 84px 48px 36px 48px;
  }

  @media (min-width: 768px) {
    padding: 84px 48px 36px 84px;
  }

  @media (min-width: 1024px) {
    padding: 156px 156px 60px 156px;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 12px 0;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 72px;
  display: flex;
  align-items: center;
  color: #ffffff;
  letter-spacing: -0.04em;
  text-transform: none;
  margin: 0 0 12px 0;

  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.02em;
  }

  @media (min-width: 1440px) {
    font-size: 96px;
    line-height: 96px;
    letter-spacing: -0.04em;
  }
`;

export const SubHeader = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  letter-spacing: -0.025em;
  margin: 0 0 48px 0;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: auto;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 48px;
  display: flex;
  justify-content: center;
  z-index: 2;
  right: ${({ right }) => right};
  left: ${({ left }) => left};

  &:hover {
    background: rgba(34, 34, 34, 0.25);
    backdrop-filter: blur(24px);
  }
`;

export const ArrowRight = styled.div`
  color: #fff;
  position: absolute;
  width: 100%;
  justify-self: center;
  align-self: center;
`;

export const ArrowLeft = styled.div`
  color: #fff;
  position: absolute;
  width: 100%;
  justify-self: center;
  align-self: center;
`;

export const ArrowIconLeft = styled.img`
  padding-top: 35px;
`;

export const ArrowIconRight = styled.img`
  padding-top: 35px;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  padding: 6px;
  justify-content: center;
`;

export const Indicator = styled.img`
  cursor: pointer;
  margin: 6px;
  @media (max-width: 500px) {
    max-width: 75px;
  }
  opacity: ${({ index }) => !index && '0.25'};
`;

export const VideoAspectRatioBox = styled.div`
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop}%;
  position: relative;
  overflow: hidden;
`;

export const VideoAspectRatioBoxHeader = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
`;

export const VideoFrame = styled.div`
  height: 100%;

  div,
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  img {
    display: none;
  }
`;

export const CarouselText = styled.span`
  position: absolute;
  bottom: 0;
  display: flex;
  margin: auto;
  padding: 24px;
  justify-content: flex-end;
  flex-direction: column;
  background: rgba(1, 1, 1, 0.5);
  cursor: pointer;
  animation: ${(props) => (props.in ? slideIn : slideOut)} 0.5s linear forwards;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  h1 {
    margin-bottom: 0;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.02em;
    text-transform: none;

    @media (min-width: 768px) {
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.04em;
    }
    @media (min-width: 1441px) {
      font-size: 72px;
      line-height: 72px;
    }
  }

  @media (min-width: 1440px) {
    padding: 48px;
  }
`;
