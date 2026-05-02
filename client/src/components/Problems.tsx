import { motion } from "framer-motion";
import { Star, UserMinus, EyeOff, Wallet } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const visuals = [
  { icon: Star, color: "text-kowhai-gold", bg: "bg-kowhai-amber/10", border: "border-kowhai-amber/20" },
  { icon: UserMinus, color: "text-terracotta", bg: "bg-terracotta/10", border: "border-terracotta/20" },
  { icon: EyeOff, color: "text-fern", bg: "bg-fern/10", border: "border-fern/20" },
  { icon: Wallet, color: "text-kowhai-deep", bg: "bg-kowhai-deep/10", border: "border-kowhai-deep/20" },
];

export default function Problems() {
  const { t } = useI18n();
  const problems = t.problems.items.map((item, i) => ({ ...item, ...visuals[i] }));

  return (
    <section id="problems" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-terracotta/[0.04] blur-3xl" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.problems.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.problems.titleA}{" "}
            <span className="text-kowhai-gold">{t.problems.titleB}</span>{" "}
            {t.problems.titleC}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl bg-oat/40 border ${problem.border} hover:bg-white hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500 group`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bg} ${problem.color} mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <problem.icon size={22} />
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold text-espresso mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {problem.title}
              </h3>
              <p
                className="text-base text-espresso-light/70 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
