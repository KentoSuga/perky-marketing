/*
 * Design: Golden Hour — Warm Organic Premium
 * How It Works: Numbered steps with warm styling, alternating layout
 */
import { motion } from "framer-motion";
import { QrCode, Star, Gift, Bot } from "lucide-react";

const QR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/qr-scan-moment-NSCMStQeJURYG42NMfsKA5.webp";
const WHEEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/reward-wheel-LxKNFKLF7MXkALpNA4EFBF.webp";

const steps = [
  {
    num: "01",
    icon: QrCode,
    title: "Print One QR Code",
    description: "Place a single Kōwhai QR code on your counter. That's the only setup you'll ever need. No app downloads, no complicated POS integrations.",
    color: "bg-kowhai-amber/10 text-kowhai-gold",
    borderColor: "border-kowhai-amber/20",
  },
  {
    num: "02",
    icon: Star,
    title: "Customers Scan & Earn",
    description: "When a customer scans, they instantly earn Kōwhai Points and get a gentle nudge to leave a Google review. Points work across every café in the network.",
    color: "bg-fern/10 text-fern",
    borderColor: "border-fern/20",
  },
  {
    num: "03",
    icon: Gift,
    title: "Spin the Reward Wheel",
    description: "After scanning, customers spin a beautiful reward wheel to win prizes you've set — a free coffee, 10% off, a pastry. Instant gratification that brings them back.",
    color: "bg-terracotta/10 text-terracotta",
    borderColor: "border-terracotta/20",
  },
  {
    num: "04",
    icon: Bot,
    title: "AI Handles Everything",
    description: "Our AI automatically responds to every Google review — thoughtfully, in your brand's voice. You get more reviews, better ratings, and zero time spent managing them.",
    color: "bg-kowhai-deep/10 text-kowhai-deep",
    borderColor: "border-kowhai-deep/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-oat overflow-hidden">
      {/* Organic blob */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />

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
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From QR Code to{" "}
            <span className="text-kowhai-gold">Loyal Community</span>{" "}
            in Four Steps
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative p-8 rounded-2xl bg-white border ${step.borderColor} hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500 group`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <span
                    className="block text-5xl font-bold text-espresso/[0.06] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${step.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon size={20} />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-semibold text-espresso mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base text-espresso-light/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual showcase: QR scan + Reward wheel */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-espresso/8"
          >
            <img
              src={QR_IMG}
              alt="Customer scanning QR code at café counter"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <img
                src={WHEEL_IMG}
                alt="Kōwhai reward wheel"
                className="w-72 md:w-80 h-auto drop-shadow-2xl"
              />
              {/* Floating label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2.5 shadow-lg shadow-espresso/8 border border-kowhai-amber/15"
              >
                <span className="text-sm font-semibold text-espresso" style={{ fontFamily: "var(--font-body)" }}>
                  🎉 You won a free flat white!
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
