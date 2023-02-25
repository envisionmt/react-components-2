import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import browser from 'browser-detect';
import { useMetaMask } from 'metamask-react';

// Components
import { Button } from '../../Button';

// Styled
const Wrapper = styled.div`
  width: 100%;

  div {
    text-align: center;
  }
`;

export function ConnectButton() {
  const { status, connect, account } = useMetaMask();
  const [metamaskState, setMetaMaskState] = useState('');
  const [install, setInstall] = useState(false);

  useEffect(() => {
    if (typeof web3 !== 'undefined') {
      window.ethereum.on('chainChanged', () => {});
    } else {
      setInstall(true);
    }

    if (status === 'unavailable') setMetaMaskState('MetaMask not available :(');
    if (status === 'initializing') setMetaMaskState('Synchronization with MetaMask ongoing...');
    if (status === 'notConnected') setMetaMaskState('Connect MetaMask');
    if (status === 'connecting') setMetaMaskState('Connecting...');
  }, [status]);

  const network = () => {
    if (status === 'connecting') return;
    if (status === 'notConnected') {
      connect();
    }
  };

  const initConnect = async () => {
    network();
  };

  const handleMetamaskButton = () => {
    if (install) {
      const browsers = browser();
      switch (browsers.name) {
        case 'firefox':
          window.open('https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/', '_blank');
          break;
        case 'opera':
          window.open('https://addons.opera.com/en/extensions/details/metamask/', '_blank');
          break;
        case 'safari':
          window.open('https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202', '_blank');
          break;
        default:
          window.open(
            'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en',
            '_blank'
          );
          break;
      }
    } else {
      initConnect();
    }
  };

  return (
    <Wrapper>
      {status === 'connected' ? (
        <Wrapper>
          {status === 'connected' && <div>Connected account: {`${account.slice(0, 5)}......${account.slice(-4)}`}</div>}
        </Wrapper>
      ) : (
        <Button onClick={handleMetamaskButton} primary>
          {install ? 'Install MetaMask' : metamaskState}
        </Button>
      )}
    </Wrapper>
  );
}
