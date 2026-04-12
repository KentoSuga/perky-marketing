/*
 * Design: Golden Hour — Warm Organic Premium
 * CTA: Warm espresso background with amber accents, strong final call to action
 */
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/kowhai-logo-DrmVLuMRivXGz6CoyCvkXM.webp";

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20 md:py-28 overflow-hidden bg-espresso">
      {/* Warm gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-light/30 to-espresso" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.08] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terracotta/[0.06] blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img src={LOGO_URL} alt="" className="w-14 h-14 mx-auto opacity-80" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-oat leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Build Your{" "}
            <span className="text-kowhai-amber">Loyal Community?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-oat/60 max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Join 150+ independent cafés and restaurants across New Zealand and Australia. Get started in under 5 minutes — just print a QR code and watch your reviews grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-kowhai-amber text-espresso font-semibold text-base hover:bg-kowhai-gold transition-all duration-300 hover:shadow-xl hover:shadow-kowhai-amber/25 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Sparkles size={18} />
              Get Started Free
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-oat/20 text-oat/80 font-semibold text-base hover:border-oat/40 hover:text-oat transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Demo
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-oat/35"
            style={{ fontFamily: "var(--font-body)" }}
          >
            No credit card required · Setup in under 5 minutes · Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
}
