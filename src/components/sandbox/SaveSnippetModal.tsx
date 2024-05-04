import { useSolanaSignIn } from "@/providers/SolanaAuthContext";
import { Dialog, Transition } from "@headlessui/react";
import { IconSandbox, IconX } from "@tabler/icons-react";
//import { LinkedinShareButton, TelegramShareButton, TwitterShareButton } from "next-share";
import { Fragment, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { saveSnippet } from "@/lib/saveSnippet";
import { toast } from "sonner";

interface SnippetModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  code: string;
}

export default function SaveSnippetModal({
  open,
  setOpen,
  code,
}: SnippetModalProps) {
  const { publicKey, sendTransaction } = useWallet();
  const { currentUser } = useSolanaSignIn();
  const [name, setName] = useState<string>("");

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#121212]/75 backdrop-blur-sm transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className={`relative transform overflow-hidden rounded-md text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg max-[640px]:my-auto`}
                >
                  <div className="back relative bg-zinc-950 border border-[#E40DB5]/25 w-full rounded-md h-full max-[640px]:p-4">
                    <IconX
                      size={20}
                      className="absolute top-4 right-4 dark:text-white"
                      onClick={() => setOpen(false)}
                    />
                    <div className="flex min-h-full flex-1 flex-col px-4 py-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="flex gap-x-2 items-center">
                          <IconSandbox
                            stroke={1}
                            size={30}
                            className="text-[#E40DB5]"
                          />
                          <h2 className="text-3xl font-semibold font-plex leading-9 tracking-tight text-black dark:text-white">
                            Save Snippet
                          </h2>
                        </div>
                      </div>
                      <div className="mt-4 flex-col sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className="mb-4 font-plex font-light text-zinc-300 text-base">
                          Give this snippet a friendly name, and stash it away
                          for later.
                        </p>
                        <div>
                          <div className="relative mt-2">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              onChange={(e) => setName(e.target.value)}
                              className="peer block w-full font-plex border-0 bg-zinc-900 text-zinc-300 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="Fetching IDLs w/ Anchor"
                            />
                            <div
                              className="absolute inset-x-0 bottom-0 border-t border-[#E40DB5]/50 peer-focus:border-t-2 peer-focus:border-[#E40DB5]/75"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <button
                          onClick={async () => {
                            if (name.length > 0 && publicKey) {
                              await saveSnippet(
                                publicKey.toString(),
                                name,
                                code
                              );
                              setOpen(false);
                            } else {
                                toast("An error occurred.");
                            }
                          }}
                          className="mt-3 px-8 py-2 rounded-full bg-gradient-to-b from-[#E40DB5] to-[#E851EB] font-plex text-white text-sm focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
