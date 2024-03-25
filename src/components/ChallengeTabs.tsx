"use client";

import { Tabs } from "./ui/shuffling-tabs";

interface ChallengeTabsProps {
    id: string,
    title: string,
    description: string
    difficulty: string
}

export default function ChallengeTabs({ id, title, description, difficulty }: ChallengeTabsProps) {
    const tabs = [
        {
            title: "Description",
            value: "description",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-[#E851EB]/25 font-bold text-white bg-zinc-950/30 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                        <h1 className="font-plex font-bold text-2xl">{id}. {title}</h1>
                        <p className={`text-sm font-plex border font-light rounded-full ${difficulty == "Easy" ? "text-green-500 border-green-500/[0.2]" : difficulty == "Medium" ? "text-orange-500 border-orange-500/[0.2]" : "text-red-500 border-red-500/[0.2]"} px-2 py-0.5`}>
                            {difficulty}
                        </p>
                    </div>
                    <article
                      className="mt-6 overflow-hidden font-plex text-base prose prose-neutral prose-p:text-neutral-400 prose-p:font-light dark:prose-li:text-neutral-500 dark:prose-ol:text-neutral-500 dark:prose-a:text-pink-400"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            ),
        },
        {
            title: "Solutions",
            value: "solutions",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-[#E851EB]/25 text-xl md:text-4xl font-bold text-white bg-zinc-950/30 backdrop-blur-xl">
                    <p className="text-2xl">Solutions</p>
                    <div className="flex-col gap-2">
                        <div>

                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b font-plex font-medium text-sm flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    );
}