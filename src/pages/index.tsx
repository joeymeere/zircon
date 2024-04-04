import Hero from "@/components/landing/Hero";
import SEO from "@/components/SEO";
import Features from "@/components/landing/Features";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <SEO
        title="From Zero to Solana Hero | Zircon"
        description="Refine your Solana development skills with guided courses and curated challenges for a variety of skill levels."
        image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/zircon-og.png?alt=media&token=13867ad8-795e-4c7d-ae89-08b4bd253a5e"
      />
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <section className="relative w-full">
          <Hero />
        </section>
        <section className="relative w-full">
          <Features />
        </section>
      </main>
    </>
  );
}
