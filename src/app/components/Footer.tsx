import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-6 pt-12 pb-8 mt-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Columna 1: Marca */}
        <div>
          <h4 className="text-cyan-400 font-bold tracking-wide">SEBASTIAN</h4>
          <p className="mt-3 text-sm text-slate-200">
            Desarrollador web apasionado por crear experiencias digitales excepcionales.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h4 className="text-cyan-400 font-bold tracking-wide">ENLACES RÁPIDOS</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li><a className="hover:text-cyan-400" href="#inicio">Inicio</a></li>
            <li><a className="hover:text-cyan-400" href="#acerca">Acerca de mí</a></li>
            <li><a className="hover:text-cyan-400" href="#proyectos">Proyectos</a></li>
            <li><a className="hover:text-cyan-400" href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div>
          <h4 className="text-cyan-400 font-bold tracking-wide">SERVICIOS</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Desarrollo Web</li>
            <li>Diseño Responsive</li>
            <li>Aplicaciones React</li>
            <li>Optimización SEO</li>
          </ul>
        </div>
      </div>

      {/* Separador */}
      <div className="mt-8 h-px w-full bg-cyan-500/40" />

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-slate-200">
        © {year} Portfolio. Todos los derechos reservados.
      </p>
    </footer>
  );
}