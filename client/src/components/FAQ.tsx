import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/i18n/I18nProvider";

export default function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-fern/[0.03] blur-3xl" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>{t.faq.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight" style={{ fontFamily: "var(--font-display)" }}>{t.faq.titleA}{" "}<span className="text-kowhai-gold">{t.faq.titleB}</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {t.faq.items.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-oat/50 rounded-xl border border-kowhai-amber/10 px-6 overflow-hidden data-[state=open]:shadow-md data-[state=open]:shadow-espresso/5 transition-shadow duration-300">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-espresso hover:text-kowhai-gold transition-colors py-5 [&[data-state=open]]:text-kowhai-gold" style={{ fontFamily: "var(--font-display)" }}>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-espresso-light/70 leading-relaxed pb-5" style={{ fontFamily: "var(--font-body)" }}>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
