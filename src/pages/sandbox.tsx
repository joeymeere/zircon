import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import SandboxEditor from "@/components/sandbox/SandboxEditor";
import SandboxView from "@/components/sandbox/SandboxView";
import Snippets from "@/components/sandbox/Snippets";
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
      <Layout>
        <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
          <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <main
            className={`relative min-h-screen max-w-[1920px] mx-auto overflow-hidden px-10`}
          >
            <section className="pt-16 pb-8 w-full relative">
              <motion.h1
                initial={{ opacity: 0.5, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="inline-flex gap-2 items-center mt-8 bg-gradient-to-br from-white to-white/25 bg-clip-text text-3xl font-bold font-plex tracking-tight text-transparent text-left"
              >
                <IconSandbox
                  size={28}
                  className="text-white bg-gradient-to-br from-[#E40DB5] to-[#E851EB] p-1 rounded-md"
                />
                Sandbox
              </motion.h1>
              <motion.p
                initial={{ opacity: 0.5, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
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
            <SandboxView />
          </main>
        </div>
      </Layout>
    </>
  );
}
