/*
 * Design: Golden Hour — Warm Organic Premium
 * Network Explainer: Visual showing how points flow across cafés
 */
import { motion } from "framer-motion";
import { Coffee, ArrowLeftRight, Users, TrendingUp } from "lucide-react";

const networkBenefits = [
  {
    icon: Coffee,
    title: "Earn Anywhere",
    description: "Customers collect Kōwhai Points at every participating café. One wallet, one network.",
  },
  {
    icon: ArrowLeftRight,
    title: "Spend Anywhere",
    description: "Points earned at Café A can be redeemed at Café B. The network drives cross-discovery.",
  },
  {
    icon: Users,
    title: "Shared Community",
    description: "New customers find your café through the network. Other cafés' regulars become yours too.",
  },
  {
    icon: TrendingUp,
    title: "Everyone Grows",
    description: "More cafés in the network means more customers for everyone. A rising tide lifts all boats.",
  },
];

export default function NetworkExplainer() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>
            The Kōwhai Network
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One Network.{" "}
            <span className="text-kowhai-gold">Every Café Benefits.</span>
          </h2>
          <p className="mt-5 text-lg text-espresso-light/70 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Unlike isolated loyalty cards, Kōwhai Points work across every café in the network. Customers earn at one, spend at another — and everyone grows together.
          </p>
        </motion.div>

        {/* Network Visual */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-oat via-cream to-oat-dark rounded-3xl p-8 md:p-12 border border-kowhai-amber/10"
          >
            {/* Central hub */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 rounded-full bg-kowhai-amber/15 flex items-center justify-center mb-3 border-2 border-kowhai-amber/20">
                <span className="text-2xl font-bold text-kowhai-gold" style={{ fontFamily: "var(--font-display)" }}>K</span>
              </div>
              <span className="text-sm font-semibold text-espresso" style={{ fontFamily: "var(--font-body)" }}>Kōwhai Network</span>
            </div>

            {/* Connected cafés */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {["The Daily Grind", "Fern & Brew", "Kōwhai Corner", "Bean There", "Flat White Co"].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white shadow-md shadow-espresso/5 flex items-center justify-center mb-2 border border-kowhai-amber/10">
                    <Coffee size={22} className="text-espresso-light/50" />
                  </div>
                  <span className="text-xs text-center text-espresso-light/60 leading-tight" style={{ fontFamily: "var(--font-body)" }}>
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Connection lines (decorative) */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="50" y1="30" x2="10" y2="80" stroke="currentColor" strokeWidth="0.3" className="text-kowhai-gold" />
                <line x1="50" y1="30" x2="30" y2="80" stroke="currentColor" strokeWidth="0.3" className="text-kowhai-gold" />
                <line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="0.3" className="text-kowhai-gold" />
                <line x1="50" y1="30" x2="70" y2="80" stroke="currentColor" strokeWidth="0.3" className="text-kowhai-gold" />
                <line x1="50" y1="30" x2="90" y2="80" stroke="currentColor" strokeWidth="0.3" className="text-kowhai-gold" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkBenefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kowhai-amber/10 text-kowhai-gold mb-4">
                <b.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-espresso mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {b.title}
              </h3>
              <p className="text-sm text-espresso-light/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
