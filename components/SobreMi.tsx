"use client";

import { motion } from "framer-motion";

const texto =
  "Busco prácticas (FCT) o un puesto junior en desarrollo de software, desarrollo web o IA aplicada. Aporto la formación académica de DAM ya superada, una base de programación en Java y una forma de trabajar con IA que ya aplico en proyectos reales.";

const destacadas = ["prácticas", "Java", "IA", "DAM"];

export default function SobreMi() {
  const palabras = texto.split(" ");
  return (
    <section
      id="sobre-mi"
      className="mx-auto grid max-w-6xl gap-10 px-4 py-28 md:grid-cols-[320px_1fr] md:items-center"
    >
      <div className="mx-auto w-64 overflow-hidden rounded-3xl border border-borde bg-zinc-100 md:w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/foto.webp" alt="Cristian Corroto" width={720} height={1070} className="aspect-[4/5] w-full object-cover object-top" />
      </div>
      <div>
        <p className="font-mono text-sm text-acento">Sobre mí</p>
        <p className="mt-4 text-2xl font-medium leading-snug sm:text-3xl">
          <span className="sr-only">{texto}</span>
          {palabras.map((p, i) => {
            const limpia = p.replace(/[.,]/g, "");
            const resalta = destacadas.includes(limpia);
            return (
              <motion.span
                key={i}
                aria-hidden="true"
                className={`inline-block pr-[0.28em] ${resalta ? "text-acento" : ""}`}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.025, 1.2) }}
              >
                {p}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
