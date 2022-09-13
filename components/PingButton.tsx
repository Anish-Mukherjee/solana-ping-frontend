import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC, useState } from "react";
import styles from "../styles/PingButton.module.css";
import * as Web3 from "@solana/web3.js";

const PROGRAM_ID = `ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa`;
const DATA_ACCOUNT_PUBKEY = `Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod`;

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = () => {
    if (!connection || !publicKey) {
      alert("Oops! Wallet not connected or missing public key");
      return;
    }
  };

  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <button className={styles.button}>Ping!</button>
    </div>
  );
};
