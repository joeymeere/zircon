import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import Link from "next/link";

interface ChallengeCard {
    id: string,
    data: {
        title: string,
        difficulty: string,
        tags: string[],
    }
}

export default function ChallengeCard({ id, data }: ChallengeCard) {
    return (
        <div className="h-fit w-full border border-black/[0.2] dark:border-white/[0.2] bg-zinc-950 flex items-center justify-between max-w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />

            <div className="flex gap-2 items-center justify-start">
                <Link href="" passHref>
                    <h2 className="dark:text-white text-black font-plex text-lg font-semibold text-shadow-sm shadow-white/75 hover:text-[#E40DB5] hover:shadow-[#E40DB5]/75">
                        {id}. {data.title}
                    </h2>
                </Link>
                <p className={`text-sm font-plex border font-light rounded-full ${data.difficulty == "Easy" ? "text-green-500 border-green-500/[0.2]" : data.difficulty == "Medium" ? "text-orange-500 border-orange-500/[0.2]" : "text-red-500 border-red-500/[0.2]"} px-2 py-0.5`}>
                    {data.difficulty}
                </p>
                {data.tags.map((tag, i) => (
                    <p key={i} className="text-xs font-plex border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
                        {tag}
                    </p>
                ))}
            </div>

            <div className="flex items-center gap-2 justify-end">
                <Link href={`/challenge/${id}`} passHref>
                    <EvervaultCard text="View" className="w-20 h-10 font-plex" />
                </Link>
            </div>
        </div>
    );
}