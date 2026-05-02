import { useI18n } from "@/i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.langSwitcher.ariaLabel}
      className="inline-flex items-center gap-0.5 rounded-full border border-espresso/15 bg-white/60 backdrop-blur-sm p-0.5"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
          locale === "en"
            ? "bg-espresso text-oat"
            : "text-espresso-light/70 hover:text-espresso"
        }`}
      >
        {t.langSwitcher.english}
      </button>
      <button
        type="button"
        onClick={() => setLocale("zh")}
        aria-pressed={locale === "zh"}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
          locale === "zh"
            ? "bg-espresso text-oat"
            : "text-espresso-light/70 hover:text-espresso"
        }`}
      >
        {t.langSwitcher.chinese}
      </button>
    </div>
  );
}
