import SEO from "@/components/SEO";
import TopXPSection from "@/components/leaderboard/UserXPSection";
import { db } from "@/firebase";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import Layout from "@/components/layout/Layout";

export async function getStaticProps() {
  let collectionRef = collection(db, "users");

  let userResponse = await getDocs(collectionRef);

  let users = userResponse.docs.map((user) => {
    return {
      id: user.id,
      data: {
        ...user.data(),
      },
    };
  });

  const filteredUsers = users
    .filter(
      (user) =>
        user.data.xp != null &&
        user.data.username &&
        user.data.username.trim() !== ""
    )
    .sort((a, b) => {
      if (b.data.xp != null && a.data.xp != null) {
        return b.data.xp - a.data.xp;
      }
      return 0;
    });

  return {
    props: {
      users: filteredUsers.slice(0, 50),
      title: "Leaderboard | Zircon",
      description:
        "View the top users on Stockpile, based on total points accrued.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/stockpile-v2-dev.appspot.com/o/images%2Fleaderboard.png?alt=media&token=d466d307-cf3a-4583-97ef-f3b8b2a7d7dc",
    },
    revalidate: 10,
  };
}

export default function Leaderboard({ users }: any) {
  return (
    <>
      <SEO
        title="Leaderboard | Zircon"
        description="View the top developers on Zircon."
        image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/zircon-og.png?alt=media&token=13867ad8-795e-4c7d-ae89-08b4bd253a5e"
      />
      <Layout>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <main
            className={`flex min-h-screen max-w-[1920px] mx-auto flex-col items-center overflow-hidden pt-24 px-10`}
          >
            <section className="mx-auto flex-col items-center justify-center mb-24 w-full relative">
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
                Global Leaderboard
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
                View top developers on Zircon, sorted by XP.
              </motion.p>
            </section>
            <section className={`w-full relative max-w-[1280px] mb-24`}>
              <TopXPSection users={users} />
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
}
