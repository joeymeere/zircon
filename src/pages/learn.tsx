import CourseCard from "@/components/CourseCard";
import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const externalResources = [
  {
    title: "SolDev",
    type: "General",
    description:
      "A hub for courses and user-generated content dedicated to helping you build on Solana.",
    image: "/soldev.jpg",
    href: "https://soldev.app/",
  },
  {
    title: "Solana Cookbook",
    type: "General",
    description:
      "A hub for courses and user-generated content dedicated to helping you build on Solana.",
    image:
      "https://www.soldev.app/_next/image?url=https%3A%2F%2Fsolanacookbook.com%2Fcookbook-sharing-card.png&w=640&q=75",
    href: "https://solanacookbook.com/#contributing",
  },
  {
    title: "Solana Bootcamp",
    type: "Tutorial",
    description:
      "A hub for courses and user-generated content dedicated to helping you build on Solana.",
    image:
      "https://www.soldev.app/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0P8JeL3TURU%2Fmaxresdefault.jpg&w=640&q=75",
    href: "https://www.soldev.app/library/playlist/solana-bootcamp-basics",
  },
];

export default function Learn() {
  return (
    <>
      <SEO
        title="Challenges | Zircon"
        description="Conquer Solana developer challenges designed for a variety of skill levels, and climb to the top of the leaderboard."
        image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/og.png?alt=media&token=3778e2a6-5194-466e-a5f3-39bae8a3cba3"
      />
      <Layout>
        <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <main
            className={`max-w-[1920px] mx-auto flex min-h-screen flex-col items-center pt-24 px-10`}
          >
            <section className="mx-auto flex-col items-center justify-center mb-24 w-full relative">
              <motion.h1
                initial={{ opacity: 0.5, y: 50 }}
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
                initial={{ opacity: 0.5, y: 50 }}
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
              <div className="pt-20 grid grid-cols-3">
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
              <div className="mt-24 px-12 grid grid-cols-3 gap-4">
                {externalResources.map((res, i) => (
                  <Link key={i} href={res.href} passHref>
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-900 bg-zinc-900">
                      <div className=" bg-zinc-900 group-hover:opacity-50 h-36">
                        <img
                          src={res.image}
                          alt={res.title}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        />
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-lg font-semibold font-plex text-white">
                          <div>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {res.title}
                          </div>
                        </h3>
                        <p className="font-plex text-sm text-gray-500">
                          {res.type}
                        </p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="font-plex text-sm italic text-gray-500">
                            {res.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
}
