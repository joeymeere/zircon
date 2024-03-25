import EditorWindow from "@/components/ChallengeEditorWindow";
import ChallengeTabs from "@/components/ChallengeTabs";
import Header from "@/components/layout/Header";
import { marked } from "marked";
import { db } from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
    const collectionRef = collection(db, "challenges");
    const fetchChallenges = await getDocs(collectionRef);

    const paths = fetchChallenges.docs.map((doc) => ({
        params: { id: doc.id },
    }));

    return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;

    // Get fundraiser metadata
    const docRef = doc(db, `challenges/${id}`);
    const challengeResponse = await getDoc(docRef);

    if (!challengeResponse) {
        throw new Error("Document does not exist.");
    }

    let keyItems = await challengeResponse.data();

    const markdownResponse = await fetch(keyItems?.description);
    const markdownText = await markdownResponse.text();
    let mdContent = await marked(markdownText);

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

    return {
        props: {
            id,
            keyItems,
            mdContent,
            solutions,
            title: `${keyItems?.title} | Zircon`,
            description: `${keyItems?.shortDesc}`,
            image: `https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/og.png?alt=media&token=3778e2a6-5194-466e-a5f3-39bae8a3cba3`,
        },
    };
};

export default function Challenge({ id, keyItems, mdContent, solutions }: any) {
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
                                <ChallengeTabs
                                    id={id}
                                    title={keyItems.title}
                                    difficulty={keyItems.difficulty}
                                    description={mdContent}
                                />
                            </div>
                        </section>
                        <section className="absolute top-0 right-0 w-1/2 h-full">
                            <EditorWindow hints={keyItems.hints} />
                        </section>
                    </section>
                </main>
            </div>
        </>
    )
}