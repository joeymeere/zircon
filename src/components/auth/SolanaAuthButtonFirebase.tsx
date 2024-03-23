"use client"

import { Auth } from "firebase/auth";
import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SolanaAuthButton } from "./SolanaAuthButton";
import { useSolanaSignIn } from "@/providers/SolanaAuthContext";
import { IconPlug } from "@tabler/icons-react";

interface SolanaAuthButtonFirebaseProps {
    auth: Auth;
}
/**
 * Component to wrap the SignInWithSolana Buttons
 * This component used a hook to login the user with firebase's auth
 */
export const SolanaAuthButtonFirebase: FC<
    SolanaAuthButtonFirebaseProps
> = ({ auth }) => {
    const { openWalletModal, wallet, walletNotSelected } = useSolanaSignIn();
    const [user, loading, error] = useAuthState(auth);

    return (
        <>
            {walletNotSelected ? (
                <button
                    className="px-2 md:flex space-x-2 items-center transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-md bg-gradient-to-bl from-[#E40DB5] to-[#E851EB] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-sm font-plex text-white w-fit h-10 justify-center hidden"
                    onClick={() => openWalletModal()}
                >
                    <IconPlug stroke={1} size={24} />
                    <span>Select Wallet</span>
                </button>
            ) : (
                <SolanaAuthButton />
            )}
        </>
    );
};

export default SolanaAuthButtonFirebase;