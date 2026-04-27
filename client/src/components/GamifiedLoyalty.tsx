import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bullets = [
  "Instant gratification drives repeat visits",
  "You control every reward offered",
  "Works across your entire customer base",
];

const examplePrizes = [
  { label: "Free drink", chance: "10%", accent: "text-kowhai-gold" },
  { label: "20% off your bill", chance: "25%", accent: "text-terracotta" },
  { label: "10% off next visit", chance: "40%", accent: "text-fern" },
  { label: "Free upsize", chance: "25%", accent: "text-kowhai-deep" },
];

export default function GamifiedLoyalty() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <div className="relative">
              <img
                src="/loyalty-scene.png"
                alt="Perky spin wheel on a phone beside a QR code table stand at a café"
                className="w-full max-w-2xl h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>Gamified Loyalty</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] text-espresso leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Make Loyalty{" "}<span className="text-kowhai-gold">Fun & Rewarding</span>
            </h2>
            <p className="text-lg text-espresso-light/70 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Every full stamp card is a chance to win. Customers spin the reward wheel and instantly discover what they've earned — a free item, a discount, or an upgrade. The anticipation keeps them coming back.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {bullets.map((bullet, i) => (
                <motion.div key={bullet} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-kowhai-amber/15 flex items-center justify-center">
                    <Check size={12} className="text-kowhai-gold" />
                  </div>
                  <span className="text-sm text-espresso-light/80 leading-snug" style={{ fontFamily: "var(--font-body)" }}>{bullet}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl border border-kowhai-amber/20 bg-oat/50 p-5"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] text-kowhai-deep/60 mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Example Wheel · You Choose the Odds
              </p>
              <div className="grid grid-cols-2 gap-3">
                {examplePrizes.map((prize) => (
                  <div
                    key={prize.label}
                    className="flex items-baseline justify-between gap-2 rounded-lg bg-white px-3 py-2.5 border border-kowhai-amber/10"
                  >
                    <span
                      className="text-sm text-espresso-light/80"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {prize.label}
                    </span>
                    <span
                      className={`text-sm font-bold ${prize.accent}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {prize.chance}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
