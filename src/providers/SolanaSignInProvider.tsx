import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { SolanaAuthContext } from "./SolanaAuthContext";
import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { generateUsername } from "unique-username-generator";
import { event } from "nextjs-google-analytics";
import { IconCodePlus } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useUnifiedWallet, useUnifiedWalletContext } from "@jup-ag/wallet-adapter";
import { auth, db } from "@/firebase";
import { getRandomAvatar } from "@/lib/getRandomAvatar";
import { check76Credentials } from "@/lib/checks/check76Credentials";
import { NotificationMetadata } from "@/interfaces/notification";
import { UserMetadata } from "@/interfaces/user";
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";

const nonceStr = (nonce: string) => `|| id=${nonce}`;
export const signInMessage = (nonce: string, domain: string) =>
    "Welcome to Zircon💎!\n\nSign the following nonce to verify:" + domain + nonceStr(nonce);

export interface SolanaSignInProviderProps {
    requestUrl: string;
    callbackUrl: string;
    authDomain: string;
    children: ReactNode;
    onAuthCallback(data: Record<string, string>): Promise<any>;
    signOut(): Promise<void>;
}
export const SolanaSignInProvider: FC<SolanaSignInProviderProps> = ({
    children,
    requestUrl,
    callbackUrl,
    authDomain: domain,
    onAuthCallback,
    signOut,
}) => {
    const { setShowModal } = useUnifiedWalletContext();
    const router = useRouter();
    const { publicKey, signMessage, connect, wallet, connected, disconnect } =
        useWallet();
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState<boolean>(false);
    const [isAuthenticated, setAuthed] = useState<boolean>(false);
    const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<UserMetadata | null>(null);
    const [notifications, setNotifications] = useState<NotificationMetadata[] | null>(null);
    const [data, setData] = useState<Record<string, string>>({});
    const [shown, setShown] = useState<boolean>(false);
    const [referrer, setReferrer] = useState<string | null>(null);

    const authenticate = useCallback(async () => {
        setIsSigningIn(true);
        try {
            const { nonce } = await fetch(`${requestUrl}?pubkey=${publicKey}`)
                .then((resp) => resp.json())
                .then((data) => data);

            if (!signMessage) throw new Error("Wallet does not support signing");

            // TODO: Abstract into user defined message
            // construct the message
            const message = signInMessage(nonce, domain);
            // encode the message
            const encodedMsg = new TextEncoder().encode(message);
            // sign with the wallet
            const signature = await signMessage(encodedMsg);

            // complete the authorization
            let callbackData = await fetch(
                callbackUrl +
                "?" +
                new URLSearchParams({
                    pubkey: publicKey!.toString(),
                    payload: message,
                    signature: Array.from(signature).toString(),
                })
            ).then((resp) => resp.json());

            if (!callbackData) throw new Error("No data received from callback");

            // TODO: Abstract to user defined parameter
            const data = await onAuthCallback(callbackData);
            setData(data);
            setAuthed(true);
            setIsSigningIn(false);
        } catch (error: any) {
            setIsSigningIn(false);
            console.error(error);
            toast("An Error Occurred.", {
                description: `${error?.message}`,
                className: 'bg-zinc-950'
            });
        }
    }, [callbackUrl, domain, onAuthCallback, publicKey, requestUrl, signMessage]);

    // connect to the wallet if it's ready
    useEffect(() => {
        if (wallet?.readyState == WalletReadyState.Installed) connect();
    }, [wallet?.readyState, connect]);

    useEffect(() => {
        const getUser = async () => {
            setLoading(true)
            try {
                if (user && connected && publicKey) {
                    let docRef = doc(db, `users/${publicKey?.toString()}`);
                    let document = await getDoc(docRef);

                    if (document.exists()) {
                        onSnapshot(docRef, (user) => {
                            setCurrentUser(user.data() as UserMetadata);
                        });

                        if (!shown) {
                            toast(`💎 Welcome ${document.data().username}!`, {
                                description: `We're glad you're here.`,
                                className: 'bg-zinc-950'
                            });
                            setShown(true);
                        }
                        setAuthed(true)

                        event("login", {
                            category: "login",
                            label: document.data().username,
                        });
                    } else {
                        const devCard = await check76Credentials(publicKey?.toString());
                        let generatedName = generateUsername("", 0, 15);
                        let randomName = generatedName.replace(/[_-]/g, "");
                        const key = publicKey ? publicKey.toString() : randomName;
                        const randomImage = getRandomAvatar(key as string);

                        await setDoc(docRef, {
                            //@ts-ignore
                            image: devCard && Object.keys(devCard).length > 0 ? devCard.image : randomImage,
                            //@ts-ignore
                            username: devCard && Object.keys(devCard).length > 0 ? devCard.name : randomName,
                            location: "localhost:3000",
                            xp: 10,
                            timestamp: Date.now() / 1000,
                            verified: false,
                        });

                        event("create_user", {
                            category: "create_user",
                            label: publicKey.toString(),
                        });

                        getUser();
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false)
            }
        }
        getUser();
    }, [isAuthenticated, connected, publicKey, data, user]);

    useEffect(() => {
        const checkNotifications = async () => {
            if (publicKey && user) {
                const notisRef = collection(db, `users/${publicKey?.toString() || user?.uid}/notifications`);

                const q = query(notisRef, where("viewed", "==", false));

                onSnapshot(q, (notis) => {
                    let allNotificiations = notis.docs.map((noti) => {
                        return {
                            id: noti.id,
                            data: {
                                ...noti.data()
                            }
                        };
                    });

                    if (allNotificiations.length > 0) {
                        setNotifications(allNotificiations as NotificationMetadata[]);
                    } else {
                        setNotifications(null);
                    }
                })
            }
        }
        checkNotifications();
    }, [user, publicKey, currentUser, isAuthenticated]);

    useEffect(() => {
        if (connected && isSigningIn) {
            authenticate();
        }
    }, [connected, authenticate, isSigningIn]);

    useEffect(() => {
        const { r } = router.query;
        if (r) {
            localStorage.setItem("referrer", r as string);
            setReferrer(r as string);
        } else {
            let item = localStorage.getItem("referrer");

            if (item !== null || undefined) {
                setReferrer(item)
                console.log("Referrer Found:", item);
            }
        }
    }, [router, connected]);

    const _signout = async () => {
        await signOut();
        setAuthed(false);
    };

    const disconnectWallet = async () => {
        await disconnect();
        await _signout();
    };

    const openWalletModal = () => {
        setShowModal(true);
    };

    let walletNotSelected = !wallet;

    return (
        <SolanaAuthContext.Provider
            value={{
                isAuthenticated,
                authenticate: () => setIsSigningIn(true),
                data,
                currentUser,
                setCurrentUser,
                loading,
                publicKey,
                wallet,
                notifications,
                signout: _signout,
                walletNotSelected,
                openWalletModal,
                isSigningIn,
                disconnectWallet,
                referrer,
            }}
        >
            {children}
        </SolanaAuthContext.Provider>
    );
};