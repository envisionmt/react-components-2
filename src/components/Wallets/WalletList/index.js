import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Trash, Sync } from '@emotion-icons/ionicons-sharp';

// Components
import { Button } from '../../Button';

// Actions
import { openModal } from '../../../store/app/actions';

// Styled Components
import { List, ListHeader, ListItem, ButtonWrapper, RightContainer, RemoveButton } from './styled';
import { useRemoveWallet } from '../../../hooks/mutations';

export function WalletList({ wallets }) {
  const dispatch = useDispatch();
  const removeWalletMutation = useRemoveWallet();

  const handleAddWallet = () => {
    dispatch(openModal({ modal: 'ADD_WALLET' }));
  };

  const handleRemoveWallet = (wallet) => {
    if (wallet.syncStatus !== 'SYNCING') {
      removeWalletMutation.mutate({ id: wallet.id });
    }
  };

  return (
    <List>
      <ListHeader>
        <span>Connected Wallets</span>
        <ButtonWrapper>
          <Button small primary onClick={handleAddWallet}>
            Add Another
          </Button>
        </ButtonWrapper>
      </ListHeader>
      {wallets.data.map((wallet) => (
        <ListItem>
          <span>
            {wallet.walletAddress.slice(0, 5)}......{wallet.walletAddress.slice(-4)}
          </span>
          <RightContainer>
            {wallet.syncStatus === 'PENDING' && <span>Queued</span>}
            {wallet.syncStatus === 'COMPLETE' && <span>{`${wallet.tokenCount} Tokens Synced`}</span>}
            {wallet.syncStatus === 'SYNCING' && (
              <span>
                <Sync size={25} />
                {' Syncing...'}
              </span>
            )}
            <RemoveButton type="button" onClick={() => handleRemoveWallet(wallet)}>
              <Trash size={20} />
            </RemoveButton>
          </RightContainer>
        </ListItem>
      ))}
    </List>
  );
}

WalletList.propTypes = {
  wallets: PropTypes.object.isRequired,
};
