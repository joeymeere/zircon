import { IconActivity, IconPlus, IconTrash } from "@tabler/icons-react";
import { Icon } from "../ui/evervault-card";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useWallet } from "@solana/wallet-adapter-react";
import { db } from "@/firebase";
import { timeAgo } from "@/lib/timeAgo";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface SnippetsProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

export default function Snippets({ code, setCode }: SnippetsProps) {
  const { publicKey } = useWallet();
  const [snippetSnap, snippetLoading, snippetError] = useCollection(
    collection(db, `users/${publicKey?.toString()}/snippets`)
  );

  return (
    <div className="relative mr-4 bg-zinc-950 flex-col space-y-4 border border-white/[0.2] p-4">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
      <Icon className="absolute h-6 w-6 -top-7 -right-3 text-neutral-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />
      <button
        onClick={() => {
          const prevCode = code;
          setCode(
            `const web3 = require(\"@solana/web3.js\");\nconst spl = require(\"@solana/spl-token\");\n\nasync function main() {\n\n};\n\nmain();`
          )
          toast("💾 Code cleared!", {
            action: {
              label: "Undo",
              onClick: () => setCode(prevCode),
            },
          });
        }
        }
        className="w-full flex items-center justify-start gap-4 px-4 py-3 rounded-md text-neutral-300 border border-white/[0.2] hover:border-white/[0.5] hover:text-white"
      >
        <IconPlus className="" />
        <p className="font-plex">New Snippet</p>
      </button>
      <div className="border-b border-white/[0.2]"></div>
      {snippetSnap ? (
        <>
          {snippetSnap.docs.length > 0 ? (
            <div className="mt-6 flex-col space-y-2 w-full">
              {snippetSnap.docs.map((snip, i) => (
                <div
                  key={i}
                  onClick={() => setCode(snip.data().code)}
                  className="flex justify-between items-center border border-white/[0.2] hover:border-white/[0.5] py-2 px-3 rounded-md"
                >
                  <div className="flex-col">
                    <p className="font-plex font-medium text-white">
                      {snip.data().name}
                    </p>
                    <p className="font-plex font-light text-zinc-500 text-sm">
                      Created: <i>{timeAgo(snip.data().created)}</i>
                    </p>
                  </div>
                  <div>
                    <IconTrash
                      stroke={1}
                      className="text-zinc-500 hover:text-zinc-200"
                      onClick={async () => {
                        await deleteDoc(
                          doc(
                            db,
                            `users/${publicKey?.toString()}/snippets/${snip.id}`
                          )
                        );
                        toast("Snippet Deleted!");
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 w-full border border-white/[0.2] rounded-md flex-col justify-center py-12">
              <div className="mx-auto p-3 w-fit bg-[#E851EB]/[0.2] rounded-md">
                <IconActivity className="text-zinc-400 w-6 h-6" />
              </div>
              <h4 className="mt-4 font-plex font-semibold text-lg text-center text-zinc-400">
                No Saved Snippets.
              </h4>
              <p className="mt-2 font-plex font-light text-base text-center text-zinc-500">
                Create a snippet and save the result.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="mt-6 w-full border border-white/[0.2] rounded-md flex-col justify-center py-12">
          <div className="mx-auto p-3 w-fit bg-[#E851EB]/[0.2] rounded-md">
            <IconActivity className="text-zinc-400 w-6 h-6" />
          </div>
          <h4 className="mt-4 font-plex font-semibold text-lg text-center text-zinc-400">
            No Saved Snippets.
          </h4>
          <p className="mt-2 font-plex font-light text-base text-center text-zinc-500">
            Create a snippet and save the result.
          </p>
        </div>
      )}
    </div>
  );
}
