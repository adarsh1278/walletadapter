'use client';
import Image from 'next/image';
import { FC } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  UnsafeBurnerWalletAdapter,
  WalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

// Define the Home component using TypeScript
const Home: FC = () => {
  const network = WalletAdapterNetwork.Devnet; // or 'mainnet-beta', 'testnet'

  const endpoint = 'your own rpc url'; // replace with your own RPC URL

  const wallets: WalletAdapter[] = [
    new UnsafeBurnerWalletAdapter(),
    // Add other wallets if needed
  ];

  return (
    <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <h1>hi </h1>
          <WalletMultiButton />
          {/* <WalletDisconnectButton />s */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Home;
