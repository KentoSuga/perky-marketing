/*
 * Design: Golden Hour — Warm Organic Premium
 * Hero: Simplified headline with amber accent, no hero image
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-oat via-cream to-oat-dark" />
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.06] blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-terracotta/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-fern/[0.04] blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight text-espresso"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.hero.titleA}{" "}
            <span className="text-kowhai-gold">{t.hero.titleB}</span>{" "}
            {t.hero.titleC}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-espresso-light/80 max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <a
              href="#get-started"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-espresso text-oat font-semibold text-base hover:bg-espresso-light transition-all duration-300 hover:shadow-xl hover:shadow-espresso/15 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-espresso/15 text-espresso font-semibold text-base hover:border-kowhai-amber hover:bg-kowhai-amber/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 70 480 80 720 60C960 40 1200 10 1440 30V80H0V40Z" fill="oklch(1 0 0)" />
        </svg>
      </div>
    </section>
  );
}
