/*
 * Design: Golden Hour — Warm Organic Premium
 * Features: Card grid with warm styling, icons, and hover effects
 */
import { motion } from "framer-motion";
import {
  Network,
  Brain,
  Gift,
  Star,
  BarChart3,
  Palette,
  Shield,
  Zap,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Universal Points Network",
    description: "Customers earn at one café and spend at another. A shared loyalty network that benefits every independent café in the community.",
    color: "text-kowhai-gold",
    bg: "bg-kowhai-amber/8",
  },
  {
    icon: Brain,
    title: "AI Review Responses",
    description: "Every Google review gets a thoughtful, personalised AI response in your brand's voice. Turn feedback into customer relationships automatically.",
    color: "text-fern",
    bg: "bg-fern/8",
  },
  {
    icon: Gift,
    title: "Custom Reward Wheel",
    description: "Set your own prizes — free coffees, discounts, pastries. The gamified spin wheel delights customers and drives repeat visits.",
    color: "text-terracotta",
    bg: "bg-terracotta/8",
  },
  {
    icon: Star,
    title: "Google Review Nudges",
    description: "Gently prompt happy customers to leave a Google review at the perfect moment — right after they've had a great experience.",
    color: "text-kowhai-deep",
    bg: "bg-kowhai-deep/8",
  },
  {
    icon: BarChart3,
    title: "Owner Dashboard",
    description: "Track visits, reviews, points redeemed, and customer trends. Real-time insights that help you understand your regulars better.",
    color: "text-kowhai-gold",
    bg: "bg-kowhai-amber/8",
  },
  {
    icon: Palette,
    title: "Create Your Own Discounts",
    description: "Full control over what rewards you offer. Set up custom discounts, seasonal specials, or loyalty milestones that fit your business.",
    color: "text-terracotta",
    bg: "bg-terracotta/8",
  },
  {
    icon: Shield,
    title: "Zero Setup Required",
    description: "No POS integration, no app downloads, no training. Print one QR code, put it on your counter, and you're live in minutes.",
    color: "text-fern",
    bg: "bg-fern/8",
  },
  {
    icon: Zap,
    title: "Fully Automatic",
    description: "Points, reviews, AI responses, reward spins — everything runs on autopilot. You focus on making great coffee, we handle the rest.",
    color: "text-kowhai-deep",
    bg: "bg-kowhai-deep/8",
  },
  {
    icon: Mail,
    title: "Automated Email Campaigns",
    description: "Win back lapsed customers with targeted re-engagement emails. Keep regulars engaged with personalized offers and updates. Smart timing, zero manual work.",
    color: "text-kowhai-gold",
    bg: "bg-kowhai-amber/8",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Organic blob */}
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-fern/[0.03] blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Platform Features
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything Your Café Needs to{" "}
            <span className="text-kowhai-gold">Thrive</span>
          </h2>
          <p className="mt-5 text-lg text-espresso-light/70 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            A complete loyalty and review platform that runs itself. More reviews, more regulars, stronger community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-oat/40 border border-transparent hover:border-kowhai-amber/15 hover:bg-white hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon size={22} />
              </div>
              <h3
                className="text-lg font-semibold text-espresso mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-espresso-light/65 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
