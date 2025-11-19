"use client";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n/I18nProvider";

export default function HeaderNav() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="text-cyan-400 font-bold tracking-wide">
          {t("brand.name")}
        </a>
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
        <div className="flex items-center gap-2 md:ml-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}