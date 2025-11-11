import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-6 pt-12 pb-8 mt-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Columna 1: Marca */}
        <div className="md:text-center">
          <h4 className="text-cyan-400 font-bold tracking-wide">SEBASTIAN</h4>
          <p className="mt-3 text-sm dark:text-slate-200 text-slate-800">
            Desarrollador web apasionado por crear experiencias digitales excepcionales.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h4 className="text-cyan-400 font-bold tracking-wide md:text-center">ENLACES RÁPIDOS</h4>
          <ul className="mt-3 space-y-2 text-sm md:text-center dark:text-slate-200 text-slate-800">
            <li><a className="hover:text-cyan-400" href="#inicio">Inicio</a></li>
            <li><a className="hover:text-cyan-400" href="#acerca">Acerca de mí</a></li>
            <li><a className="hover:text-cyan-400" href="#proyectos">Proyectos</a></li>
            <li><a className="hover:text-cyan-400" href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div className="md:text-center">
          <h4 className="text-cyan-400 font-bold tracking-wide">SERVICIOS</h4>
          <ul className="mt-3 space-y-2 text-sm dark:text-slate-200 text-slate-800">
            <li>Desarrollo Web</li>
            <li>Diseño Responsive</li>
            <li>Aplicaciones React</li>
            <li>Optimización SEO</li>
          </ul>
        </div>
      </div>

      {/* Separador */}
      <div className="mt-8 h-px w-full dark:bg-cyan-500/40 bg-slate-200" />

      {/* Copyright */}
      <p className="mt-6 text-center text-xs dark:text-slate-200 text-slate-800">
        © {year} Portfolio. Todos los derechos reservados.
      </p>
    </footer>
  );
}