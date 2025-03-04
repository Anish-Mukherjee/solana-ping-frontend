import { FC, ReactNode } from "react";
import React from "react";
import * as Web3 from "@solana/web3.js";
import * as WalletAdapterWallets from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = Web3.clusterApiUrl("devnet");
  const phantom = new WalletAdapterWallets.PhantomWalletAdapter();
  const solflare = new WalletAdapterWallets.SolflareWalletAdapter();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[phantom, solflare]}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
