"use client";

import { motion } from "framer-motion";

// Un rótulo que se enciende al entrar: se descubre de izquierda a derecha.
export default function Encendido({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0 round 16px)" }}
      animate={{ clipPath: "inset(0 0% 0 0 round 16px)" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
