/*
 * Design: Golden Hour — Warm Organic Premium
 * Hero: Large serif headline with amber accent, warm café hero image
 * Asymmetric layout with floating elements
 */
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/hero-cafe-9xwVecRm44LQiShD9dJMpL.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-oat via-cream to-oat-dark" />

      {/* Subtle organic blob shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.06] blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-terracotta/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-fern/[0.04] blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 pt-8 lg:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kowhai-amber/10 border border-kowhai-amber/20 text-sm font-medium text-kowhai-deep">
                <Star size={14} className="fill-kowhai-amber text-kowhai-amber" />
                Built for New Zealand and Australia's independent cafés and restaurants
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight text-espresso"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More Reviews.{" "}
              <span className="text-kowhai-gold">More Regulars.</span>{" "}
              Zero Effort.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-espresso-light/80 max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              One QR code on your counter. Customers earn points, leave Google reviews, and spin for rewards. AI handles the rest. Points work across every café in the Perky network.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-espresso text-oat font-semibold text-base hover:bg-espresso-light transition-all duration-300 hover:shadow-xl hover:shadow-espresso/15 hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Join the Network
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-espresso/15 text-espresso font-semibold text-base hover:border-kowhai-amber hover:bg-kowhai-amber/5 transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                See How It Works
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-oat object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-espresso-light/70" style={{ fontFamily: "var(--font-body)" }}>
                <span className="font-semibold text-espresso">150+ cafés</span> already in the network
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-espresso/10">
              <img
                src={HERO_IMG}
                alt="A warm ANZ café with a QR code on the counter"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Warm overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl shadow-espresso/8 border border-kowhai-amber/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kowhai-amber/15 flex items-center justify-center">
                  <Star size={18} className="text-kowhai-gold fill-kowhai-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-espresso" style={{ fontFamily: "var(--font-display)" }}>4.8</div>
                  <div className="text-xs text-espresso-light/60" style={{ fontFamily: "var(--font-body)" }}>Avg. Google Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Floating points card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl shadow-espresso/8 border border-fern/10"
            >
              <div className="text-xs font-medium text-fern uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-body)" }}>Points Earned</div>
              <div className="text-2xl font-bold text-espresso" style={{ fontFamily: "var(--font-display)" }}>+120</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 70 480 80 720 60C960 40 1200 10 1440 30V80H0V40Z" fill="oklch(1 0 0)" />
        </svg>
      </div>
    </section>
  );
}
