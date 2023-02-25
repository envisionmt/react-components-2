import React from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import ReactPlayer from 'react-player';

import MainButton from '../../../components/Button/MainButton';
import ProcessCard from '../../../components/ForIndustry/ProcessCard';

const RootWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  ${'' /* padding-top: 100px; */}
  color: #000;
`;

const MainContentWrapper = styled.div`
  position: relative;
  background-color: #fff;
  z-index: 10;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  padding: 24px;
  align-items: center;
  position: relative;
  background: url('https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594437878316-IQG1KK62GJKP30UZBLRV/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Bespoke-Residential-2.jpg');
  background-size: cover;

  @media (max-width: 320px) {
    height: 230px;
    padding: 6px 24px;
    align-items: flex-end;
  }

  @media (min-width: 375px) {
    height: 255px;
  }

  @media (min-width: 425px) {
    height: 292px;
  }

  @media (min-width: 768px) {
    height: 475px;
  }

  @media (min-width: 1024px) {
    height: 578px;
  }

  @media (min-width: 1200px) {
    height: 475px;
  }

  @media (min-width: 1440px) {
    height: 700px;
  }
`;

const VideoBackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  filter: brightness(0.775);

  @media (max-width: 325px) {
    top: -49%;
  }

  @media (min-width: 375px) {
    top: -48.8%;
  }

  @media (min-width: 425px) {
    top: -48.6%;
  }

  @media (min-width: 768px) {
    top: -47.2%;
  }

  @media (min-width: 1024px) {
    top: -46.5%;
  }

  @media (min-width: 1200px) {
    top: -45%;
    height: 101%;
  }

  @media (min-width: 1360px) {
    top: -45%;
    height: 101%;
  }

  @media (min-width: 1440px) {
    top: -44%;
    height: 100%;
  }
`;

const SliderContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h2`
  white-space: pre-wrap;
  color: #fff;
  opacity: 1 !important;
  font-weight: 700;
  letter-spacing: 0em;
  text-transform: none;
  font-size: 30px;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 50px;
  }
`;
// const ButtonWrapper = styled.div`
//   max-width: 250px;
//   height: 60px;
//   margin: 0 auto;

//   @media (min-width: 1200px) {
//     margin: 0;
//   }
// `;

const ProcessWrapper = styled.div`
  padding: 48px 24px;
`;
const PageWrapperTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: ${({ textAlign }) => textAlign};
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  margin-bottom: 30px;
`;
const ProcessCardWrapper = styled.div`
  margin: 48px 0;
`;
// const ScheduleButtonWrapper = styled.div`
//   max-width: 250px;
//   margin: 0 auto;
// `;

const SectionImageContentWrapper = styled.div`
  margin: 48px 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const SectionLeftImageWrapper = styled.div`
  @media (min-width: 1200px) {
    flex: 1;
  }
`;

const SectionVideoWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    flex: 1;
    justify-content: flex-start;
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  ${'' /* height: 320px; */}
  object-fit: cover;
`;
const SectionContentWrapper = styled.div`
  padding-left: 0px;
  margin-top: 50px;

  @media (min-width: 1200px) {
    flex: 1;
    padding-left: ${({ contentAlign }) => (contentAlign === 'right' ? '50px' : '0px')};
    padding-right: ${({ contentAlign }) => (contentAlign === 'left' ? '50px' : '0px')};
    margin-top: 0px;
  }
`;

const TestimonialTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
`;
const TestimonialDescription = styled.div`
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 20px;
`;

const ResellerWrapper = styled.div`
  margin: 48px 24px;
`;
const ResellerWrapperWrapperTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const ResellerDescription = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;
const ResellerForm = styled.form``;

const ResellerInputWrapper = styled.div`
  margin-bottom: 20px;
`;
const ResellerInputLabel = styled.label`
  font-size: 14px;
`;
const ResellerInput = styled.input`
  width: 100%;
  height: 40px;
  min-height: 27px;
  padding: 0 15px;
  color: #33475b;
  border: 1px solid #cbd6e2;
  font-size: 16px;
  border-radius: 3px;
  margin-top: 6px;

  &:focus {
    outline: none !important;
    border: 1px solid #a1c9f5;
  }
`;
const ResellerButtonWrapper = styled.div`
  max-width: 200px;
  margin-bottom: 30px;
`;
const ResellerFormDescription = styled.div`
  font-size: 14px;
  color: #9fa0a2;
`;
const ResellerFormDescriptionLink = styled.a`
  font-size: 14px;
  color: #00a4bd;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IndustryPartnerWrapper = styled.div`
  margin: 50px 0;
`;

const BrandListWrapper = styled.div`
  padding: 50px;
`;

const BrandImage = styled.img`
  width: 100%;
  padding: 17px;
`;

// const BlackdovArtServerWrapper = styled.div`
//   margin: 48px 24px;
// `;
const BlakcdovArtServerImage = styled.img`
  width: 100%;
  ${'' /* height: 450px; */}

  @media (min-width: 768px) {
    object-fit: cover;
  }
`;
const BlackdovArtServerImageTitle = styled.div`
  font-size: 24px;
`;
// const BlackdovArtServerContentWrapper = styled.div``;

const BlackdovArtServerTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const BlackdovArtServerDescription = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
`;

const SalesToolsWrapper = styled.div`
  margin: 48px 24px;
`;
const SalesToolsDescription = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const SectionWrapper = styled.div`
  margin: 48px 24px;
`;

const DemoReelVideo = styled.img`
  width: 100%;
  ${'' /* height: 450px; */}

  @media (min-width: 768px) {
    object-fit: cover;
  }
`;

const SectionDescription = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;
const SectionBolderDescription = styled.div`
  font-size: 24px;
  font-weight: bold;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

const BlankPaddingWrapper = styled.div`
  padding: 50px 0;
`;

const ProcessCards = [
  {
    id: 1,
    image:
      'https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594570550669-GTB770UMPXAKRMTTX4HN/ke17ZwdGBToddI8pDm48kHOmGmucjDx_6E7J80mRv7h7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnXLHvBiOtle3etG5yNhNTvRTWbpOatqnERb4HrLSMN7a-rFt0ctYpur050k7vBx8/Screen+Shot+2020-07-12+at+12.15.07+PM.png',
    title: 'Design',
    description:
      'envision stands with our dealers to deliver integrated video art experiences for each and every client.    Our technology has been designed from the ground up to offer seamless installation experiences from single displays to large scale video walls.',
  },
  {
    id: 2,
    image:
      'https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594570702436-GWQ7OCGCYZJ5LDX4PDNW/ke17ZwdGBToddI8pDm48kBPMMS5ynHyxJ08eCIfpQRd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQunjw30uW4GIKkGs9me1rJSAdIRUpibCQQ_RattsYvdCgjgqE8Wle6R9yfHq1BJB/Screen+Shot+2020-07-12+at+12.17.58+PM.png',
    title: 'Curation',
    description:
      'Our art highlights the technical elegance that home automation installations provide to clients.   envision’s art advisory team will work with the interior designer, client representative or client to find the perfect single work or collection for installation.',
  },
  {
    id: 3,
    image:
      'https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594570941314-Y4X54YPNVAY34TQKIEHO/ke17ZwdGBToddI8pDm48kDU6iBt7enJ0dI4wzn3rNqMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2ddMOtz74N38tKb_BIN-WRscAEegvwL6zEC97Lv8fD1YKMshLAGzx4R3EDFOm1kBS/Screen+Shot+2020-07-12+at+12.21.10+PM.png',
    title: 'Support',
    description:
      'Our technical support commitment is 100% to our dealers.  In addition to the training and documentation available online at our CEDIA support page, we offer a private support hotline for your technical team to assure there are no installation issues.  Remote management and monitoring available.',
  },
];

export default function ForIndustry() {
  // const handleMoveToMeeting = () => {
  //   window.location = 'https://meetings.hubspot.com/dan449/10-minute-call-with-dan-mikesell';
  // };

  // const handleMoveToVideoDemo = (url) => {
  //   window.location = url;
  // };

  return (
    <RootWrapper>
      <VideoBackgroundWrapper>
        <ReactPlayer
          className="react-player"
          url="https://vimeo.com/433388133/00ffd82bf5"
          width="100%"
          height="100%"
          loop
          playing
          muted
        />
      </VideoBackgroundWrapper>
      <SliderWrapper>
        <SliderContentWrapper>
          <PageTitle>Our CEDIA Partners define our success.</PageTitle>
          {/* <ButtonWrapper>
            <MainButton color="red" title="Get In Touch" onClick={handleMoveToMeeting} />
          </ButtonWrapper> */}
        </SliderContentWrapper>
      </SliderWrapper>
      <MainContentWrapper>
        <MainContent>
          <ProcessWrapper>
            <PageWrapperTitle textAlign="center">Our Process</PageWrapperTitle>
            <ProcessCardWrapper>
              <Flex flexWrap="wrap">
                {ProcessCards.map((process, index) => (
                  <Box
                    width={[1, 1 / 3, 1 / 3]}
                    pr={[0, index % 3 !== 2 ? 24 : 0, index % 3 !== 2 ? 24 : 0]}
                    mb={24}
                    key={process.id}
                  >
                    <ProcessCard process={process} />
                  </Box>
                ))}
              </Flex>
            </ProcessCardWrapper>
            {/* <ScheduleButtonWrapper>
              <MainButton color="grey" title="Schedule A Call" onClick={handleMoveToMeeting} />
            </ScheduleButtonWrapper> */}
          </ProcessWrapper>
          <BlankPaddingWrapper />
          <SectionImageContentWrapper>
            <SectionLeftImageWrapper>
              <TestimonialImage src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594007677211-UTXDVHS6RHWA0U3BKTMD/ke17ZwdGBToddI8pDm48kL4DOY4me-4EzFudtdlscHh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oAWAfVRGSOrZPYCWkdtbdyIlt8TffsEoK3mqxRmEF7PEz2IfzeC0H-QCmAo8DJHYQ/Screen+Shot+2020-07-05+at+11.53.46+PM.png" />
            </SectionLeftImageWrapper>
            <SectionContentWrapper contentAlign="right">
              <TestimonialTitle>Testimonial : </TestimonialTitle>
              <TestimonialDescription>
                “The envision team delivered technically and artistically an installation that was well beyond our
                expectations”
              </TestimonialDescription>
              <TestimonialDescription>Max Schuitema, Audio-One.</TestimonialDescription>
              {/* <ButtonWrapper>
                <MainButton
                  color="grey"
                  title="See The Video"
                  onClick={() => handleMoveToVideoDemo('https://vimeo.com/358161462')}
                />
              </ButtonWrapper> */}
            </SectionContentWrapper>
          </SectionImageContentWrapper>
          <BlankPaddingWrapper />
          <ResellerWrapper>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box width={[1, 1, 2 / 3]} pr={[0, 0, 80]}>
                <ResellerWrapperWrapperTitle>Apply to be a Reseller</ResellerWrapperWrapperTitle>
                <ResellerDescription>
                  envision partners with CEDIA firms to serve our clients globally. We will work with you to develop
                  your understanding of our platform and best practices to delivery a video art experience to your
                  clients.
                </ResellerDescription>
                <ResellerDescription>
                  envision partners with CEDIA firms to serve our clients globally. We will work with you to develop
                  your understanding of our platform and best practices to delivery a video art experience to your
                  clients.
                </ResellerDescription>
              </Box>
              <Box width={[1, 1, 1 / 3]} mt={[30, 30, 0]}>
                <ResellerForm>
                  <ResellerInputWrapper>
                    <ResellerInputLabel>First name</ResellerInputLabel>
                    <ResellerInput type="text" />
                  </ResellerInputWrapper>
                  <ResellerInputWrapper>
                    <ResellerInputLabel>Email*</ResellerInputLabel>
                    <ResellerInput type="text" required />
                  </ResellerInputWrapper>
                  <ResellerInputWrapper>
                    <ResellerInputLabel>Company name</ResellerInputLabel>
                    <ResellerInput type="text" required />
                  </ResellerInputWrapper>
                  <ResellerButtonWrapper>
                    <MainButton type="submit" color="grey" title="Submit" />
                  </ResellerButtonWrapper>
                </ResellerForm>
                <ResellerFormDescription>
                  Create your own
                  <ResellerFormDescriptionLink href="#">free from with HubSpot</ResellerFormDescriptionLink>
                </ResellerFormDescription>
              </Box>
            </Flex>
          </ResellerWrapper>
          <BlankPaddingWrapper />
          <IndustryPartnerWrapper>
            <PageWrapperTitle textAlign="center">Industry Partners</PageWrapperTitle>
            <BrandListWrapper>
              <Flex flexWrap="wrap">
                <Box width={[1, 1 / 4, 1 / 4]}>
                  <BrandImage src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594006611300-IEURL76TFTSGGKWO9ZZF/ke17ZwdGBToddI8pDm48kGGu02UBdRZCRSlN335Sb01Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxsfebIXM3GfYSgI314MHgBGstdFUh5c2wsj7_RFsjdaowpesLkHggGDmS95hiRpg4/Screen+Shot+2020-07-05+at+11.36.34+PM.png" />
                </Box>
                <Box width={[1, 1 / 4, 1 / 4]}>
                  <BrandImage src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594006318250-BZF67DHCMXN7HWO4EWXL/ke17ZwdGBToddI8pDm48kO2CiphzUehIJAkDnUR2ZMPlfiSMXz2YNBs8ylwAJx2qgRUppHe6ToX8uSOdETM-XldvY_sAIyUlfjhoEMtv77F8xUkqNgOcQf3COFOJ6oe2IrWNPI4MRykVkNHP2pxA1TdGgOR2sWM2BGU9um_-eZg/Savant+Logo.png" />
                </Box>
                <Box width={[1, 1 / 4, 1 / 4]}>
                  <BrandImage src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594006471137-8E9VH7IFVZL00O5MYO82/ke17ZwdGBToddI8pDm48kFJ3ayBHR4EsqDSEpy4Sh19Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PILa4yYV60PLFfwLQnN6jXREXZt_UgqA4_3wKPXRPRVSs/Crestron+Logo+-+white+background.png" />
                </Box>
                <Box width={[1, 1 / 4, 1 / 4]}>
                  <BrandImage src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594006549724-C49KFANBJ8M98AL047QV/ke17ZwdGBToddI8pDm48kExVlEHgK_ZM0z06mtrSczlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PILVD0mAUsczKwwZszzIrZpId7aMLesyS_gOvXup0wAPo/Screen+Shot+2020-07-05+at+11.35.25+PM.png" />
                </Box>
              </Flex>
            </BrandListWrapper>
            <BlankPaddingWrapper />
            <SectionImageContentWrapper>
              <SectionLeftImageWrapper>
                <BlakcdovArtServerImage src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1594761072053-NCBCRKP9AHYNXMISDVNH/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/envision7215%2Bcopy.jpg" />
                <BlackdovArtServerImageTitle>envision Single Stream 4K 60FPS Media Player</BlackdovArtServerImageTitle>
              </SectionLeftImageWrapper>
              <SectionContentWrapper contentAlign="right">
                <BlackdovArtServerTitle>Blackdov Art Server</BlackdovArtServerTitle>
                <BlackdovArtServerDescription>
                  The essential media player for matrix switch based video distribution client installations. Single
                  HDMI output with 4K 60fps for all but the highest throughput works of art on our platform.
                </BlackdovArtServerDescription>
                <BlackdovArtServerDescription>
                  Set and forget, single installation for your installations. envision managed installation and support
                  included.
                </BlackdovArtServerDescription>
                <BlackdovArtServerDescription>
                  Media Player includes SSD Drive for locally caching client Art Collections on the LAN.
                </BlackdovArtServerDescription>
                <BlackdovArtServerDescription>Wifi and Ethernet(preferred) available.</BlackdovArtServerDescription>
              </SectionContentWrapper>
            </SectionImageContentWrapper>
          </IndustryPartnerWrapper>
          <BlankPaddingWrapper />
          <SalesToolsWrapper>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box width={[1, 1, 1 / 2]}>
                <PageWrapperTitle textAlign="left">Sales Tools for Dealer</PageWrapperTitle>
              </Box>
              <Box width={[1, 1, 1 / 2]}>
                <SalesToolsDescription>
                  When you are ready to begin offering envision to clients, we have prepared some materials for. These
                  tools and informational resources will help you inform your clients of envision to provide the best
                  experience possible.
                </SalesToolsDescription>
              </Box>
            </Flex>
          </SalesToolsWrapper>
          <BlankPaddingWrapper />
          <SectionImageContentWrapper>
            <SectionVideoWrapper>
              <ReactPlayer url="https://vimeo.com/440731650/96ce5b3218" controls muted playIcon />
            </SectionVideoWrapper>
            <SectionContentWrapper contentAlign="right">
              <PageWrapperTitle textAlign="left">Demo Reel.</PageWrapperTitle>
              <SectionDescription>
                It all begins with highlighting your client’s new television or display with incredible video art. The
                video to your left is downloadable with the below URL for you to carry with you on a USB drive.
              </SectionDescription>
              <SectionDescription>
                Below you will find instructions on completing a demonstration with an AppleTV or envision Media
                Player.
              </SectionDescription>
            </SectionContentWrapper>
          </SectionImageContentWrapper>
          <BlankPaddingWrapper />
          <SectionWrapper>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box width={[1, 1, 3 / 4]}>
                <PageWrapperTitle textAlign="left">The envision Story</PageWrapperTitle>
                <SectionBolderDescription>
                  It all begins with highlighting your client’s new television or display with incredible video art. The
                  video to your left is downloadable with the below URL for you to carry with you on a USB drive.
                </SectionBolderDescription>
              </Box>
            </Flex>
          </SectionWrapper>
          <SectionWrapper>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box width={[1, 1, 3 / 4]}>
                <PageWrapperTitle textAlign="left">Building a Collection</PageWrapperTitle>
                <SectionBolderDescription>
                  Curation of Art is the toughest item to work through with your Client, so we have a team of art
                  advisors standing by to support you. Please email support@envision.com with the subject ‘Art
                  Curation’ and a team member will get in touch immediately.
                </SectionBolderDescription>
              </Box>
            </Flex>
          </SectionWrapper>
          <SectionWrapper>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box width={[1, 3 / 4, 3 / 4]}>
                <PageWrapperTitle textAlign="left">Managing a Collection</PageWrapperTitle>
                <SectionBolderDescription>
                  Build a Collection of work and set the works to play on your television as a single work or in a
                  playlist format to keep your environment fresh and interesting. Use our integrations with Crestron,
                  Savant and Control4 to manage the playlists or download our iOS or Android mobile/tablet apps for easy
                  to access management and control.
                </SectionBolderDescription>
                <SectionBolderDescription>
                  https://apps.apple.com/us/app/envision-motion-art/id943637063
                </SectionBolderDescription>
              </Box>
            </Flex>
          </SectionWrapper>
          <BlankPaddingWrapper />
          <SectionImageContentWrapper>
            <SectionContentWrapper contentAlign="left">
              <PageWrapperTitle textAlign="left">Promotional Video.</PageWrapperTitle>
              <SectionDescription>
                Need a little bit of help explaining envision to your client? No problem. The video to your right is a
                great example of how we transform interiors with video art installations on television and bespoke
                displays. Feel free to share this video with the below URL.
              </SectionDescription>
              <SectionDescription>https://vimeo.com/404985563</SectionDescription>
            </SectionContentWrapper>
            <SectionVideoWrapper>
              <ReactPlayer url="https://vimeo.com/404985563" controls muted playIcon />
            </SectionVideoWrapper>
          </SectionImageContentWrapper>
          <BlankPaddingWrapper />
          <SectionImageContentWrapper>
            <SectionLeftImageWrapper>
              <DemoReelVideo src="https://images.squarespace-cdn.com/content/v1/5ee7d7ec6684e561596021aa/1595439675351-I5WC8V0R0LBA5B9E8UZ0/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/image-asset.jpeg" />
            </SectionLeftImageWrapper>
            <SectionContentWrapper contentAlign="right">
              <PageWrapperTitle textAlign="left">Demo Installations</PageWrapperTitle>
              <SectionDescription>Demo Installations</SectionDescription>
              <SectionDescription>
                Looking to include a leave behind at your client home? envision offers two ways to allow your clients
                to experience art on their television.
              </SectionDescription>
              <SectionDescription>
                envision Media Player: We are so confident your clients will love envision, we offer a 90 day no
                questions return policy on our media players. Please use the below link to purchase. This methodology
                provides the best experience for your client and offers remote support so envision can manage the
                installation and support.
              </SectionDescription>
              <SectionDescription>
                URL: https://envisionart.squarespace.com/config/pages/5f0e1eb8f218497def31ff3a
              </SectionDescription>
              <SectionDescription>
                AppleTV: AppleTV is a good option, with the requirement that you convert the device into ‘Single App
                Mode’. This launches the experience directly into the envision app avoiding any client facing technical
                support questions.
              </SectionDescription>
              <SectionDescription>
                Please find the instructions on how to do this here:
                https://envision.atlassian.net/servicedesk/customer/portal/21/article/465862659?src=523016350
              </SectionDescription>
            </SectionContentWrapper>
          </SectionImageContentWrapper>
          <BlankPaddingWrapper />
        </MainContent>
      </MainContentWrapper>
    </RootWrapper>
  );
}
