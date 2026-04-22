import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

type Plan = {
  name: string;
  price?: number;
  setup?: number;
  description: string;
  features: string[];
  highlighted: boolean;
  comingSoon?: boolean;
};

const plans: Plan[] = [
  {
    name: "Perky Starter",
    price: 50,
    setup: 20,
    description: "Everything you need to launch your loyalty program and start building your community.",
    features: [
      "1 week free trial",
      "Digital membership cards (auto-issued via Google sign-in)",
      "Custom Reward Wheel with your prizes",
      "Custom Stamp Cards with 5 designs",
      "Owner Dashboard with real-time analytics",
      "Create Your Own Discounts & Offers",
      "AI-Generated Follow-Up Lists",
      "Email support & onboarding",
    ],
    highlighted: true,
  },
  {
    name: "Perky Premium",
    description: "Advanced AI features and priority support — on our roadmap.",
    features: ["Everything in Starter, plus:", "Priority support", "More AI features in development"],
    highlighted: false,
    comingSoon: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-oat overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-kowhai-amber/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-fern/[0.03] blur-3xl" />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-kowhai-deep/60 mb-4" style={{ fontFamily: "var(--font-body)" }}>Simple Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight" style={{ fontFamily: "var(--font-display)" }}>Plans for Every{" "}<span className="text-kowhai-gold">Business.</span></h2>
          <p className="mt-5 text-lg text-espresso-light/70 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>Start with our Starter plan and upgrade anytime. No hidden fees. No surprises.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-500 ${plan.highlighted ? "bg-espresso text-oat border-espresso shadow-2xl shadow-espresso/15" : plan.comingSoon ? "bg-white/60 border-kowhai-amber/15 border-dashed" : "bg-white border-kowhai-amber/15 hover:shadow-lg hover:shadow-espresso/5"}`}>
              {plan.comingSoon && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-espresso text-oat text-xs font-semibold" style={{ fontFamily: "var(--font-body)" }}><Clock size={12} />Coming Soon</span>
                </div>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? "text-oat" : "text-espresso"}`} style={{ fontFamily: "var(--font-display)" }}>{plan.name}</h3>
              {plan.comingSoon ? (
                <div className="mb-5">
                  <span className="text-4xl md:text-5xl font-bold text-espresso-light/40" style={{ fontFamily: "var(--font-display)" }}>—</span>
                </div>
              ) : (
                <>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? "text-kowhai-amber" : "text-espresso"}`} style={{ fontFamily: "var(--font-display)" }}>${plan.price}</span>
                    <span className={`text-sm ${plan.highlighted ? "text-oat/60" : "text-espresso-light/60"}`} style={{ fontFamily: "var(--font-body)" }}>/month</span>
                  </div>
                  <p className={`text-xs mb-4 ${plan.highlighted ? "text-oat/40" : "text-espresso-light/50"}`} style={{ fontFamily: "var(--font-body)" }}>+${plan.setup} one-time setup · First month ${(plan.price ?? 0) + (plan.setup ?? 0)} · Then ${plan.price}/month</p>
                </>
              )}
              <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? "text-oat/70" : "text-espresso-light/70"}`} style={{ fontFamily: "var(--font-body)" }}>{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? "bg-kowhai-amber/20" : "bg-kowhai-amber/15"}`}><Check size={12} className="text-kowhai-gold" /></div>
                    <span className={`text-sm leading-snug ${plan.highlighted ? "text-oat/80" : "text-espresso-light/80"}`} style={{ fontFamily: "var(--font-body)" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.comingSoon ? (
                <div className="block w-full text-center px-6 py-3.5 rounded-full font-semibold text-sm bg-oat text-espresso-light/60 cursor-not-allowed" style={{ fontFamily: "var(--font-body)" }}>Coming Soon</div>
              ) : (
                <a href="#get-started" className={`block w-full text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${plan.highlighted ? "bg-kowhai-amber text-espresso hover:bg-kowhai-gold hover:shadow-xl hover:shadow-kowhai-amber/25" : "bg-espresso text-oat hover:bg-espresso-light hover:shadow-lg hover:shadow-espresso/15"}`} style={{ fontFamily: "var(--font-body)" }}>Get Started</a>
              )}
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-8 text-sm text-espresso-light/50" style={{ fontFamily: "var(--font-body)" }}>
          Questions about pricing?{" "}<a href="#get-started" className="text-kowhai-gold hover:underline font-medium">Contact our team</a>
        </motion.p>
      </div>
    </section>
  );
}
