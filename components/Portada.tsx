"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Plano from "./Plano";
import NombreNeon from "./NombreNeon";
import PalabraRotatoria from "./PalabraRotatoria";
import Trazo from "./Trazo";
import { contacto } from "@/data/contacto";

const llegada = [0.16, 1, 0.3, 1] as const;

const leyenda = [
  {
    nombre: "Línea Yo",
    signo: "h-2.5 w-8 bg-yo neon-yo",
    destacado: "Yo:",
    texto: "decido qué construir, pruebo y reviso.",
  },
  { nombre: "Línea IA", signo: "h-2.5 w-8 bg-ia neon-ia", destacado: "IA:", texto: "propone gran parte del código." },
  {
    nombre: "Estación en servicio",
    signo: "h-4 w-8 border-[3px] border-tinta bg-tinta",
    texto: "Funciona o está publicado",
  },
  {
    nombre: "Estación en obras",
    signo: "h-4 w-8 border-[3px] border-dashed border-tinta bg-plano",
    texto: "En obras: en desarrollo",
  },
];

export default function Portada() {
  // Con movimiento reducido, todo aparece a la vez y sin desplazarse.
  const quieto = useReducedMotion();
  const t = (tr: Transition): Transition => (quieto ? { duration: 0 } : tr);

  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-20 md:pt-36">
      {/* Fondo: cuadrícula del plano y dos luces de color, una por línea */}
      <div className="cuadricula pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="luz -left-40 top-[45%] h-[28rem] w-[28rem] bg-yo" aria-hidden="true" />
      <div className="luz -right-40 -top-24 h-[30rem] w-[30rem] bg-ia [animation-delay:-9s]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl text-center">
        <NombreNeon texto="Cristian Corroto" className="mx-auto max-w-4xl" />

        <motion.p
          className="rotulo-medio mt-6 text-[clamp(1.5rem,3.6vw,2.4rem)] text-tinta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t({ duration: 0.6, delay: 1.5, ease: llegada })}
        >
          Desarrollo <PalabraRotatoria palabras={["apps Android", "webs animadas", "con IA"]} />
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-[40rem] text-lg leading-relaxed text-suave sm:text-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t({ duration: 0.6, delay: 1.7, ease: llegada })}
        >
          Desarrollador junior en Madrid. Construyo apps y webs{" "}
          <Trazo forma="subrayado" color="var(--color-ia)" retraso={2.3}>
            con IA
          </Trazo>{" "}
          y en cada proyecto cuento{" "}
          <Trazo forma="caja" color="var(--color-yo)" retraso={2.7}>
            <span className="text-tinta">qué hizo ella y qué hice yo</span>
          </Trazo>
          .
        </motion.p>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl md:mt-12">
        <Plano />
      </div>

      <motion.div
        className="relative mx-auto mt-10 flex max-w-6xl flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t({ duration: 0.6, delay: 2.2 })}
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-b from-white to-[#b8bfcc] px-7 text-sm font-semibold text-black shadow-[0_0_0_1px_rgb(255_255_255/0.4),0_10px_30px_-10px_rgb(42_179_255/0.6)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Ver proyectos
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M8 2v11M3 8.5 8 13.5l5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={`mailto:${contacto.email}`}
            className="inline-flex min-h-12 items-center rounded-full border border-white/20 bg-black/40 px-7 text-sm font-semibold text-tinta backdrop-blur transition-colors duration-200 hover:border-white/50"
          >
            Escribirme
          </a>
        </div>

        {/* Leyenda del plano */}
        <dl className="grid gap-x-8 gap-y-2 text-sm text-suave sm:grid-cols-2">
          {leyenda.map((l) => (
            <div key={l.nombre} className="flex items-center gap-3">
              <dt className={`shrink-0 rounded-full ${l.signo}`}>
                <span className="sr-only">{l.nombre}</span>
              </dt>
              <dd>
                {l.destacado && <span className="font-semibold text-tinta">{l.destacado} </span>}
                {l.texto}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
