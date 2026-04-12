/*
 * Design: Golden Hour — Warm Organic Premium
 * Testimonials: Cards with warm styling, café owner quotes
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We went from 23 Google reviews to over 180 in three months. The AI responses are so good, customers think I'm personally replying to each one.",
    name: "Sarah Chen",
    role: "Owner, The Daily Grind",
    location: "Wellington",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The cross-network points are genius. Customers from the café down the road now come to us too. It's not competition — it's community. Our repeat visits are up 40%.",
    name: "James Tūhoe",
    role: "Owner, Kōwhai Corner Café",
    location: "Auckland",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "I literally just printed a QR code and stuck it on the counter. That was it. Now I have a loyalty programme, review management, and customer insights. Magic.",
    name: "Emma Hartley",
    role: "Owner, Fern & Brew",
    location: "Christchurch",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Organic blob */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.04] blur-3xl -translate-y-1/2" />

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
            What Owners Say
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Loved by Café Owners{" "}
            <span className="text-kowhai-gold">Across ANZ</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-7 md:p-8 rounded-2xl bg-oat/50 border border-kowhai-amber/10 hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-kowhai-amber/15">
                <Quote size={36} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-kowhai-amber text-kowhai-amber" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-base text-espresso/80 leading-relaxed mb-6 italic"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-kowhai-amber/15"
                />
                <div>
                  <div className="text-sm font-semibold text-espresso" style={{ fontFamily: "var(--font-body)" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-espresso-light/55" style={{ fontFamily: "var(--font-body)" }}>
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
