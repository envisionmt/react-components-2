import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
export const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: auto;
  padding: 24px;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  flex-direction: column;

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

export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #222222;
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25), 0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714),
    0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027), 0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125),
    0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973), 0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864);
  border-radius: 24px;
  margin: 24px;
  align-items: center;
  padding: 24px;
  flex-direction: column;

  .icons {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
  }
  .icon {
    flex-basis: calc(100% / 2);
    max-width: calc(100% / 2);
  }
  .iconsTwo {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .iconTwo,
  .iconThree {
    flex-wrap: nowrap;
    flex-basis: calc((100% / 3));
    max-width: calc((100% / 3));
  }

  @media (min-width: 768px) {
    padding: 24px;

    .icon,
    .iconTwo {
      flex-wrap: nowrap;
      flex-basis: calc((100% / 4));
      max-width: calc((100% / 4));
    }
    .iconThree {
      flex-wrap: nowrap;
      flex-basis: calc((100% / 5));
      max-width: calc((100% / 5));
    }
  }
  @media (min-width: 1024px) {
    margin: 48px;

    .iconTwo {
      flex-wrap: nowrap;
      flex-basis: calc((100% / 6) - 12px);
      max-width: calc((100% / 6) - 12px);
    }
    .iconThree {
      flex-wrap: nowrap;
      flex-basis: calc((100% / 5) - 12px);
      max-width: calc((100% / 5) - 12px);
    }
  }
  @media (min-width: 1441px) {
    padding: 48px;
  }
`;

export const IconHeader = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  width: 100%;
  max-height: 24px;
  margin-bottom: 12px;

  p {
    font-style: normal;
    font-weight: bold;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #777777;

    @media (min-width: 768px) {
      margin-left: 24px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .trusted {
    margin: auto;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Icon = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

export const SectionCard = styled.div`
  display: flex;
  padding: 24px;
`;

export const CardHeader = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin: 0 0 24px 0;

  @media (min-width: 375px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
  }
  @media (min-width: 1441px) {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.04em;
  }
`;

export const CardTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin: 0 24px 24px 24px;
  padding-top: 24px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.02em;
  }
`;

export const ClientTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin: 0 24px 24px 24px;
  padding-top: 24px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.02em;
    margin-left: 48px;
  }
`;

export const CardDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.025em;
  margin: 0 0 24px 0;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.015em;
  }
`;

export const CardText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.025em;
  margin: 12px;
  color: #a5a5a5;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
  }
`;

export const TopCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .fourth-wrapper {
    flex=direction: row;
  }
  .fourth {
    flex-basis: calc(100% - 48px);
    max-width: calc(100% - 48px);
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .first,
    .testimonial {
      flex-basis: calc((100% / 2) - 48px);
      max-width: calc((100% / 2) - 48px);
    }
    .second,
    .third {
      flex-basis: calc((100% / 3) - 48px);
      max-width: calc((100% / 3) - 48px);
    }
  }
  @media (min-width: 1024px) {
    margin: 0 24px;
    .first,
    .testimonial {
      flex-basis: calc((100% / 2) - 48px);
      max-width: calc((100% / 2) - 48px);
      margin: 48px 24px 36px 24px;
    }
  }
  @media (min-width: 1441px) {
    .fourth {
      flex-basis: calc((100% / 2) - 48px);
      max-width: calc((100% / 2) - 48px);
    }
  }
`;

export const TopCardWrapperTwo = styled.div`
  @media (min-width: 1024px) {
    margin: 0 24px;
    .first,
    .testimonial {
      flex-basis: calc((100% / 2) - 48px);
      max-width: calc((100% / 2) - 48px);
      margin: 48px 24px 48px 24px;
    }
  }
`;

export const CardContainer = styled.div`
  background: #222222;
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25), 0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714),
    0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027), 0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125),
    0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973), 0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864);
  border-radius: 24px;
  margin: 24px;
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.borderRadius};
`;

export const ThumbnailAspectRatioBox = styled.div`
  padding-bottom: ${(props) => props.paddingBottom};
  position: relative;
  width: 100%;
`;

export const ThumbnailFrame = styled.div``;

export const ThumbnailImage = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardTextContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    margin: 0 12px 0px 12px;
  }
  .text {
    margin: 12px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (min-width: 767px) {
    .title {
      margin: 0 36px 12px 36px;
    }
    .text {
      margin: 12px 36px 36px 36px;
    }
  }
`;

export const CardTextContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 0;

  .title {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    margin: 0 0 24px 0;
  }
  .text {
    margin: 0 0 24px 0;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
  @media (max-width: 1024px) {
    .title {
      font-size: 20px;
    }
  }
`;

export const CardFormContainer = styled.div`
  background: #222222;
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25), 0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714),
    0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027), 0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125),
    0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973), 0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864);
  border-radius: 24px;
  margin: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 48px;
  }
`;

export const CardFormHeader = styled.div`
  background: #333333;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
  filter: drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.25)) drop-shadow(0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714))
    drop-shadow(0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027))
    drop-shadow(0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125))
    drop-shadow(0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973))
    drop-shadow(0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864));
  padding: 24px;
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: none;
    font-size: 20px;
    line-height: 24px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.015em;
    margin-bottom: 10px;
  }
  div {
    margin-left: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.025em;
    margin-bottom: 34px;
  }
  button {
    width: 80%;
    margin: auto;
  }

  @media (max-width: 767px) {
    text-align: center;

    h1 {
      justify-content: center;
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
    padding: 48px;

    h1 {
      font-size: 36px;
      line-height: 40px;
      letter-spacing: -0.02em;
    }

    button {
      width: 50%;
      margin: 0;
    }
  }
  @media (min-width: 1024px) {
    flex-basis: 50%;
    max-width: 50%;
    border-radius: 24px 0 0 24px;

    h1 {
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.04em;
    }
    div {
      margin-left: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (min-width: 1441px) {
    h1 {
      font-size: 72px;
      line-height: 72px;
    }
  }
`;

export const VideoContainer = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

export const VideoContainerTwo = styled.div`
  margin-bottom: 16px;
  position: relative;
  margin: 24px;
  border-radius: 24px;

  .video-two {
    border-radius: 24px;
  }

  @media (min-width: 1024px) {
    margin: 48px 48px 0px 48px;
  }
`;

export const VideoAspectRatioBox = styled.div`
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop}%;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 42.857%;
  }
`;

export const VideoAspectRatioBoxHeader = styled.div`
  height: 324px;
  overflow: hidden;
  padding: 0;
  position: relative;
`;
export const VideoFrame = styled.div``;

export const VimeoVideoHeader = styled.iframe`
  box-sizing: border-box;
  height: 56.25vw;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  width: 177.77777778vh;
  border: none;
  opacity: 0.6;
`;

export const VimeoVideo = styled.iframe`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  border: none;
`;

export const SectionCardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  text-align: center;

  button {
    margin: 6px 0;
  }

  .button {
    display: flex;
    flex-direction: column;
  }
  .left {
    margin-bottom: 12px;
  }

  @media (min-width: 768px) {
    text-align: start;

    .left {
      margin-right: 48px;
      margin-bottom: 0;
    }
    .button {
      flex-direction: row;
    }
  }
`;

export const HubspotFormWrapper = styled.div`
  padding: 24px;

  @media (min-width: 1024px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

export const ImageWrapper = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: 2px solid #333333;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .thumbnail-container {
      border-radius: 0 24px 24px 0;
      flex-basis: 50%;
      max-width: 50%;
    }
    .aspect {
      padding-bottom: 75%;
    }
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    align-self: start;
    display: flex;
  }
`;

export const CardSubTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;

  @media (min-width: 375px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.015em;
  }
  @media (min-width: 768px) {
    margin-left: 12px;
  }
`;

export const ClientWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 2px solid #333333;
    margin-bottom: 36px;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-basis: 50%;
    max-width: 50%;
    padding: 0 24px 0 24px;

    &:not(:last-child) {
      border-right: 2px solid #333333;
      border-bottom: 0;
      margin-bottom: 0;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;

  @media (min-width: 768px) {
    padding: 24px 72px 24px 72px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 24px;
  }
`;

export const TestimonialWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .text {
    text-align: center;
    margin-bottom: 0;
    color: #a5a5a5;
  }
  .text-two {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
    max-width: 50%;
    padding: 24px 48px 24px 24px;
    text-align: start;

    .text,
    .text-two {
      text-align: end;
    }
  }
`;

export const CardWrapper = styled.div`
  background: #222222;
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25), 0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714),
    0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027), 0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125),
    0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973), 0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864);
  border-radius: 24px;
  margin: 24px;

  @media (min-width: 1024px) {
    margin: 24px 48px 24px 48px;
  }
`;
