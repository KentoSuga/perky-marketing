import { motion } from "framer-motion";
import { Stamp, Gift, BarChart3, Palette, Shield, UserCheck } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const visuals = [
  { icon: Stamp, color: "text-kowhai-gold", bg: "bg-kowhai-amber/8" },
  { icon: Gift, color: "text-terracotta", bg: "bg-terracotta/8" },
  { icon: BarChart3, color: "text-kowhai-gold", bg: "bg-kowhai-amber/8" },
  { icon: Palette, color: "text-terracotta", bg: "bg-terracotta/8" },
  { icon: Shield, color: "text-fern", bg: "bg-fern/8" },
  { icon: UserCheck, color: "text-fern", bg: "bg-fern/8" },
];

export default function Features() {
  const { t } = useI18n();
  const features = t.features.items.map((item, i) => ({ ...item, ...visuals[i] }));

  return (
    <section id="features" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-fern/[0.03] blur-3xl" />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>{t.features.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-3xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            {t.features.titleA}{" "}<span className="text-kowhai-gold">{t.features.titleB}</span>
          </h2>
          <p className="mt-5 text-lg text-espresso-light/70 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>{t.features.subhead}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative p-6 rounded-2xl bg-oat/40 border border-transparent hover:border-kowhai-amber/15 hover:bg-white hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color} mb-5 transition-transform duration-300 group-hover:scale-110`}><feature.icon size={22} /></div>
              <h3 className="text-lg font-semibold text-espresso mb-2" style={{ fontFamily: "var(--font-display)" }}>{feature.title}</h3>
              <p className="text-sm text-espresso-light/65 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
