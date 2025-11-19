"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function ContactInfo() {
  const { t } = useI18n();
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("contact.title")}</h2>
      <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
      <p className="mt-6 text-center text-[var(--foreground)] max-w-3xl mx-auto">{t("contact.intro")}</p>

      <div className="mt-10 flex justify-center">
        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6 w-full max-w-xl">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{t("contact.info.title")}</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✉</div>
              <div>
                <p className="text-sm text-[var(--foreground)]">{t("contact.info.email")}</p>
                <p className="text-sm text-[var(--foreground)]">sebitasroja06@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">📞</div>
              <div>
                <p className="text-sm text-[var(--foreground)]">{t("contact.info.phone")}</p>
                <p className="text-sm text-[var(--foreground)]">3164485328</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">📍</div>
              <div>
                <p className="text-sm text-[var(--foreground)]">{t("contact.info.location")}</p>
                <p className="text-sm text-[var(--foreground)]">{t("contact.info.country")}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-[var(--foreground)]">{t("contact.follow")}</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-[var(--background)] border border-cyan-500/60 text-[var(--foreground)] hover:text-cyan-400"
              >🐙</a>
              <a
                href="https://wa.me/573164485328"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-[var(--background)] border border-cyan-500/60 text-[var(--foreground)] hover:text-cyan-400"
              >💬</a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sebitasroja06@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-[var(--background)] border border-cyan-500/60 text-[var(--foreground)] hover:text-cyan-400"
              >📧</a>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/573164485328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500/80 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400"
              >
                {t("form.send")}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}