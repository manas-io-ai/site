import { Header } from "@/components/layout/Header";
import { BottomBar } from "@/components/layout/BottomBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Catalog from "@/components/sections/Catalog";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Catalog />
        <CTA />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
}
