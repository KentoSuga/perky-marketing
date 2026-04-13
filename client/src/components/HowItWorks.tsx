import { motion } from "framer-motion";
import { QrCode, Star, Gift, Heart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: QrCode,
    title: "Print One QR Code",
    description: "Place a single Perky QR code on your counter. That's the only setup you'll ever need. No app downloads, no complicated POS integrations.",
    color: "bg-kowhai-amber/10 text-kowhai-gold",
    borderColor: "border-kowhai-amber/20",
  },
  {
    num: "02",
    icon: Star,
    title: "Customers Scan & Earn",
    description: "When a customer scans, they instantly earn Perky Points. Points work across every business in the network, so they can spend them anywhere.",
    color: "bg-fern/10 text-fern",
    borderColor: "border-fern/20",
  },
  {
    num: "03",
    icon: Gift,
    title: "Spin the Reward Wheel",
    description: "After scanning, customers spin a beautiful reward wheel to win prizes you've set — a free coffee, 10% off, a pastry. Instant gratification that brings them back.",
    color: "bg-terracotta/10 text-terracotta",
    borderColor: "border-terracotta/20",
  },
  {
    num: "04",
    icon: Heart,
    title: "Rewards & Loyalty",
    description: "Customers spin a beautiful reward wheel to win prizes you've set. Build genuine loyalty with instant gratification and repeat visits that keep your community coming back.",
    color: "bg-kowhai-deep/10 text-kowhai-deep",
    borderColor: "border-kowhai-deep/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-oat overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-2xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            From QR Code to{" "}<span className="text-kowhai-gold">Loyal Community</span>{" "}in Four Steps
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className={`relative p-8 rounded-2xl bg-white border ${step.borderColor} hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500 group`}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0"><span className="block text-5xl font-bold text-espresso/[0.06] leading-none" style={{ fontFamily: "var(--font-display)" }}>{step.num}</span></div>
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${step.color} mb-4 transition-transform duration-300 group-hover:scale-110`}><step.icon size={20} /></div>
                  <h3 className="text-xl md:text-2xl font-semibold text-espresso mb-3" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                  <p className="text-base text-espresso-light/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
