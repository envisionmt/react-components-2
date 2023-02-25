import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMetaMask } from 'metamask-react';
import Web3 from 'web3';

// Components
import { Button } from '../../Button';
import { ConnectButton } from '../../Metamask/ConnectButton';

// Hooks
import { useAllWallets } from '../../../hooks/data';
import { useAddWallet } from '../../../hooks/mutations';

// Styled
import { RootWrapper, ModalHeader, WalletConnectWrapper } from './styled';

function AddWalletModal({ closeModal }) {
  const { status, account } = useMetaMask();
  const [web3, setWeb3] = useState();
  const [savingWallet, setSavingWallet] = useState(false);
  const wallets = useAllWallets();
  const addWalletMutation = useAddWallet();

  useEffect(() => {
    const w3 = new Web3(window.ethereum);
    setWeb3(w3);
  }, []);

  const handleVerifyWallet = async () => {
    setSavingWallet(true);
    const signedMessage = await web3.eth.personal.sign('I am verifying my wallet with envision.', account);
    await addWalletMutation.mutateAsync({ params: { signedMessage, walletAddress: account } });
    setSavingWallet(false);
  };

  return (
    <RootWrapper>
      <ModalHeader>Add New Wallet</ModalHeader>
      <WalletConnectWrapper>
        {status !== 'connected' && (
          <>
            <h2>Lets get started!</h2>
            <p>First we need to connect to your wallet to gather some general information.</p>
            <ConnectButton />
          </>
        )}
        {status === 'connected' &&
          (!wallets.isFetched || wallets?.data.filter((e) => e.walletAddress === account)).length === 0 && (
            <>
              <h2>Now we need to verify your wallet and pair to your envision account!</h2>
              <p>This helps us ensure we are in sync with the NFTs that are in your wallet.</p>
              <Button onClick={handleVerifyWallet} disabled={savingWallet} pending={savingWallet} primary>
                Verify Your Wallet
              </Button>
            </>
          )}
        {status === 'connected' &&
          wallets.isFetched &&
          wallets.data.filter((e) => e.walletAddress === account).length === 1 && (
            <>
              <h2>You have connected and paired your wallet with envision!</h2>
              <p>Connected Wallet: {`${account.slice(0, 5)}......${account.slice(-4)}`}</p>
              <Button onClick={() => closeModal()}>Close</Button>
            </>
          )}
      </WalletConnectWrapper>
    </RootWrapper>
  );
}

AddWalletModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default AddWalletModal;
