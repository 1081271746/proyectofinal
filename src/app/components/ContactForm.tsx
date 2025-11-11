"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState<string | null>(null);

  const handleSend = async () => {
    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:sebtiarrojas06@gmail.com?subject=${encodeURIComponent(
      subject || "Contacto Portafolio"
    )}&body=${encodeURIComponent(body)}`;
    try {
      // Intento abrir el cliente de correo
      window.location.href = mailto;
      setInfo("Abriendo tu cliente de correo…");
    } catch {
      // Fallback: copiar el correo al portapapeles
      try {
        await navigator.clipboard.writeText("sebtiarrojas06@gmail.com");
        setInfo("No se pudo abrir el correo aquí. Copié el email al portapapeles.");
      } catch {
        setInfo("No se pudo abrir el cliente ni copiar el email. Usa: sebtiarrojas06@gmail.com");
      }
    }
  };

  return (
    <form className="rounded-lg border border-cyan-500/60 dark:bg-[#0b1220] bg-white p-6" onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-lg font-semibold dark:text-slate-200 text-slate-800">ENVÍAME UN MENSAJE</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm dark:text-slate-200 text-slate-800">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="text-sm dark:text-slate-200 text-slate-800">Email</label>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm dark:text-slate-200 text-slate-800">Asunto</label>
        <input
          type="text"
          placeholder="Asunto del mensaje"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div className="mt-4">
        <label className="text-sm dark:text-slate-200 text-slate-800">Mensaje</label>
        <textarea
          placeholder="Cuéntame sobre tu proyecto..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border dark:border-slate-700 border-slate-300 dark:bg-[#0f172a] bg-white px-3 py-2 text-sm dark:text-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={handleSend}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400"
        >
          <span>🚀</span> ENVIAR MENSAJE
        </button>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText("sebtiarrojas06@gmail.com");
              setInfo("Email copiado: sebtiarrojas06@gmail.com");
            } catch {}
          }}
          className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 dark:bg-[#0f172a] bg-white px-4 py-2 text-sm dark:text-slate-200 text-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          📋 Copiar email
        </button>
      </div>
      {info && (
        <p className="mt-3 text-xs dark:text-slate-200 text-slate-700" aria-live="polite">{info}</p>
      )}
    </form>
  );
}