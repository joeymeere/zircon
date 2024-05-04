import CourseCard from "@/components/CourseCard";
import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Learn() {
  return (
    <>
      <SEO
        title="Challenges | Zircon"
        description="Conquer Solana developer challenges designed for a variety of skill levels, and climb to the top of the leaderboard."
        image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/og.png?alt=media&token=3778e2a6-5194-466e-a5f3-39bae8a3cba3"
      />
      <Layout>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <main
            className={`max-w-[1920px] mx-auto flex min-h-screen flex-col items-center pt-24 px-10`}
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
                Learn
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
                Work through hands-on Solana courses, and level up your skills.
              </motion.p>
              <div className="grid grid-cols-3">
                <Link href={"/course/intro"} passHref>
                  <CourseCard
                    colors={[
                      [236, 72, 153],
                      [232, 121, 249],
                    ]}
                    title="Intro"
                    description="Learn the basics of Solana with Typescript."
                  />
                </Link>
                <CourseCard
                  colors={[[125, 211, 252]]}
                  title="Intermediate"
                  description="This course is coming soon."
                />
                <CourseCard
                  colors={null}
                  title="Advanced"
                  description="This course is coming soon."
                />
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
}
