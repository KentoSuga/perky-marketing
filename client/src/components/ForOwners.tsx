/*
 * Design: Golden Hour — Warm Organic Premium
 * For Owners: Split layout with community image and value props
 */
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/cafe-community-QYAdgaLcMdv3W4YDEFmWrC.webp";

export default function ForOwners() {
  const { t } = useI18n();
  return (
    <section id="for-owners" className="relative py-20 md:py-28 bg-oat overflow-hidden">
      {/* Organic blobs */}
      <div className="absolute top-20 left-[-5%] w-[400px] h-[400px] rounded-full bg-terracotta/[0.04] blur-3xl" />
      <div className="absolute bottom-20 right-[-5%] w-[350px] h-[350px] rounded-full bg-kowhai-amber/[0.05] blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-espresso/10">
              <img
                src={COMMUNITY_IMG}
                alt={t.forOwners.imgAlt}
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl p-5 shadow-xl shadow-espresso/8 border border-kowhai-amber/10 max-w-[220px]"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-fern mb-2" style={{ fontFamily: "var(--font-body)" }}>
                {t.forOwners.floatingCardLabel}
              </div>
              <div className="text-3xl font-bold text-espresso mb-1" style={{ fontFamily: "var(--font-display)" }}>
                +47
              </div>
              <div className="text-sm text-espresso-light/60" style={{ fontFamily: "var(--font-body)" }}>
                {t.forOwners.floatingCardSub}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>
              {t.forOwners.eyebrow}
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-[2.75rem] text-espresso leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.forOwners.titleA}{" "}
              <span className="text-kowhai-gold">{t.forOwners.titleB}</span>
            </h2>
            <p className="text-lg text-espresso-light/70 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              {t.forOwners.body}
            </p>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {t.forOwners.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-kowhai-amber/15 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-kowhai-gold" />
                  </div>
                  <span className="text-sm text-espresso-light/80 leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-espresso text-oat font-semibold text-base hover:bg-espresso-light transition-all duration-300 hover:shadow-xl hover:shadow-espresso/15 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.forOwners.cta}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
