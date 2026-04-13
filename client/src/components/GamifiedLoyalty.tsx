import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WHEEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/reward-wheel-LxKNFKLF7MXkALpNA4EFBF.webp";

const bullets = [
  "Instant gratification drives repeat visits",
  "You control every reward offered",
  "Works across your entire customer base",
];

export default function GamifiedLoyalty() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <div className="relative">
              <img src={WHEEL_IMG} alt="Perky spin wheel app on phone" className="w-72 md:w-80 h-auto drop-shadow-2xl" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2.5 shadow-lg shadow-espresso/8 border border-kowhai-amber/15">
                <span className="text-sm font-semibold text-espresso" style={{ fontFamily: "var(--font-body)" }}>🎉 You won a free flat white!</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>Gamified Loyalty</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] text-espresso leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Make Loyalty{" "}<span className="text-kowhai-gold">Fun & Rewarding</span>
            </h2>
            <p className="text-lg text-espresso-light/70 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Every scan is a chance to win. Customers spin the reward wheel and instantly discover what they've earned — free coffees, discounts, upgrades, or bonus points. The anticipation keeps them coming back.
            </p>
            <div className="flex flex-col gap-3">
              {bullets.map((bullet, i) => (
                <motion.div key={bullet} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-kowhai-amber/15 flex items-center justify-center">
                    <Check size={12} className="text-kowhai-gold" />
                  </div>
                  <span className="text-sm text-espresso-light/80 leading-snug" style={{ fontFamily: "var(--font-body)" }}>{bullet}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
