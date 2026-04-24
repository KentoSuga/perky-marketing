import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does Perky cost?", a: "Perky is $50/month, with a one-time $20 setup fee. That includes everything — stamp cards, the reward wheel, owner dashboard, and AI-generated follow-up lists. No hidden fees, no long-term contracts." },
  { q: "Do my customers need to download an app?", a: "No. Perky is entirely web-based. Customers simply scan the QR code with their phone camera and everything works instantly in their browser. No app downloads, no sign-ups, no friction." },
  { q: "Do customers have to sign up before they can earn stamps?", a: "Just one tap. Customers sign in with Google on their first scan — their digital membership card is issued automatically. No forms, no passwords, no wasted counter time." },
  { q: "What kind of rewards can I offer?", a: "Anything you like. Free drinks, percentage discounts, free upgrades, buy-one-get-one deals, add-on services, seasonal specials — you have full control. Whether you're a café, restaurant, barber, or salon, set up rewards in your dashboard and they instantly appear on the reward wheel for your customers." },
  { q: "Do I need to change my POS system?", a: "Not at all. Perky works completely independently of your POS. There's no integration required, no hardware to install, and no technical setup. Just print a QR code and place it on your counter." },
  { q: "Is Perky available worldwide?", a: "Perky is currently built for businesses across New Zealand and Australia. We're expanding to support more local businesses worldwide." },
  { q: "How quickly will I see results?", a: "Most businesses start noticing more repeat visits within the first month as regulars begin filling their stamp cards and chasing spin-wheel rewards. The loyalty programme builds momentum over the first few months." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-fern/[0.03] blur-3xl" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight" style={{ fontFamily: "var(--font-display)" }}>Got Questions?{" "}<span className="text-kowhai-gold">We've Got Answers</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
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
