"use client"

import { FC, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IconChevronDown, IconDashboard, IconLogout, IconUserBolt, IconUserPlus } from '@tabler/icons-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSolanaSignIn } from '@/providers/SolanaAuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/firebase'
import { getRandomAvatar } from '@/lib/getRandomAvatar'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const MobileDropdown: FC<any> = ({ setOpen }) => {
    const { publicKey } = useWallet();
    const { signout, currentUser, setCurrentUser, loading } = useSolanaSignIn();
    const [user] = useAuthState(auth);

    let userImage = currentUser?.image ? currentUser?.image : getRandomAvatar(publicKey?.toString() as string);
    let username = currentUser?.username ? currentUser?.username : "solana-anon";

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button>
                    <div className="flex gap-x-2 items-center">
                        <Image src={userImage} alt={`${username}'s profile picture`} width={20} height={20} className="w-10 h-10 mr-2 border border-zinc-400 dark:border-zinc-600 rounded-full shadow-md" />
                        <p className='font-plex'>{username}</p>
                        <IconChevronDown size={16} aria-hidden="true" />
                    </div>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute -top-36 left-0 z-10 mt-[0.65rem] w-56 origin-top-right rounded-md bg-white dark:bg-[#262626] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/user/dashboard"
                                    className={classNames(
                                        active ? 'w-full inline-flex gap-2 items-center font-plex bg-blue-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
                                        'w-full inline-flex gap-2 items-center font-plex px-4 py-2 text-sm'
                                    )}
                                >
                                    <IconDashboard stroke={1} />
                                    Dashboard
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={`/profile/${publicKey?.toString()}`}
                                    className={classNames(
                                        active ? 'w-full inline-flex gap-2 items-center font-plex bg-blue-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
                                        'w-full inline-flex gap-2 items-center font-plex px-4 py-2 text-sm'
                                    )}
                                >
                                    <IconUserBolt stroke={1} />
                                    My Profile
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => {
                                        signout();
                                        setCurrentUser(null);
                                    }}
                                    className={classNames(
                                        active ? 'w-full inline-flex gap-2 items-center font-plex bg-blue-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
                                        'w-full inline-flex gap-2 items-center font-plex px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    <IconLogout stroke={1} />
                                    Sign Out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MobileDropdown;