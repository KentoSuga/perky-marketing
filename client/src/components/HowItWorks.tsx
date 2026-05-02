import { motion } from "framer-motion";
import { QrCode, IdCard, Gift, Stamp } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const visuals = [
  { num: "01", icon: QrCode, color: "bg-kowhai-amber/10 text-kowhai-gold", borderColor: "border-kowhai-amber/20" },
  { num: "02", icon: IdCard, color: "bg-fern/10 text-fern", borderColor: "border-fern/20" },
  { num: "03", icon: Gift, color: "bg-terracotta/10 text-terracotta", borderColor: "border-terracotta/20" },
  { num: "04", icon: Stamp, color: "bg-kowhai-deep/10 text-kowhai-deep", borderColor: "border-kowhai-deep/20" },
];

export default function HowItWorks() {
  const { t } = useI18n();
  const steps = t.howItWorks.items.map((item, i) => ({ ...item, ...visuals[i] }));

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-oat overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>{t.howItWorks.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-2xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            {t.howItWorks.titleA}{" "}<span className="text-kowhai-gold">{t.howItWorks.titleB}</span>{" "}{t.howItWorks.titleC}
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
