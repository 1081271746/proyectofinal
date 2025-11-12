"use client";
import React, { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function ContactForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState<string | null>(null);

  const handleSend = async () => {
    const body = `${t("form.name")}: ${name}\n${t("form.email")}: ${email}\n\n${message}`;
    const mailto = `mailto:sebtiarrojas06@gmail.com?subject=${encodeURIComponent(
      subject || "Contacto Portafolio"
    )}&body=${encodeURIComponent(body)}`;
    try {
      // Intento abrir el cliente de correo
      window.location.href = mailto;
      setInfo(t("form.open_mail"));
    } catch {
      // Fallback: copiar el correo al portapapeles
      try {
        await navigator.clipboard.writeText("sebtiarrojas06@gmail.com");
        setInfo(t("form.copy_fallback"));
      } catch {
        setInfo(t("form.copy_error"));
      }
    }
  };

  return (
    <form className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6" onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{t("form.send")}</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-[var(--foreground)]">{t("form.name")}</label>
          <input
            type="text"
            placeholder={t("form.name.ph")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="text-sm text-[var(--foreground)]">{t("form.email")}</label>
          <input
            type="email"
            placeholder={t("form.email.ph")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm text-[var(--foreground)]">{t("form.subject")}</label>
        <input
          type="text"
          placeholder={t("form.subject.ph")}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div className="mt-4">
        <label className="text-sm text-[var(--foreground)]">{t("form.message")}</label>
        <textarea
          placeholder={t("form.message.ph")}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={handleSend}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400"
        >
          <span>🚀</span> {t("form.send")}
        </button>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText("sebtiarrojas06@gmail.com");
              setInfo(t("form.copy_ok"));
            } catch {}
          }}
          className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 dark:bg-[#0f172a] bg-white px-4 py-2 text-sm dark:text-slate-200 text-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          📋 {t("form.copy")}
        </button>
      </div>
      {info && (
        <p className="mt-3 text-xs text-[var(--foreground)]" aria-live="polite">{info}</p>
      )}
    </form>
  );
}