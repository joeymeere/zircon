import { signIn, signOut } from "@/firebase";
import { SolanaProviders } from "@/providers/SolanaProvider";
import { SolanaSignInProvider } from "@/providers/SolanaSignInProvider";
import "@/styles/globals.css";
import { useMonaco } from "@monaco-editor/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import axios from "axios";
import { getIDL } from "@joeymeere/dreamcast";
import { Connection } from "@solana/web3.js";
import { Toaster } from "@/components/ui/sonner";


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

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        typeRoots: ["node_modules/@types", "node_modules/@types/node"],
        esModuleInterop: true,
        allowJs: true,
      });
    }
  }, [monaco])

  useEffect(() => {
    const getLibs = async () => {
      if (monaco) {
        //"https://unpkg.com/axios@1.5.1/index.d.ts"
        const { data: web3js } = await axios.get(
          "https://unpkg.com/@solana/web3.js@latest/lib/index.d.ts"
        );

        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          web3js,
        );

        const { data: spl } = await axios.get(
          "https://unpkg.com/@solana/spl-token@0.1.8/lib/index.d.ts"
        );

        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          spl,
        );

        const { data: anchor } = await axios.get(
          "https://unpkg.com/@coral-xyz/anchor@0.29.0/dist/cjs/index.d.ts"
        );

        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          anchor,
        )

        const { data: axiosData } = await axios.get(
          "https://unpkg.com/axios@1.5.1/index.d.ts"
        );

        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          axiosData,
        );

        /*
        const { data: dreamcast } = await axios.get(
          "https://unpkg.com/@joeymeere/dreamcast@1.0.5/src/index.d.ts"
        );

        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          dreamcast,
        );
        */

        monaco.editor.createModel(web3js, "typescript");
        monaco.editor.createModel(spl, "typescript");
        monaco.editor.createModel(anchor, "typescript");
        monaco.editor.createModel(axiosData, "typescript");
        //monaco.editor.createModel(dreamcast, "typescript");
        console.log("Web3.js, SPL Token & Axios loaded.");
      }
    }
    getLibs();
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
          <Toaster />
          <Component {...pageProps} />
        </SolanaSignInProvider>
      </SolanaProviders>
    </>
  );
}
