import { MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/kowhai-logo-DrmVLuMRivXGz6CoyCvkXM.webp";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-oat/60 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_URL} alt="Perky" className="w-8 h-8 opacity-80" />
              <span className="text-xl font-semibold text-oat tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Perky</span>
            </div>
            <p className="text-sm text-oat/40 leading-relaxed max-w-xs mb-5" style={{ fontFamily: "var(--font-body)" }}>AI-powered loyalty platform for businesses worldwide. More regulars, zero effort.</p>
            <div className="flex items-center gap-2 text-xs text-oat/30" style={{ fontFamily: "var(--font-body)" }}><MapPin size={14} /><span>Made with aroha in Aotearoa, New Zealand</span></div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-oat/80 uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-sm text-oat/40 hover:text-kowhai-amber transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-oat/8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-oat/25" style={{ fontFamily: "var(--font-body)" }}>&copy; {new Date().getFullYear()} Perky. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-oat/25 hover:text-oat/50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Privacy</a>
              <a href="#" className="text-xs text-oat/25 hover:text-oat/50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Terms</a>
              <a href="#" className="text-xs text-oat/25 hover:text-oat/50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
