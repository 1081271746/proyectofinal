"use client";

import Image from "next/image";
import { useI18n } from "../i18n/I18nProvider";

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("testimonials.title")}</h2>
      <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
      <p className="mt-6 text-center text-[var(--foreground)] max-w-3xl mx-auto">{t("testimonials.intro")}</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start justify-between">
            <div className="text-cyan-400 text-sm">★★★★★</div>
            <div className="text-cyan-400 text-xl font-bold">”</div>
          </div>
          <p className="mt-4 text-sm text-[var(--foreground)] italic">“{t("testimonials.t1.quote")}”</p>
          <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
          <div className="mt-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-cyan-500/60">
              <Image
                src="/WhatsApp Image 2025-11-18 at 11.00.38 PM (1).jpeg"
                alt="Foto testimonio"
                width={40}
                height={40}
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-[var(--foreground)] text-sm font-semibold">{t("testimonials.t1.name")}</p>
              <p className="text-[var(--foreground)] text-xs">{t("testimonials.t1.role")}</p>
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start justify-between">
            <div className="text-cyan-400 text-sm">★★★★★</div>
            <div className="text-cyan-400 text-xl font-bold">”</div>
          </div>
          <p className="mt-4 text-sm text-[var(--foreground)] italic">“{t("testimonials.t2.quote")}”</p>
          <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
          <div className="mt-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-cyan-500/60">
              <Image
                src="/WhatsApp Image 2025-11-18 at 11.00.37 PM.jpeg"
                alt="Ubeimar Yepes"
                width={40}
                height={40}
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-[var(--foreground)] text-sm font-semibold">{t("testimonials.t2.name")}</p>
              <p className="text-[var(--foreground)] text-xs">{t("testimonials.t2.role")}</p>
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start justify-between">
            <div className="text-cyan-400 text-sm">★★★★★</div>
            <div className="text-cyan-400 text-xl font-bold">”</div>
          </div>
          <p className="mt-4 text-sm text-[var(--foreground)] italic">“{t("testimonials.t3.quote")}”</p>
          <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
          <div className="mt-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-cyan-500/60">
              <Image
                src="/WhatsApp Image 2025-11-18 at 11.00.38 PM.jpeg"
                alt="Yuly Bastidas"
                width={40}
                height={40}
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-[var(--foreground)] text-sm font-semibold">{t("testimonials.t3.name")}</p>
              <p className="text-[var(--foreground)] text-xs">{t("testimonials.t3.role")}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}