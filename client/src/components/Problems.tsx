import { motion } from "framer-motion";
import { Star, UserMinus, EyeOff, Wallet } from "lucide-react";

const problems = [
  {
    icon: Star,
    title: "Google reviews aren't growing",
    description: "You do great work — coffee, cuts, plates, service — but barely anyone leaves a Google review. Your rating stalls while new customers keep walking past to the chain down the road.",
    color: "text-kowhai-gold",
    bg: "bg-kowhai-amber/10",
    border: "border-kowhai-amber/20",
  },
  {
    icon: UserMinus,
    title: "First-time visitors don't come back",
    description: "Someone pops in once, you never see them again. Without a reason to return, every visit is a one-off — and every new regular is pure luck.",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
    border: "border-terracotta/20",
  },
  {
    icon: EyeOff,
    title: "No visibility into your customers",
    description: "You recognise the morning faces, but you don't actually know who your regulars are, how often they visit, or how to reach them when it matters.",
    color: "text-fern",
    bg: "bg-fern/10",
    border: "border-fern/20",
  },
  {
    icon: Wallet,
    title: "Can't justify big marketing spend",
    description: "Every dollar counts. Paid ads and loyalty platforms designed for chains feel bloated, expensive, and built for someone else's business.",
    color: "text-kowhai-deep",
    bg: "bg-kowhai-deep/10",
    border: "border-kowhai-deep/20",
  },
];

export default function Problems() {
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
            The Problem
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Challenges{" "}
            <span className="text-kowhai-gold">Every Independent Business</span>{" "}
            Faces
          </h2>
          <p
            className="mt-5 text-lg text-espresso-light/70 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether you run a café, restaurant, barber shop, or salon — you're up against chains with huge budgets. Perky is built to level the playing field.
          </p>
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
