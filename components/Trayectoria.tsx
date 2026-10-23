"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { trayectoria, type Hito } from "@/data/trayectoria";
import Barras from "./Barras";

const LINEA = {
  Formación: { fondo: "bg-formacion", borde: "border-formacion", texto: "text-formacion" },
  Experiencia: { fondo: "bg-experiencia", borde: "border-experiencia", texto: "text-experiencia" },
} as const;

function Parada({ h }: { h: Hito }) {
  const l = LINEA[h.tipo];
  // Formación va por la línea de la izquierda; Experiencia, por la de la derecha.
  const izquierda = h.tipo === "Formación";
  return (
    <li className="relative pb-16 pl-20 last:pb-0 sm:pl-28">
      <motion.span
        className={`absolute top-1 h-7 w-7 rounded-full border-[5px] bg-plano ${l.borde} ${
          izquierda ? "left-[3px] sm:left-[11px]" : "left-[27px] sm:left-[43px]"
        }`}
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -35% 0px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="rotulo-medio text-2xl leading-tight sm:text-3xl">
          <span className="sr-only">{h.tipo}: </span>
          {h.titulo}
        </h3>
        <p className="mt-2 text-suave">
          <span className={`font-semibold ${l.texto}`}>{h.periodo}</span> · {h.lugar}
        </p>
        <ul className="mt-4 max-w-[65ch] space-y-2 text-suave">
          {h.puntos.map((t) => (
            <li key={t} className="flex gap-3">
              <span className={`mt-[0.6em] h-1.5 w-3 shrink-0 rounded-full ${l.fondo}`} aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {h.detalle && (
          <details className="group mt-4 max-w-[65ch]">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border-2 border-tinta px-4 text-sm font-semibold transition-colors hover:bg-tinta hover:text-plano [&::-webkit-details-marker]:hidden">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {h.detalle.titulo}
            </summary>
            <ul className="mt-4 flex flex-wrap gap-2">
              {h.detalle.items.map((t) => (
                <li key={t} className="rounded-full bg-plano-2 px-3 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </details>
        )}
      </motion.div>
    </li>
  );
}

export default function Trayectoria() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.7"] });
  const lleno = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

  return (
    <section id="formacion" className="border-t border-hilo px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="rotulo text-[clamp(2.8rem,7vw,5.5rem)]">Trayectoria</h2>
            <Barras />
          </div>
          <div className="flex gap-6 text-sm text-suave">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-8 rounded-full bg-formacion" aria-hidden="true" />
              Formación
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-8 rounded-full bg-experiencia" aria-hidden="true" />
              Experiencia
            </span>
          </div>
        </div>

        <ol ref={ref} className="relative mt-16">
          {/* Dos líneas paralelas que se llenan al bajar */}
          {[
            { lado: "left-[14px] sm:left-[22px]", color: "bg-formacion shadow-[0_0_12px_rgb(255_210_63/0.6)]" },
            { lado: "left-[38px] sm:left-[54px]", color: "bg-experiencia shadow-[0_0_12px_rgb(61_220_132/0.6)]" },
          ].map((v) => (
            <span
              key={v.color}
              className={`absolute bottom-0 top-2 w-1.5 rounded-full bg-hilo ${v.lado}`}
              aria-hidden="true"
            >
              <motion.span className={`block h-full origin-top rounded-full ${v.color}`} style={{ scaleY: lleno }} />
            </span>
          ))}
          {trayectoria.map((h) => (
            <Parada key={`${h.periodo}-${h.titulo}`} h={h} />
          ))}
        </ol>
      </div>
    </section>
  );
}
