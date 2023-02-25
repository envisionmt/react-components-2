import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { envisionClient } from '@envision/utils';
import { useNotifications } from 'reapop';

import SubscriptionPlanItem from '../../components/SubscriptionPlanItem';
import Alert from '../../components/Alert';
import MainButton from '../../components/Button/MainButton';

import WarningIcon from '../../assets/images/icons/icon-warning-black.svg';

import { fetchCards } from '../../store/cards/actions';

const RootWrapper = styled.div``;

const Description = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 48px;
  line-height: 24px;
`;

const PlansWrapper = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 50px;
`;

const plans = [
  { id: 1, title: 'Basic', description: 'Access to all open edition artworks', membership: '79' },
  { id: 2, title: 'Collector', description: 'Access to all open edition artworks', membership: '79' },
  { id: 3, title: 'Commercial', description: 'Access to all open edition artworks', membership: '79' },
];

export default function SubscriptionPlan({ onNextClick }) {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);
  const user = useSelector((state) => state.user);

  // const [loading, setLoading] = useState(true);
  const [isNotSelectedPlan, setIsNotSelectedPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.data?.user?.id) {
        await dispatch(fetchCards(user?.data?.user?.id));
        // setLoading(false);
      }
    };

    fetchData();
  }, [user?.data?.user?.id]);

  const isFreeUser =
    subscription?.data?.plan?.id === 'bdfree003248238402384092380457u34905tu8idruodfs' ||
    subscription?.data?.plan?.name === 'Streaming (Trial)' ||
    !subscription?.data?.plan?.id;

  const handleClickPlan = (plan) => () => {
    setSelectedPlan(plan.id);
    setIsNotSelectedPlan(false);
  };

  const handleSubscribe = useCallback(async () => {
    setIsNotSelectedPlan(false);
    try {
      if (isFreeUser) {
        // dispatch(openModal({ modal: 'SUBSCRIBE' }));
      } else {
        const { status } = await envisionClient.delete(`/users/${user?.data?.user?.id}/subscriptions/cancel`);

        if (status === 200) {
          window.location.reload();
          return;
        }

        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'Something went wrong',
        });
      }

      if (selectedPlan !== null) {
        onNextClick();
      } else {
        setIsNotSelectedPlan(true);
      }
    } catch (e) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem.',
      });
    }
  });

  return (
    <RootWrapper>
      <Description>
        You are currently not subscribed to Blackdov. Subscribe below in 3 easy steps to entry over 300 artists and 1000
        artworks. If you choose not to subscribe you can stil purchase and experience individual artworks from the
        marketplace
      </Description>
      <PlansWrapper>
        {plans.map((plan) => (
          <SubscriptionPlanItem
            key={plan.id}
            title={plan.title}
            description={plan.description}
            membership={plan.membership}
            isSelected={selectedPlan === plan.id}
            onClickPlan={handleClickPlan(plan)}
          />
        ))}
      </PlansWrapper>
      {isNotSelectedPlan && (
        <Alert
          bgColor="#FFA800"
          borderColor="#FFA800"
          textColor="#000000"
          icon={WarningIcon}
          text="Please choose a plan to continue"
        />
      )}
      <ButtonWrapper>
        <MainButton title="Next" color="red" borderColor="#111111" onClick={handleSubscribe} />
      </ButtonWrapper>
    </RootWrapper>
  );
}

SubscriptionPlan.propTypes = {
  onNextClick: PropTypes.func,
};

SubscriptionPlan.defaultProps = {
  onNextClick: () => {},
};
