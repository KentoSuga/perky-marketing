/*
 * Design: Golden Hour — Warm Organic Premium
 * Trust bar: Key stats with animated counters
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Users, Store, MessageSquare } from "lucide-react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: Store, value: 150, suffix: "+", label: "Cafés in Network", color: "text-kowhai-gold" },
  { icon: Users, value: 12000, suffix: "+", label: "Active Customers", color: "text-terracotta" },
  { icon: Star, value: 8500, suffix: "+", label: "Google Reviews Generated", color: "text-kowhai-amber" },
  { icon: MessageSquare, value: 98, suffix: "%", label: "AI Review Response Rate", color: "text-fern" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Trusted by NZ's Best Independent Cafés
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-oat/50 hover:bg-oat transition-colors duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-4 ${stat.color}`}>
                <stat.icon size={22} />
              </div>
              <div
                className="text-3xl md:text-4xl font-bold text-espresso mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-espresso-light/60" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
