import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import SandboxEditor from "@/components/sandbox/SandboxEditor";
import { Icon } from "@/components/ui/evervault-card";
import { IconActivity, IconPlus, IconSandbox } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Sandbox() {
    return (
        <>
            <SEO
                title="Sandbox | Zircon"
                description="A lightweight, shareable Typescript editor for Solana."
                image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/zircon-og.png?alt=media&token=13867ad8-795e-4c7d-ae89-08b4bd253a5e"
            />
            <Header />
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
                <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <main
                    className={`min-h-screen max-w-[1920px] mx-auto overflow-hidden px-10`}
                >
                    <section className="pt-16 pb-8 w-full relative">
                            <motion.h1
                                initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="inline-flex gap-2 items-center mt-8 bg-gradient-to-br from-white to-white/25 bg-clip-text text-3xl font-bold font-plex tracking-tight text-transparent text-left"
                            >
                                <IconSandbox size={28} className="text-white bg-gradient-to-br from-[#E40DB5] to-[#E851EB] p-1 rounded-md" />
                                Sandbox
                            </motion.h1>
                        <motion.p
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-2 mx-auto text-neutral-500 font-medium font-plex"
                        >
                            Create code snippets, and share them with the world.
                        </motion.p>
                    </section>
                    <section className="w-full flex min-h-screen px-2 relative">
                        <div className="w-1/3 h-full">
                            <div className="relative mr-4 bg-zinc-950 flex-col space-y-4 border border-white/[0.2] p-4">
                                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
                                <Icon className="absolute h-6 w-6 -top-7 -right-3 text-neutral-500" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />
                                <button className="w-full flex items-center justify-start gap-4 px-4 py-3 rounded-md text-neutral-300 border border-white/[0.2] hover:border-white/[0.5] hover:text-white">
                                    <IconPlus className="" />
                                    <p className="font-plex">New Snippet</p>
                                </button>
                                <div className="border-b border-white/[0.2]"></div>
                                <div className="mt-6 w-full border border-white/[0.2] rounded-md flex-col justify-center py-12">
                                    <div className="mx-auto p-3 w-fit bg-[#E851EB]/[0.2] rounded-md">
                                        <IconActivity className="text-zinc-400 w-6 h-6" />
                                    </div>
                                    <h4 className="mt-4 font-plex font-semibold text-lg text-center text-zinc-400">No Saved Snippets.</h4>
                                    <p className="mt-2 font-plex font-light text-base text-center text-zinc-500">Create a snippet and save the result.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-2/3 h-full">
                            <SandboxEditor />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}