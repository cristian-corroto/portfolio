"use client";

import { motion } from "framer-motion";
import { destacadas, grupos } from "@/data/aptitudes";
import Barras from "./Barras";

const COLOR = {
  yo: "bg-yo",
  ia: "bg-ia",
  formacion: "bg-formacion",
  experiencia: "bg-experiencia",
  tinta: "bg-tinta",
} as const;

export default function Aptitudes() {
  return (
    <section id="aptitudes" className="border-t border-hilo px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="rotulo text-[clamp(2.8rem,7vw,5.5rem)]">Aptitudes</h2>
        <Barras />
        <p className="mt-5 max-w-[60ch] text-lg text-suave">
          Como el panel de correspondencias de una estación: cada línea dice con qué trabajo y cómo lo aprendí.
        </p>

        <ul className="mt-14 border-t-2 border-tinta">
          {grupos.map((g, i) => (
            <motion.li
              key={g.titulo}
              className="group grid gap-4 border-b border-hilo py-7 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`mt-2 h-2.5 w-10 shrink-0 rounded-full transition-[width] duration-300 ease-[var(--ease-llegada)] group-hover:w-14 ${COLOR[g.linea]}`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="rotulo-medio text-2xl leading-tight">{g.titulo}</h3>
                  {g.nota && <p className="mt-1 text-sm text-suave">{g.nota}</p>}
                </div>
              </div>
              <ul className="flex flex-wrap content-start items-start gap-2 md:pt-1">
                {g.items.map((t) => {
                  const dest = destacadas.includes(t);
                  return (
                    <li
                      key={t}
                      className={`rounded-full px-3.5 py-1.5 text-[0.95rem] ${
                        dest ? "bg-tinta font-semibold text-plano" : "border border-hilo bg-plano-2 text-tinta"
                      }`}
                    >
                      {t}
                    </li>
                  );
                })}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
