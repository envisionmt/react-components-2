import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Web3 from 'web3';
import { format, parseISO } from 'date-fns';

import {
  RootWrapper,
  CardTitle,
  HistoryWrapper,
  HistoryItem,
  ArtistImage,
  HistoryInfo,
  EventDescription,
  EventDate,
  PriceWrapper,
  ETH,
} from './styled';

export function HistoryCard({ artwork, tokens }) {
  const [artworkHistory, setArtworkHistory] = useState([]);

  // Builds NFT History
  // TODO: Generate this in the API as part of the tokens response
  useEffect(() => {
    if (artwork.isFetched && tokens.isFetched && artwork.data.artworkType === 'NFT') {
      const newHistory = [];
      const firstToken = tokens.data?.available[0] || tokens.data?.purchased[0];
      const artist = artwork.data?.artist;

      if (tokens.data?.total < 1) return;

      newHistory.push({
        type: 'LISTED',
        user: {
          id: artist.id,
          name: artist.displayName,
        },
        date: firstToken?.createdAt,
        quantity: tokens.data?.total,
        price: firstToken?.price,
      });

      for (let i = 0; i < tokens.data?.purchased.length; i += 1) {
        const token = tokens.data?.purchased[i];
        newHistory.push({
          type: 'PURCHASE',
          user: {
            id: token.owner.id,
            name: `${token.owner.givenName} ${token.owner.surname}`,
          },
          date: token.userToken.createdAt,
          price: token.price,
        });
      }

      setArtworkHistory(newHistory);
    }
  }, [artwork.data, tokens.data]);

  return artworkHistory.length === 0 ? (
    <></>
  ) : (
    <RootWrapper>
      <CardTitle>History</CardTitle>
      <HistoryWrapper>
        {artworkHistory.map((event) => (
          <HistoryItem key={`key-${event.type}-${event.date}`}>
            <ArtistImage src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <HistoryInfo>
              <EventDescription>
                {event.type === 'LISTED' && `Artwork listed by ${event.user.name}`}
                {event.type === 'PURCHASE' && `Artwork purchased by ${event.user.name}`}
              </EventDescription>
              <EventDate>
                {event.date ? format(parseISO(event.date), "MMM do yyyy 'at' h:mm:ss b'") : 'No Date'}
              </EventDate>
            </HistoryInfo>
            <PriceWrapper>
              <ETH>{Web3.utils.fromWei(event.price || '0', 'ether')} ETH</ETH>
              {event.quantity && <span>{event.quantity} Editions</span>}
            </PriceWrapper>
          </HistoryItem>
        ))}
      </HistoryWrapper>
    </RootWrapper>
  );
}

HistoryCard.propTypes = {
  artwork: PropTypes.object.isRequired,
  tokens: PropTypes.object.isRequired,
};
