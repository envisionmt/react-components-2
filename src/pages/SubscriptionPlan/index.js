import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'reflexbox';
import styled from '@emotion/styled';

import { Loader } from '../../components/Loader';
import ContentHeader from '../../components/Layouts/Account/AccountContentHeader';
import TabItem from '../../components/SubscriptionTab';
import SubscriptionPlan from './SubscriptionPlan';
import UserDetails from '../EditProfile/EditProfileForm';
import SubscriptionForm from './subscriptionForm';

import { fetchUser } from '../../store/user/actions';

const RootWrapper = styled.div`
  width: 768px;
  height: 100%;
  display: inline-table;
  background: #111111;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px;
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bgColor }) => bgColor};
  margin-top: -12px;
  border-bottom-right-radius: 12px;
`;

const TabDescription = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #111111;
  padding: 46px 34px 34px;
  text-transform: uppercase;
`;

const SubscriptionTab = styled.div`
  display: flex;
  width: 100%;
`;

const tabItemData = [
  {
    id: 1,
    title: 'Choose A Subscription Plan',
  },
  {
    id: 2,
    title: 'User Details',
  },
  {
    id: 3,
    title: 'Payment Details',
  },
];

export default function AccountSubscriptionPlan() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const subscription = useSelector((state) => state.subscription);

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const [isValidatePaymentInfo, setIsValidatePaymentInfo] = useState(false);
  const [subScribedPlan, setSubscribedPlan] = useState('');

  useEffect(() => {
    setSubscribedPlan('');
    if (user?.data?.user?.id && !subscription.loading) {
      setLoading(false);
    }

    if (user?.data?.user?.artist) {
      // const mArtist = user?.data?.user?.artist;
      // setFormState({ paymentAccount: mArtist.paymentAccount, swift: mArtist.swift, paypalEmail: mArtist.paypalEmail });
    }
  }, [user, subscription]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUser());
    };
    fetchData();
  }, []);

  return (
    <RootWrapper>
      {loading && <Loader color="white" />}
      {!loading && (
        <>
          <ContentHeader title="Subscription Plan" />
          {isValidatePaymentInfo && (
            <TabWrapper bgColor="#FFA800">
              <TabDescription>Please recheck your payment information. We could not validate your card</TabDescription>
            </TabWrapper>
          )}
          {subScribedPlan && (
            <TabWrapper bgColor="#009D3F">
              <TabDescription>You have successfully subscribed to envision</TabDescription>
            </TabWrapper>
          )}
          {!isValidatePaymentInfo && subScribedPlan === '' && (
            <TabWrapper bgColor="#333333">
              <SubscriptionTab>
                {tabItemData.map(({ id, title }) => (
                  <Box width={activeTab === id ? [10 / 12] : [1 / 12]} key={title}>
                    <TabItem id={id} title={title} isActive={activeTab === id} />
                  </Box>
                ))}
              </SubscriptionTab>
            </TabWrapper>
          )}
          <ContentWrapper>
            {activeTab === 1 && <SubscriptionPlan onNextClick={() => setActiveTab(2)} />}
            {activeTab === 2 && (
              <UserDetails
                user={user}
                pageType="subscriptionPlan"
                onNextClick={() => setActiveTab(3)}
                onBackClick={() => setActiveTab(1)}
              />
            )}
            {activeTab === 3 && (
              <SubscriptionForm
                onCompleteClick={() => {
                  setIsValidatePaymentInfo(true);
                }}
                onBackClick={() => {
                  setActiveTab(2);
                  setIsValidatePaymentInfo(false);
                }}
              />
            )}
          </ContentWrapper>
        </>
      )}
    </RootWrapper>
  );
}
