import { IconBrandGithubFilled, IconCode, IconFreeRights, IconMedal, IconSchool, IconUsersGroup } from '@tabler/icons-react'

const features = [
    {
        name: 'Courses.',
        description: 'Start learning how to build with guided, and gamified courses to teach you the basics of Solana.',
        icon: IconSchool,
    },
    {
        name: 'Challenges.',
        description: 'Test your existing skills with challenges that range between a variety of skill-levels',
        icon: IconCode,
    },
    {
        name: 'Ranking.',
        description: 'Get ranked based on challenges completed, and quality of your solutions for each challenge.',
        icon: IconMedal,
    },
    {
        name: 'Open-Source.',
        description: 'Zircon is fully open-sourced under the GPL-3.0 license, making it a true public good for devs.',
        icon: IconBrandGithubFilled,
    },
    {
        name: 'Community Supported.',
        description: 'We continually source challenges and course material from developers in the Solana ecosystem.',
        icon: IconUsersGroup,
    },
    {
        name: 'Free Forever.',
        description: 'Zircon costs $0 to use, meaning no paywalls for developers looking to advance their skills.',
        icon: IconFreeRights,
    },
]

export default function Features() {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="w-fit mx-auto text-sm font-regular leading-7 bg-gradient-to-tr from-[#E40DB5] to-[#E851EB] py-1 px-3 rounded-full text-white">Learn, Challenge, Compete.</h2>
                    <p className="mt-4 text-3xl font-semibold font-plex tracking-tight bg-gradient-to-br from-white to-white/25 bg-clip-text text-transparent sm:text-5xl">Build on Solana.</p>
                    <p className="mt-6 text-lg leading-8 font-plex text-neutral-500">
                        We make it simple for you to get started on Solana, with guided courses designed for blockchain beginners, and challenges to gauge your progress.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img
                        src="/zircon-scr.png"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-neutral-900/10"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-neutral-500 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-neutral-200">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#E40DB5]" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
