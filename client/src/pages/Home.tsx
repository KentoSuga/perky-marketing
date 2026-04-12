/*
 * Design: Golden Hour — Warm Organic Premium
 * Home page: Assembles all sections in order
 * Kōwhai — AI-Powered Loyalty for NZ Independent Cafés
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import NetworkExplainer from "@/components/NetworkExplainer";
import ForOwners from "@/components/ForOwners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <NetworkExplainer />
        <ForOwners />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
