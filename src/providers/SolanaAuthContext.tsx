import React from "react";
import { Wallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { createContext, useContext } from "react";
import { UserMetadata } from "@/interfaces/user";
import { NotificationMetadata } from "@/interfaces/notification";

export interface SolanaAuthState {
  isAuthenticated: boolean;
  isSigningIn: boolean;
  data: Record<string, string>;
  currentUser: UserMetadata | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserMetadata | null>>,
  loading: boolean,
  // TODO: possibily remove these from the Auth Context
  publicKey: PublicKey | null;
  wallet: Wallet | null;
  notifications: NotificationMetadata[] | null,
  walletNotSelected: boolean;
  authenticate(): void;
  signout(): Promise<void>;
  openWalletModal(): void;
  disconnectWallet(): void;
  referrer: string | null;
}

export const SolanaAuthContext = createContext<SolanaAuthState>(
  {} as SolanaAuthState
);

export const useSolanaSignIn = () => {
  return useContext(SolanaAuthContext);
};