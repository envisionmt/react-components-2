import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { envisionClient } from '@envision/utils';
import ConfettiGenerator from 'confetti-js';

// Components
import { Loader } from '../../../components/Loader';
import { Button } from '../../../components/Button';

// Styled
import {
  Wrapper,
  ConfettiCanvas,
  ContentWrapper,
  MainPanel,
  ItemDetails,
  ItemName,
  ItemPrice,
  CallToAction,
  CallToActionInner,
  Greeting,
  Description,
} from './styled';

export function OrderConfirmation() {
  const { search } = useLocation();
  const history = useHistory();
  const [data, setData] = React.useState();
  const [items, setItems] = React.useState();

  // Setup confetti
  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas', max: 160 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    return () => confetti.clear();
  }, []);

  // GET session data
  useEffect(async () => {
    const result = await envisionClient.get(`/v2/billing/checkout/session/${search.replace('?session_id=', '')}`);
    setData(result.data);
  }, []);

  // SET session items
  useEffect(async () => {
    if (data) {
      const listItems = [];

      data.line_items.data.map((item) =>
        listItems.push({
          id: item.price.id,
          name: item.description,
          brand: 'envision',
          category: 'Subscriptions',
          quantity: item.quantity,
          price: item.amount_total,
        })
      );
      setItems(listItems);

      window.gtag('event', 'purchase', {
        transaction_id: data.id,
        affiliation: 'envision Subcriptions',
        value: parseFloat(data.amount_total, 10) / 100,
        currency: data.currency,
        items,
      });
      window.lintrk('track', { conversion_id: 6756044 });
      window.fbq('track', 'Purchase', {
        transaction_id: data.id,
        affiliation: 'envision Subcriptions',
        value: parseFloat(data.amount_total, 10) / 100,
        currency: data.currency,
        items,
      });
    }
  }, [data]);

  return (
    <Wrapper>
      {!items && <Loader />}
      {items && (
        <ContentWrapper>
          <MainPanel>
            <ItemDetails>
              {items && (
                <>
                  {items.map((item) => (
                    <>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>${parseFloat(item.price, 10) / 100}</ItemPrice>
                    </>
                  ))}
                </>
              )}
            </ItemDetails>
            <CallToAction>
              <CallToActionInner>
                <Greeting>Order Confirmation</Greeting>
                <Description>Thank you for completing your purchase. Your subscription is live. Enjoy!</Description>
                <Button color="red" borderColor="#171717" onClick={() => history.push('/artwork/latest')}>
                  Browse Art
                </Button>
              </CallToActionInner>
            </CallToAction>
          </MainPanel>
        </ContentWrapper>
      )}
      <ConfettiCanvas id="confetti-canvas" />
    </Wrapper>
  );
}
