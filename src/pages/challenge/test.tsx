import EditorWindow from "@/components/ChallengeEditorWindow";
import Header from "@/components/layout/Header";
import TestTabs from "@/components/test/TestTabs";

export default function Test() {
    const hints = [
        "Web3.js may have a method for balances.",
    ];
    
    return (
        <>
            <Header />
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <main
                    className={`mt-20 relative min-h-screen`}
                >
                    <section className="flex gap-4 w-full h-full">
                        <section className="w-1/2 h-full">
                            <div className="mx-4 p-4 shadow-md">
                               <TestTabs />
                            </div>
                        </section>
                        <section className="absolute top-0 right-0 w-1/2 h-full">
                            <EditorWindow hints={hints} />
                        </section>
                    </section>
                </main>
            </div>
        </>
    )
}