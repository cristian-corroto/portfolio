"use client";

import { motion } from "framer-motion";
import { destacadas, grupos } from "@/data/aptitudes";

export default function Aptitudes() {
  return (
    <section id="aptitudes" className="mx-auto max-w-6xl px-4 py-24">
      <p className="font-mono text-sm text-acento">Aptitudes</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Con qué trabajo</h2>
      <p className="mt-3 max-w-2xl text-suave">
        Agrupadas según cómo las he adquirido: por formación, o en proyectos con apoyo de IA.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {grupos.map((g, i) => (
          <motion.div
            key={g.titulo}
            className="rounded-tarjeta border border-borde bg-tarjeta p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{g.titulo}</h3>
              {g.nota && <span className="font-mono text-xs text-suave">{g.nota}</span>}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((t) => {
                const dest = destacadas.includes(t);
                return (
                  <li
                    key={t}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      dest
                        ? "border-acento bg-acento/10 font-medium text-acento"
                        : "border-borde bg-white/[0.03] text-texto/90"
                    }`}
                  >
                    {t}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-sm text-suave">
        Idiomas: español nativo, inglés básico (inglés técnico cursado en DAM).
      </p>
    </section>
  );
}
