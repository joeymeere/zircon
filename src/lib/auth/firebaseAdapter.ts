import * as admin from "firebase-admin";
import { App as FirebaseApp } from "firebase-admin/app";
import { app, auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { initAdmin } from "./firebaseAdmin";
import { Adapter } from "./solanaAuth";

/**
 * A SolanaAuth Adapter to connect with Firebase using Firestore
 * @param {import("firebase-admin/app").App} firebase - A firebase app
 * @returns {Adapter} Adapter
 */
export const FirebaseAdapter = (firebase: FirebaseApp): Adapter => {
  const init = initAdmin();
  
  return {
    getNonce: async (pubkey: string) => {
      const docRef = doc(db, `signinattempts/${pubkey}`);
      const document = await getDoc(docRef);

      if (document.exists()) {
        return document.data()?.nonce;
      }
      return undefined;
    },

    getTLL: async (pubkey: string) => {
      const docRef = doc(db, `signinattempts/${pubkey}`);
      const document = await getDoc(docRef);
      const tll = document.data()?.tll;
      return tll;
    },

    saveSigninAttempt: async (attempt: any) => {
      const docRef = doc(db, `signinattempts/${attempt.pubkey}`);

      await setDoc(docRef, attempt);
      return;
    },

    generateToken: (pubkey: string) => {
      let token: any = admin
        .auth()
        .createCustomToken(pubkey)
        .then((customToken) => (token = customToken))
        .catch((error) => console.error("Error creating token:", error));
      return token;
    },
  };
};