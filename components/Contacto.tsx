"use client";

import { motion } from "framer-motion";
import { contacto } from "@/data/contacto";

export default function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-4 py-24 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/foto.webp"
        alt="Cristian Corroto"
        width={96}
        height={96}
        loading="lazy"
        decoding="async"
        className="mx-auto h-24 w-24 rounded-full border border-borde object-cover object-top"
      />
      <p className="mt-5 font-mono text-sm text-acento">Contacto</p>
      <motion.h2
        className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        ¿Hablamos?
      </motion.h2>
      <p className="mx-auto mt-4 max-w-xl text-suave">
        Busco prácticas (FCT) o un puesto junior en desarrollo de software, desarrollo web o IA aplicada. Estoy en
        Madrid y trabajo en remoto o híbrido.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${contacto.email}`}
          className="rounded-full bg-acento px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
        >
          {contacto.email}
        </a>
        {contacto.linkedin && (
          <a
            href={contacto.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-borde px-6 py-3 text-sm font-medium transition hover:border-acento hover:text-acento"
          >
            LinkedIn ↗
          </a>
        )}
        <a
          href={contacto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-borde px-6 py-3 text-sm font-medium transition hover:border-acento hover:text-acento"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
