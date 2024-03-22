import { TabsDemo } from "@/components/ChallengeTabs";
import EditorWindow from "@/components/ChallengeEditorWindow";
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function Test() {
    return (
        <>
            <Header />
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <main
                    className={`mt-20 relative min-h-screen`}
                >
                    <section className="flex gap-4 w-full h-full">
                        <section className="w-1/2 h-full">
                            <div className="mx-4 p-4 shadow-md">
                                <TabsDemo />
                                {/*
                        <h1 className="font-martian font-bold text-2xl">This is a test challenge!</h1>
                        <p className="mt-6 font-martian font-normal text-sm text-neutral-500">
                            This challenge will be simple. All you need to do is write a simple API call to Helius for wallet balance retrieval. 
                            You will need to add your own API key, which you can get{" "}
                            <Link href="https://helius.dev" className="text-[#E851EB]">here</Link>.
                        </p>
                        <p className="mt-6 font-martian font-normal text-sm text-neutral-500">
                            This challenge requires you use the following wallet:{" "}
                            <span className="text-neutral-200">7YYZE815j6bE3C1tgiAXKWh4FGwUagpxV9oUw6dgE1mU</span>
                        </p>
                        <p className="mt-6 font-martian font-semibold text-neutral-300">Once you're ready, click run and see the response!</p>
    */}
                            </div>
                        </section>
                        <section className="absolute top-0 right-0 w-1/2 h-full">
                            <EditorWindow />
                        </section>
                    </section>
                </main>
            </div>
        </>
    )
}