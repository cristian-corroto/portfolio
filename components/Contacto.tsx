"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { contacto } from "@/data/contacto";
import Flecha from "./Flecha";

const dibujo = { duration: 1.4, ease: [0.65, 0, 0.35, 1] } as const;

export default function Contacto() {
  const [copiado, setCopiado] = useState(false);
  // Con movimiento reducido, las líneas aparecen ya dibujadas.
  const quieto = useReducedMotion();
  const t = (tr: Transition): Transition => (quieto ? { duration: 0 } : tr);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(contacto.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      window.location.href = `mailto:${contacto.email}`;
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-hilo bg-plano text-tinta">
      <div className="cuadricula pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="luz -bottom-48 left-1/4 h-[26rem] w-[26rem] bg-ia" aria-hidden="true" />
      <div className="luz -bottom-56 right-0 h-[24rem] w-[24rem] bg-yo [animation-delay:-6s]" aria-hidden="true" />
      {/* Las dos líneas llegan a sus topes: final de trayecto */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative h-20 w-full overflow-visible md:h-28"
        aria-hidden="true"
      >
        <motion.path
          d="M-10 40 H1080"
          stroke="var(--color-yo)"
          className="neon-yo"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={t(dibujo)}
        />
        <motion.path
          d="M-10 80 H1080"
          stroke="var(--color-ia)"
          className="neon-ia"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={t({ ...dibujo, delay: 0.15 })}
        />
        <motion.rect
          x="1092"
          y="22"
          width="12"
          height="76"
          rx="6"
          fill="#fff"
          className="neon-blanco"
          initial={{ opacity: 0, scaleY: 0.3 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={t({ duration: 0.4, delay: 1.35, ease: [0.16, 1, 0.3, 1] })}
          style={{ transformOrigin: "1098px 60px" }}
        />
      </svg>

      <div className="relative px-4 pb-10 pt-12 sm:px-6 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="rotulo text-[clamp(3.6rem,11vw,6rem)]">¿Hablamos?</h2>
          <p className="mt-6 max-w-[52ch] text-lg text-suave">
            Si quieres hablar de un proyecto, de una colaboración o de una oportunidad, escríbeme. Estoy en Madrid y
            trabajo en remoto o en híbrido.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${contacto.email}`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-black shadow-[0_10px_30px_-10px_rgb(42_179_255/0.6)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {contacto.email}
            </a>
            <button
              type="button"
              onClick={copiar}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 text-sm font-semibold transition-colors duration-200 hover:border-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                {copiado ? (
                  <path
                    d="M3 8.5 6.5 12 13 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M5 5V2.5h8.5V11H11M2.5 5H11v8.5H2.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
              <span aria-live="polite">{copiado ? "Correo copiado" : "Copiar correo"}</span>
            </button>
            <a
              href={contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 text-sm font-semibold transition-colors duration-200 hover:border-white"
            >
              GitHub <Flecha />
            </a>
            {contacto.linkedin && (
              <a
                href={contacto.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 text-sm font-semibold transition-colors duration-200 hover:border-white"
              >
                LinkedIn <Flecha />
              </a>
            )}
          </div>

          <footer className="mt-24 flex flex-col gap-1 border-t border-hilo pt-6 text-sm text-suave sm:flex-row sm:justify-between">
            <p>© 2026 Cristian Corroto · Madrid</p>
            <p>Web hecha con Next.js y Tailwind, con apoyo de IA.</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
