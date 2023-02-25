import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNotifications } from 'reapop';
import { Form, SubmitButton } from '../../Form';

import { createCard } from '../../../store/cards/actions';
import { CREATE_CARD_FAILURE, CREATE_CARD_SUCCESS } from '../../../store/cards/constants';

const Wrapper = styled.div`
  padding: 24px;
`;

const CardElementWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.baseLighter};
  margin-bottom: 1em;
`;

const AddCardModal = ({ closeModal }) => {
  const { notify } = useNotifications();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
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
          title: 'Failed to Add Card',
          message: 'Sorry we could not add that card.',
        });
        setSubmitting(false);
        closeModal();
      }

      if (result.type === CREATE_CARD_SUCCESS) {
        closeModal();
        notify({
          status: 'success',
          title: 'Card Added',
          message: 'Card has been added to your account.',
        });
        setSubmitting(false);
      }
    } catch (error) {
      notify({
        status: 'error',
        title: 'Failed to Add Card',
        message: 'Sorry we could not add that card.',
      });
      setSubmitting(false);
    }
  });

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <h2>Add Card</h2>
        <CardElementWrapper>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '20px',
                  color: 'white',
                  lineHeight: '50px',
                  paddingTop: '20px',
                },
              },
            }}
          />
        </CardElementWrapper>
        <SubmitButton submitting={submitting}>Add Card</SubmitButton>
      </Form>
    </Wrapper>
  );
};

AddCardModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddCardModal;
