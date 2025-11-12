"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const toggle = () => setLang(lang === "es" ? "en" : "es");

  return (
    <button
      type="button"
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      onClick={toggle}
      className="inline-flex items-center rounded-full border border-cyan-500/60 bg-[var(--background)] text-[var(--foreground)] px-3 py-1 text-xs shadow-sm hover:shadow-md"
    >
      {lang === "es" ? "ES" : "EN"}
    </button>
  );
}