"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { Boxes } from "./ui/background-boxes";

export function Hero() {
    return (
        <div className="h-[45rem] relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,gray)] pointer-events-none" />
            <Boxes />
            <h1 className={cn("md:text-6xl font-bold font-plex text-center text-xl text-white relative z-20")}>
                Prove Your Solana
                <br></br>
                Skills
            </h1>
            <p className="w-1/2 mt-4 font-plex font-medium text-sm text-center text-neutral-500 relative z-20">
                Assert yourself as a top developer on Solana with curated challenges.
            </p>
            <div className="mt-6 flex gap-3 items-center">
                <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF64DD_0%,#FFA4EB_50%,#FF64DD_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-zinc-950 px-3 py-1 text-sm font-plex text-neutral-300 backdrop-blur-3xl">
                        Get Started
                    </span>
                </button>
                <button className="shadow-[0_0_0_3px_#000000_inset] h-12 px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-md text-sm font-plex transform hover:-translate-y-1 transition duration-400">
                    Learn More
                </button>
            </div>
        </div>
    );
}
