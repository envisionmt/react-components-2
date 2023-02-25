import React from 'react';

// Components
import { Button } from '../../../components/Button';

// Data
import { dataOne } from './data';

// Styled
import {
  Wrapper,
  Header,
  IconWrapper,
  IconHeader,
  Icon,
  CardHeader,
  CardDescription,
  TopCardWrapper,
  CardContainer,
  ThumbnailContainer,
  ThumbnailAspectRatioBox,
  ThumbnailFrame,
  ThumbnailImage,
  CardTextContainer,
  CardTitle,
  CardText,
  CardFormContainer,
  CardFormHeader,
  VideoContainer,
  VideoAspectRatioBox,
  VideoAspectRatioBoxHeader,
  VideoFrame,
  VimeoVideoHeader,
  SectionCardHeader,
  HubspotFormWrapper,
  ImageWrapper,
  FlexContainer,
  TitleWrapper,
  CardSubTitle,
  ClientWrapper,
  FlexWrapper,
  TestimonialWrapper,
  CardWrapper,
  VideoContainerTwo,
  CardTextContainerTwo,
  ClientTitle,
  TopCardWrapperTwo,
} from './styled';

const Partners = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/shell.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '5104433',
          formId: '181d3a10-07f4-4bcd-80e6-f2d00aee3be8',
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <div>
      <VideoContainer>
        <VideoAspectRatioBoxHeader>
          <VideoFrame>
            <VimeoVideoHeader
              src="https://player.vimeo.com/video/433388133?muted=1&autoplay=1&loop=1&autopause=0&controls=0"
              frameborder="0"
              allow="autoplay;"
            />
          </VideoFrame>
          <Header>
            <h1>Digital Art Installation</h1>
          </Header>
        </VideoAspectRatioBoxHeader>
      </VideoContainer>

      <Wrapper>
        <VideoContainerTwo>
          <VideoAspectRatioBox className="video-two" paddingTop="56.25">
            <VideoFrame>
              <VimeoVideoHeader
                src="https://player.vimeo.com/video/433390848?muted=1&autoplay=1&loop=1&autopause=0&controls=0"
                frameborder="0"
                allow="autoplay;"
              />
            </VideoFrame>
            <SectionCardHeader>
              <CardHeader>Digital Art Installations Anywhere</CardHeader>
              <CardDescription>
                Offer your clients an unparalleled digital art experience: Build in envision.
              </CardDescription>
              <div className="button">
                <Button color="red" className="left" href="https://reseller.envision.com/login" target="_blank">
                  Become a Partner
                </Button>
                <Button color="red" className="right" href="#hubspotForm">
                  Contact Us
                </Button>
              </div>
            </SectionCardHeader>
          </VideoAspectRatioBox>
        </VideoContainerTwo>
        <div>
          <TopCardWrapper>
            {dataOne.firstCards.map((card) => (
              <CardContainer className="first">
                <ThumbnailContainer borderRadius="24px 24px 0 0">
                  <ThumbnailAspectRatioBox paddingBottom="56.25%">
                    <ThumbnailFrame>
                      <ThumbnailImage backgroundImage={card.image} />
                    </ThumbnailFrame>
                  </ThumbnailAspectRatioBox>
                </ThumbnailContainer>
                <CardTextContainer>
                  {card?.title && <CardTitle className="title">{card.title}</CardTitle>}
                  {card?.text && <CardText className="text">{card.text}</CardText>}
                  {card?.textTwo && <CardText>{card.textTwo}</CardText>}
                  {card?.textThree && <CardText>{card.textThree}</CardText>}
                </CardTextContainer>
              </CardContainer>
            ))}
          </TopCardWrapper>
          <TopCardWrapper>
            <CardContainer className="integration">
              <TitleWrapper>
                <CardTitle>Seamless Integrations</CardTitle>
              </TitleWrapper>
              {dataOne.secondCards.map((card) => (
                <FlexContainer>
                  <ImageWrapper>
                    <img src={card.image} alt="device integration" />
                  </ImageWrapper>
                  <CardTextContainer>
                    {card?.title && <CardSubTitle>{card.title}</CardSubTitle>}
                    {card?.text && <CardText>{card.text}</CardText>}
                    {card?.textTwo && <CardText>{card.textTwo}</CardText>}
                    {card?.textThree && <CardText>{card.textThree}</CardText>}
                  </CardTextContainer>
                </FlexContainer>
              ))}
            </CardContainer>
          </TopCardWrapper>
          <CardWrapper>
            {dataOne.testimonial.map((card) => (
              <FlexContainer>
                <TestimonialWrapper>
                  {card?.title && <CardSubTitle>{card.title}</CardSubTitle>}
                  {card?.text && <CardText className="text">{card.text}</CardText>}
                  {card?.textTwo && <CardText className="text-two">{card.textTwo}</CardText>}
                </TestimonialWrapper>
                <ThumbnailContainer className="thumbnail-container" borderRadius="0 0 24px 24px">
                  <ThumbnailAspectRatioBox className="aspect" paddingBottom="56.25%">
                    <ThumbnailFrame>
                      <ThumbnailImage backgroundImage={card.image} />
                    </ThumbnailFrame>
                  </ThumbnailAspectRatioBox>
                </ThumbnailContainer>
              </FlexContainer>
            ))}
          </CardWrapper>
          <IconWrapper>
            <TitleWrapper>
              <CardTitle className="title">Industry Partners</CardTitle>
            </TitleWrapper>
            <div>
              <IconHeader>
                <p>Home Automation</p>
              </IconHeader>
              <div className="iconsTwo">
                {dataOne.iconsThree.map((icon) => (
                  <Icon className="iconThree" src={icon} />
                ))}
              </div>
            </div>
            <div>
              <IconHeader>
                <p>Display Integrations</p>
              </IconHeader>
              <div className="iconsTwo">
                {dataOne.iconsTwo.map((icon) => (
                  <Icon className="iconTwo" src={icon} />
                ))}
              </div>
            </div>
          </IconWrapper>
          <TopCardWrapperTwo>
            <CardContainer>
              <TitleWrapper>
                <ClientTitle>Client Installs</ClientTitle>
              </TitleWrapper>
              <FlexWrapper>
                {dataOne.fourthCards.map((card) => (
                  <ClientWrapper>
                    <ThumbnailContainer className="install" borderRadius="24px 24px 24px 24px">
                      <ThumbnailAspectRatioBox paddingBottom="133.33%">
                        <ThumbnailFrame>
                          <ThumbnailImage backgroundImage={card.image} />
                        </ThumbnailFrame>
                      </ThumbnailAspectRatioBox>
                    </ThumbnailContainer>
                    <CardTextContainerTwo>
                      {card?.title && <CardTitle className="title">{card.title}</CardTitle>}
                      {card?.text && <CardText className="text">{card.text}</CardText>}
                      {card?.textTwo && <CardText className="text">{card.textTwo}</CardText>}
                      {card?.textThree && <CardText className="text">{card.textThree}</CardText>}
                    </CardTextContainerTwo>
                  </ClientWrapper>
                ))}
              </FlexWrapper>
            </CardContainer>
          </TopCardWrapperTwo>
          <CardFormContainer>
            <CardFormHeader>
              <h1>Partner with envision</h1>
              <div>
                Enhance the visual appeal of the displays you are installing, make your clients happier and earn new
                revenues.
              </div>
              <Button color="red" href="https://reseller.envision.com/login" target="_blank">
                Become A Reseller
              </Button>
            </CardFormHeader>
            <HubspotFormWrapper>
              <CardHeader>Contact Us</CardHeader>
              <div className="contact" id="hubspotForm" />
            </HubspotFormWrapper>
          </CardFormContainer>
        </div>
      </Wrapper>
    </div>
  );
};

export default Partners;
