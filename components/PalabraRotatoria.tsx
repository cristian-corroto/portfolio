"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function PalabraRotatoria({ palabras }: { palabras: string[] }) {
  const [i, setI] = useState(0);
  const sinMovimiento = useReducedMotion();

  useEffect(() => {
    if (sinMovimiento) return;
    const t = setInterval(() => setI((n) => (n + 1) % palabras.length), 2400);
    return () => clearInterval(t);
  }, [palabras.length, sinMovimiento]);

  const palabra = palabras[i];

  return (
    <span className="inline-flex overflow-hidden rounded-lg bg-acento px-3 py-1 align-bottom font-semibold text-black">
      <span className="sr-only">{palabras.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={palabra}
          aria-hidden="true"
          className="inline-flex"
          initial="oculta"
          animate="visible"
          exit="sale"
          variants={{
            oculta: {},
            visible: { transition: { staggerChildren: 0.03 } },
            sale: { transition: { staggerChildren: 0.015 } },
          }}
        >
          {palabra.split("").map((letra, k) => (
            <motion.span
              key={`${palabra}-${k}`}
              className="inline-block whitespace-pre"
              variants={{
                oculta: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
                sale: { y: "-100%", opacity: 0 },
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {letra}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
