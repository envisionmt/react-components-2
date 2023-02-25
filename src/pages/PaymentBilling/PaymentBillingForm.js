import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Flex, Box } from 'reflexbox';
import styled from '@emotion/styled';

import { useNotifications } from 'reapop';
import MainButton from '../../components/Button/MainButton';

import { createCard } from '../../store/cards/actions';
import { CREATE_CARD_FAILURE, CREATE_CARD_SUCCESS } from '../../store/cards/constants';

const Form = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 10px;
`;

const CardElementWrapper = styled.div`
  background: #444444;
  border: 2px solid #444444;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0 10px;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 25%);

  &:focus {
    outline: none !important;
    border: 2px solid #910048;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const ButtonWrapper = styled.div``;

export default function PaymentMethodForm() {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user);

  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (submitting || !stripe || !elements) return;
    setSubmitting(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const stripeResult = await stripe.createToken(cardElement, { email: user?.data?.user?.email });
      const result = await dispatch(createCard(user?.data?.user?.id, stripeResult.token));

      if (result.type === CREATE_CARD_FAILURE) {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'There was a problem adding your card.',
        });
        setSubmitting(false);
      }

      if (result.type === CREATE_CARD_SUCCESS) {
        notify({
          status: 'success',
          title: 'Card Added',
          message: 'Card has been successfully added to your account.',
        });
        setSubmitting(false);
      }
    } catch (err) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem adding your card.',
      });
      setSubmitting(false);
    }
  });

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputWrapper>
        <Label>Debit/Credit Card Number</Label>
        <CardElementWrapper>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: 'white',
                  lineHeight: '50px',
                },
              },
            }}
          />
        </CardElementWrapper>
      </InputWrapper>
      <ButtonGroup>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2, 1 / 2]}>
            <ButtonWrapper>
              <MainButton type="button" title="Cancel" color="grey" borderColor="#111111" />
            </ButtonWrapper>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2]}>
            <ButtonWrapper>
              <MainButton type="submit" title="Save Changes" color="red" borderColor="#111111" />
            </ButtonWrapper>
          </Box>
        </Flex>
      </ButtonGroup>
    </Form>
  );
}
