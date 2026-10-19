"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { proyectos } from "@/data/proyectos";

export default function Proyectos() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-24">
      <p className="font-mono text-sm text-acento">Proyectos</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Lo que he construido</h2>
      <p className="mt-3 max-w-2xl text-suave">
        Todos están hechos con apoyo de IA; en cada uno cuento qué hizo la herramienta y qué hice yo.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/proyectos/${p.slug}/`}
              className="group flex h-full flex-col overflow-hidden rounded-tarjeta border border-borde bg-tarjeta transition duration-300 hover:-translate-y-1 hover:border-acento/60 hover:shadow-[0_0_40px_-12px] hover:shadow-acento/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
                {p.imagen ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.imagen}
                    alt={`Captura de ${p.titulo}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-sm text-suave">
                    Captura próximamente
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-full border border-borde bg-black/70 px-2.5 py-1 font-mono text-[11px] text-acento backdrop-blur">
                  {p.tipo}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3">
                  {p.icono && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.icono}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 rounded-xl bg-white object-contain"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{p.titulo}</h3>
                </div>
                <p className="mt-2 flex-1 text-sm text-suave">{p.resumen}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-suave">{p.estadoCorto}</span>
                  <span className="text-acento">Hecho con apoyo de IA</span>
                </div>
                <span className="mt-4 text-sm font-medium transition group-hover:text-acento">Ver proyecto →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
