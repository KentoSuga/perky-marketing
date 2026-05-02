/*
 * Design: Golden Hour — Warm Organic Premium
 * Sticky navbar with warm cream background, Perky logo, and amber CTA
 * Transparent on top, solid on scroll
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663470458225/Hu3TKythjyzGz5mGfi5V7t/kowhai-logo-DrmVLuMRivXGz6CoyCvkXM.webp";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-oat/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(44,24,16,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <img
            src={LOGO_URL}
            alt="Perky"
            className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
          />
          <span
            className="text-xl md:text-2xl font-semibold tracking-tight text-espresso"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Perky
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-espresso-light hover:text-kowhai-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kowhai-amber after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Language + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#get-started"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-espresso text-oat text-sm font-semibold hover:bg-espresso-light transition-all duration-300 hover:shadow-lg hover:shadow-kowhai-amber/20 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.nav.getStarted}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-espresso"
            aria-label={t.nav.toggleMenu}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-oat/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-espresso-light hover:text-kowhai-gold transition-colors py-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-espresso text-oat text-sm font-semibold mt-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.nav.getStarted}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
