'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import InfoBanner from '@/components/InfoBanner';
import ProductAdvisor from '@/components/ProductAdvisor';
import MapSection from '@/components/MapSection';
import TestimonialsAndPartners from '@/components/TestimonialsAndPartners';
import AboutBrief from '@/components/AboutBrief';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-16 md:pt-0">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <InfoBanner />
      <ProductAdvisor />
      <MapSection />
      <TestimonialsAndPartners />
      <AboutBrief />
      <ContactSection />
      <Footer />
    </main>
  );
}
