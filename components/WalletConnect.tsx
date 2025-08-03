import { useState } from 'react';

declare global {
  interface Window { ethereum?: any }
}

export default function WalletConnect() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connect = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWallet(accounts[0]);
    } else {
      alert('No Ethereum wallet found');
    }
  };

  return (
    <button onClick={connect} className="p-2 bg-green-600 text-white rounded mt-4">
      {wallet ? `Connected: ${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4)}` : 'Connect Wallet'}
    </button>
  );
}
