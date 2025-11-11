"use client";
import React, { useState } from "react";

export default function Experience() {
  const [tab, setTab] = useState<"academica" | "laboral">("academica");

  const pillBase =
    "flex-1 text-sm md:text-base font-semibold px-6 py-2 rounded-full border border-cyan-400 transition-colors";
  const pillActive = "bg-cyan-400 text-black shadow-[0_0_10px_#22d3ee]";
  const pillInactive = "bg-[var(--background)] text-[var(--foreground)] hover:bg-slate-100 dark:hover:bg-[#111827]";

  return (
    <section id="experiencia" className="pt-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[var(--foreground)]">EXPERIENCIA</h2>
        <div className="w-16 h-[3px] bg-cyan-400 mx-auto mt-2 mb-6"></div>
        <p className="text-center text-[var(--foreground)] mb-8">
          Mi trayectoria académica y profesional que me ha formado como persona y
          profesional.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 max-w-md mx-auto mb-8">
          <button
            type="button"
            aria-pressed={tab === "academica"}
            className={`${pillBase} ${tab === "academica" ? pillActive : pillInactive}`}
            onClick={() => setTab("academica")}
          >
            ACADÉMICA
          </button>
          <button
            type="button"
            aria-pressed={tab === "laboral"}
            className={`${pillBase} ${tab === "laboral" ? pillActive : pillInactive}`}
            onClick={() => setTab("laboral")}
          >
            LABORAL
          </button>
        </div>

        {/* Content */}
        {tab === "academica" ? (
          <div className="space-y-6">
            {/* Ingeniería de Software — Universidad Cooperativa de Colombia */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🎓</span>
                <h3 className="text-xl font-semibold">Ingeniería de Software — 5º semestre</h3>
              </div>
              <p className="text-cyan-300 mb-1">Universidad Cooperativa de Colombia</p>
              <p className="mb-4 text-[var(--foreground)]">2025 - Presente</p>
              <p className="text-[var(--foreground)]">
                Actualmente cursando quinto semestre, fortaleciendo bases de programación,
                estructuras de datos, arquitectura de software y buenas prácticas de desarrollo.
              </p>
            </div>

            {/* Bachiller */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">📘</span>
                <h3 className="text-xl font-semibold">Bachiller</h3>
              </div>
              <p className="text-cyan-300 mb-1">Colegio Felipense</p>
              <p className="mb-4 text-[var(--foreground)]">2011 - 2022</p>
              <p className="text-[var(--foreground)]">
                Graduado con excelentes calificaciones, desarrollando habilidades de liderazgo y
                trabajo en equipo.
              </p>
            </div>

            {/* Cursos de Inglés */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🗣️</span>
                <h3 className="text-xl font-semibold">Cursos de Inglés</h3>
              </div>
              <p className="text-cyan-300 mb-1">Varios Institutos</p>
              <p className="mb-4 text-[var(--foreground)]">2020 - 2023</p>
              <p className="text-[var(--foreground)]">
                Múltiples cursos de inglés para mejorar las habilidades comunicativas y acceso a
                recursos técnicos internacionales.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Asistente de Ventas */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🛍️</span>
                <h3 className="text-xl font-semibold">Asistente de Ventas</h3>
              </div>
              <p className="text-cyan-300 mb-1">Almacén de Ropa Familiar</p>
              <p className="mb-4 text-[var(--foreground)]">2021 - Presente</p>
              <p className="text-[var(--foreground)] mb-4">
                Trabajo en el negocio familiar gestionando inventario, atención al cliente y apoyo
                en las operaciones diarias del almacén de ropa.
              </p>
              <p className="text-[var(--foreground)] font-semibold mb-2">Responsabilidades principales:</p>
              <ul className="text-[var(--foreground)] space-y-2">
                <li>• Atención personalizada al cliente</li>
                <li>• Gestión de inventario</li>
                <li>• Organización de mercancía</li>
                <li>• Apoyo en estrategias de ventas</li>
              </ul>
            </div>

            {/* Desarrollador Web — Sistema de Reservas para Barbería */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[var(--background)] text-[var(--foreground)] shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">💈</span>
                <h3 className="text-xl font-semibold">Desarrollador Web — Sistema de Reservas para Barbería</h3>
              </div>
              <p className="text-cyan-300 mb-1">Barbería Local</p>
              <p className="mb-4 text-[var(--foreground)]">2023</p>
              <p className="text-[var(--foreground)] mb-4">
                Implementación de una aplicación web para la reserva de turnos, con calendario
                interactivo, gestión de clientes y visualización de disponibilidad.
              </p>
              <p className="text-[var(--foreground)] font-semibold mb-2">Aportes destacados:</p>
              <ul className="text-[var(--foreground)] space-y-2">
                <li>• Sistema de reservas y calendario</li>
                <li>• Gestión de clientes y citas</li>
                <li>• Interfaz responsive y accesible</li>
                <li>• Notificaciones básicas para recordatorios</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}