import React from 'react';

import { useDispatch } from 'react-redux';

// Components
import { HeaderSplash } from '../../../components/HeaderSplash';
import { Button } from '../../../components/Button';
import { WalletPreview } from '../../../components/WalletPreview';

// Hooks
import { useAllWallets } from '../../../hooks/data';

// Redux
import { openModal } from '../../../store/app/actions';

// Styled
import { Wrapper, FlexContainer, LowerWrapper, Divider } from './styled';

export function NFTImport() {
  const dispatch = useDispatch();
  const wallets = useAllWallets();

  const AddWalletModal = () => {
    dispatch(openModal({ modal: 'ADD_WALLET' }));
  };

  return (
    <Wrapper>
      <HeaderSplash height="10vh" />
      <FlexContainer>
        <h2>{wallets?.data?.length} wallet(s) paired</h2>
        <Button color="red" type="button" onClick={AddWalletModal}>
          Add new wallet
        </Button>
      </FlexContainer>
      <LowerWrapper>
        {/* Wallet connection */}
        {wallets?.data?.map((wallet) => (
          <>
            <WalletPreview address={wallet.walletAddress} />
            <Divider />
          </>
        ))}
      </LowerWrapper>
    </Wrapper>
  );
}
