"use client";

import { motion } from "framer-motion";

const pasos = [
  {
    n: "01",
    titulo: "Describo",
    texto: "Explico qué necesito: la funcionalidad, cómo debe comportarse y con qué tecnología.",
  },
  {
    n: "02",
    titulo: "Genero",
    texto: "La herramienta de IA propone el código. Uso distintas herramientas y las combino según la tarea.",
  },
  {
    n: "03",
    titulo: "Pruebo",
    texto: "Ejecuto el resultado, lo uso como lo usaría un usuario y compruebo si hace lo que pedí.",
  },
  {
    n: "04",
    titulo: "Ajusto",
    texto: "Si algo falla, describo el error, busco alternativas y repito hasta que funciona.",
  },
];

const columnas = [
  {
    titulo: "Lo que hago yo",
    items: [
      "Definir qué construir y cómo debe comportarse.",
      "Probar cada funcionalidad antes de darla por buena.",
      "Decidir cuándo algo está terminado o hay que cambiarlo.",
      "Organizar el proyecto y guardarlo en Git y GitHub.",
    ],
  },
  {
    titulo: "Lo que hace la IA",
    items: [
      "Escribir gran parte del código, sobre todo en tecnologías que no estudié: React, Next.js y Python.",
      "Proponer soluciones cuando algo falla.",
      "Ayudarme a investigar y a entender lo que construyo.",
    ],
  },
  {
    titulo: "Lo que sé sin IA",
    items: [
      "Java y programación orientada a objetos.",
      "HTML, CSS y SQL.",
      "Windows: instalación, optimización y soporte.",
    ],
  },
];

export default function ComoTrabajo() {
  return (
    <section id="ia" className="mx-auto max-w-6xl px-4 py-24">
      <p className="font-mono text-sm text-acento">Cómo trabajo con IA</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Desarrollo con apoyo de IA y lo digo desde el principio
      </h2>
      <p className="mt-3 max-w-2xl text-suave">
        Combino distintas herramientas, incluido un entorno propio montado con modelos gratuitos. Este es mi
        método, en cuatro pasos.
      </p>

      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {pasos.map((p, i) => (
          <motion.li
            key={p.n}
            className="relative rounded-tarjeta border border-borde bg-tarjeta p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="font-mono text-sm text-acento">{p.n}</span>
            <h3 className="mt-3 text-xl font-semibold">{p.titulo}</h3>
            <p className="mt-2 text-sm text-suave">{p.texto}</p>
          </motion.li>
        ))}
      </ol>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {columnas.map((c, i) => (
          <motion.div
            key={c.titulo}
            className="rounded-tarjeta border border-borde bg-tarjeta p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="font-semibold text-acento">{c.titulo}</h3>
            <ul className="mt-3 space-y-2 text-sm text-suave">
              {c.items.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acento" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-sm text-suave">
        En lo que he estudiado entiendo el código. En tecnologías nuevas lo voy entendiendo a medida que lo uso:
        React y Next.js no formaban parte de mi ciclo y los he aprendido a usar sobre la marcha, con IA, en un
        proyecto real.
      </p>
    </section>
  );
}
