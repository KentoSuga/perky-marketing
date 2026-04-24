const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/kowhai-logo-DrmVLuMRivXGz6CoyCvkXM.webp";

const sections = [
  { title: "1. Introduction", content: "Welcome to Perky. These Terms & Conditions govern your use of the Perky platform, including our website at perky-app.com, the Perky loyalty and rewards system, and all related services. By accessing or using the Service, you agree to be bound by these Terms." },
  { title: "2. Definitions", content: "\"Business\" refers to any establishment that has registered to use the Perky platform. \"Customer\" refers to any individual who scans a Perky QR code or interacts with the platform as an end user. \"Stamp Card\" refers to the digital loyalty card held by the Customer at a given Business, which accrues a stamp each qualifying visit. \"Reward Wheel\" refers to the gamified reward mechanism unlocked upon a Customer's first Google review and subsequently each time they fill a Stamp Card." },
  { title: "3. Eligibility", content: "The Service is available to independent businesses operating in New Zealand and Australia — including but not limited to cafés, restaurants, bars, bakeries, barbers, and salons. Businesses must provide accurate registration information and maintain a valid subscription. Customers must be at least 16 years of age to participate in the loyalty programme." },
  { title: "4. Accounts & Registration", content: "Businesses must register for an account to access the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorised use at support@perky-app.com." },
  { title: "5. Subscription & Pricing", content: "Perky Starter: $50 NZD per month plus a one-time $20 NZD setup fee. New Businesses are entitled to a one (1) week free trial of the Starter plan; billing commences at the end of the trial unless the subscription is cancelled before it ends. Additional plans (including Perky Premium) may be introduced from time to time and will be priced and advertised separately at perky-app.com/about. Subscriptions are billed monthly in advance. We reserve the right to change pricing with 30 days' written notice to active Businesses. You may cancel at any time; cancellation takes effect at the end of the current billing period, and no refunds are provided for partial months." },
  { title: "6. Stamps & Rewards", content: "Customers earn stamps on a digital Stamp Card held at each participating Business (stamp cards are per-Business and are not transferable between Businesses). On their first scan at a Business and after leaving a Google review, Customers unlock a free spin on that Business's Reward Wheel. Thereafter, Customers earn an additional spin each time they fill their Stamp Card. Stamps and rewards have no cash value, are non-transferable, and cannot be exchanged for money. We reserve the right to adjust stamp counts or reward eligibility in cases of fraud, error, or abuse." },
  { title: "7. Rewards & Spin Wheel", content: "Businesses set their own rewards and spin wheel prizes. Perky does not guarantee the availability, value, or fulfilment of any reward. Businesses are solely responsible for honouring rewards earned by Customers. Rewards may have expiry dates and conditions set by the issuing Business." },
  { title: "8. Acceptable Use", content: "You agree not to: use the Service for any unlawful purpose; attempt to gain unauthorised access to any part of the Service; manipulate, exploit, or abuse the stamps, spin wheel, or rewards system; upload harmful, offensive, or infringing content; or interfere with the operation or security of the Service." },
  { title: "9. Intellectual Property", content: "All content, trademarks, logos, and intellectual property associated with the Perky platform are owned by or licensed to Perky. You may not copy, modify, distribute, or create derivative works without our prior written consent." },
  { title: "10. Privacy", content: "Your use of the Service is also governed by our Privacy Policy. We are committed to protecting your personal data in accordance with the New Zealand Privacy Act 2020 and the Australian Privacy Act 1988." },
  { title: "11. Limitation of Liability", content: "To the maximum extent permitted by law, Perky shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you in the twelve (12) months preceding the claim." },
  { title: "12. Termination", content: "We may suspend or terminate your access at any time, with or without cause, upon reasonable notice. Upon termination, your right to use the Service ceases immediately. Unredeemed rewards (such as vouchers and spin prizes) held by Customers remain subject to the expiry dates and conditions set at the time they were issued by the relevant Business." },
  { title: "13. Changes to These Terms", content: "We reserve the right to update these Terms at any time. Material changes will be communicated via email or through the platform. Continued use after changes take effect constitutes acceptance of the revised Terms." },
  { title: "14. Governing Law", content: "These Terms are governed by the laws of New Zealand. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Zealand." },
  { title: "15. Contact Us", content: "If you have any questions, please contact us at support@perky-app.com or visit perky-app.com." },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-oat">
      <header className="bg-espresso py-6">
        <div className="container flex items-center gap-2">
          <a href="/" className="flex items-center gap-1.5">
            <img src={LOGO_URL} alt="Perky" className="w-8 h-8" />
            <span className="text-xl font-semibold text-oat tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Perky</span>
          </a>
        </div>
      </header>
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-4" style={{ fontFamily: "var(--font-display)" }}>Terms & Conditions</h1>
          <p className="text-sm text-espresso-light/50 mb-12" style={{ fontFamily: "var(--font-body)" }}>Last updated: 22 April 2026</p>
          <div className="space-y-10 text-espresso-light/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-xl font-semibold text-espresso mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h2>
                <p>{s.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-espresso text-oat/40 py-8">
        <div className="container text-center text-xs" style={{ fontFamily: "var(--font-body)" }}>
          &copy; {new Date().getFullYear()} Perky. All rights reserved.{" "}
          <a href="/" className="hover:text-kowhai-amber transition-colors">Back to Home</a>
        </div>
      </footer>
    </div>
  );
}
