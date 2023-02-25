import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';

// Assets
import IconInstagram from '../../../assets/images/icons/icon-instagram.svg';
import IconTwitter from '../../../assets/images/icons/icon-twitter.svg';
import IconFacebook from '../../../assets/images/icons/icon-facebook.svg';
import IconWebsite from '../../../assets/images/icons/icon-website.svg';
import ImageAppear from '../../../assets/images/icons/image-appear.svg';

// Styled
import {
  Wrapper,
  RootWrapper,
  ArtistHeadline,
  ArtistDescription,
  SocialItem,
  SocialIcon,
  SocialTitle,
  AppearWrapper,
  AppearItem,
  AppearImage,
  AppearTitle,
  AppearGroup,
} from './styled';

const socialList = [
  { title: 'Instagram', link: '', icon: IconInstagram },
  { title: 'Twitter', link: '', icon: IconTwitter },
  { title: 'Facebook', link: '', icon: IconFacebook },
  { title: 'Website', link: '', icon: IconWebsite },
];

const appearList = [
  { title: 'Generative', image: ImageAppear },
  { title: 'Abstract', image: ImageAppear },
  { title: 'Oddly Satisfying', image: ImageAppear },
  { title: 'Generative Image', image: ImageAppear },
];

export function ArtistAbout(props) {
  const { artist } = props;

  return (
    <RootWrapper>
      <Flex flexWrap="wrap">
        <Box width={[1, 3 / 4, 3 / 4]} pr={24}>
          <ArtistHeadline>Bio</ArtistHeadline>
          <ArtistDescription
            dangerouslySetInnerHTML={{ __html: artist?.data?.bio?.replace(/(?:\r\n|\r|\n)/g, '<br />') }}
          />
        </Box>
        <Box width={[1, 1 / 4, 1 / 4]} pr={24}>
          <Wrapper>
            <ArtistHeadline>More Info</ArtistHeadline>
            <Wrapper>
              {socialList.map((socialItem) => (
                <Wrapper key={socialItem.title}>
                  <SocialItem href={socialItem.link}>
                    <SocialIcon src={socialItem.icon} />
                    <SocialTitle>{socialItem.title}</SocialTitle>
                  </SocialItem>
                </Wrapper>
              ))}
            </Wrapper>
          </Wrapper>
          <AppearWrapper>
            <ArtistHeadline>Appears in</ArtistHeadline>
            <Wrapper>
              {appearList.map((appear) => (
                <Wrapper key={appear.title}>
                  <AppearItem>
                    <AppearImage src={appear.image} />
                    <Wrapper>
                      <AppearTitle>{appear.title}</AppearTitle>
                      <AppearGroup>envision</AppearGroup>
                    </Wrapper>
                  </AppearItem>
                </Wrapper>
              ))}
            </Wrapper>
          </AppearWrapper>
        </Box>
      </Flex>
    </RootWrapper>
  );
}

ArtistAbout.propTypes = {
  artist: PropTypes.array.isRequired,
};

ArtistAbout.defaultProps = {};
