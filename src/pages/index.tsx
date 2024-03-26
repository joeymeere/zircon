import { Hero } from "@/components/Hero";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <SEO
        title="From Zero to Solana Hero | Zircon"
        description="Refine your Solana development skills with guided courses and curated challenges for a variety of skill levels."
        image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/og.png?alt=media&token=3778e2a6-5194-466e-a5f3-39bae8a3cba3"
      />
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <Hero />
      </main>
    </>
  );
}
