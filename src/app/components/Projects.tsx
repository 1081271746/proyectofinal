"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Projects() {
  const { t } = useI18n();
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("projects.title")}</h2>
      <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
      <p className="mt-6 text-center text-[var(--foreground)] max-w-3xl mx-auto">{t("projects.intro")}</p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🌐</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("projects.p1.title")}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{t("projects.p1.desc")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">{t("projects.features")}</h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--foreground)]">
              <li>• {t("projects.p1.f1")}</li>
              <li>• {t("projects.p1.f2")}</li>
              <li>• {t("projects.p1.f3")}</li>
              <li>• {t("projects.p1.f4")}</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">React</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">CSS</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">JavaScript</span>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">📅</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("projects.p2.title")}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{t("projects.p2.desc")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">{t("projects.features")}</h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--foreground)]">
              <li>• {t("projects.p2.f1")}</li>
              <li>• {t("projects.p2.f2")}</li>
              <li>• {t("projects.p2.f3")}</li>
              <li>• {t("projects.p2.f4")}</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">React</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Node.js</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">MongoDB</span>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🚗</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("projects.p3.title")}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{t("projects.p3.desc")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">{t("projects.features")}</h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--foreground)]">
              <li>• {t("projects.p3.f1")}</li>
              <li>• {t("projects.p3.f2")}</li>
              <li>• {t("projects.p3.f3")}</li>
              <li>• {t("projects.p3.f4")}</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Arduino</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">C++</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Electrónica</span>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🧠</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("projects.p4.title")}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{t("projects.p4.desc")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">{t("projects.features")}</h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--foreground)]">
              <li>• {t("projects.p4.f1")}</li>
              <li>• {t("projects.p4.f2")}</li>
              <li>• {t("projects.p4.f3")}</li>
              <li>• {t("projects.p4.f4")}</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">React</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">TypeScript</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Firebase</span>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">📚</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("projects.p5.title")}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{t("projects.p5.desc")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">{t("projects.features")}</h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--foreground)]">
              <li>• {t("projects.p5.f1")}</li>
              <li>• {t("projects.p5.f2")}</li>
              <li>• {t("projects.p5.f3")}</li>
              <li>• {t("projects.p5.f4")}</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Next.js</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Node.js</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">MongoDB</span>
          </div>
        </article>

        <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🍽️</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("projects.p6.title")}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{t("projects.p6.desc")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">{t("projects.features")}</h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--foreground)]">
              <li>• {t("projects.p6.f1")}</li>
              <li>• {t("projects.p6.f2")}</li>
              <li>• {t("projects.p6.f3")}</li>
              <li>• {t("projects.p6.f4")}</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Next.js</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Tailwind</span>
            <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs text-[var(--foreground)]">Supabase</span>
          </div>
        </article>
      </div>
    </section>
  );
}