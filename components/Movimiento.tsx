"use client";

import { MotionConfig } from "framer-motion";

// Todas las animaciones de Framer Motion respetan «reducir movimiento» del sistema.
export default function Movimiento({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
