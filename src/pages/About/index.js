import React from 'react';
import styled from '@emotion/styled';
import { dataOne } from './data';

const Wrapper = styled.div``;
const VideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
const VideoAspectRatioBoxHeader = styled.div`
  height: 40vh;
  overflow: hidden;
  padding: 0;
  position: relative;
`;
const VideoFrame = styled.div``;

const VimeoVideoHeader = styled.iframe`
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
`;
const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  @media (min-width: 1440px) {
    padding: 48px;
  }
`;
const TopHeader = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-transform: none;
  margin: 0;
  @media (max-width: 699px) {
    font-size: 48px;
  }
`;
const TopSubheader = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: auto;
  @media (max-width: 699px) {
    flex-direction: column;
  }
  @media (min-width: 700px) {
  }
  @media (min-width: 1000px) {
  }
`;
const SectionTop = styled.div`
  flex-basis: 100%;
  margin: auto;
  max-width: 1440px;
  text-align: center;
  padding: 24px;
`;
const SectionText = styled.div`
  flex-basis: 50%;
  padding: 24px;
`;
const SectionImage = styled.div`
  flex-basis: 50%;
`;
const SectionTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  margin: 0;
  text-transform: none;
`;

const SectionBody = styled.h3`
  @media (max-width: 699px) {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
  @media (min-width: 700px) {
    font-size: 16px;
    line-height: 24px;
  }
  padding: 6px;
  font-weight: normal;
  text-transform: none;
  margin: 0;
`;
const SectionName = styled.h2`
  @media (max-width: 699px) {
    text-align: center;
  }
  padding: 5px;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  text-transform: none;
  margin: 0;
`;
const SectionJob = styled.h3`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  text-transform: none;
  margin: 0;
`;
const AboutImage = styled.img`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
`;
const ImageAspectRatioBox = styled.div`
  width: 100%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
  position: relative;
`;

const About = () => {
  return (
    <Wrapper>
      <VideoContainer>
        <VideoAspectRatioBoxHeader>
          <VideoFrame>
            <VimeoVideoHeader
              src="https://player.vimeo.com/video/437321595?muted=1&autoplay=1&loop=1&autopause=0&controls=0"
              frameborder="0"
              allow="autoplay;"
            />
          </VideoFrame>
          <HeaderWrapper>
            <TopHeader>About envision.</TopHeader>
            <TopSubheader>Art by Maxim</TopSubheader>
          </HeaderWrapper>
        </VideoAspectRatioBoxHeader>
      </VideoContainer>
      <SectionTop>
        <SectionTitle>{dataOne.title}</SectionTitle>
      </SectionTop>
      <Section>
        <SectionText>
          <SectionBody>{dataOne.bodyOne}</SectionBody>
          <SectionBody>{dataOne.bodyTwo}</SectionBody>
          <SectionBody>{dataOne.bodyThree}</SectionBody>
          <SectionBody>{dataOne.bodyFour}</SectionBody>
          <SectionBody>{dataOne.bodyFive}</SectionBody>
          <SectionName>
            {dataOne.bodySix}
            <SectionJob>{dataOne.bodySeven}</SectionJob>
          </SectionName>
        </SectionText>
        <SectionImage>
          <VideoContainer>
            <ImageAspectRatioBox paddingBottom="133.33">
              <VideoFrame>
                <AboutImage src={dataOne.image} />
              </VideoFrame>
            </ImageAspectRatioBox>
          </VideoContainer>
        </SectionImage>
      </Section>
    </Wrapper>
  );
};
export default About;
