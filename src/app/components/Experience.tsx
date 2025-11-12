"use client";
import React, { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function Experience() {
  const { t } = useI18n();
  const [tab, setTab] = useState<"academica" | "laboral">("academica");

  const pillBase =
    "flex-1 text-sm md:text-base font-semibold px-6 py-2 rounded-full border border-cyan-400 transition-colors";
  const pillActive = "bg-cyan-400 text-black shadow-[0_0_10px_#22d3ee]";
  const pillInactive = "bg-[var(--background)] text-[var(--foreground)] hover:bg-slate-100 dark:hover:bg-[#111827]";

  return (
    <section id="experiencia" className="pt-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[var(--foreground)]">{t("experience.title")}</h2>
        <div className="w-16 h-[3px] bg-cyan-400 mx-auto mt-2 mb-6"></div>
        {/* Intro opcional */}

        {/* Tabs */}
        <div className="flex gap-4 max-w-md mx-auto mb-8">
          <button
            type="button"
            aria-pressed={tab === "academica"}
            className={`${pillBase} ${tab === "academica" ? pillActive : pillInactive}`}
            onClick={() => setTab("academica")}
          >
            {t("experience.tab.academic")}
          </button>
          <button
            type="button"
            aria-pressed={tab === "laboral"}
            className={`${pillBase} ${tab === "laboral" ? pillActive : pillInactive}`}
            onClick={() => setTab("laboral")}
          >
            {t("experience.tab.work")}
          </button>
        </div>

        {/* Content */}
        {tab === "academica" ? (
          <div className="space-y-6">
            {/* Ingeniería de Software — Universidad Cooperativa de Colombia */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🎓</span>
                <h3 className="text-xl font-semibold">{t("experience.academic.software")}</h3>
              </div>
              <p className="text-cyan-300 mb-1">{t("experience.academic.university")}</p>
              <p className="mb-4 text-[var(--foreground)]">{t("experience.academic.dates")}</p>
              <p className="text-[var(--foreground)]">{t("experience.academic.desc")}</p>
            </div>

            {/* Bachiller */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">📘</span>
                <h3 className="text-xl font-semibold">{t("experience.academic.highschool")}</h3>
              </div>
              <p className="text-cyan-300 mb-1">{t("experience.academic.hs.school")}</p>
              <p className="mb-4 text-[var(--foreground)]">{t("experience.academic.hs.dates")}</p>
              <p className="text-[var(--foreground)]">{t("experience.academic.hs.desc")}</p>
            </div>

            {/* Cursos de Inglés */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🗣️</span>
                <h3 className="text-xl font-semibold">{t("experience.academic.english")}</h3>
              </div>
              <p className="text-cyan-300 mb-1">{t("experience.academic.english.school")}</p>
              <p className="mb-4 text-[var(--foreground)]">{t("experience.academic.english.dates")}</p>
              <p className="text-[var(--foreground)]">{t("experience.academic.english.desc")}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Asistente de Ventas */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🛍️</span>
                <h3 className="text-xl font-semibold">{t("experience.work.sales")}</h3>
              </div>
              <p className="text-cyan-300 mb-1">{t("experience.work.sales.place")}</p>
              <p className="mb-4 text-[var(--foreground)]">{t("experience.work.sales.dates")}</p>
              <p className="text-[var(--foreground)] mb-4">{t("experience.work.sales.desc")}</p>
              <p className="text-[var(--foreground)] font-semibold mb-2">{t("experience.work.sales.resp")}</p>
              <ul className="text-[var(--foreground)] space-y-2">
                <li>{t("experience.work.sales.r1")}</li>
                <li>{t("experience.work.sales.r2")}</li>
                <li>{t("experience.work.sales.r3")}</li>
                <li>{t("experience.work.sales.r4")}</li>
              </ul>
            </div>

            {/* Desarrollador Web — Sistema de Reservas para Barbería */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">💈</span>
                <h3 className="text-xl font-semibold">{t("experience.work.dev")}</h3>
              </div>
              <p className="text-cyan-300 mb-1">{t("experience.work.dev.place")}</p>
              <p className="mb-4 text-[var(--foreground)]">{t("experience.work.dev.dates")}</p>
              <p className="text-[var(--foreground)] mb-4">{t("experience.work.dev.desc")}</p>
              <p className="text-[var(--foreground)] font-semibold mb-2">{t("experience.work.dev.resp")}</p>
              <ul className="text-[var(--foreground)] space-y-2">
                <li>{t("experience.work.dev.r1")}</li>
                <li>{t("experience.work.dev.r2")}</li>
                <li>{t("experience.work.dev.r3")}</li>
                <li>{t("experience.work.dev.r4")}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}