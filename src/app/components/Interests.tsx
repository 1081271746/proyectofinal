"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Interests() {
  const { t } = useI18n();
  return (
    <section id="intereses" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("interests.title")}</h2>
      <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🎵</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.music.title")}</h3>
              <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.music.text")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">⚽</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.football.title")}</h3>
              <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.football.text")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🎮</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.games.title")}</h3>
              <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.games.text")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🏋️</div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.gym.title")}</h3>
              <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.gym.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}