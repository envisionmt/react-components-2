import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNotifications } from 'reapop';
import { Flex, Box } from 'reflexbox';
// import { Form, SubmitButton } from '../../components/Form';

import MainButton from '../../components/Button/MainButton';

import { createSubscription } from '../../store/subscription/actions';
import { CREATE_SUBSCRIPTION_SUCCESS, CREATE_SUBSCRIPTION_FAILURE } from '../../store/subscription/constants';
import { createCard } from '../../store/cards/actions';
import { CREATE_CARD_FAILURE } from '../../store/cards/constants';

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

const SubscribeForm = (props) => {
  const { notify } = useNotifications();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { onCompleteClick, onBackClick } = props;

  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!stripe || !elements) {
      onCompleteClick();
      return;
    }
    setSubmitting(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const stripeResult = await stripe.createToken(cardElement, { email: user?.data?.user?.email });
      const cardResult = await dispatch(createCard(user?.data?.user?.id, stripeResult.token));

      if (cardResult.type === CREATE_CARD_FAILURE) {
        const errorMessage = typeof cardResult.errors === 'string' ? cardResult.errors : 'Failed to save card!';
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: errorMessage,
        });
        setSubmitting(false);
      }

      const params = {
        stripeToken: stripeResult.token.id,
        stripeEmail: stripeResult.token.email,
      };

      const result = await dispatch(
        createSubscription(user?.data?.user?.id, 'h23r23wrqw2ur7yq3tq8w2qwu-8q2r92qhf527nt', params)
      );

      if (result.type === CREATE_SUBSCRIPTION_SUCCESS) {
        notify({
          status: 'success',
          title: 'Subscribed',
          message: 'You have successfully subscribed.',
        });
        setSubmitting(false);
      }

      if (result.type === CREATE_SUBSCRIPTION_FAILURE) {
        const errorMessage = typeof result.errors === 'string' ? result.errors : 'Could not subscribe!';
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: errorMessage,
        });
        setSubmitting(false);
      }
    } catch (error) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem.',
      });
      setSubmitting(false);
    }
  });

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputWrapper>
        <Label>Subscribe to envision</Label>
        <CardElementWrapper>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '20px',
                  color: 'white',
                  lineHeight: '50px',
                },
              },
            }}
          />
        </CardElementWrapper>
        {/* <SubmitButton submitting={submitting}>Subscribe</SubmitButton> */}
      </InputWrapper>
      <ButtonGroup>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2, 1 / 2]}>
            <ButtonWrapper>
              <MainButton type="button" title="Back" color="grey" borderColor="#111111" onClick={onBackClick} />
            </ButtonWrapper>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2]}>
            <ButtonWrapper>
              <MainButton type="submit" title="Complete Payment" color="red" borderColor="#111111" />
            </ButtonWrapper>
          </Box>
        </Flex>
      </ButtonGroup>
    </Form>
  );
};

SubscribeForm.propTypes = {
  onCompleteClick: PropTypes.func,
  onBackClick: PropTypes.func,
};

SubscribeForm.defaultProps = {
  onCompleteClick: () => {},
  onBackClick: () => {},
};

export default SubscribeForm;
