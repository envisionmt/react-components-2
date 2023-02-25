import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: ${({ padding }) => padding || '12px 24px 24px'};

  .button {
    width: 194px;
    height: 48px;
    margin: auto;
  }
  @media (min-width: 768px) {
    padding: ${({ paddingLarge }) => paddingLarge || '24px 48px 48px'};
  }
`;

export const CarouselContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 84px 24px 24px 24px;

  @media (min-width: 768px) {
    padding: 108px 48px 48px 48px;
  }
`;

export const CarouselTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 50%;
  border-radius: 24px;
  z-index: 1;

  .button {
    border-radius: 0 0 24px 24px;
    padding: 24px;
    height: 72px;

    @media (min-width: 768px) {
      border-radius: 0 0 24px 0;
    }
  }

  @media (min-width: 768px) {
    max-height: 100%;
    right: -1px;
    width: auto;
  }
`;

export const CarouselText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: rgba(26, 26, 26, 0.65);
  backdrop-filter: blur(6px);
  min-width: 280px;

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
    }
    @media (min-width: 1024px) {
      font-weight: 600;
      font-size: 48px;
      line-height: 48px;
    }
  }
  .artist {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    cursor: pointer;

    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.015em;
    }
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 360px;
    margin-right: 24px;

    @media (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media (min-width: 1024px) {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 768px) {
    border-radius: 24px 0 0 0;
  }
`;

export const CarouselPricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: #222222;

  .divider {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-right: 2px solid #333333;
    width: 0;
    height: 32px;
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const PricingItem = styled.div`
  flex-basis: 50%;
  .top {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #a5a5a5;
  }
  .bot {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    letter-spacing: 0.025em;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius};
  @media (min-width: 1441px) {
    border-radius: ${({ borderRadiusBig }) => borderRadiusBig};
    margin: ${({ margin }) => margin};
  }
`;

export const VideoAspectRatioBox = styled.div`
  width: 100%;
  max-height: 100vh;
  position: relative;
  padding-bottom: ${({ paddingBottom }) => paddingBottom};

  @media (min-width: 768px) {
    padding-bottom: ${({ paddingBottomLarge }) => paddingBottomLarge};
  }
  @media (min-width: 1440px) {
    padding-bottom: ${({ paddingBottomXLarge }) => paddingBottomXLarge};
  }
`;

export const ImageAspectRatioBox = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
  position: relative;
`;

export const VideoFrame = styled.div`
  img {
    object-fit: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${({ borderRadius }) => borderRadius};
  }
`;

export const VideoFrameTwo = styled.div`
  div,
  video,
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 24px;
    z-index: 0;
  }
`;

export const VideoAspectRatioBoxHeader = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
`;

export const Divider = styled.div`
  display: flex;
  border-bottom: 2px solid #333333;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px;

  @media (min-width: 768px) {
    padding: 24px 0px;
  }
`;

export const TopHeader = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }
`;

export const TopSubheader = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 24px 0;

  & > * {
    flex-grow: 1;
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    gap: 48px;
    margin: 48px 0;
    & > * {
      flex-basis: ${({ flexBasis }) => `calc(${flexBasis * 100}% - 24px)`};
      max-width: ${({ flexBasis }) => `calc(${flexBasis * 100}% - 24px)`};
    }
  }
  @media (min-width: 1024px) {
    & > * {
      flex-basis: ${({ flexBasisLarge }) => `calc(${flexBasisLarge * 100}%  - 32px)`};
      max-width: ${({ flexBasisLarge }) => `calc(${flexBasisLarge * 100}% - 32px)`};
    }
  }
`;

export const CollectionContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 0 24px 24px;
  margin-bottom: 24px;
  max-width: 1440px;
  margin: auto;

  ::-webkit-scrollbar {
    height: 20px;
  }
  ::-webkit-scrollbar-track {
    background: #222222;
    border-radius: 48px;
    margin: 0px 24px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #910048;
  }

  > * {
    margin-right: 24px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 300px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 0 0 48px 48px;
    margin-bottom: 48px;

    ::-webkit-scrollbar-track {
      margin: 0px 48px;
    }

    > * {
      margin-right: 48px;
    }
  }
`;

export const InfoWrapper = styled.div`
  background: #222222;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 100%;
  order: 1;

  @media (min-width: 768px) {
    flex-basis: 50%;
    order: 0;
  }
`;

export const TextContainer = styled.div`
  flex-basis: 100%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 0;
  text-align: center;

  @media (min-width: 768px) {
    order: 1;
    flex-basis: 50%;
    padding: 30px;
    text-align: start;
  }
  @media (min-width: 1024px) {
    padding: 96px;
  }
`;

export const HeaderText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const HeaderSubText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  color: #a5a5a5;
  margin-bottom: 48px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px;
  flex-basis: 100%;

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 24px;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.025em;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;

    img {
      width: 60px;
      height: 60px;
    }
    .text {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (min-width: 1440px) {
    flex-basis: 25%;
  }
`;
