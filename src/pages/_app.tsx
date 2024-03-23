import { Toaster } from "@/components/ui/toaster";
import { signIn, signOut } from "@/firebase";
import { SolanaProviders } from "@/providers/SolanaProvider";
import { SolanaSignInProvider } from "@/providers/SolanaSignInProvider";
import "@/styles/globals.css";
import { useMonaco } from "@monaco-editor/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('onedark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          {
            token: 'comment',
            foreground: '#E851EB',
            fontStyle: 'italic'
          },
          {
            token: "string",
            foreground: "#E5AFFF"
          },
          {
            token: "identifier",
            foreground: "#E40DB5"
          },
          {
            foreground: "#EB00FF",
            token: "keyword"
          },
          {
            token: "constant",
            foreground: "#EB00FF"
          },
          {
            "foreground": "FFB784",
            "token": "storage"
          },
        ],
        colors: {
          'editor.background': '#09090b',
          "editor.selectionBackground": "#60003F",
          // "editor.lineHighlightBackground": "#00000059",
        }
      });
      monaco.editor.setTheme('onedark');

      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      });
    }
  }, [monaco])

  return (
    <>
      <SolanaProviders>
        <SolanaSignInProvider
          authDomain={process.env.NEXT_PUBLIC_URL as string}
          requestUrl="/api/solana-auth/getauthchallenge"
          callbackUrl="/api/solana-auth/completeauthchallenge"
          onAuthCallback={signIn}
          signOut={signOut}
        >
          <Component {...pageProps} />
          <Toaster />
        </SolanaSignInProvider>
      </SolanaProviders>
    </>
  );
}
