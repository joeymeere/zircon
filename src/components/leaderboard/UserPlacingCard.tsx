import React from "react";
import Link from "next/link";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import Image from "next/image";
import { IconMedal2 } from "@tabler/icons-react";

interface UserCardProps {
    id: string,
    placing: number,
    data: {
        username: string,
        image: string,
        xp: number,
    }
}

export default function UserCard({ id, placing, data }: UserCardProps) {
    return (
        <div className="h-fit w-full border border-black/[0.2] dark:border-white/[0.2] bg-zinc-950 flex items-center justify-between max-w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />

            <div className="flex gap-2 items-center justify-start">
                {placing < 3 && (
                    <IconMedal2
                        size={32}
                        stroke={1}
                        className={`${placing === 0 &&
                            `text-yellow-400 text-shadow-lg shadow-yellow-300`
                            } ${placing === 1 && `text-gray-400`} ${placing === 2 && `text-amber-900`
                            }`}
                    />
                )}
                {placing >= 3 && (
                    <p className="text-zinc-900 dark:text-white text-xl font-plex ml-4 max-[640px]:text-md">
                        {placing + 1}.
                    </p>
                )}
                <Image
                    src={data.image}
                    alt={`${data.username}'s profile picture`}
                    width={50}
                    height={50}
                    className="rounded-full h-14 w-14 shadow-md shadow-zinc-500/10 max-[640px]:h-8 max-[640px]:w-8"
                />
                <Link href={`/challenges/${id}`} passHref>
                    <h2 className="dark:text-white text-black font-plex text-lg font-semibold text-shadow-sm shadow-white/75 hover:text-[#E40DB5] hover:shadow-[#E40DB5]/75">
                        {data.username}
                    </h2>
                </Link>
            </div>

            <div className="flex items-center gap-2 justify-end">
                <p className={`text-sm font-plex border font-light rounded-full px-2 py-0.5`}>
                    {data.xp}
                </p>
            </div>
        </div>
    );
}