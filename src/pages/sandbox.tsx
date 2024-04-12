import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import SandboxEditor from "@/components/sandbox/SandboxEditor";
import { IconActivity, IconPlus } from "@tabler/icons-react";
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
                    className={`flex min-h-screen max-w-[1920px] mx-auto overflow-hidden pt-24 px-10`}
                >
                    <section className="w-full min-h-screen px-2 relative">
                        <div className="w-1/3 h-full">
                            <div className="mr-4 bg-black rounded-md flex-col space-y-4 border-2 border-[#E851EB]/50 p-4">
                                <button className="w-full flex items-center justify-start gap-4 px-4 py-3 rounded-md text-neutral-300 border border-[#E851EB]/25 hover:border-[#E851EB]/50 hover:text-white">
                                    <IconPlus className="" />
                                    <p className="font-plex">New Snippet</p>
                                </button>
                                <div className="border-b border-[#E851EB]/25"></div>
                                <div className="mt-6 w-full border border-[#E851EB]/10 rounded-md flex-col justify-center py-12">
                                    <div className="mx-auto p-3 w-fit bg-[#E851EB]/25 rounded-md">
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