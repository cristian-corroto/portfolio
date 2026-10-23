"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Pastilla de neón cuya palabra cambia letra a letra.
export default function PalabraRotatoria({ palabras }: { palabras: string[] }) {
  const [i, setI] = useState(0);
  const quieto = useReducedMotion();

  useEffect(() => {
    if (quieto) return;
    const t = setInterval(() => setI((n) => (n + 1) % palabras.length), 2600);
    return () => clearInterval(t);
  }, [palabras.length, quieto]);

  const palabra = palabras[i];

  return (
    <span className="inline-flex overflow-hidden rounded-lg bg-ia px-3 py-0.5 align-middle text-black shadow-[0_0_28px_rgb(42_179_255/0.45)]">
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
                oculta: { y: "110%", rotateX: -70, opacity: 0 },
                visible: { y: 0, rotateX: 0, opacity: 1 },
                sale: { y: "-110%", rotateX: 70, opacity: 0 },
              }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {letra}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
