
import { EvervaultCardDemo } from "@/components/ChallengeCard";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import { AnimatedPinDemo } from "@/components/PreviewCards";
import BentoGridThirdDemo from "@/components/ChallengeGrid";

export default function Challenges() {
    return (
        <>
            <Header />
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <main
                    className={`flex min-h-screen flex-col items-center pt-24 px-10`}
                >
                    <section className="mx-auto flex-col items-center justify-center mb-12 w-full relative">
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-8 flex justify-center mx-auto bg-gradient-to-br from-white to-white/25 py-4 bg-clip-text text-6xl font-bold font-plex tracking-tight text-transparent text-left"
                        >
                            Challenges
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-2 flex justify-center mx-auto text-neutral-500 font-medium font-plex"
                        >
                            Compete, earn XP, and be the top Solana developer.
                        </motion.p>
                    </section>
                    <section className="w-full relative flex gap-4">
                        <div className="w-2/3 relative">
                            <BentoGridThirdDemo />
                            <div className="mt-4 flex-col space-y-4">
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                                <EvervaultCardDemo />
                            </div>
                        </div>
                        <div className="w-1/3 relative flex-col space-y-4">
                            <div className="relative bg-zinc-950 p-4 w-full h-full rounded-md border border-white/[0.2]">
                                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
                                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-500" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />

                                <h3 className="text-2xl font-plex font-semibold">Top Builders</h3>

                                <div className="mt-6 flex-col space-y-4">
                                    <div className="relative flex items-center justify-between bg-zinc-950 p-4 w-full h-full rounded-md border border-white/[0.2]">
                                        <div className="flex items-center gap-2">
                                            <Image src="https://i.imgur.com/YTluGB5.png" alt="PFP" width={30} height={30} className="w-8 h-8 rounded-full" />
                                            <p className="font-plex font-medium">Name</p>
                                        </div>
                                        <div>
                                            <p className="font-plex">100{" "}
                                                <span className="text-xs text-neutral-500">XP</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}