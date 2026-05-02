import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/kowhai-logo-DrmVLuMRivXGz6CoyCvkXM.webp";

export default function CTA() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Perky Starter - $50/month");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const base = window.location.pathname.startsWith("/about") ? "/about" : "";
      const res = await fetch(base + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan, notes }),
      });
      if (res.ok) {
        setStatus("sent");
        setEmail("");
        setNotes("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="get-started" className="relative py-20 md:py-28 overflow-hidden bg-espresso">
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-light/30 to-espresso" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.08] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terracotta/[0.06] blur-3xl" />
      <div className="container relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
            <img src={LOGO_URL} alt="" className="w-14 h-14 mx-auto opacity-80" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl text-oat leading-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
            {t.cta.titleA}{" "}<span className="text-kowhai-amber">{t.cta.titleB}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-oat/60 mb-10" style={{ fontFamily: "var(--font-body)" }}>{t.cta.body}</motion.p>

          {status === "sent" ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-fern/20 border border-fern/30 rounded-2xl p-8 text-center">
              <p className="text-xl font-semibold text-oat mb-2" style={{ fontFamily: "var(--font-display)" }}>{t.cta.thankYouTitle}</p>
              <p className="text-oat/60" style={{ fontFamily: "var(--font-body)" }}>{t.cta.thankYouBody}</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium text-oat/50 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{t.cta.emailLabel}</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.cta.emailPlaceholder} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-oat/15 text-oat placeholder:text-oat/30 focus:outline-none focus:border-kowhai-amber/50 focus:ring-1 focus:ring-kowhai-amber/30 transition-all" style={{ fontFamily: "var(--font-body)" }} />
              </div>
              <div>
                <label className="block text-xs font-medium text-oat/50 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{t.cta.planLabel}</label>
                <select value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-oat/15 text-oat focus:outline-none focus:border-kowhai-amber/50 focus:ring-1 focus:ring-kowhai-amber/30 transition-all appearance-none" style={{ fontFamily: "var(--font-body)" }}>
                  <option value="Perky Starter - $50/month" className="bg-espresso text-oat">Perky Starter - $50/month</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-oat/50 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{t.cta.notesLabel}</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t.cta.notesPlaceholder} rows={3} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-oat/15 text-oat placeholder:text-oat/30 focus:outline-none focus:border-kowhai-amber/50 focus:ring-1 focus:ring-kowhai-amber/30 transition-all resize-none" style={{ fontFamily: "var(--font-body)" }} />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400" style={{ fontFamily: "var(--font-body)" }}>{t.cta.errorMsg}</p>
              )}

              <button type="submit" disabled={status === "sending"} className="w-full mt-2 px-8 py-4 rounded-full bg-kowhai-amber text-espresso font-semibold text-base hover:bg-kowhai-gold transition-all duration-300 hover:shadow-xl hover:shadow-kowhai-amber/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed" style={{ fontFamily: "var(--font-body)" }}>
                {status === "sending" ? t.cta.sending : t.cta.submit}
              </button>
            </motion.form>
          )}

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-6 text-sm text-oat/35" style={{ fontFamily: "var(--font-body)" }}>{t.cta.footnote}</motion.p>
        </div>
      </div>
    </section>
  );
}
