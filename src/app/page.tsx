import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import PoweredBy from "@/components/sections/PoweredBy";
import DiscoveryCall from "@/components/sections/DiscoveryCall";
import { CalEmbedScript } from "@/components/ui/CalEmbed";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PoweredBy />
        <CalEmbedScript />
        <DiscoveryCall />
      </main>
      <Footer />
    </>
  );
}
