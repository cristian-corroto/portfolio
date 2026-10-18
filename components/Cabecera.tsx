"use client";

import { useEffect, useState } from "react";

const enlaces = [
  { href: "/#inicio", texto: "Inicio" },
  { href: "/#sobre-mi", texto: "Sobre mí" },
  { href: "/#proyectos", texto: "Proyectos" },
  { href: "/#ia", texto: "Cómo trabajo con IA" },
  { href: "/#formacion", texto: "Formación" },
  { href: "/#contacto", texto: "Contacto" },
];

export default function Cabecera() {
  const [reducida, setReducida] = useState(false);

  useEffect(() => {
    const alScroll = () => setReducida(window.scrollY > 60);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <nav
        aria-label="Principal"
        className={`flex max-w-full items-center gap-1 overflow-x-auto rounded-full border transition-all duration-500 ease-out ${
          reducida
            ? "border-borde bg-black/60 px-2 py-1.5 shadow-lg shadow-black/40 backdrop-blur-md"
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
    </header>
  );
}
