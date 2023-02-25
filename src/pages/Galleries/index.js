import React from 'react';
import logo from '../../components/Images/envision-logo.png';
import imnotArtLogo from '../../components/Images/imnotart-logo.svg';

// Styled
import {
  Wrapper,
  GalleriesWrapper,
  HeadWrapper,
  HeadTopic,
  Container,
  ContentContainer,
  Header,
  Logo,
  FirstAddress,
} from './styled';

const Galleries = () => {
  return (
    <Wrapper>
      <GalleriesWrapper>
        <HeadWrapper>
          <HeadTopic>Galleries</HeadTopic>
        </HeadWrapper>
        <Container>
          <ContentContainer>
            <Header>
              <Logo src={logo} />
            </Header>
            <FirstAddress>69 NE 41st St. Miami, FL. 11AM-7PM</FirstAddress>
          </ContentContainer>
          <ContentContainer>
            <Header>
              <Logo src={imnotArtLogo} />
            </Header>
            <FirstAddress>1010 Ashland Ave, Chicago, IL 60622</FirstAddress>
          </ContentContainer>
        </Container>
      </GalleriesWrapper>
    </Wrapper>
  );
};

export default Galleries;
