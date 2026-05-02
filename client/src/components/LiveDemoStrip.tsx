import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Subtle banner row sitting between GamifiedLoyalty and Features.
 * Single CTA opens the live customer demo at /visit/demo/review in a
 * new tab. Walks visitors through Step 1 (Google review) → Step 2
 * (spin) → Step 3 (prize), all without requiring sign-in.
 */
export default function LiveDemoStrip() {
  const { t } = useI18n();
  return (
    <section className="relative bg-white py-10 md:py-14 border-y border-kowhai-amber/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.liveDemoStrip.eyebrow}
          </span>
          <a
            href="https://perky-app.com/visit/demo/review"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-espresso text-oat font-semibold text-base hover:bg-espresso-light transition-all duration-300 hover:shadow-xl hover:shadow-espresso/15 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.liveDemoStrip.cta}
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
