"use client";

import Image from "next/image";
import { useI18n } from "../i18n/I18nProvider";
import { jsPDF } from "jspdf";

export default function Hero() {
  const { t } = useI18n();

  const handleDownloadCV = () => {
    try {
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(18);
      doc.text("CV – SEBASTIAN ROJAS", 15, 20);

      doc.setFontSize(12);
      const content = `Desarrollador Web | Estudiante de Software\n\nDatos Personales\nNombre: Sebastian Rojas\nCorreo: sebastrog06@gmail.com\nTeléfono: 3166485328\nUbicación: Colombia\nLinkedIn / GitHub: (si quieres te los creo también)\n\nPerfil Profesional\nSoy un desarrollador web apasionado por la tecnología y la creación de soluciones digitales innovadoras. Me caracterizo por ser una persona dedicada, creativa y orientada a resultados. Busco constantemente mejorar mis habilidades y afrontar nuevos desafíos para ofrecer productos digitales de alta calidad.\n\nMi enfoque combina buenas prácticas de desarrollo, diseño moderno y funcionalidad centrada en el usuario.\n\nEducación\nBachiller\nColegio Filipense 2011 – 2022\nGraduado con excelentes calificaciones. Desarrollé habilidades de liderazgo, trabajo en equipo y comunicación.\n\nCursos de Inglés\n2020 – 2023\nFormación en inglés para mejorar mis habilidades comunicativas y el acceso a recursos técnicos internacionales.\n\nExperiencia Laboral\nAsistente de Ventas\nAlmacén de Ropa Familiar | 2021 – Presente\nApoyo en las operaciones diarias del negocio familiar, gestionando inventario y ofreciendo atención personalizada al cliente.\n\nResponsabilidades principales:\n• Atención personalizada al cliente\n• Gestión de inventario\n• Organización de mercancía\n• Apoyo en estrategias de venta\n\nProyectos Realizados\nPágina Web para Negocio Familiar\nDesarrollo completo de un sitio web para un negocio familiar, integrando catálogo de productos, contacto y diseño responsive.\nCaracterísticas:\n• Diseño responsive\n• Catálogo de productos\n• Formulario de contacto\n• Optimización SEO\nTecnologías: React, CSS, JavaScript\n\nSistema de Reservas para Barbería\nAplicación web funcional para gestionar citas, calendarios y clientes en una barbería.\nCaracterísticas:\n• Sistema completo de reservas\n• Calendario interactivo\n• Gestión de clientes\n• Notificaciones automáticas\nTecnologías: React, Node.js, MongoDB\n\nHabilidades Técnicas\n• Desarrollo Frontend (React, HTML, CSS, JavaScript)\n• Diseño responsive\n• Sistemas de reservas\n• Manejo de bases de datos\n• Versionamiento con Git/GitHub\n• Optimización SEO\n• Trabajo en equipo y resolución de problemas\n\nIntereses Personales\n• Pasión por el fútbol: Me ayuda a mantenerme activo, trabajar en equipo y desconectarme del mundo digital.\n• Emprendimiento: Co-propietario de una tienda de gorras; experiencia en ventas y negocios.\n• Fan de Spider-Man: Me inspira por su filosofía de responsabilidad y superación.\n\nProyectos Futuros\n• Plataforma web para gestionar torneos de fútbol amateur.\n• Aplicación móvil de recordatorios inteligentes con IA.\n• Página web para emprendimiento de ropa urbana (gorras y oversize).\n\nContacto\nCorreo: sebastrog06@gmail.com\nTeléfono: 3166485328\nDisponible para proyectos freelance y colaboraciones.`;

      const lines = doc.splitTextToSize(content, 180) as string[];
      let y = 30;
      const lineHeight = 6;
      lines.forEach((line: string) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 15, y);
        y += lineHeight;
      });

      doc.save("CV-Sebastian-Rojas.pdf");
    } catch (err) {
      console.error("Error generating CV PDF", err);
    }
  };

  return (
    <section id="inicio" className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
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
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow hover:shadow-md"
            >
              {t("hero.cv")}
            </button>
          </div>
        </div>

        <aside className="mx-auto w-full max-w-sm rounded-lg border border-cyan-500/60 bg-[var(--background)] p-5">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-28 w-28 rounded-full ring-2 ring-cyan-500/70 p-1 mb-3">
              <div className="rounded-full overflow-hidden h-full w-full">
                <Image
                  src="/WhatsApp Image 2025-11-18 at 11.05.38 PM.jpeg"
                  alt="Foto de portada"
                  fill
                  className="h-full w-full object-cover object-center"
                  priority
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
  );
}