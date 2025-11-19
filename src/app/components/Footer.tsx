"use client";
import React from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();
  return (
    <footer className="mx-auto max-w-6xl px-6 pt-12 pb-8 mt-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Columna 1: Marca */}
        <div className="md:text-center">
          <h4 className="text-cyan-400 font-bold tracking-wide">{t("brand.name")}</h4>
          <p className="mt-3 text-sm text-[var(--foreground)]">
            {t("footer.desc")}
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h4 className="text-cyan-400 font-bold tracking-wide md:text-center">{t("footer.quick")}</h4>
          <ul className="mt-3 space-y-2 text-sm md:text-center text-[var(--foreground)]">
            <li><a className="hover:text-cyan-400" href="#inicio">{t("nav.home")}</a></li>
            <li><a className="hover:text-cyan-400" href="#acerca">{t("nav.about")}</a></li>
            <li><a className="hover:text-cyan-400" href="#proyectos">{t("nav.projects")}</a></li>
            <li><a className="hover:text-cyan-400" href="#intereses">{t("nav.interests")}</a></li>
            <li><a className="hover:text-cyan-400" href="#futuros">{t("nav.future")}</a></li>
            <li><a className="hover:text-cyan-400" href="#contacto">{t("nav.contact")}</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div className="md:text-center">
          <h4 className="text-cyan-400 font-bold tracking-wide">{t("footer.services")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)]">
            <li>{t("footer.service.web")}</li>
            <li>{t("footer.service.responsive")}</li>
            <li>{t("footer.service.react")}</li>
            <li>{t("footer.service.seo")}</li>
          </ul>
        </div>
      </div>

      {/* Separador */}
      <div className="mt-8 h-px w-full dark:bg-cyan-500/40 bg-slate-200" />

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-[var(--foreground)]">
        {t("footer.copy", { year })}
      </p>
    </footer>
  );
}