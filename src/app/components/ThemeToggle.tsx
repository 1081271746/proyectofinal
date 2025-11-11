"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
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
      aria-label="Alternar tema"
      aria-pressed={theme === "dark"}
      onClick={toggle}
      className="group inline-flex items-center gap-3 rounded-full border border-cyan-500/60 bg-white dark:bg-[#0f172a] px-3 py-2 shadow-sm hover:shadow-md transition-shadow"
    >
      <span className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
        {theme === "dark" ? (
          <>
            <span className="text-base">🌙</span>
            Oscuro
          </>
        ) : (
          <>
            <span className="text-base">☀️</span>
            Claro
          </>
        )}
      </span>
      <span className="relative ml-1 inline-flex h-7 w-14 items-center rounded-full bg-slate-200 dark:bg-[#0b1220] transition-colors">
        <span
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white dark:bg-slate-700 shadow transition-transform duration-300 ${
            theme === "dark" ? "translate-x-0" : "translate-x-7"
          }`}
        />
      </span>
    </button>
  );
}