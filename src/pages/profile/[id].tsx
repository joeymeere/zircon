import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import ProfileLayout from "@/components/profile/Layout";
import { BackgroundGradient } from "@/components/ui/card-gradient";
import { db } from "@/firebase";
import { IconBrandGithub, IconBrandStackoverflow, IconBrandX } from "@tabler/icons-react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Image from "next/image";

export const getStaticPaths = async () => {
    const collectionRef = collection(db, "users");
    const fetchUsers = await getDocs(collectionRef);

    const paths = fetchUsers.docs.map((doc) => ({
        params: { id: doc.id },
    }));

    return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;

    const docRef = doc(db, `users/${id}`);
    const userResponse = await getDoc(docRef);

    if (!userResponse) {
        throw new Error("Document does not exist.");
    }

    let keyItems = await userResponse.data();

    /*
    const solutionsRef = collection(db, `challenges/${id}/solutions`);
    const fetchSolutions = await getDocs(solutionsRef);

    let solutions = fetchSolutions.docs.map((sol) => {
        return {
            id: sol.id,
            data: {
                ...sol.data(),
            },
        };
    });
    */

    return {
        props: {
            id,
            keyItems,
        },
        revalidate: 120,
    };
};

export default function Profile({ id, keyItems }: any) {
    return (
        <>
            <SEO
                title={`${keyItems.username} | Zircon`}
                description={`View ${keyItems.username}'s profile`}
                image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/og.png?alt=media&token=3778e2a6-5194-466e-a5f3-39bae8a3cba3"
            />
            <Header />
            <div className="back min-h-screen w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <main
                    className={`flex min-h-screen max-w-[1920px] flex-col items-center justify-between`}
                >
                    <section className="mt-32 w-full relative">
                        <BackgroundGradient className="flex items-center justify-between rounded-none p-4 sm:p-10 bg-white dark:bg-black">
                            <div className="flex gap-4 items-center">
                                <Image src={keyItems.image} alt="" width={100} height={100} className="h-32 w-32 rounded-sm" />
                                <div className="flex-col space-y-4">
                                    <p className="font-plex text-3xl text-black dark:text-neutral-200">
                                        {keyItems.username}
                                    </p>
                                    <p className={`font-plex text-sm ${keyItems.bio ? "text-neutral-500" : "text-neutral-700"}`}>
                                        {keyItems.bio ? keyItems.bio : "No bio yet."}
                                    </p>
                                    <div className="flex gap-4 items-center">
                                        <IconBrandX className="hover:text-[#E40DB5]/50" />
                                        <IconBrandGithub className="hover:text-[#E40DB5]/50" />
                                        <IconBrandStackoverflow className="hover:text-[#E40DB5]/50" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Image src="/level-one.png" alt="" width={100} height={100} className="w-24 rounded-sm border border-neutral-500/25" />
                                <p className="font-plex font-medium mt-2">Novice</p>
                                <progress value={keyItems.xp} max={150} className="progress-bar w-fit h-[8px] overflow-hidden rounded-full bg-neutral-900" />
                                <p className="text-xs font-plex text-neutral-700">{150 - keyItems.xp} XP until level up</p>
                            </div>
                        </BackgroundGradient>
                    </section>
                </main>
            </div>
        </>
    )
}