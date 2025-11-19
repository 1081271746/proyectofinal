"use client";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n/I18nProvider";
import { useState } from "react";

export default function HeaderNav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="text-cyan-400 font-bold tracking-wide">
          {t("brand.name")}
        </a>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm text-[var(--foreground)]">
          <li><a className="hover:text-cyan-400" href="#inicio">{t("nav.home")}</a></li>
          <li><a className="hover:text-cyan-400" href="#acerca">{t("nav.about")}</a></li>
          <li><a className="hover:text-cyan-400" href="#proyectos">{t("nav.projects")}</a></li>
          <li><a className="hover:text-cyan-400" href="#experiencia">{t("nav.experience")}</a></li>
          <li><a className="hover:text-cyan-400" href="#testimonios">{t("nav.testimonials")}</a></li>
          <li><a className="hover:text-cyan-400" href="#intereses">{t("nav.interests")}</a></li>
          <li><a className="hover:text-cyan-400" href="#futuros">{t("nav.future")}</a></li>
          <li><a className="hover:text-cyan-400" href="#contacto">{t("nav.contact")}</a></li>
        </ul>
        {/* Controls + hamburger */}
        <div className="flex items-center gap-2 md:ml-4">
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={toggle}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-cyan-500/60 bg-[var(--background)] p-2 text-cyan-400 hover:bg-slate-900"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile panel */}
      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-md border border-cyan-500/60 bg-[var(--background)] shadow">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-cyan-400 font-bold tracking-wide">{t("brand.name")}</span>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={close}
              className="inline-flex items-center justify-center rounded-md border border-cyan-500/60 bg-[var(--background)] p-2 text-cyan-400 hover:bg-slate-900"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="px-4 pb-4">
            <ul className="space-y-2 text-sm text-[var(--foreground)]">
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#inicio" onClick={close}>{t("nav.home")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#acerca" onClick={close}>{t("nav.about")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#proyectos" onClick={close}>{t("nav.projects")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#experiencia" onClick={close}>{t("nav.experience")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#testimonios" onClick={close}>{t("nav.testimonials")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#intereses" onClick={close}>{t("nav.interests")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#futuros" onClick={close}>{t("nav.future")}</a></li>
              <li><a className="block rounded px-3 py-2 hover:text-cyan-400" href="#contacto" onClick={close}>{t("nav.contact")}</a></li>
            </ul>
            <div className="mt-3 flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}