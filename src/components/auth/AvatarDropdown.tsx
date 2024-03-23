"use client"

import { FC, Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IconBell, IconChevronDown, IconDashboard, IconLogout, IconSettings, IconUserBolt } from '@tabler/icons-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useSolanaSignIn } from '@/providers/SolanaAuthContext'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from 'next/image'
import Link from 'next/link'
import { getRandomAvatar } from '@/lib/getRandomAvatar'
import { auth } from '@/firebase'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const AvatarDropdown: FC<any> = () => {
    const { publicKey } = useWallet();
    const { signout, currentUser, setCurrentUser, loading, notifications } = useSolanaSignIn();
    const [user] = useAuthState(auth);
    const [image, setImage] = useState<string>(getRandomAvatar(publicKey?.toString() as string));

    useEffect(() => {
        const getImage = () => {
            if (currentUser) {
                setImage(currentUser.image);
            }
        }
        getImage();
    }, [currentUser, user, publicKey]);


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button>
                    <div className="flex gap-x-2 items-center">
                        {loading ? (
                            <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        ) : (
                            <div className='relative'>
                                <Image src={image} alt='profile picture' width={20} height={20} className="w-10 h-10 rounded-full shadow-md" />
                                {notifications ? (
                                    <div className='absolute -bottom-1 -left-1 bg-red-500 px-1.5 py-0.5 rounded-full font-plex text-white text-[8px]'>
                                        {notifications?.length}
                                    </div>
                                ) : null}
                            </div>
                        )}
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
                <Menu.Items className="absolute right-0 z-10 mt-[0.65rem] w-56 origin-top-right rounded-md bg-black shadow-lg border border-[#E851EB]/25">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={`/profile/${publicKey?.toString()}`}
                                    className={classNames(
                                        active ? 'w-full inline-flex gap-2 items-center font-plex bg-pink-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
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
                                <Link
                                    href={`/user/notifications`}
                                    className={classNames(
                                        active ? 'w-full inline-flex justify-between items-center font-plex bg-pink-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
                                        'w-full inline-flex justify-between items-center font-plex px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className='flex gap-2 items-center'>
                                        <IconBell stroke={1} />
                                        Notifications
                                    </div>
                                    {notifications ? (
                                        <div className='bg-red-500 py-0.5 px-2.5 rounded-full font-plex text-white text-xs'>
                                            {notifications?.length}
                                        </div>
                                    ) : null}
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/user/settings"
                                    className={classNames(
                                        active ? 'w-full inline-flex gap-2 items-center font-plex bg-pink-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
                                        'w-full inline-flex gap-2 items-center font-plex px-4 py-2 text-sm'
                                    )}
                                >
                                    <IconSettings stroke={1} />
                                    Settings
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
                                        active ? 'w-full inline-flex gap-2 items-center font-plex bg-pink-500/25 text-gray-900 dark:text-white' : 'text-zinc-700 dark:text-white',
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

export default AvatarDropdown;