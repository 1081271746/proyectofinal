/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import { useI18n } from "./i18n/I18nProvider";

export default function Home() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen">
      {/* Marco exterior similar a la imagen */}
      <div className="mx-4 my-4 rounded-md border border-cyan-500/60">
        {/* Navegación superior */}
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
              <li><a className="hover:text-cyan-400" href="#contacto">{t("nav.contact")}</a></li>
            </ul>
            {/* Controles */}
            <div className="flex items-center gap-2 md:ml-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Sección principal (Hero) */}
        <section id="inicio" className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Columna izquierda: texto principal */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">{t("hero.role")}</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-[var(--foreground)]">{t("hero.i_am")} </span>
                <span className="text-cyan-400">{t("brand.name")}</span>
                <br />
                <span className="text-[var(--foreground)]">{t("hero.last_name")}</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300">{t("hero.subtitle")}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow cursor-not-allowed"
                >
                  {t("hero.cv")}
                </button>
                <a
                  href="mailto:sebitasroja06@gmail.com?subject=Contacto%20Portafolio"
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-500/80 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400"
                >
                  {t("hero.contact")}
                </a>
              </div>
            </div>

            {/* Columna derecha: tarjeta de perfil */}
            <aside className="mx-auto w-full max-w-sm rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 rounded-full ring-2 ring-cyan-500/70 p-1 mb-3">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src="/vercel.svg"
                      alt="Avatar"
                      width={112}
                      height={112}
                      className="scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Sebastian Rojas</h3>
                <p className="text-cyan-400 text-sm">{t("hero.role")}</p>
                <div className="mt-3 space-y-1 text-xs text-[var(--foreground)]">
                  <p>✉ sebitasroja06@gmail.com</p>
                  <p>☎ 3164485328</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Acerca de mí */}
        <section id="acerca" className="mx-auto max-w-6xl px-6 pb-16 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("about.title")}</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />

          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Descripción izquierda */}
            <div className="md:mt-16 lg:mt-20">
              <p className="text-[var(--foreground)]">{t("about.p1")}</p>
              <p className="mt-6 text-[var(--foreground)]">{t("about.p2")}</p>
            </div>

            {/* Tarjetas de intereses */}
            <div className="space-y-6">
              {/* Pasión por el fútbol */}
              <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">⚽</div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{t("about.card.football.title")}</h3>
                    <p className="mt-1 text-sm text-[var(--foreground)]">{t("about.card.football.text")}</p>
                  </div>
                </div>
              </div>

              {/* Emprendimiento */}
              <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">💼</div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{t("about.card.business.title")}</h3>
                    <p className="mt-1 text-sm text-[var(--foreground)]">{t("about.card.business.text")}</p>
                  </div>
                </div>
              </div>

              {/* Fan de Spider-Man */}
              <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🕷️</div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{t("about.card.spiderman.title")}</h3>
                    <p className="mt-1 text-sm text-[var(--foreground)]">{t("about.card.spiderman.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intereses / Pasatiempos */}
        <section id="intereses" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("interests.title")}</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* Música */}
            <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🎵</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.music.title")}</h3>
                  <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.music.text")}</p>
                </div>
              </div>
            </div>

            {/* Fútbol */}
            <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">⚽</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.football.title")}</h3>
                  <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.football.text")}</p>
                </div>
              </div>
            </div>

            {/* Videojuegos */}
            <div className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🎮</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{t("interests.card.games.title")}</h3>
                  <p className="mt-1 text-sm text-[var(--foreground)]">{t("interests.card.games.text")}</p>
                </div>
              </div>
            </div>

            {/* Gimnasio */}
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

        {/* Proyectos */}
        <section id="proyectos" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("projects.title")}</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
          <p className="mt-6 text-center text-[var(--foreground)] max-w-3xl mx-auto">{t("projects.intro")}</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
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

            {/* Proyecto 2 */}
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

            {/* Proyecto 3: Carro a control remoto con Arduino */}
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

            {/* Proyecto 4: App de juegos cognitivos */}
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

            {/* Proyecto 5: Inventario para biblioteca digital */}
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

            {/* Proyecto 6: Página de restaurante de pedidos */}
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

        {/* Experiencia (interactiva) */}
        <Experience />

        {/* Testimonios */}
        <section id="testimonios" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("testimonials.title")}</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
          <p className="mt-6 text-center text-[var(--foreground)] max-w-3xl mx-auto">{t("testimonials.intro")}</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Testimonio 1 */}
            <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
              <div className="flex items-start justify-between">
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-cyan-400 text-xl font-bold">”</div>
              </div>
              <p className="mt-4 text-sm text-[var(--foreground)] italic">“{t("testimonials.t1.quote")}”</p>
              <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">👤</div>
                <div>
                  <p className="text-[var(--foreground)] text-sm font-semibold">{t("testimonials.t1.name")}</p>
                  <p className="text-[var(--foreground)] text-xs">{t("testimonials.t1.role")}</p>
                </div>
              </div>
            </article>

            {/* Testimonio 2 */}
            <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
              <div className="flex items-start justify-between">
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-cyan-400 text-xl font-bold">”</div>
              </div>
              <p className="mt-4 text-sm text-[var(--foreground)] italic">“{t("testimonials.t2.quote")}”</p>
              <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">👤</div>
                <div>
                  <p className="text-[var(--foreground)] text-sm font-semibold">{t("testimonials.t2.name")}</p>
                  <p className="text-[var(--foreground)] text-xs">{t("testimonials.t2.role")}</p>
                </div>
              </div>
            </article>

            {/* Testimonio 3 */}
            <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
              <div className="flex items-start justify-between">
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-cyan-400 text-xl font-bold">”</div>
              </div>
              <p className="mt-4 text-sm text-[var(--foreground)] italic">“{t("testimonials.t3.quote")}”</p>
              <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">👤</div>
                <div>
                  <p className="text-[var(--foreground)] text-sm font-semibold">{t("testimonials.t3.name")}</p>
                  <p className="text-[var(--foreground)] text-xs">{t("testimonials.t3.role")}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-[var(--foreground)]">{t("contact.title")}</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
          <p className="mt-6 text-center text-[var(--foreground)] max-w-3xl mx-auto">{t("contact.intro")}</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <article className="rounded-lg border border-cyan-500/60 bg-[var(--background)] p-6">
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
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-[var(--background)] border border-cyan-500/60 text-[var(--foreground)] hover:text-cyan-400"
                  >🐙</a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-[var(--background)] border border-cyan-500/60 text-[var(--foreground)] hover:text-cyan-400"
                  >in</a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-[var(--background)] border border-cyan-500/60 text-[var(--foreground)] hover:text-cyan-400"
                  >📷</a>
                </div>
              </div>
            </article>

            {/* Formulario de contacto (cliente con fallback) */}
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
