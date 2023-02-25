import React from 'react';
import { useHistory } from 'react-router-dom';
import { VideoPlayer } from '@envision/player';
import Web3 from 'web3';

// Components
import { Button } from '../../components/Button';
import { ArtworkCard } from '../../components/Artwork/Card';
import { CollectionCard } from '../../components/Collections/Card';
import { ArtistCard } from '../../components/Artists/Card';

// Hooks
import { useSingleArtwork, useSingleCollectionInfinite, useSingleArtist } from '../../hooks/data';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Assets
import digitalCanvas from '../../assets/images/digitalCanvasOne.webp';
import resolution from '../../assets/images/icons/4k.png';
import media from '../../assets/images/icons/Media Player.png';
import secure from '../../assets/images/icons/Secure Storage.png';
import smartphone from '../../assets/images/icons/Smartphone.png';

import {
  Wrapper,
  CarouselContainer,
  CarouselTextContainer,
  CarouselText,
  CarouselPricing,
  PricingItem,
  VideoAspectRatioBox,
  VideoFrameTwo,
  HeaderContainer,
  TopHeader,
  TopSubheader,
  Divider,
  CardContainer,
  CollectionContainer,
  InfoWrapper,
  FlexContainer,
  VideoFrame,
  ImageAspectRatioBox,
  ImageContainer,
  TextContainer,
  HeaderText,
  HeaderSubText,
  FeatureItem,
} from './styled';

const Home = () => {
  const history = useHistory();
  const { width } = useWindowDimensions();
  const landscape = useSingleArtwork('16d00');
  const portrait = useSingleArtwork('o8s00');
  const artworks = useSingleCollectionInfinite('05bd1e8a-2ad2-4ac8-ab36-aa2a7abd94aa');

  const collectionOne = useSingleCollectionInfinite('abf02b4d-7887-469f-b339-79e9cff396ce');
  const collectionTwo = useSingleCollectionInfinite('55fabc99-803a-4281-8134-02c63ef385f8');
  const collectionThree = useSingleCollectionInfinite('1cfb7f75-c839-40ac-9a3a-7373998effef');
  const collectionFour = useSingleCollectionInfinite('5657b510-4edc-4026-90b9-33b87fe99b15');
  const collectionFive = useSingleCollectionInfinite('edf96b67-f748-4ad3-aa34-fe189fb738fe');
  const collectionSix = useSingleCollectionInfinite('0c265f60-bd5a-4685-90d3-df1eb50c9e94');
  const collections = [collectionOne, collectionTwo, collectionThree, collectionFour, collectionFive, collectionSix];

  const artistOne = useSingleArtist('WVhKMGFYTjA0NTM4NThkMC03OWRmLTExZWEtYmUzMS0xZDM2ODcxYTY1ZDY=');
  const artistTwo = useSingleArtist('jonathanmccabe');
  const artistThree = useSingleArtist('benheim');
  const artistFour = useSingleArtist('mgoglktko');
  const artistFive = useSingleArtist('WVhKMGFYTjA0ZmIzNmJlMC01MGE0LTExZWMtOTZhZS0wOTExMTRkYjQ5NmU=');
  const artistSix = useSingleArtist('scorpiondagger');
  const artistSeven = useSingleArtist('WVhKMGFYTjA1YzdmM2ZkMC05NjFlLTExZWEtYTM5OS1iZDUxZjk0YTUwMGQ=');
  const artistEight = useSingleArtist('WVhKMGFYTjAxYjA5MmViMC03ZWU0LTExZTgtOWYyOC1iZmE0YjhhZjBiMGM=');
  const artists = [artistOne, artistTwo, artistThree, artistFour, artistFive, artistSix, artistSeven, artistEight];

  return (
    <>
      <CarouselContainer height={window.innerHeight}>
        <VideoAspectRatioBox paddingBottom="177.78%" paddingBottomLarge="56.25%">
          {width > 767 ? (
            <>
              <VideoFrameTwo>
                <VideoPlayer
                  videoUrl={landscape.data?.media.video.hls}
                  posterUrl={landscape.data?.media?.image.low.landscape}
                  artistName=""
                  initialize
                  autoplay
                  muted
                  showLogo={false}
                  showLoading={false}
                />
              </VideoFrameTwo>
              {landscape.data && (
                <>
                  <CarouselTextContainer>
                    <CarouselText>
                      <div className="title">{landscape?.data?.name}</div>
                      <div className="artist" onClick={() => history.push(`/artists/${landscape.data?.artist?.id}`)}>
                        <img src={landscape?.data?.artist?.media?.images?.avatar} alt="artist avatar" />
                        <div className="name">{landscape?.data?.artist.displayName}</div>
                      </div>
                    </CarouselText>
                    <CarouselPricing>
                      <PricingItem className="left">
                        <div className="top">Price</div>
                        <div className="bot">
                          {Web3.utils.fromWei(landscape.data?.tokenMetadata?.price || '0', 'ether')} ETH
                        </div>
                      </PricingItem>
                      <div className="divider" />
                      <PricingItem className="right">
                        <div className="top">Editions</div>
                        <div className="bot">{landscape.data?.tokenMetadata?.total}</div>
                      </PricingItem>
                    </CarouselPricing>
                    <Button
                      className="button"
                      color="red"
                      onClick={() => history.push(`/artwork/${landscape?.data.id}`)}
                    >
                      Collect Now
                    </Button>
                  </CarouselTextContainer>
                </>
              )}
            </>
          ) : (
            <>
              <VideoFrameTwo>
                <VideoPlayer
                  videoUrl={portrait.data?.media.video.hls}
                  posterUrl={portrait.data?.media?.image.low.portrait}
                  artistName=""
                  initialize
                  autoplay
                  muted
                  showLogo={false}
                  showLoading={false}
                />
              </VideoFrameTwo>
              {portrait.data && (
                <>
                  <CarouselTextContainer>
                    <CarouselText>
                      <div className="title">{portrait?.data?.name}</div>
                      <div className="artist" onClick={() => history.push(`/artists/${portrait.data?.artist?.id}`)}>
                        <img src={portrait?.data?.artist?.media?.images?.avatar} alt="artist avatar" />
                        <div className="name">{portrait?.data?.artist.displayName}</div>
                      </div>
                    </CarouselText>
                    <CarouselPricing>
                      <PricingItem className="left">
                        <div className="top">Price</div>
                        <div className="bot">
                          {Web3.utils.fromWei(portrait.data?.tokenMetadata?.price || '0', 'ether')} ETH
                        </div>
                      </PricingItem>
                      <div className="divider" />
                      <PricingItem className="right">
                        <div className="top">Editions Sold</div>
                        <div className="bot">
                          {portrait.data?.tokenMetadata?.purchased} / {portrait.data?.tokenMetadata?.total}
                        </div>
                      </PricingItem>
                    </CarouselPricing>
                    <Button
                      className="button"
                      color="red"
                      onClick={() => history.push(`/artwork/${portrait?.data.id}`)}
                    >
                      Collect Now
                    </Button>
                  </CarouselTextContainer>
                </>
              )}
            </>
          )}
        </VideoAspectRatioBox>
      </CarouselContainer>

      <Wrapper>
        <HeaderContainer>
          <TopHeader>Featured artwork</TopHeader>
          <TopSubheader>Explore artworks researched and curated by envision&apos;s curatorial team</TopSubheader>
        </HeaderContainer>
        <Divider />
        <CardContainer flexBasis={1 / 2} flexBasisLarge={1 / 3}>
          {artworks.data?.pages?.[0]?.collection?.artwork.map((art) => (
            <>
              <ArtworkCard artwork={art} />
            </>
          ))}
        </CardContainer>
        <Button color="red" className="button" onClick={() => history.push('artwork/latest')}>
          View all artworks
        </Button>
      </Wrapper>

      <InfoWrapper>
        <FlexContainer>
          <FeatureItem>
            <img src={resolution} alt="4k-icon" />
            <div className="text">All art in stunning 4K resolution and smooth 60FPS playback</div>
          </FeatureItem>
          <FeatureItem>
            <img src={media} alt="display-icon" />
            <div className="text">Exhibit your collection of art on a Smart TV or the Digital Canvas</div>
          </FeatureItem>
          <FeatureItem>
            <img src={secure} alt="secure-icon" />
            <div className="text">Artwork is securely stored on IPFS as well as our own servers</div>
          </FeatureItem>
          <FeatureItem>
            <img src={smartphone} alt="mobile-icon" />
            <div className="text">Companion mobile app to manage & display your collection</div>
          </FeatureItem>
        </FlexContainer>
      </InfoWrapper>

      <Wrapper>
        <HeaderContainer>
          <TopHeader>Featured collections</TopHeader>
          <TopSubheader>Explore collections researched and curated by envision&apos;s curatorial team</TopSubheader>
        </HeaderContainer>
        <Divider />
      </Wrapper>
      <CollectionContainer>
        {collections.map((collection) => (
          <>
            <CollectionCard collection={collection.data?.pages?.[0]?.collection} />
          </>
        ))}
      </CollectionContainer>
      <Wrapper>
        <Button color="red" className="button" onClick={() => history.push('/collections')}>
          View all collections
        </Button>
      </Wrapper>

      <InfoWrapper>
        <FlexContainer>
          <ImageContainer>
            <ImageAspectRatioBox paddingBottom="100">
              <VideoFrame>
                <img src={digitalCanvas} alt="digital canvas" />
              </VideoFrame>
            </ImageAspectRatioBox>
          </ImageContainer>
          <TextContainer>
            <HeaderText>Premium Digital Canvas Installations</HeaderText>
            <HeaderSubText>
              Enjoy the most pleasing digital art experience on the envision high-resolution 4K Digital Canvas
              available from 55” to 98”
            </HeaderSubText>
            <Button color="red" onClick={() => window.open('https://canvas.envision.com').focus()}>
              Shop now
            </Button>
          </TextContainer>
        </FlexContainer>
      </InfoWrapper>

      <Wrapper>
        <HeaderContainer>
          <TopHeader>Featured artists</TopHeader>
          <TopSubheader>Explore artists researched and curated by envision&apos;s curatorial team</TopSubheader>
        </HeaderContainer>
        <Divider />
        <CardContainer flexBasis={1 / 2}>
          {artists.map((artist) => (
            <>
              <ArtistCard artist={artist.data} />
            </>
          ))}
        </CardContainer>
        <Button color="red" className="button" onClick={() => history.push('/artists')}>
          View all artists
        </Button>
      </Wrapper>
    </>
  );
};

export default Home;
