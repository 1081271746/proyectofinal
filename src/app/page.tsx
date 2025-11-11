/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Marco exterior similar a la imagen */}
      <div className="mx-4 my-4 rounded-md border border-cyan-500/60">
        {/* Navegación superior */}
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="#inicio" className="text-cyan-400 font-bold tracking-wide">
              SEBASTIAN
            </a>
            <ul className="hidden md:flex gap-6 text-sm text-slate-300">
              <li><a className="hover:text-cyan-400" href="#inicio">Inicio</a></li>
              <li><a className="hover:text-cyan-400" href="#acerca">Acerca de mí</a></li>
              <li><a className="hover:text-cyan-400" href="#proyectos">Proyectos</a></li>
              <li><a className="hover:text-cyan-400" href="#experiencia">Experiencia</a></li>
              <li><a className="hover:text-cyan-400" href="#testimonios">Testimonios</a></li>
              <li><a className="hover:text-cyan-400" href="#contacto">Contacto</a></li>
            </ul>
            {/* Toggle de tema */}
            <div className="md:ml-4">
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Sección principal (Hero) */}
        <section id="inicio" className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Columna izquierda: texto principal */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Web Developer</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-slate-200">SOY </span>
                <span className="text-cyan-400">SEBASTIAN</span>
                <br />
                <span className="text-slate-200">ROJAS</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300">
                Desarrollador web apasionado por crear experiencias digitales excepcionales.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow cursor-not-allowed"
                >
                  Descargar CV
                </button>
                <a
                  href="mailto:sebtiarrojas06@gmail.com?subject=Contacto%20Portafolio"
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-500/80 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400"
                >
                  Contactarme
                </a>
              </div>
            </div>

            {/* Columna derecha: tarjeta de perfil */}
            <aside className="mx-auto w-full max-w-sm rounded-lg border border-cyan-500/60 bg-[#0b1220] p-5">
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
                <h3 className="text-lg font-semibold">Sebastian Rojas</h3>
                <p className="text-cyan-400 text-sm">Desarrollador Web</p>
                <div className="mt-3 space-y-1 text-xs text-slate-300">
                  <p>✉ sebtiarrojas06@gmail.com</p>
                  <p>☎ 3164485328</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Acerca de mí */}
        <section id="acerca" className="mx-auto max-w-6xl px-6 pb-16 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide dark:text-slate-200 text-slate-800">
            ACERCA DE MÍ
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />

          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Descripción izquierda */}
            <div className="md:mt-16 lg:mt-20">
              <p className="dark:text-slate-200 text-slate-800">
                Soy un desarrollador web apasionado por la tecnología y la
                creación de soluciones digitales innovadoras. Me caracterizo por
                ser una persona dedicada, creativa y siempre en busca de nuevos
                desafíos.
              </p>
              <p className="mt-6 dark:text-slate-200 text-slate-800">
                Además de la programación, tengo otras pasiones que me definen
                como persona y me ayudan a mantener un equilibrio en mi vida
                profesional y personal.
              </p>
            </div>

            {/* Tarjetas de intereses */}
            <div className="space-y-6">
              {/* Pasión por el fútbol */}
              <div className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">⚽</div>
                  <div>
                    <h3 className="font-semibold dark:text-slate-200 text-slate-800">Pasión por el Fútbol</h3>
                    <p className="mt-1 text-sm dark:text-slate-200 text-slate-800">
                      El fútbol es una de mis grandes pasiones. Me ayuda a
                      mantenerme activo, trabajar en equipo y desconectar del
                      mundo digital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emprendimiento */}
              <div className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">💼</div>
                  <div>
                    <h3 className="font-semibold dark:text-slate-200 text-slate-800">Emprendimiento</h3>
                    <p className="mt-1 text-sm dark:text-slate-200 text-slate-800">
                      Tengo experiencia emprendiendo y gestionando proyectos,
                      lo que me ha enseñado sobre negocios, liderazgo y
                      responsabilidad.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fan de Spider-Man */}
              <div className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl">🕷️</div>
                  <div>
                    <h3 className="font-semibold dark:text-slate-200 text-slate-800">Fan de Spider-Man</h3>
                    <p className="mt-1 text-sm dark:text-slate-200 text-slate-800">
                      Me encanta la filosofía de &quot;un gran poder conlleva una
                      gran responsabilidad&quot; y disfruto sus películas, cómics y
                      videojuegos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide dark:text-slate-200 text-slate-800">
            MIS PROYECTOS
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
          <p className="mt-6 text-center dark:text-slate-200 text-slate-800 max-w-3xl mx-auto">
            Aquí puedes ver algunos de los proyectos que he desarrollado, desde páginas web corporativas hasta aplicaciones web funcionales.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🌐</div>
                <div>
                  <h3 className="font-semibold dark:text-slate-200 text-slate-800">Página Web para Negocio Familiar</h3>
                  <p className="mt-2 text-sm dark:text-slate-300 text-slate-700">
                    Desarrollo de una página web completa para el negocio de un familiar, incluyendo catálogo de productos, información de contacto y diseño responsive.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-slate-200 text-slate-800">Características principales:</h4>
                <ul className="mt-2 space-y-1 text-sm dark:text-slate-300 text-slate-700">
                  <li>• Diseño responsive</li>
                  <li>• Catálogo de productos</li>
                  <li>• Formulario de contacto</li>
                  <li>• Optimización SEO</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">React</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">CSS</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">JavaScript</span>
              </div>
            </article>

            {/* Proyecto 2 */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">📅</div>
                <div>
                  <h3 className="font-semibold dark:text-slate-200 text-slate-800">Sistema de Reservas para Barbería</h3>
                  <p className="mt-2 text-sm dark:text-slate-300 text-slate-700">
                    Aplicación web para gestionar reservas de citas en una barbería, con sistema de calendario y notificaciones.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-slate-200 text-slate-800">Características principales:</h4>
                <ul className="mt-2 space-y-1 text-sm dark:text-slate-300 text-slate-700">
                  <li>• Sistema de reservas</li>
                  <li>• Calendario interactivo</li>
                  <li>• Gestión de clientes</li>
                  <li>• Notificaciones automáticas</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">React</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Node.js</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">MongoDB</span>
              </div>
            </article>

            {/* Proyecto 3: Carro a control remoto con Arduino */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🚗</div>
                <div>
                  <h3 className="font-semibold dark:text-slate-200 text-slate-800">Carro a Control Remoto (Arduino) — 3er semestre</h3>
                  <p className="mt-2 text-sm dark:text-slate-300 text-slate-700">
                    Vehículo a control remoto construido con Arduino, orientado a aprender electrónica básica, programación de microcontroladores y control de motores.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-slate-200 text-slate-800">Características principales:</h4>
                <ul className="mt-2 space-y-1 text-sm dark:text-slate-300 text-slate-700">
                  <li>• Control de dirección y velocidad</li>
                  <li>• Comunicación inalámbrica (Bluetooth)</li>
                  <li>• Integración de sensores para evitar obstáculos</li>
                  <li>• Documentación y armado del circuito</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Arduino</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">C++</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Electrónica</span>
              </div>
            </article>

            {/* Proyecto 4: App de juegos cognitivos */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🧠</div>
                <div>
                  <h3 className="font-semibold dark:text-slate-200 text-slate-800">App de Juegos Cognitivos (Trabajo en equipo)</h3>
                  <p className="mt-2 text-sm dark:text-slate-300 text-slate-700">
                    Aplicación enfocada en ejercicios de memoria, atención y lógica, con niveles, puntajes y seguimiento de progreso para usuarios.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-slate-200 text-slate-800">Características principales:</h4>
                <ul className="mt-2 space-y-1 text-sm dark:text-slate-300 text-slate-700">
                  <li>• Múltiples minijuegos y niveles</li>
                  <li>• Registro y estadísticas del usuario</li>
                  <li>• UI accesible y adaptable</li>
                  <li>• Trabajo colaborativo con control de versiones</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">React</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">TypeScript</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Firebase</span>
              </div>
            </article>

            {/* Proyecto 5: Inventario para biblioteca digital */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">📚</div>
                <div>
                  <h3 className="font-semibold dark:text-slate-200 text-slate-800">Inventario con base de datos para Gestor de Biblioteca Digital</h3>
                  <p className="mt-2 text-sm dark:text-slate-300 text-slate-700">
                    Sistema de inventario para una biblioteca digital: registro y catálogo de libros, búsqueda avanzada, control de préstamos y gestión de usuarios.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-slate-200 text-slate-800">Características principales:</h4>
                <ul className="mt-2 space-y-1 text-sm dark:text-slate-300 text-slate-700">
                  <li>• Registro y catálogo de libros</li>
                  <li>• Búsqueda y filtrado avanzado</li>
                  <li>• Gestión de préstamos y devoluciones</li>
                  <li>• Administración de usuarios y roles</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Next.js</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Node.js</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">MongoDB</span>
              </div>
            </article>

            {/* Proyecto 6: Página de restaurante de pedidos */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-xl shadow-[0_0_20px_rgba(34,211,238,0.25)]">🍽️</div>
                <div>
                  <h3 className="font-semibold dark:text-slate-200 text-slate-800">Página de Restaurante — Pedidos en línea</h3>
                  <p className="mt-2 text-sm dark:text-slate-300 text-slate-700">
                    Sitio web con menú digital, carrito de pedidos y panel de gestión básica para administrar productos y órdenes.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-slate-200 text-slate-800">Características principales:</h4>
                <ul className="mt-2 space-y-1 text-sm dark:text-slate-300 text-slate-700">
                  <li>• Menú dinámico y filtrado por categorías</li>
                  <li>• Carrito de compras y resumen de pedido</li>
                  <li>• Pasarela de pago simulada</li>
                  <li>• Panel básico para gestión de platos</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Next.js</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Tailwind</span>
                <span className="rounded-full border border-cyan-500/60 px-3 py-1 text-xs dark:text-slate-200 text-slate-800">Supabase</span>
              </div>
            </article>
          </div>
        </section>

        {/* Experiencia (interactiva) */}
        <Experience />

        {/* Testimonios */}
        <section id="testimonios" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide dark:text-slate-200 text-slate-800">
            Testimonios
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
          <p className="mt-6 text-center dark:text-slate-300 text-slate-700 max-w-3xl mx-auto">
            Lo que dicen las personas que han trabajado conmigo sobre mi trabajo y
            profesionalismo.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Testimonio 1 */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start justify-between">
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-cyan-400 text-xl font-bold">”</div>
              </div>
              <p className="mt-4 text-sm dark:text-slate-200 text-slate-800 italic">
                "Sebastian es un excelente compañero de estudios y deportista. Su dedicación tanto
                en el código como en el campo de fútbol es admirable. Siempre está dispuesto a
                ayudar y compartir conocimientos."
              </p>
              <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">👤</div>
                <div>
                  <p className="dark:text-slate-200 text-slate-800 text-sm font-semibold">Juan Pablo Lucero</p>
                  <p className="dark:text-slate-300 text-slate-700 text-xs">Estudiante de Software</p>
                </div>
              </div>
            </article>

            {/* Testimonio 2 */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start justify-between">
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-cyan-400 text-xl font-bold">”</div>
              </div>
              <p className="mt-4 text-sm dark:text-slate-200 text-slate-800 italic">
                "Conocí a Sebastian en el curso de desarrollo web y es increíble su capacidad para
                resolver problemas. Además es un gran deportista y muy buen amigo. Su página web quedó perfecta."
              </p>
              <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">👤</div>
                <div>
                  <p className="dark:text-slate-200 text-slate-800 text-sm font-semibold">Ubeimar Yepez</p>
                  <p className="dark:text-slate-300 text-slate-700 text-xs">Estudiante de Software</p>
                </div>
              </div>
            </article>

            {/* Testimonio 3 */}
            <article className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6">
              <div className="flex items-start justify-between">
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-cyan-400 text-xl font-bold">”</div>
              </div>
              <p className="mt-4 text-sm dark:text-slate-200 text-slate-800 italic">
                "Sebastian combina perfectamente la pasión por la tecnología con el deporte. Es
                muy responsable, creativo y siempre entrega trabajos de calidad. Un gran compañero de estudios."
              </p>
              <div className="mt-6 h-px dark:bg-slate-700/60 bg-slate-200" />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">👤</div>
                <div>
                  <p className="dark:text-slate-200 text-slate-800 text-sm font-semibold">Yuly Bastidas</p>
                  <p className="dark:text-slate-300 text-slate-700 text-xs">Estudiante de Software</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20 mt-16 md:mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-slate-200">
            CONTACTO
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-cyan-500" />
          <p className="mt-6 text-center text-slate-200 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar de ti y discutir cómo puedo ayudarte.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <article className="rounded-lg border border-cyan-500/60 bg-[#0b1220] p-6">
              <h3 className="text-lg font-semibold text-slate-200">INFORMACIÓN DE CONTACTO</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✉</div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-sm text-slate-200">sebtiarrojas06@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">📞</div>
                  <div>
                    <p className="text-sm text-slate-400">Teléfono</p>
                    <p className="text-sm text-slate-200">3164485328</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">📍</div>
                  <div>
                    <p className="text-sm text-slate-400">Ubicación</p>
                    <p className="text-sm text-slate-200">Colombia</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-200">Sígueme en:</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-[#0f172a] border border-cyan-500/60 text-slate-200 hover:text-cyan-400"
                  >🐙</a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-[#0f172a] border border-cyan-500/60 text-slate-200 hover:text-cyan-400"
                  >in</a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-[#0f172a] border border-cyan-500/60 text-slate-200 hover:text-cyan-400"
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
