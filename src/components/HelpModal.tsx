import { useSolanaSignIn } from "@/providers/SolanaAuthContext";
import { Dialog, Transition } from "@headlessui/react";
import { IconQuestionMark, IconSandbox, IconX } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";

interface HelpModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HelpModal({ open, setOpen }: HelpModalProps) {
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
                          <IconQuestionMark
                            stroke={1}
                            size={30}
                            className="text-[#E40DB5]"
                          />
                          <h2 className="text-3xl font-semibold font-plex leading-9 tracking-tight text-black dark:text-white">
                            Help
                          </h2>
                        </div>
                      </div>
                      <div className="mt-4 flex-col sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className="mb-4 font-plex font-light text-zinc-300 text-base">
                          Here a few guidelines for writing your code for
                          courses, challenges, and the sandbox on Zircon.
                        </p>
                        <div>
                          <ul className="flex-col space-y-2 font-plex text-zinc-500">
                            <li>
                            ✅ Write your code in{" "}
                              <code className="bg-zinc-900 p-0.5">function()</code>{" "}
                              syntax.
                            </li>
                            <li>
                            ✅ Keep your core logic in a single{" "}
                              <code className="bg-zinc-900 p-0.5">main</code>{" "}
                              function
                            </li>
                            <li>
                            ✅{" "} <code className="bg-zinc-900 p-0.5">async / await</code>{" "}
                              is supported
                            </li>
                            <li>
                            ✅{" "} <code className="bg-zinc-900 p-0.5">@solana/web3.js</code>,{" "}
                              <code className="bg-zinc-900 p-0.5">@solana/spl-token</code>,{" "}
                              <code className="bg-zinc-900 p-0.5">@joeymeere/dreamcast</code> &{" "}
                              <code className="bg-zinc-900 p-0.5">axios</code>{" "}
                              are the only supported packages
                            </li>
                            <li>
                            ✅ Use{" "}
                              <code className="bg-zinc-900 p-0.5">require()</code>{" "}
                              syntax for imports
                            </li>
                            <li>
                            ✅ Return signatures must be JSON serializable
                            </li>
                          </ul>
                        </div>
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
