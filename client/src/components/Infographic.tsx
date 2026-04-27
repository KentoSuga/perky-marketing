import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function Infographic() {
  return (
    <section className="relative py-12 md:py-20 bg-oat overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-kowhai-gold">How it works:</span>{" "}
            From Scan to Loyal Community in 6 simple steps.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src={`${import.meta.env.BASE_URL}process-grid.png`}
            alt="Six-step Perky process: scan to start, review and spin, auto-enroll, grow your reach, collect stamps, more regulars"
            className="w-full h-auto block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6 py-4 rounded-2xl bg-white border border-kowhai-amber/15 text-center sm:text-left">
            <Gift className="text-kowhai-gold flex-shrink-0" size={22} />
            <p
              className="text-sm md:text-base text-espresso-light/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Happy customers, More reviews. More customers.{" "}
              <span className="text-kowhai-gold font-semibold">All from one simple QR code scan.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
