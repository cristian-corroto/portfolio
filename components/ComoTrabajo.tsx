"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Barras from "./Barras";

type Via = "yo" | "ia" | "ambas";

// Cada paso del método es una estación. «en» es dónde cae sobre el trayecto (de 0 a 1).
const pasos: { n: string; titulo: string; texto: string; via: Via; x: number; en: number }[] = [
  {
    n: "01",
    titulo: "Describo",
    texto: "Explico qué necesito: la funcionalidad, cómo debe comportarse y con qué tecnología.",
    via: "yo",
    x: 125,
    en: 0.083,
  },
  {
    n: "02",
    titulo: "Genero",
    texto: "La IA propone el código. Uso distintas herramientas y las combino según la tarea.",
    via: "ia",
    x: 375,
    en: 0.368,
  },
  {
    n: "03",
    titulo: "Pruebo",
    texto: "Ejecuto el resultado, lo uso como lo usaría cualquiera y compruebo si hace lo que pedí.",
    via: "yo",
    x: 625,
    en: 0.652,
  },
  {
    n: "04",
    titulo: "Ajusto",
    texto: "Si algo falla, describo el error, busco alternativas y repito hasta que funciona.",
    via: "ambas",
    x: 875,
    en: 0.917,
  },
];

// Iconos de los pasos: bocadillo, código, comprobación y repetir.
const ICONOS = [
  "M4 5h16v11H10l-5 4v-4H4z",
  "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13",
  "M4.5 12.5l4.5 4.5L19.5 6.5",
  "M20 12a8 8 0 1 1-2.4-5.7M20 4.5V9h-4.5",
];

const Y = { yo: 60, ia: 160, ambas: 110 };
const COLOR = { yo: "var(--color-yo)", ia: "var(--color-ia)", ambas: "var(--color-tinta)" };

// El trayecto salta de vía a 45°: Yo → IA → Yo → las dos.
const TRAYECTO = "M40 60 H255 L355 160 H505 L605 60 H785 L835 110 H960";

const columnas = [
  {
    titulo: "Lo que hago yo",
    color: "bg-yo",
    items: [
      "Definir qué construir y cómo debe comportarse.",
      "Probar cada funcionalidad antes de darla por buena.",
      "Decidir cuándo algo está terminado o hay que cambiarlo.",
      "Organizar el proyecto y guardarlo en Git y GitHub.",
    ],
  },
  {
    titulo: "Lo que hace la IA",
    color: "bg-ia",
    items: [
      "Escribir gran parte del código, sobre todo en tecnologías que no estudié: React, Next.js y Python.",
      "Proponer soluciones cuando algo falla.",
      "Ayudarme a investigar y a entender lo que construyo.",
    ],
  },
  {
    titulo: "Lo que sé sin IA",
    color: "bg-tinta",
    items: [
      "Java y programación orientada a objetos.",
      "HTML, CSS y SQL.",
      "Windows: instalación, optimización y soporte.",
    ],
  },
];

export default function ComoTrabajo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const avance = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const [llegado, setLlegado] = useState(0);

  // Una estación queda marcada en cuanto el trayecto llega a ella, y ya no se desmarca.
  useMotionValueEvent(avance, "change", (v) => {
    const n = pasos.filter((p) => v >= p.en - 0.01).length;
    setLlegado((k) => Math.max(k, n));
  });

  return (
    <section id="ia" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="rotulo text-[clamp(2.8rem,7vw,5.5rem)]">Cómo trabajo con IA</h2>
        <Barras />
        <p className="mt-5 max-w-[60ch] text-lg text-suave">
          Lo digo desde el principio. Combino distintas herramientas, incluido un entorno propio montado con modelos
          gratuitos, y sigo siempre el mismo recorrido: el trayecto cambia de vía entre lo que hago yo y lo que hace la
          IA.
        </p>

        <div ref={ref} className="mt-14">
          {/* Escritorio: dos vías y el trayecto que salta entre ellas */}
          <div className="hidden md:block">
            <svg viewBox="0 0 1000 220" className="h-auto w-full overflow-visible" aria-hidden="true">
              <line
                x1="20"
                y1="60"
                x2="980"
                y2="60"
                stroke="var(--color-yo)"
                strokeOpacity="0.18"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="20"
                y1="160"
                x2="980"
                y2="160"
                stroke="var(--color-ia)"
                strokeOpacity="0.18"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <text x="20" y="34" className="versalitas" style={{ fontSize: 12 }} fill="var(--color-yo)">
                Vía Yo
              </text>
              <text x="20" y="200" className="versalitas" style={{ fontSize: 12 }} fill="var(--color-ia)">
                Vía IA
              </text>
              <motion.path
                d={TRAYECTO}
                fill="none"
                stroke="var(--color-tinta)"
                className="neon-blanco"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: avance }}
              />
              {pasos.map((p, i) => {
                const y = Y[p.via];
                const activa = i < llegado;
                return p.via === "ambas" ? (
                  <rect
                    key={p.n}
                    x={p.x - 13}
                    y={44}
                    width={26}
                    height={132}
                    rx={13}
                    fill={activa ? "var(--color-tinta)" : "var(--color-plano)"}
                    stroke="var(--color-tinta)"
                    strokeWidth="4"
                    style={{ transition: "fill 300ms" }}
                  />
                ) : (
                  <circle
                    key={p.n}
                    cx={p.x}
                    cy={y}
                    r={activa ? 16 : 13}
                    fill="var(--color-plano)"
                    stroke={activa ? COLOR[p.via] : "var(--color-hilo)"}
                    strokeWidth="6"
                    style={{ transition: "r 300ms cubic-bezier(0.16,1,0.3,1), stroke 300ms" }}
                  />
                );
              })}
            </svg>
          </div>

          <ol className="mt-6 grid gap-8 md:grid-cols-4 md:gap-6">
            {pasos.map((p, i) => {
              const activa = i < llegado;
              return (
                <li key={p.n} className="relative pl-12 md:pl-0">
                  {/* Móvil: la estación en el lateral */}
                  <span
                    className={`absolute left-0 top-1 h-7 w-7 rounded-full border-[5px] bg-plano transition-colors duration-300 md:hidden ${
                      activa
                        ? p.via === "ia"
                          ? "border-ia"
                          : p.via === "yo"
                            ? "border-yo"
                            : "border-tinta"
                        : "border-hilo"
                    }`}
                    aria-hidden="true"
                  />
                  {i < pasos.length - 1 && (
                    <span
                      className="absolute bottom-[-2rem] left-[11px] top-9 w-1.5 rounded-full bg-hilo md:hidden"
                      aria-hidden="true"
                    >
                      <span
                        className="block h-full origin-top rounded-full bg-tinta transition-transform duration-500"
                        style={{ transform: `scaleY(${i + 1 < llegado ? 1 : 0})` }}
                      />
                    </span>
                  )}
                  {/* Tarjeta del paso: icono con anillo que gira, cuadrícula en la esquina y el icono en grande al fondo */}
                  <div
                    className={`group relative overflow-hidden rounded-2xl border border-hilo bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-left transition-colors duration-300 hover:border-white/25 ${
                      i % 2 === 1 ? "md:mt-12" : ""
                    }`}
                  >
                    <div className="cuadricula-esquina pointer-events-none absolute inset-0" aria-hidden="true" />
                    <span
                      className="relative grid h-12 w-12 place-items-center rounded-full bg-white/5"
                      style={{ color: COLOR[p.via] }}
                      aria-hidden="true"
                    >
                      {activa && <span className="anillo" />}
                      <svg width="22" height="22" viewBox="0 0 24 24" className="text-tinta">
                        <path
                          d={ICONOS[i]}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 text-white/[0.06] transition-colors duration-500 group-hover:text-white/10"
                      aria-hidden="true"
                    >
                      <path
                        d={ICONOS[i]}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="rotulo relative mt-5 text-4xl">{p.titulo}</h3>
                    <p className="relative mt-2 text-sm font-semibold" style={{ color: COLOR[p.via] }}>
                      Paso {Number(p.n)} · {p.via === "ambas" ? "Yo + IA" : p.via === "yo" ? "Vía Yo" : "Vía IA"}
                    </p>
                    <p className="relative mt-3 text-suave md:text-sm">{p.texto}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-3 md:gap-8">
          {columnas.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`h-2 rounded-full ${c.color}`} aria-hidden="true" />
              <h3 className="rotulo-medio mt-5 text-2xl">{c.titulo}</h3>
              <ul className="mt-4 space-y-3 text-suave">
                {c.items.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className={`mt-[0.55em] h-1.5 w-3 shrink-0 rounded-full ${c.color}`} aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-14 max-w-[65ch] border-t border-hilo pt-8 text-suave">
          En lo que he estudiado entiendo el código. En tecnologías nuevas lo voy entendiendo a medida que lo uso: React
          y Next.js no formaban parte de mi ciclo y los he aprendido a usar sobre la marcha, con IA, en proyectos
          reales.
        </p>
      </div>
    </section>
  );
}
