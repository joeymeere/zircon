import Object from "../../Object";

export default function IntroOne() {
    return (
        <>
            <main
                className={`mt-20 max-w-[1920px] mx-auto relative min-h-screen`}
            >
                <section className="flex gap-4 w-full h-full">
                    <section className="w-1/2 h-full">
                        <div className="mx-4 p-4 shadow-md h-full">
                            <div className="w-full overflow-hidden relative min-h-[40rem] rounded-2xl p-10 border border-[#E851EB]/25 text-xl md:text-4xl font-bold text-white bg-zinc-950/30 backdrop-blur-xl">
                                <h1 className="mb-6 font-plex font-bold text-white text-3xl">Welcome!</h1>
                                <div className="flex-col space-y-4">
                                    <p className="font-plex font-light text-neutral-500 text-base">
                                        We're going to help your get your feet wet with Solana in just three simple modules.
                                        In this first module, we'll teach you the core basics of Solana.
                                    </p>
                                    <p className="font-plex font-light text-neutral-500 text-base">
                                        Before we get into the weeds, take a second to admire the object to the right of this
                                        container. As a simple exercise, you can think of this object as an account on Solana.
                                    </p>
                                    <p className="font-plex font-light text-neutral-500 text-base">
                                        This account is ours. You're free to change, or "mutate" it however you like.
                                        In terms of Solana, you are the owner of this account.
                                    </p>
                                    <p className="font-plex font-light text-neutral-500 text-base">
                                        Think of the attributes of the object as data in the account.
                                        The object is currently a sphere, but as mentioned earlier, we can change this!
                                    </p>
                                </div>
                                <p className="mt-24 font-plex font-bold text-neutral-300 text-base">
                                    Tune the sliders to change the attributes of the object.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="w-1/2 h-full">
                        <Object />
                    </section>
                </section>
            </main>
        </>
    )
}