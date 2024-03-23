import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
    return (
        <div className="h-fit w-full border border-black/[0.2] dark:border-white/[0.2] bg-zinc-950 flex items-center justify-between max-w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-500" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />

            <div className="flex gap-2 items-center justify-start">
                <h2 className="dark:text-white text-black font-plex text-lg font-semibold text-shadow-sm shadow-white/75">
                    1. Revolving Balance
                </h2>
                <p className="text-sm font-plex border font-light dark:border-green-500/[0.2] border-green-500/[0.2] rounded-full text-green-500 px-2 py-0.5">
                    Easy
                </p>
                <p className="text-xs font-plex border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
                    Typescript
                </p>
                <p className="text-xs font-plex border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
                    Basic Transactions
                </p>
            </div>

            <div className="flex items-center gap-2 justify-end">
                <EvervaultCard text="View" className="w-20 h-10 font-plex" />
            </div>
        </div>
    );
}