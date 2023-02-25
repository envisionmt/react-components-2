import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Flex, Box } from 'reflexbox';
import { envisionClient } from '@envision/utils';

import { Loader } from '../../components/Loader';
import ContentHeader from '../../components/Layouts/Account/AccountContentHeader';
import MainButton from '../../components/Button/MainButton';

import { fetchUser } from '../../store/user/actions';

// Hooks
import { useAccount } from '../../hooks/data';

import {
  RootWrapper,
  ContentWrapper,
  ProfileWrapper,
  SubscriptionWrapper,
  ContentHeaderLine,
  ProfileInfoLine,
  BorderLine,
  Label,
  InfoText,
  ButtonWrapper,
} from './styled';

export default function AccountOverview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const account = useAccount();

  const [loading, setLoading] = useState(true);
  const [, setFormState] = useState({ paymentAccount: '', swift: '', paypalEmail: '', couponCode: '' });

  useEffect(() => {
    if (user?.data?.user?.id) {
      setLoading(false);
    }
    if (user?.data?.user?.artist) {
      const mArtist = user?.data?.user?.artist;
      setFormState({ paymentAccount: mArtist.paymentAccount, swift: mArtist.swift, paypalEmail: mArtist.paypalEmail });
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUser());
    };
    fetchData();
  }, []);

  const userData = user?.data?.user;

  const handleManageSubscription = async () => {
    const result = await envisionClient.get('/v2/billing/manage');
    window.location = result?.data?.sessionUrl;
  };

  const renderSubDescription = (plan) => {
    switch (plan) {
      case 'FREE':
        return 'Free';
      case 'NFT_ONLY':
        return 'NFT Only';
      case 'FULL':
        return 'Premium';
      default:
        return 'Free';
    }
  };

  return (
    <RootWrapper>
      {loading && <Loader color="white" />}
      {!loading && (
        <>
          <ContentHeader title="Account Overview" />
          <ContentWrapper>
            <ProfileWrapper>
              <ContentHeaderLine>Profile</ContentHeaderLine>
              <ProfileInfoLine>
                <Flex flexWrap="wrap">
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Name</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <InfoText>{`${userData?.givenName} ${userData?.surname}`}</InfoText>
                  </Box>
                </Flex>
              </ProfileInfoLine>
              <BorderLine />
              <ProfileInfoLine>
                <Flex flexWrap="wrap">
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Email</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <InfoText>{userData?.email}</InfoText>
                  </Box>
                </Flex>
              </ProfileInfoLine>
              <BorderLine />
              <ProfileInfoLine>
                <Flex flexWrap="wrap">
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Date of Birthday</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    {/* <InfoText>{dob.toLocaleString(DateTime.DATE_FULL)}</InfoText> */}
                    <InfoText>{userData?.dateOfBirth}</InfoText>
                  </Box>
                </Flex>
              </ProfileInfoLine>
              <BorderLine />
              <ProfileInfoLine>
                <Flex flexWrap="wrap">
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Country or Region</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <InfoText>{userData?.country}</InfoText>
                  </Box>
                </Flex>
              </ProfileInfoLine>
              <ButtonWrapper>
                <Flex flexWrap="wrap">
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <MainButton
                      title="Change Password"
                      color="grey"
                      borderColor="#111111"
                      onClick={() => history.push(`/forgot-password`)}
                    />
                  </Box>
                </Flex>
              </ButtonWrapper>
            </ProfileWrapper>
            <SubscriptionWrapper>
              <ContentHeaderLine>Your Subscription</ContentHeaderLine>
              <ProfileInfoLine>
                <Flex flexWrap="wrap" mb={25}>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Plan</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <InfoText>
                      {account.isFetched && renderSubDescription(account.data?.subscription?.subscriptionType)}
                    </InfoText>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Device Usage</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <InfoText>
                      {`${account.isFetched && account.data?.usage?.devices?.used}/${
                        account.data?.usage?.devices?.total
                      }`}
                    </InfoText>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <Label>Collection Usage</Label>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <InfoText>
                      {`${account.isFetched && account.data?.usage?.collections?.used}/${
                        account.data?.usage?.collections?.total
                      }`}
                    </InfoText>
                  </Box>
                </Flex>
              </ProfileInfoLine>
              <Flex flexWrap="wrap">
                <Box width={[1, 1 / 2, 1 / 2]}>
                  {account.isFetched && account.data?.subscription?.subscriptionType === 'FREE' && (
                    <MainButton
                      title="Subscribe"
                      color="red"
                      borderColor="#111111"
                      onClick={() => history.push('/pricing')}
                    />
                  )}
                  {account.isFetched && account.data?.subscription?.subscriptionType !== 'FREE' && (
                    <MainButton
                      title="Manage Subscription"
                      color="grey"
                      borderColor="#111111"
                      onClick={handleManageSubscription}
                    />
                  )}
                </Box>
              </Flex>
            </SubscriptionWrapper>
          </ContentWrapper>
        </>
      )}
    </RootWrapper>
  );
}
