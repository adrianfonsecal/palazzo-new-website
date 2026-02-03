'use client';

import Navbar from "@/app/components/nav-bar";

import Footer from "./components/footer";
import HeroSection from "./components/ui/hero-section";
import BenefitsSection from "./components/ui/benefits-section";
import CategoriesSection from "./components/ui/categories-section";
import ExamplesSection from "./components/ui/examples";
import { useScrollAnimation } from "./hooks/use-scroll-animation";
import ContactSection from "./components/ui/contact-section";

export default function Home() {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <CategoriesSection />
      <ExamplesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
