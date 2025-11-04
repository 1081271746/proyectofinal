import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Marco exterior similar a la imagen */}
      <div className="mx-4 my-4 rounded-md border border-cyan-500/60">
        {/* Navegación superior */}
        <header className="sticky top-0 z-10 bg-slate-950/70 backdrop-blur">
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
            <aside className="mx-auto w-full max-w-sm rounded-lg border border-cyan-500/60 bg-slate-900/60 p-5">
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
      </div>
    </main>
  );
}
