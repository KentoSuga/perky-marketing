import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import GamifiedLoyalty from "@/components/GamifiedLoyalty";
import LiveDemoStrip from "@/components/LiveDemoStrip";
import Features from "@/components/Features";
import Infographic from "@/components/Infographic";
import ForOwners from "@/components/ForOwners";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <GamifiedLoyalty />
        <LiveDemoStrip />
        <Features />
        <Infographic />
        <ForOwners />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
