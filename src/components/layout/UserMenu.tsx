import { Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSolanaSignIn } from "@/providers/SolanaAuthContext";
import Image from "next/image";
import {
  IconChartCandle,
  IconChartGridDots,
  IconEye,
  IconLogout,
  IconLogout2,
} from "@tabler/icons-react";
import Tabs from "./menu/Tabs";

interface UserMenuProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function UserMenu({ open, setOpen }: UserMenuProps) {
  const { currentUser, signout } = useSolanaSignIn();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-[100]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md z-100 pb-4 mt-16 pr-4">
                  <div className="flex h-full flex-col overflow-y-scroll bg-zinc-900 rounded-xl pt-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 items-center">
                          <Image
                            src={currentUser?.image as string}
                            alt=""
                            width={100}
                            height={100}
                            className="w-14 h-14 rounded-full"
                          />
                          <div className="flex-col space-y-1 items-start">
                            <p className="font-plex font-medium text-base text-white">
                              {currentUser?.username}
                            </p>
                            <div className="px-1.5 border border-[#E851EB] w-fit rounded-full">
                              <p className="font-plex font-light text-xs text-[#E851EB]">
                                Novice
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <button className="py-2 px-2 border border-zinc-500 bg-zinc-800 rounded-full hover:bg-zinc-600">
                            <IconEye
                              stroke={1}
                              size={16}
                              className="text-zinc-400"
                            />
                          </button>
                          <button
                            onClick={() => {
                              signout();
                              setOpen(false);
                            }}
                            className="py-2 px-2 border border-zinc-500 bg-zinc-800 rounded-full hover:bg-zinc-600"
                          >
                            <IconLogout
                              stroke={1}
                              size={16}
                              className="text-zinc-400"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*
                    <div>
                      <div className="my-6 px-6">
                        <div className="flex gap-2 items-center font-plex text-zinc-300">
                          <IconChartGridDots />
                          <p>Level 1</p>
                        </div>
                        <progress
                          value={currentUser?.xp}
                          max={150}
                          className="progress-bar h-[8px] rounded-full bg-neutral-700"
                        />
                      </div>
                    </div>
                        */}
                    <hr className="mt-6 border-zinc-500/50"></hr>
                    <div className="relative flex-1 px-4 pt-6 bg-zinc-950 sm:px-6">
                      <Tabs />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
