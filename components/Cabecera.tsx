"use client";

import { useEffect, useState } from "react";

const enlaces = [
  { href: "/#inicio", texto: "Inicio" },
  { href: "/#proyectos", texto: "Proyectos" },
  { href: "/#ia", texto: "Cómo trabajo con IA" },
  { href: "/#formacion", texto: "Formación" },
  { href: "/#aptitudes", texto: "Aptitudes" },
  { href: "/#contacto", texto: "Contacto" },
];

export default function Cabecera() {
  const [reducida, setReducida] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const alScroll = () => setReducida(window.scrollY > 60);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [abierto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      {/* Escritorio: píldora que se encoge al hacer scroll */}
      <nav
        aria-label="Principal"
        className={`hidden items-center gap-1 rounded-full border transition-all duration-500 ease-out md:flex ${
          reducida
            ? "border-borde bg-black/85 px-2 py-1.5 shadow-lg shadow-black/40 backdrop-blur-md"
            : "border-transparent bg-transparent px-4 py-2"
        }`}
      >
        {enlaces.map((e) => (
          <a
            key={e.href}
            href={e.href}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-suave transition-colors hover:bg-white/5 hover:text-texto ${
              reducida ? "text-xs" : "text-sm"
            }`}
          >
            {e.texto}
          </a>
        ))}
      </nav>

      {/* Móvil: botón de menú con lista desplegable */}
      <div className="w-full md:hidden">
        <div className="flex items-center justify-between rounded-full border border-borde bg-black/85 px-4 py-2 backdrop-blur-md">
          <a href="/#inicio" className="text-sm font-semibold">
            Cristian Corroto
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="rounded-full px-3 py-1 text-sm text-suave transition hover:text-texto"
          >
            {abierto ? "Cerrar" : "Menú"}
          </button>
        </div>
        {abierto && (
          <nav
            id="menu-movil"
            aria-label="Principal"
            className="mt-2 flex flex-col rounded-2xl border border-borde bg-black/95 p-2 backdrop-blur-md"
          >
            {enlaces.map((e) => (
              <a
                key={e.href}
                href={e.href}
                onClick={() => setAbierto(false)}
                className="rounded-xl px-4 py-3 text-sm text-suave transition hover:bg-white/5 hover:text-texto"
              >
                {e.texto}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
