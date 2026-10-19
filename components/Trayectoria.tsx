"use client";

import { motion } from "framer-motion";
import { trayectoria } from "@/data/trayectoria";

const color: Record<string, string> = {
  Formación: "text-sky-300 border-sky-300/30 bg-sky-300/5",
  Experiencia: "text-acento border-acento/30 bg-acento/5",
};

export default function Trayectoria() {
  return (
    <section id="formacion" className="mx-auto max-w-4xl px-4 py-24">
      <p className="font-mono text-sm text-acento">Formación y experiencia</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">De dónde vengo</h2>

      <ol className="relative mt-12 border-l border-borde pl-8">
        {trayectoria.map((h, i) => (
          <motion.li
            key={`${h.periodo}-${h.titulo}`}
            className="relative pb-12 last:pb-0"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2) }}
          >
            <span
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-fondo bg-acento"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${color[h.tipo]}`}>
                {h.tipo}
              </span>
              <span className="font-mono text-sm text-suave">{h.periodo}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold">{h.titulo}</h3>
            <p className="mt-1 text-sm text-suave">{h.lugar}</p>
            <ul className="mt-4 space-y-2 text-sm text-suave">
              {h.puntos.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
