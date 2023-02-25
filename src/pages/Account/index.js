import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import { DateTime } from 'luxon';
import { useNotifications } from 'reapop';
import { Button, TextInput } from '@envision/ui';

import { Loader } from '../../components/Loader';
import { PageTitle } from '../../components/Typography';
import Panel from '../../components/Panel';

import { fetchUser } from '../../store/user/actions';

import {
  UPDATE_FINANCIAL_INFORMATION_SUCCESS,
  UPDATE_FINANCIAL_INFORMATION_FAILURE,
  REDEEM_COUPON_CODE_SUCCESS,
  REDEEM_COUPON_CODE_FAILURE,
} from '../../store/account/constants';

import { updateFiancialInformation, redeemCouponCode } from '../../store/account/actions';

const Wrapper = styled.div``;

const PanelTitle = styled.h3`
  font-size: 2em;
  margin: 0;
  text-transform: none;
  margin-bottom: ${({ marginBottom }) => marginBottom || 1}em;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  font-size: 1.2em;
`;

const Value = styled.span`
  display: block;
`;

const AccountPage = () => {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const subscription = useSelector((state) => state.subscription);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState({ paymentAccount: '', swift: '', paypalEmail: '', couponCode: '' });
  const handleInputChange = useCallback((e) => setFormState({ ...formState, [e.target.name]: e.target.value }));

  useEffect(() => {
    if (user?.data?.user?.id && !subscription.loading) {
      setLoading(false);
    }

    if (user?.data?.user?.artist) {
      const mArtist = user?.data?.user?.artist;
      setFormState({ paymentAccount: mArtist.paymentAccount, swift: mArtist.swift, paypalEmail: mArtist.paypalEmail });
    }
  }, [user, subscription]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUser());
    };
    fetchData();
  }, []);

  const handleSaveFinancialInformation = useCallback(async () => {
    const reqJSON = {
      paymentAccount: formState.paymentAccount,
      swift: formState.swift,
      paypalEmail: formState.paypalEmail,
    };

    const result = await dispatch(updateFiancialInformation(user?.data?.user?.artist?.id, reqJSON));

    if (result.type === UPDATE_FINANCIAL_INFORMATION_SUCCESS) {
      notify({
        status: 'success',
        title: 'Information Updated',
        message: 'Your finanaical information has been updated.',
      });
    }

    if (result.type === UPDATE_FINANCIAL_INFORMATION_FAILURE) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'Failed to update financial information.',
      });
    }
  });

  const handleCouponCode = useCallback(async () => {
    if (formState.couponCode.trim() === '') {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'Please input a coupon code.',
      });
    } else {
      const result = await dispatch(redeemCouponCode(user?.data?.user?.id, formState.couponCode));

      if (result.type === REDEEM_COUPON_CODE_SUCCESS) {
        notify({
          status: 'success',
          title: 'Coupon Redeemed',
          message: 'Coupon code redeemed successfully.',
        });
      }

      if (result.type === REDEEM_COUPON_CODE_FAILURE) {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'Failed to redeem coupon code.',
        });
      }
    }
  });

  const userData = user?.data?.user;
  const subscriptionPlan = subscription?.data?.plan || { name: 'Free' };
  const dob =
    typeof userData?.dateOfBirth === 'string'
      ? DateTime.fromString(userData?.dateOfBirth, 'yyyy-mm-dd')
      : DateTime.fromJSDate(userData?.dateOfBirth);

  const artist = user?.data?.user?.artist;

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && (
        <>
          <PageTitle>Account Overview</PageTitle>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 3 / 5]}>
              <Panel p={35} mr={[0, 0, 25]} mb={25}>
                <PanelTitle marginBottom="0.5">Profile</PanelTitle>
                <Flex flexWrap="wrap" mb={25}>
                  <Box width={[1, 1, 1 / 2]} mb={20}>
                    <Label>Email</Label>
                    <Value>{userData?.email}</Value>
                  </Box>
                  <Box width={[1, 1, 1 / 2]} mb={20}>
                    <Label>Date of Birth</Label>
                    <Value>{dob.toLocaleString(DateTime.DATE_FULL)}</Value>
                  </Box>
                  <Box width={[1, 1, 1 / 2]} mb={20}>
                    <Label>Country</Label>
                    <Value>{userData?.country}</Value>
                  </Box>
                  <Box width={[1, 1, 1 / 2]} mb={20}>
                    <Label>State</Label>
                    <Value>{userData?.state}</Value>
                  </Box>
                </Flex>
                <Button small to="/account/edit">
                  Edit Profile
                </Button>
                <Button small to="/account/password">
                  Change Password
                </Button>
                <Button small to="/account/notifications">
                  Manage Notifications
                </Button>
              </Panel>
            </Box>
            <Box width={[1, 1, 2 / 5]}>
              <Panel p={35} mr={0} mb={25}>
                <PanelTitle marginBottom="0">Subscription Status</PanelTitle>
                <p>Current Subscription: {subscriptionPlan?.name}</p>
                <Button small to="/account/subscriptions">
                  Manage Subscription
                </Button>
              </Panel>
            </Box>
            {artist !== null && (
              <Box width={[1, 1, 3 / 5]}>
                <Panel p={35} mr={[0, 0, 25]} mb={25}>
                  <PanelTitle marginBottom="0.5">Financial Information</PanelTitle>
                  <Flex flexWrap="wrap" mb={10}>
                    <Box width={[1, 1, 1 / 2]} p={10}>
                      <Label> Account Number/IBAN </Label>
                      <TextInput
                        name="paymentAccount"
                        type="text"
                        defaultValue={formState.paymentAccount}
                        placeholder="US36 BOJK 0001234567"
                        onChange={handleInputChange}
                      />
                    </Box>
                    <Box width={[1, 1, 1 / 2]} p={10}>
                      <Label> BIC/SWIFT Code </Label>
                      <TextInput
                        name="swift"
                        type="text"
                        defaultValue={formState.swift}
                        placeholder="BIC/SWIFT Code"
                        onChange={handleInputChange}
                      />
                    </Box>
                    <Box width={[1, 1, 1 / 2]} p={10}>
                      <Label> PayPal Email </Label>
                      <TextInput
                        name="paypalEmail"
                        type="email"
                        defaultValue={formState.paypalEmail}
                        placeholder="john@email.com"
                        onChange={handleInputChange}
                      />
                    </Box>
                  </Flex>
                  <Flex flexWrap="wrap" mb={10}>
                    <Box width={[1, 1, 1 / 2]} p={10}>
                      <Button mb={10} small onClick={handleSaveFinancialInformation}>
                        Save Change
                      </Button>
                    </Box>
                  </Flex>
                </Panel>
              </Box>
            )}
            <Box width={[1, 1, 2 / 5]}>
              <Panel p={35} mr={[0, 0, 25]} mb={25}>
                <PanelTitle marginBottom="0.5">Coupon Code</PanelTitle>
                <Flex flexWrap="wrap" mb={10}>
                  <Box width={[1, 1, 1 / 2]} p={10}>
                    <Label> Coupon Code </Label>
                    <TextInput
                      name="couponCode"
                      type="text"
                      defaultValue={formState.couponCode}
                      placeholder="COUPON CODE"
                      onChange={handleInputChange}
                    />
                  </Box>
                </Flex>
                <Flex flexWrap="wrap" mb={10}>
                  <Box width={[1, 1, 1 / 2]} p={10}>
                    <Button mb={10} small onClick={handleCouponCode}>
                      Reedeem
                    </Button>
                  </Box>
                </Flex>
              </Panel>
            </Box>
          </Flex>
        </>
      )}
    </Wrapper>
  );
};

export default AccountPage;
