import {
    WalletAdapterNetwork,
    ConnectionProvider,
    WalletProvider,
  } from '@solana/wallet-adapter-react';
  import {
    PhantomWalletAdapter,
  } from '@solana/wallet-adapter-wallets';
  import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
  import React, { FC } from 'react';
  require('@solana/wallet-adapter-react-ui/styles.css');
  
  export const WalletContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = clusterApiUrl(network);
    const wallets = [new PhantomWalletAdapter()];
  
    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
  };