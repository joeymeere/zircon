import { useWallet } from '@solana/wallet-adapter-react'
import { IconCode, IconMedal2, IconSchool, IconSettings, IconUser } from '@tabler/icons-react'
import { useRouter } from 'next/router';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ProfileLayout() {
    const { query } = useRouter();
    const { publicKey } = useWallet();

    const subNavigation = publicKey?.toString() == query.id ? [
        { name: 'Profile', href: '#', icon: IconUser, current: true },
        { name: 'Badges', href: '#', icon: IconMedal2, current: false },
        { name: 'Challenges', href: '#', icon: IconCode, current: false },
        { name: 'Courses', href: '#', icon: IconSchool, current: false },
        { name: 'Account', href: '#', icon: IconSettings, current: false },
    ] : [
        { name: 'Profile', href: '#', icon: IconUser, current: true },
        { name: 'Badges', href: '#', icon: IconMedal2, current: false },
        { name: 'Challenges', href: '#', icon: IconCode, current: false },
        { name: 'Courses', href: '#', icon: IconSchool, current: false },
    ]

    return (
        <div>
            <main className="relative w-full mt-32">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg bg-zinc-950 shadow">
                        <div className="divide-y divide-neutral-500/25 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
                            <aside className="py-6 lg:col-span-3">
                                <nav className="space-y-1">
                                    {subNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'border-pink-500 bg-pink-500/50 text-pink-700 hover:bg-pink-500/50 hover:text-pink-700'
                                                    : 'border-transparent text-zinc-900 hover:bg-pink-500/25 hover:text-zinc-900',
                                                'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current
                                                        ? 'text-pink-500 group-hover:text-pink-500'
                                                        : 'text-neutral-200 group-hover:text-neutral-200',
                                                    '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            <span className="truncate font-plex text-neutral-200">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </aside>

                            <div className='px-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}