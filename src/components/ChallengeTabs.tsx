"use client";

import { IconActivity, IconStar } from "@tabler/icons-react";
import { Tabs } from "./ui/shuffling-tabs";
import Image from "next/image";

interface ChallengeTabsProps {
    id: string,
    title: string,
    description: string,
    difficulty: string,
    solutions: any
}

export default function ChallengeTabs({ id, title, description, difficulty, solutions }: ChallengeTabsProps) {
    const tabs = [
        {
            title: "Description",
            value: "description",
            content: (
                <div className="w-full overflow-x-hidden overflow-y-scroll relative h-full rounded-2xl p-10 border border-[#E851EB]/25 font-bold text-white bg-zinc-950/30 backdrop-blur-xl no-visible-scrollbar">
                    <div className="flex items-center justify-between">
                        <h1 className="font-plex font-bold text-2xl">{id}. {title}</h1>
                        <p className={`text-sm font-plex border font-light rounded-full ${difficulty == "Easy" ? "text-green-500 border-green-500/[0.2]" : difficulty == "Medium" ? "text-orange-500 border-orange-500/[0.2]" : "text-red-500 border-red-500/[0.2]"} px-2 py-0.5`}>
                            {difficulty}
                        </p>
                    </div>
                    <article
                        className="mt-6 overflow-x-hidden overflow-y-scroll font-plex text-base prose prose-neutral prose-p:text-neutral-400 prose-p:font-light dark:prose-li:text-neutral-500 dark:prose-ol:text-neutral-500 prose-strong:text-neutral-300 prose-code:font-martian prose-code:text-xs dark:prose-a:text-pink-400"
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
                            {solutions.length > 0 ? (
                                <div className="mt-6 flex-col gap-2">
                                    {solutions.map((sol: any, i: number) => (
                                        <div key={i} className="flex justify-between items-center bg-zinc-950 border border-[#E851EB]/25 p-4 rounded-md">
                                            <div className="flex gap-2 items-center">
                                                <Image src={sol.data.image} alt="" width={100} height={100} className="w-10 h-10 rounded-full" />
                                                <div className="flex-col space-y-1">
                                                    <p className="font-plex text-base">{sol.data.username}</p>
                                                    <p className="font-plex text-neutral-300 text-xs">{sol.data.execTime}{" "}
                                                        <span className="text-[0.5rem] text-neutral-500">ms</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <IconStar className="w-4 h-4 text-[#E851EB]"/>
                                                <p className="font-plex text-base">{sol.data.rating}{" "}
                                                    <span className="text-xs text-neutral-500">/ 5</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="mt-6 w-full border border-[#E851EB]/10 rounded-md flex-col justify-center py-12">
                                    <div className="mx-auto p-3 w-fit bg-[#E851EB]/25 rounded-md">
                                        <IconActivity className="text-zinc-400 w-6 h-6" />
                                    </div>
                                    <h4 className="mt-4 font-plex font-semibold text-lg text-center text-zinc-400">No Solutions Yet.</h4>
                                    <p className="mt-2 font-plex font-light text-base text-center text-zinc-500">Complete this challenge and submit to be the first!</p>
                                </div>
                            )}
                        </div>
                    </div >
                </div >
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b font-plex font-medium text-sm flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    );
}