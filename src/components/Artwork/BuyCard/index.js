import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Web3 from 'web3';
import { useNotifications } from 'reapop';

// Components
import { Button } from '../../Button';
import { ConnectButton } from '../../Metamask/ConnectButton';

// Hooks
import { useUser, useAllWallets } from '../../../hooks/data';
import { useAddWallet } from '../../../hooks/mutations';
import useMarketplace from '../../../hooks/useMarketplace';
import { toggleSigninMenu } from '../../../store/signinMenu/actions';

// Styled
import {
  RootWrapper,
  PriceDetailWrapper,
  FlexWrapper,
  Label,
  Price,
  Description,
  ButtonWrapper,
  SignupText,
  TextWrapper,
} from './styled';

export function BuyCard({ artwork, token }) {
  const { status, account, web3, marketplace } = useMarketplace();
  const { notify } = useNotifications();
  const history = useHistory();
  const dispatch = useDispatch();
  const [purchasing, setPurchasing] = useState();
  const [savingWallet, setSavingWallet] = useState(false);
  const user = useUser();
  const wallets = useAllWallets();
  const addWalletMutation = useAddWallet();

  const handleVerifyWallet = async () => {
    setSavingWallet(true);
    const signedMessage = await web3.eth.personal.sign('I am verifying my wallet with envision.', account);
    await addWalletMutation.mutateAsync({ params: { signedMessage, walletAddress: account } });
    setSavingWallet(false);
  };

  async function handleBuyNow() {
    try {
      if (purchasing) return;
      setPurchasing(true);

      if (!token) {
        notify({ status: 'error', title: 'Uh oh!', message: 'All editions of this artwork have been sold.' });
        setPurchasing(false);
        return;
      }

      const balance = await web3.eth.getBalance(account);
      const price = web3.utils.toWei(artwork?.tokenMetadata?.price, 'wei');

      if (price > balance) {
        notify({
          status: 'error',
          title: 'Low Wallet Balance',
          message: 'You do not have enough ethereum in your connected wallet to make this purchase.',
        });
        setPurchasing(false);
        return;
      }

      const transaction = await marketplace.methods.purchaseToken(token.tokenId);
      const estimatedGas = await transaction.estimateGas({ from: account, value: price });
      const gas = web3.utils.toHex(Math.ceil(estimatedGas * 1.1));

      await transaction.send({
        from: account,
        value: web3.utils.toHex(price),
        gas,
      });

      window.gtag('event', 'purchase', {
        transaction_id: `${token.tokenId}_${user.data?.id}`,
        affiliation: 'envision NFT Artwork',
        value: web3.utils.toHex(price),
        currency: 'ETH',
        items: [
          {
            id: token.tokenId,
            name: artwork.name,
            brand: 'envision',
            category: 'NFT',
            quantity: 1,
            price: web3.utils.toHex(price),
          },
        ],
      });
      window.lintrk('track', { conversion_id: 6756036 });
      window.fbq('track', 'Purchase', {
        transaction_id: `${token.tokenId}_${user.data?.id}`,
        affiliation: 'envision NFT Artwork',
        value: web3.utils.toHex(price),
        currency: 'ETH',
        contents: [
          {
            id: token.tokenId,
            name: artwork.name,
            brand: 'envision',
            category: 'NFT',
            quantity: 1,
            price: web3.utils.toHex(price),
          },
        ],
        content_type: 'NFT',
      });

      history.push(`/nft/success/${artwork.id}`);
      setPurchasing(false);
      return;
    } catch (err) {
      setPurchasing(false);

      if (err.code === 4001) {
        notify({ status: 'info', title: 'Transaction Canceled', message: 'You canceled the transaction.' });
        return;
      }

      notify({
        status: 'error',
        title: 'Uh oh!',
        message: err.message,
      });
    }
  }

  const getButtonText = () => {
    if (purchasing) return 'Purchasing...';
    if (!user.isFetched) return 'Login to Purchase';
    if (!token) return 'Sold Out';
    return 'Purchase';
  };

  const isWalletLinked = (walletAddress) => {
    if (wallets.data?.length > 0) {
      const matchingWallet = wallets.data.find(
        (wallet) => wallet.walletAddress.toLowerCase() === walletAddress.toLowerCase()
      );
      if (matchingWallet) return true;
    }

    return false;
  };

  const getLinkStep = () => {
    if (!user.isFetched) return 'LOGGED_OUT';
    if (status !== 'connected') return 'NOT_CONNECTED';
    if (!wallets.isFetched || wallets.data?.length === 0) return 'NOT_VERIFIED';
    if (!isWalletLinked(account)) return 'INVALID_WALLET';
    return 'READY';
  };

  const linkStep = getLinkStep();

  const handleToggle = () => {
    dispatch(toggleSigninMenu());
  };

  return (
    <RootWrapper>
      <FlexWrapper>
        <PriceDetailWrapper>
          <Label>Price</Label>
          <Price>{Web3.utils.fromWei(artwork?.tokenMetadata?.price || '0', 'ether')} ETH</Price>
        </PriceDetailWrapper>

        <TextWrapper>
          <Description>This is a tokenized edition of the artwork protected by the blockchain.</Description>
          {linkStep === 'LOGGED_OUT' && (
            <>
              <Description className="description">Join envision to collect this artwork!</Description>
            </>
          )}
        </TextWrapper>
      </FlexWrapper>
      <ButtonWrapper>
        {linkStep === 'LOGGED_OUT' && (
          <>
            <Button type="button" id="left" color="red" onClick={handleToggle}>
              Sign in
            </Button>
            <Button type="button" id="right" color="red" onClick={handleToggle}>
              Create an account
            </Button>
          </>
        )}

        {linkStep === 'NOT_CONNECTED' && <ConnectButton />}

        {linkStep === 'NOT_VERIFIED' && (
          <>
            <Button onClick={handleVerifyWallet} disabled={savingWallet} pending={savingWallet} primary>
              Verify Your Wallet
            </Button>
          </>
        )}

        {linkStep === 'INVALID_WALLET' && (
          <SignupText>Please connect with the wallet that you previously verified with envision.</SignupText>
        )}

        {linkStep === 'READY' && (
          <Button onClick={handleBuyNow} disabled={!token || purchasing} pending={purchasing} primary>
            {getButtonText()}
          </Button>
        )}
      </ButtonWrapper>
    </RootWrapper>
  );
}

BuyCard.propTypes = {
  artwork: PropTypes.object,
  token: PropTypes.object,
};

BuyCard.defaultProps = {
  artwork: {},
  token: null,
};
