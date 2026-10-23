"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { proyectos, type Proyecto } from "@/data/proyectos";

function Marca({ p, claro = false }: { p: Proyecto; claro?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`h-3 w-5 rounded-full border-2 ${claro ? "border-white" : "border-tinta"} ${
          p.marca === "obras" ? "border-dashed" : claro ? "bg-white" : "bg-tinta"
        }`}
        aria-hidden="true"
      />
      {p.estadoCorto}
    </span>
  );
}

function Cartel({ p, i }: { p: Proyecto; i: number }) {
  const captura = p.encuadre === "captura";
  return (
    <motion.li
      initial={{ opacity: 0, y: 40, filter: "brightness(0.2)" }}
      whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay: (i % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/proyectos/${p.slug}/`}
        className="group relative block overflow-hidden rounded-[22px] bg-[#05070d] ring-1 ring-white/10 transition-transform duration-700 ease-[var(--ease-llegada)] hover:scale-[1.015] sm:aspect-video"
      >
        {/* Retroiluminación: la propia imagen, desenfocada, ilumina el panel */}
        {p.imagen && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.imagen}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl saturate-150 transition-opacity duration-700 group-hover:opacity-90"
          />
        )}

        {/* En móvil la imagen va arriba y el rótulo debajo; desde sm, el rótulo flota sobre la imagen */}
        <div className="relative aspect-video sm:absolute sm:inset-0 sm:aspect-auto">
          {p.imagen &&
            (captura ? (
              <div className="absolute inset-x-[6%] top-[7%] overflow-hidden rounded-t-xl shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/20 transition-transform duration-1000 ease-[var(--ease-llegada)] group-hover:-translate-y-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imagen}
                  alt={`Captura de ${p.titulo}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover object-top"
                />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.imagen}
                alt={`Portada de ${p.titulo}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-llegada)] group-hover:scale-105"
              />
            ))}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/85"
            aria-hidden="true"
          />
        </div>

        {/* Rótulo de estación: se despliega al pasar el ratón */}
        <div className="relative mx-3 -mt-12 mb-3 rounded-2xl border border-white/15 bg-black/45 p-5 text-white shadow-[0_20px_40px_-16px_rgb(0_0_0/0.8)] backdrop-blur-2xl transition-transform duration-300 ease-[var(--ease-llegada)] group-hover:-translate-y-1 sm:absolute sm:inset-x-5 sm:bottom-5 sm:m-0 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="rotulo text-[clamp(1.9rem,3.2vw,2.6rem)]">{p.titulo}</h3>
            <span className="mt-1 shrink-0 text-xs text-rotulo-suave">
              <Marca p={p} claro />
            </span>
          </div>
          {/* Banda de datos, igual en todas las estaciones: tipo · año · tecnologías */}
          <p className="mt-2 text-xs text-rotulo-suave">
            <span className="versalitas text-[11px] text-[#8fd3ff]">{p.tipo}</span>
            <span aria-hidden="true"> · </span>
            {p.fecha.replace(/^.*· /, "")}
            <span aria-hidden="true"> · </span>
            {p.tecnologias.slice(0, 3).join(", ")}
          </p>

          <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[var(--ease-llegada)] [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-3 text-sm leading-relaxed text-rotulo-suave transition-opacity delay-100 duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
                {p.resumen}
              </p>
              <p className="mt-3 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
                Ver proyecto
                <span className="h-0.5 w-8 bg-yo transition-[width] duration-300 group-hover:w-14" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>

        <span className="borde-luz" aria-hidden="true" />
      </Link>
    </motion.li>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="relative bg-anden pb-24 text-anden-texto">
      {/* Franja de la pared del andén, en los colores de las dos líneas */}
      <div className="franja-anden h-3" aria-hidden="true" />

      <div className="px-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-flex w-fit items-center gap-4 rounded-xl bg-rotulo px-5 py-3 text-white shadow-[0_10px_30px_-12px_rgb(0_0_0/0.8)]">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-yo text-xs font-bold text-black">Yo</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ia text-xs font-bold text-black">IA</span>
              </span>
              <span className="rotulo text-[clamp(2.4rem,6vw,4rem)]">Proyectos</span>
            </h2>
            <p className="max-w-md text-anden-suave">
              Cada proyecto es una correspondencia entre las dos líneas. En la ficha cuento qué hizo la IA y qué hice
              yo.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {proyectos.map((p, i) => (
              <Cartel key={p.slug} p={p} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
