import Hero from "@/components/landing/Hero";
import SEO from "@/components/SEO";
import Features from "@/components/landing/Features";
import { SparklesCore } from "@/components/ui/sparkles";
import { Information } from "@/components/landing/Information";
import Layout from "@/components/layout/Layout";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <SEO
        title="From Zero to Solana Hero | Zircon"
        description="Refine your Solana development skills with guided courses and curated challenges for a variety of skill levels."
        image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/zircon-og.png?alt=media&token=13867ad8-795e-4c7d-ae89-08b4bd253a5e"
      />
      <Layout>
        <main
          className={`flex min-h-screen flex-col items-center justify-between`}
        >
          <div className="w-full fixed inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <Hero />
          <section className="relative w-full">
            <Information />
          </section>
          <section className="mt-32 relative w-full">
            <Features />
          </section>
          <section className="mt-32 relative w-full">
            <CTA />
          </section>
        </main>
      </Layout>
    </>
  );
}
