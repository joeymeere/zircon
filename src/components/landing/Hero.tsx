"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBolt, IconSchool } from "@tabler/icons-react";
import Link from "next/link";
import { LampContainer } from "../ui/lamp";

export default function Hero() {
    return (
        <>
            <LampContainer className="pt-72 min-[1920px]:pt-24">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-white to-white/25 py-4 pt-64 min-[1920px]:pt-0 bg-clip-text text-center text-4xl font-bold font-plex tracking-tight text-transparent md:text-7xl"
                >
                    Go From Zero To
                    <br></br>
                    Solana Hero
                </motion.h1>
                <p className="w-9/12 mt-2 font-plex font-medium text-lg text-center text-neutral-500 relative z-20">
                    Complete guided courses, and conquer challenges designed for a variety of skill-levels.
                </p>
                <div className="mt-6 flex gap-3 items-center">
                    <Link href={"/challenges"}>
                        <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px]">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#E40DB5_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-md bg-zinc-950 px-3 py-1 text-sm font-plex font-semibold text-neutral-300 backdrop-blur-3xl">
                                <IconBolt />
                                Get Started
                            </span>
                        </button>
                    </Link>
                    <button className="inline-flex gap-2 items-center justify-center shadow-[0_0_0_3px_#000000_inset] h-12 px-6 py-2 bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-md text-sm font-plex font-semibold transform hover:-translate-y-1 transition duration-400">
                        <IconSchool />
                        Learn More
                    </button>
                </div>
            </LampContainer>
        </>
    );
}