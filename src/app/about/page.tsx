import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import AboutContent from '@/components/sections/AboutContent';
import AboutFAQ from '@/components/sections/AboutFAQ';

export const metadata: Metadata = {
  title: 'About — Manas AI',
  description: 'Manas AI is a Los Angeles based AI agency & studio. We partner with startups, brands, and agencies to design and deploy fluid intelligence strategies and products.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutContent />
        <AboutFAQ />
      </main>
      <Footer />
    </>
  );
}
