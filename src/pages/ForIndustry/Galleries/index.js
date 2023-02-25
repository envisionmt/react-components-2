import React from 'react';
import { dataOne, dataTwo, dataThree, dataFour, dataFive, dataSix } from './data';

import {
  Wrapper,
  HeaderWrapper,
  TopHeader,
  TopSubheader,
  Section,
  SectionTitle,
  FlexContainer,
  CardItem,
  CardItemTwo,
  CardTop,
  CardBot,
  IconContainer,
  CardIcon,
  VideoContainer,
  VideoAspectRatioBox,
  VideoAspectRatioBoxHeader,
  VideoFrame,
  VimeoVideoHeader,
  VimeoVideo,
} from './styled';

const Galleries = () => {
  return (
    <Wrapper>
      <VideoContainer>
        <VideoAspectRatioBoxHeader>
          <VideoFrame>
            <VimeoVideoHeader
              src="https://player.vimeo.com/video/435229013?muted=1&autoplay=1&loop=1&autopause=0&controls=0"
              frameborder="0"
              allow="autoplay;"
            />
          </VideoFrame>
          <HeaderWrapper>
            <TopHeader>Galleries</TopHeader>
            <TopSubheader>Art by Kaya Hacaloglu</TopSubheader>
          </HeaderWrapper>
        </VideoAspectRatioBoxHeader>
      </VideoContainer>
      <Section>
        <SectionTitle>{dataOne.title}</SectionTitle>
        <FlexContainer flexDirection="row">
          {dataOne.cards.map((card) => (
            <CardItem>
              <CardTop>{card.top}</CardTop>
              <CardBot>{card.bot}</CardBot>
            </CardItem>
          ))}
        </FlexContainer>
        {/* <ButtonContainer>
          <MainButton
            type="button"
            color="red"
            borderColor="#222222"
            title="Contact Us"
            onClick={() => history.push('/contact')}
          />
        </ButtonContainer> */}
      </Section>
      <Section>
        <SectionTitle>{dataTwo.title}</SectionTitle>
        <FlexContainer flexDirection="row">
          {dataTwo.cards.map((card) => (
            <CardItem>
              <IconContainer>
                <CardIcon src={card.icon} />
              </IconContainer>
              <CardTop>{card.top}</CardTop>
              <CardBot>{card.bot}</CardBot>
            </CardItem>
          ))}
        </FlexContainer>
        {/* <ButtonContainer>
          <MainButton
            type="button"
            color="red"
            borderColor="#222222"
            title="Our Technology"
            onClick={() => history.push('/technology')}
          />
        </ButtonContainer> */}
      </Section>
      <VideoContainer>
        <VideoAspectRatioBox paddingBottom="56.25">
          <VideoFrame>
            <VimeoVideo
              src="https://player.vimeo.com/video/404985563?muted=1&autoplay=1&loop=1&autopause=0&controls=0"
              frameborder="0"
              allow="autoplay;"
            />
          </VideoFrame>
        </VideoAspectRatioBox>
      </VideoContainer>
      <Section>
        <SectionTitle>{dataThree.title}</SectionTitle>
        <FlexContainer flexDirection="column" marginBottom="20px">
          {dataThree.cards.map((card) => (
            <CardItemTwo>
              <CardTop>{card.top}</CardTop>
              <CardBot>{card.bot}</CardBot>
              {card?.botTwo && <CardBot>{card.botTwo}</CardBot>}
            </CardItemTwo>
          ))}
        </FlexContainer>
      </Section>
      <Section>
        <SectionTitle>{dataFour.title}</SectionTitle>
        <FlexContainer flexDirection="row" marginBottom="20px">
          {dataFour.cards.map((card) => (
            <CardItem>
              <IconContainer>
                <CardIcon src={card.icon} />
              </IconContainer>
              <CardTop>{card.top}</CardTop>
            </CardItem>
          ))}
        </FlexContainer>
        {/* <ButtonContainer>
          <MainButton
            type="button"
            color="red"
            borderColor="#222222"
            title="Get in Touch"
            onClick={() => history.push('/technology')}
          />
        </ButtonContainer> */}
      </Section>
      <Section>
        <FlexContainer flexDirection="column" marginBottom="20px">
          <CardItemTwo>
            <SectionTitle>{dataFive.title}</SectionTitle>
            <CardBot>{dataFive.top}</CardBot>
            {/* <ButtonContainer minWidth="50%" alignSelf="center">
              <MainButton
                type="button"
                color="red"
                borderColor="#222222"
                title="Learn More"
                onClick={() => history.push('/contact')}
              />
            </ButtonContainer> */}
          </CardItemTwo>
        </FlexContainer>
      </Section>
      <Section>
        <CardItemTwo>
          <SectionTitle>{dataSix.title}</SectionTitle>
        </CardItemTwo>
      </Section>
    </Wrapper>
  );
};

export default Galleries;
