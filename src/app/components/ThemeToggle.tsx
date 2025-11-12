"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function ThemeToggle() {
  const { t } = useI18n();
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = stored ?? "dark";
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      type="button"
      aria-label={t("theme.toggle")}
      aria-pressed={theme === "dark"}
      onClick={toggle}
      className="inline-flex items-center rounded-full border border-cyan-500/60 bg-[var(--background)] text-[var(--foreground)] p-2 shadow-sm hover:shadow-md transition"
    >
      <span className="text-base">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}