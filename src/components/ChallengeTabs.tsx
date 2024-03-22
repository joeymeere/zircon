"use client";

import Image from "next/image";
import { Tabs } from "./ui/shuffling-tabs";
import Link from "next/link";

export function TabsDemo() {
    const tabs = [
        {
            title: "Description",
            value: "description",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-[#E851EB]/25 font-bold text-white bg-zinc-950/30 backdrop-blur-xl">
                    <h1 className="font-plex font-bold text-2xl">This is a test challenge!</h1>
                    <p className="mt-6 font-plex font-normal text-sm text-neutral-300">
                        This challenge will be simple. All you need to do is write a simple API call to Helius for wallet balance retrieval.
                        You will need to add your own API key, which you can get{" "}
                        <Link href="https://helius.dev" className="text-[#E851EB]">here</Link>.
                    </p>
                    <p className="mt-6 font-plex font-normal text-sm text-neutral-500">
                        This challenge requires you use the following wallet:{" "}
                        <span className="text-neutral-200">7YYZE815j6bE3C1tgiAXKWh4FGwUagpxV9oUw6dgE1mU</span>
                    </p>
                    <p className="mt-6 text-sm font-plex font-semibold text-neutral-300">Once you're ready, click run and see the response!</p>
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