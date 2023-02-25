import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import { Trash } from '@emotion-icons/ionicons-sharp';
import { useTheme } from 'emotion-theming';
import { envisionClient } from '@envision/utils';
import { useNotifications } from 'reapop';
import { Button } from '@envision/ui';

import { Loader } from '../../components/Loader';
import { PageTitle } from '../../components/Typography';
import Panel from '../../components/Panel';
import IconButton from '../../components/IconButton';
import {
  Wrapper,
  PanelTitle,
  Price,
  PerkList,
  ListItem,
  CardList,
  CardRow,
  CCSegment,
  StyledCheck,
  StyledCC,
} from './styles';

import { openModal } from '../../store/app/actions';
import { fetchCards, deleteCard } from '../../store/cards/actions';
import { DELETE_CARD_SUCCESS, DELETE_CARD_FAILURE } from '../../store/cards/constants';

const SignupPage = () => {
  const { notify } = useNotifications();
  const theme = useTheme();
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);
  const user = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.data?.user?.id) {
        await dispatch(fetchCards(user?.data?.user?.id));
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.data?.user?.id]);

  const isFreeUser =
    subscription?.data?.plan?.id === 'bdfree003248238402384092380457u34905tu8idruodfs' ||
    subscription?.data?.plan?.name === 'Streaming (Trial)' ||
    !subscription?.data?.plan?.id;

  const handleSubscribe = useCallback(async () => {
    try {
      if (isFreeUser) {
        dispatch(openModal({ modal: 'SUBSCRIBE' }));
      } else {
        const { status } = await envisionClient.delete(`/users/${user?.data?.user?.id}/subscriptions/cancel`);

        if (status === 200) {
          window.location.reload();
          return;
        }

        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'Something went wrong.',
        });
      }
    } catch (e) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem.',
      });
    }
  });

  const handleAddCard = useCallback(() => {
    dispatch(openModal({ modal: 'ADD_CARD' }));
  });

  const handleRemoveCard = useCallback(async (cardId) => {
    const result = await dispatch(deleteCard(user?.data?.user?.id, cardId));

    if (result.type === DELETE_CARD_SUCCESS) {
      notify({
        status: 'success',
        title: 'Card Deleted',
        message: 'Card has been deleted successfully.',
      });
    }

    if (result.type === DELETE_CARD_FAILURE) {
      const errorMessage = typeof result.errors === 'string' ? result.errors : 'Card could not be deleted!';
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: errorMessage,
      });
    }
  });

  const renderCards = () =>
    cards.data.map((card) => (
      <CardRow key={card.id}>
        <StyledCC />
        <CCSegment>{card.brand}</CCSegment>
        <CCSegment>**** **** **** {card.last4}</CCSegment>
        <CCSegment>
          {String(card.exp_month).padStart(2, '0')}/{String(card.exp_year).slice(-2)}
        </CCSegment>
        <IconButton
          icon={Trash}
          color={theme.colors.error}
          colorHover={theme.colors.white}
          bgColor="none"
          bgColorHover="none"
          onClick={() => handleRemoveCard(card.id)}
        />
      </CardRow>
    ));

  return (
    <Wrapper>
      {loading && <Loader color="white" />}
      {!loading && (
        <>
          <PageTitle>Manage Subscription</PageTitle>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 2 / 5]}>
              <Panel p={35} mr={[0, 0, 25]}>
                <PanelTitle marginBottom="0">Streaming</PanelTitle>
                <Price>$4.99/mo</Price>
                <PerkList>
                  <ListItem>
                    <StyledCheck />
                    Access to Open Collection
                  </ListItem>
                  <ListItem>
                    <StyledCheck />
                    Build Personal Collections
                  </ListItem>
                  <ListItem>
                    <StyledCheck />
                    Manage via Mobile
                  </ListItem>
                  <ListItem>
                    <StyledCheck />
                    Share Artwork
                  </ListItem>
                  <ListItem>
                    <StyledCheck />
                    Single Display
                  </ListItem>
                </PerkList>
                <Button block ghost={!isFreeUser} onClick={handleSubscribe}>
                  {isFreeUser ? 'Subscribe' : 'Unsubscribe'}
                </Button>
              </Panel>
            </Box>
            <Box width={[1, 1, 3 / 5]}>
              <Panel p={35}>
                <PanelTitle>Payment Details</PanelTitle>
                <CardList>{renderCards()}</CardList>
                <Button small onClick={handleAddCard}>
                  Add New Card
                </Button>
              </Panel>
            </Box>
          </Flex>
        </>
      )}
    </Wrapper>
  );
};

export default SignupPage;
