import React from 'react';
import { useDispatch } from 'react-redux';
import { envisionClient } from '@envision/utils';
import { useStripe } from '@stripe/react-stripe-js';

// Components
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';

// Hooks
import { useUser, useAccount, useSubscriptionPricing } from '../../hooks/data';

// Actions
import { openSigninMenu } from '../../store/signinMenu/actions';

// Assets
import featured from '../../assets/images/icons/Collections.png';
import mobile from '../../assets/images/icons/Smartphone.png';
import ethereum from '../../assets/images/icons/Ethereum.png';
import upload from '../../assets/images/icons/Upload.png';
import gallery from '../../assets/images/icons/Gallery.png';
import display from '../../assets/images/icons/Devices.png';
import check from '../../assets/images/icons/Tick.png';
import cancel from '../../assets/images/icons/Cancel.png';
import media from '../../assets/images/icons/Media Player.png';
import artist from '../../assets/images/icons/Artist.png';
import forward from '../../assets/images/icons/Forward.png';

// Styled
import {
  Wrapper,
  PricingTable,
  PricingTier,
  PlanDetails,
  PlanTitle,
  FeatureList,
  PlanPrice,
  SubscribeWrapper,
  FlexContainer,
  FeatureItem,
  InfoWrapper,
  FAQContainer,
  FAQCard,
  FAQAnswer,
  FAQTitle,
  ImageWrapper,
  SectionHeader,
} from './styles';

// Data
const dataFAQ = [
  {
    question: 'What is the envision collection?',
    answer:
      'envision curates artists and artworks into a standing collection that we make available to clients on a subscription basis. This collection is always evolving and has a minimum of 1,000 works of art available at any time. The works are organized into Collections that can be browsed with individual artworks available to be added to private collections that you create.',
  },
  {
    question: 'What is NFT Sync?',
    answer:
      'NFT Sync is the process of connecting your MetaMask wallet to envision to allow your NFT artwork to be imported and available for streaming. Importantly, we never touch the actual token, our system simply reads the metadata associated with the NFT from the blockchain and imports the media files. The process takes just a few minutes to process all of your artworks.',
  },
  {
    question: 'What smart TV platforms are supported?',
    answer:
      'envision has SmartTV apps available for Samsung, LG, Vizio, Sony, AndroidTV, AppleTV and Amazon Fire Stick. All platforms have one form of app store available that allows for the search and download of ‘envision Video Art’.',
  },
  {
    question: 'What is private uploads?',
    answer:
      'Personal uploads allow for a simple to use addition of any video or image to your envision account. This may be used to import NFTs to your envision account for events where the works are not in your wallet, videos that are personal to you and should not be shared to the general public such as family photos or corporate messaging videos. Only you have access to the media uploaded to Personal Uploads.',
  },
  {
    question: 'How do I import my NFT’s to envision?',
    answer:
      'After logging in to envision.com with your credentials, select the NFT Sync option in the main menu. After connecting your wallet you will see a scanning process that will import the media files associated with your NFTs. You will then use the + button to move those artworks into your Personal Collections for display on your envision Digital Canvas display or top brand Smart TV’s via the envision Video Art App.',
  },
];

export function Pricing() {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const account = useAccount();
  const user = useUser();
  const pricing = useSubscriptionPricing();
  const [openCard, setOpenCard] = React.useState();

  const handleSubscribeNewUser = () => {
    dispatch(openSigninMenu());
  };

  const handleClickFAQ = (i) => {
    if (i === openCard) {
      setOpenCard(null);
    } else {
      setOpenCard(i);
    }
  };

  const handleCheckout = async (price) => {
    const result = await envisionClient.post(
      '/v2/billing/checkout/session',
      {
        success_url: 'https://envision.com/order/confirmation?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://envision.com/pricing',
        mode: 'subscription',
        line_items: [{ price: price?.priceId, quantity: 1 }],
      },
      !(user.isFetched && user.data.user.id)
    );

    window.gtag('event', 'begin_checkout', {
      items: [
        {
          id: price?.priceId,
          name: price?.name,
          brand: 'envision',
          category: 'Subscriptions',
          quantity: 1,
          price: price?.price,
        },
      ],
    });
    await stripe.redirectToCheckout({ sessionId: result?.data?.id });
  };

  const handleManageSubscription = async () => {
    const result = await envisionClient.get('/v2/billing/manage');
    window.location = result?.data?.sessionUrl;
  };

  return (
    <>
      {(account.isLoading || pricing.isLoading) && <Loader size={20} />}
      {pricing.isFetched && (account.isFetched || (!account.isFetched && !account.isLoading)) && (
        <>
          <Wrapper>
            <PricingTable>
              {!account.data?.subscription && (
                <PricingTier>
                  <PlanDetails>
                    <PlanTitle>Member</PlanTitle>
                    <PlanPrice>Try envision for free</PlanPrice>
                    <Button color="red" onClick={handleSubscribeNewUser}>
                      Join for free
                    </Button>
                  </PlanDetails>
                  <SubscribeWrapper>
                    <FeatureList>
                      <li>
                        <img className="first" src={featured} alt="featured-icon" />{' '}
                        <div className="title">Featured Art</div>
                        <img className="last" src={check} alt="check-icon" />
                      </li>
                      <li>
                        <img className="first" src={mobile} alt="smartphopne-icon" />{' '}
                        <div className="title">Mobile app control</div>
                        <img className="last" src={check} alt="check-icon" />
                      </li>
                      <li>
                        <img className="first" src={ethereum} alt="ethereum-icon" />
                        <div className="title"> NFT Sync</div>
                        <img className="last" src={cancel} alt="cancel-icon" />
                      </li>
                      <li>
                        <img className="first" src={upload} alt="upload-icon" />
                        <div className="title">Private Uploads</div>
                        <img className="last" src={cancel} alt="cancel-icon" />
                      </li>
                      <li>
                        <img className="first" src={gallery} alt="gallery-icon" /> envision Collection
                        <img className="last" src={cancel} alt="cancel-icon" />
                        <div className="subtext">Artworks can be rented for 30 days in the mobile app</div>
                      </li>
                      <li>
                        <img src={display} alt="display-icon" />
                        <div className="title"> Displays </div>
                        <div className="number">1</div>
                      </li>
                    </FeatureList>
                  </SubscribeWrapper>
                </PricingTier>
              )}

              <PricingTier>
                <PlanDetails>
                  <PlanTitle>Collector</PlanTitle>
                  <PlanPrice>Starting at $19/mo</PlanPrice>
                  {!account.data?.subscription && (
                    <Button color="red" onClick={() => handleCheckout(pricing.data?.NFT_ONLY?.monthly)}>
                      Subscribe
                    </Button>
                  )}
                  {account?.data?.subscription?.subscriptionType === 'FREE' && (
                    <Button color="red" onClick={() => handleCheckout(pricing.data?.NFT_ONLY?.monthly)}>
                      Upgrade
                    </Button>
                  )}
                  {account?.data?.subscription?.subscriptionType === 'NFT_ONLY' && (
                    <Button color="red" onClick={() => handleManageSubscription()}>
                      Manage Subscription
                    </Button>
                  )}
                  {account?.data?.subscription?.subscriptionType === 'FULL' && (
                    <Button color="red" onClick={() => handleManageSubscription()}>
                      Downgrade
                    </Button>
                  )}
                </PlanDetails>
                <SubscribeWrapper>
                  <FeatureList>
                    <li>
                      <img className="first" src={featured} alt="featured-icon" />
                      <div className="title"> Featured Art</div>
                      <img className="last" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={mobile} alt="smartphopne-icon" />{' '}
                      <div className="title">Mobile app control</div>
                      <img className="first" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={ethereum} alt="ethereum-icon" />
                      <div className="title">NFT Sync</div>
                      <img className="last" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={upload} alt="upload-icon" />{' '}
                      <div className="title">Private Uploads</div>
                      <img className="last" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={gallery} alt="gallery-icon" />{' '}
                      <div className="title">envision Collection</div>
                      <img className="last" src={cancel} alt="cancel-icon" />
                      <div className="subtext">Artworks can be rented for 30 days in the mobile app</div>
                    </li>
                    <li>
                      <img className="first" src={display} alt="display-icon" /> <div className="title">Displays</div>
                      <div className="number">5</div>
                    </li>
                  </FeatureList>
                </SubscribeWrapper>
              </PricingTier>
              <PricingTier>
                <PlanDetails>
                  <PlanTitle>Patron</PlanTitle>
                  <PlanPrice> Starting at$99/mo</PlanPrice>
                  {!account.data?.subscription && (
                    <Button color="red" onClick={() => handleCheckout(pricing.data?.FULL?.monthly)}>
                      Subscribe
                    </Button>
                  )}
                  {account?.data?.subscription?.subscriptionType === 'FREE' && (
                    <Button color="red" onClick={() => handleCheckout(pricing.data?.NFT_ONLY?.monthly)}>
                      Upgrade
                    </Button>
                  )}
                  {account?.data?.subscription?.subscriptionType === 'NFT_ONLY' && (
                    <Button color="red" onClick={() => handleManageSubscription()}>
                      Upgrade
                    </Button>
                  )}
                  {account?.data?.subscription?.subscriptionType === 'FULL' && (
                    <Button color="red" onClick={() => handleManageSubscription()}>
                      Manage Subscription
                    </Button>
                  )}
                </PlanDetails>
                <SubscribeWrapper>
                  <FeatureList>
                    <li>
                      <img src={featured} alt="featured-icon" /> <div className="title">Featured Art</div>
                      <img className="last" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={mobile} alt="smartphopne-icon" />{' '}
                      <div className="title">Mobile app control</div>
                      <img className="first" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={ethereum} alt="ethereum-icon" />
                      <div className="title"> NFT Sync</div>
                      <img className="last" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={upload} alt="upload-icon" />{' '}
                      <div className="title">Private Uploads</div>
                      <img className="last" src={check} alt="check-icon" />
                    </li>
                    <li>
                      <img className="first" src={gallery} alt="gallery-icon" />
                      <div className="title">envision Collection</div>
                      <img className="last" src={check} alt="check-icon" />
                      <div className="subtext">Stream from over 5000 works in the collection</div>
                    </li>
                    <li>
                      <img src={display} alt="display-icon" /> Displays <div className="number">10</div>
                    </li>
                  </FeatureList>
                </SubscribeWrapper>
              </PricingTier>
            </PricingTable>
          </Wrapper>
          <InfoWrapper>
            <FlexContainer>
              <FeatureItem>
                <img src={artist} alt="artist-icon" />
                <div className="text">All art in stunning 4K resolution and smooth 60FPS playback</div>
              </FeatureItem>
              <FeatureItem>
                <img src={media} alt="media-icon" />
                <div className="text">Exhibit your collection of art on a Smart TV or the Digital Canvas</div>
              </FeatureItem>
              <FeatureItem>
                <img src={gallery} alt="gallery-icon" />
                <div className="text">Artwork is securely stored on IPFS as well as our own servers</div>
              </FeatureItem>
              <FeatureItem>
                <img src={ethereum} alt="ethereum-icon" />
                <div className="text">Companion mobile app to manage & display your collection</div>
              </FeatureItem>
            </FlexContainer>
          </InfoWrapper>
          <SectionHeader>Frequently Asked Questions</SectionHeader>
          <FAQContainer>
            {dataFAQ.map((faq, i) => (
              <FAQCard open={i === openCard} onClick={() => handleClickFAQ(i)} key={`faq+${i + 1}`}>
                <FAQTitle className="question" open={i === openCard}>
                  {faq.question}
                  <ImageWrapper open={i === openCard}>
                    <img className="forward" src={forward} alt="arrow" />
                  </ImageWrapper>
                </FAQTitle>
                <FAQAnswer className="answer" open={i === openCard}>
                  {faq.answer}
                </FAQAnswer>
              </FAQCard>
            ))}
          </FAQContainer>
        </>
      )}
    </>
  );
}
