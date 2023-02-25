import { useState, useEffect } from 'react';
import { useMetaMask } from 'metamask-react';
import Web3 from 'web3';

import Marketplace from '../constants/Marketplace.json';

const useMarketplace = () => {
  const { status, account } = useMetaMask();
  const [web3, setWeb3] = useState(null);
  const [marketplace, setMarketplace] = useState(null);

  useEffect(() => {
    if (status === 'connected') {
      const w3 = new Web3(window.ethereum);
      setWeb3(w3);
      const contract = new w3.eth.Contract(
        Marketplace,
        '0x3EEed1C191E5EDb5bb683deAE1F1A5d27DCA262A' // TODO: No Hardcode
      );
      setMarketplace(contract);
    }
  }, [status]);

  return { status, account, web3, marketplace };
};

export default useMarketplace;
