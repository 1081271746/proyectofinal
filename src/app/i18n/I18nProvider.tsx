"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Lang } from "./translations";

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    const initial = (stored as Lang) ?? "es";
    setLangState(initial);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", initial);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.setAttribute("lang", l);
    } catch {}
  };

  const t = (key: string, vars: Record<string, string | number> = {}) => {
    const table = translations[lang] ?? translations.es;
    let text = table[key] ?? key;
    return text.replace(/\{(.*?)\}/g, (_, k) => String(vars[k] ?? ""));
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};