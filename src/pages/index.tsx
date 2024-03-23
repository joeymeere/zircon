import { Hero } from "@/components/Hero";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    <Header />
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
      <Hero />
    </main>
    </>
  );
}
