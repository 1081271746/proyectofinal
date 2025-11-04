"use client";
import React, { useState } from "react";

export default function Experience() {
  const [tab, setTab] = useState<"academica" | "laboral">("academica");

  const pillBase =
    "flex-1 text-sm md:text-base font-semibold px-6 py-2 rounded-full border border-cyan-400 transition-colors";
  const pillActive = "bg-cyan-400 text-black shadow-[0_0_10px_#22d3ee]";
  const pillInactive = "bg-[#0f172a] text-white hover:bg-[#111827]";

  return (
    <section id="experiencia" className="pt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white">EXPERIENCIA</h2>
        <div className="w-16 h-[3px] bg-cyan-400 mx-auto mt-2 mb-6"></div>
        <p className="text-center text-gray-300 mb-8">
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
            {/* Bachiller */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[#0b1220] text-white shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">📘</span>
                <h3 className="text-xl font-semibold">Bachiller</h3>
              </div>
              <p className="text-cyan-300 mb-1">Colegio Felipense</p>
              <p className="text-gray-400 mb-4">2011 - 2022</p>
              <p className="text-gray-200">
                Graduado con excelentes calificaciones, desarrollando habilidades de liderazgo y
                trabajo en equipo.
              </p>
            </div>

            {/* Cursos de Inglés */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[#0b1220] text-white shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🗣️</span>
                <h3 className="text-xl font-semibold">Cursos de Inglés</h3>
              </div>
              <p className="text-cyan-300 mb-1">Varios Institutos</p>
              <p className="text-gray-400 mb-4">2020 - 2023</p>
              <p className="text-gray-200">
                Múltiples cursos de inglés para mejorar las habilidades comunicativas y acceso a
                recursos técnicos internacionales.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Asistente de Ventas */}
            <div className="border border-cyan-400 rounded-xl p-6 bg-[#0b1220] text-white shadow-[0_0_10px_#22d3ee]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 text-xl">🛍️</span>
                <h3 className="text-xl font-semibold">Asistente de Ventas</h3>
              </div>
              <p className="text-cyan-300 mb-1">Almacén de Ropa Familiar</p>
              <p className="text-gray-400 mb-4">2021 - Presente</p>
              <p className="text-gray-200 mb-4">
                Trabajo en el negocio familiar gestionando inventario, atención al cliente y apoyo
                en las operaciones diarias del almacén de ropa.
              </p>
              <p className="text-gray-300 font-semibold mb-2">Responsabilidades principales:</p>
              <ul className="text-gray-200 space-y-2">
                <li>• Atención personalizada al cliente</li>
                <li>• Gestión de inventario</li>
                <li>• Organización de mercancía</li>
                <li>• Apoyo en estrategias de ventas</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}