"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const estaciones = [
  { id: "inicio", texto: "Inicio" },
  { id: "proyectos", texto: "Proyectos" },
  { id: "ia", texto: "Cómo trabajo" },
  { id: "formacion", texto: "Trayectoria" },
  { id: "aptitudes", texto: "Aptitudes" },
  { id: "contacto", texto: "Contacto" },
];

// Posición del tren: un número entre 0 y estaciones.length - 1, con decimales entre estación y estación.
function usePosicion() {
  const [pos, setPos] = useState<number | null>(null);

  useEffect(() => {
    const calcular = () => {
      const tops = estaciones.map((e) => document.getElementById(e.id)?.getBoundingClientRect().top);
      if (tops.some((t) => t === undefined)) return setPos(null);
      const ref = window.innerHeight * 0.35;
      const t = tops as number[];
      // Al final de la página, el tren llega a la última estación.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) return setPos(t.length - 1);
      let p = 0;
      for (let i = 0; i < t.length - 1; i++) {
        if (t[i + 1] <= ref) p = i + 1;
        else {
          if (t[i] <= ref) p = i + Math.min(1, (ref - t[i]) / (t[i + 1] - t[i]));
          break;
        }
      }
      setPos(p);
    };
    calcular();
    window.addEventListener("scroll", calcular, { passive: true });
    window.addEventListener("resize", calcular);
    return () => {
      window.removeEventListener("scroll", calcular);
      window.removeEventListener("resize", calcular);
    };
  }, []);

  return pos;
}

// El aviso de «próxima estación» se escribe letra a letra, como en un panel del andén.
function Aviso({ texto }: { texto: string }) {
  const quieto = useReducedMotion();
  const [n, setN] = useState(texto.length);

  useEffect(() => {
    if (quieto) return setN(texto.length);
    setN(0);
    const t = setInterval(() => setN((k) => (k >= texto.length ? (clearInterval(t), k) : k + 1)), 38);
    return () => clearInterval(t);
  }, [texto, quieto]);

  return (
    <span aria-live="polite" className="tabular-nums">
      {texto.slice(0, n)}
      <span className="sr-only">{texto.slice(n)}</span>
    </span>
  );
}

export default function Cabecera() {
  const pos = usePosicion();
  const [abierto, setAbierto] = useState(false);
  const primerEnlace = useRef<HTMLAnchorElement>(null);
  const actual = pos === null ? -1 : Math.floor(pos + 0.0001);
  const proxima = pos === null ? null : estaciones[Math.min(actual + 1, estaciones.length - 1)];
  const enDestino = actual === estaciones.length - 1;
  const n = estaciones.length;

  useEffect(() => {
    if (!abierto) return;
    primerEnlace.current?.focus();
    document.body.style.overflow = "hidden";
    const alTeclear = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alTeclear);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", alTeclear);
    };
  }, [abierto]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hilo bg-plano/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <a href="/#inicio" className="rotulo-medio shrink-0 text-lg text-tinta">
            Cristian Corroto
          </a>

          {/* Escritorio: la línea con las secciones como estaciones */}
          <nav aria-label="Principal" className="relative hidden flex-1 md:block">
            <div className="absolute inset-x-[8.33%] top-[9px] h-1 rounded-full bg-hilo" aria-hidden="true" />
            {pos !== null && (
              <div
                className="absolute left-[8.33%] top-[9px] h-1 rounded-full bg-yo transition-[width] duration-300 ease-out"
                style={{ width: `${(pos / (n - 1)) * 83.33}%` }}
                aria-hidden="true"
              />
            )}
            <ol className="relative flex">
              {estaciones.map((e, i) => {
                const pasada = pos !== null && i <= actual;
                return (
                  <li key={e.id} className="flex-1">
                    <a
                      href={`/#${e.id}`}
                      aria-current={i === actual ? "location" : undefined}
                      className="group flex flex-col items-center gap-1.5 rounded-md px-1 pb-1 text-xs"
                    >
                      <span
                        className={`h-[22px] w-[22px] rounded-full border-[3px] transition-colors duration-300 ${
                          pasada ? "border-yo bg-plano shadow-[0_0_10px_rgb(255_61_74/0.7)]" : "border-hilo bg-plano"
                        } group-hover:border-tinta`}
                        aria-hidden="true"
                      />
                      <span
                        className={`whitespace-nowrap transition-colors ${
                          i === actual ? "font-semibold text-tinta" : "text-suave group-hover:text-tinta"
                        }`}
                      >
                        {e.texto}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
            {pos !== null && (
              <div
                className="pointer-events-none absolute top-[3px] h-4 w-9 -translate-x-1/2 rounded-full border-[3px] border-plano bg-yo shadow-[0_0_14px_rgb(255_61_74/0.9)] transition-[left] duration-300 ease-out"
                style={{ left: `${8.33 + (pos / (n - 1)) * 83.33}%` }}
                aria-hidden="true"
              />
            )}
          </nav>

          <p className="ml-auto hidden w-52 shrink-0 text-right text-xs text-suave lg:block">
            {proxima && (
              <>
                <span className="versalitas text-[10px] text-suave">
                  {enDestino ? "Final de trayecto" : "Próxima estación"}
                </span>
                <br />
                <span className="rotulo-medio text-sm text-tinta">
                  <Aviso texto={enDestino ? "Fin del recorrido" : proxima.texto} />
                </span>
              </>
            )}
          </p>

          {/* Móvil: estación actual y botón de menú */}
          <div className="ml-auto flex items-center gap-3 md:hidden">
            {pos !== null && (
              <span className="text-xs text-suave">
                <span className="sr-only">Estás en </span>
                {estaciones[Math.max(actual, 0)].texto}
              </span>
            )}
            <button
              type="button"
              onClick={() => setAbierto(true)}
              aria-expanded={abierto}
              aria-controls="menu-movil"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-tinta"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Menú
            </button>
          </div>
        </div>
      </header>

      {/* Fuera del header: su backdrop-filter encerraría al panel fijo */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            id="menu-movil"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="fixed inset-0 z-50 flex flex-col bg-plano px-6 pb-10 pt-5 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.25 } }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="rotulo-medio text-lg">Cristian Corroto</span>
              <button
                type="button"
                onClick={() => setAbierto(false)}
                className="inline-flex h-11 items-center rounded-full border-2 border-tinta px-4 text-sm font-semibold"
              >
                Cerrar
              </button>
            </div>
            <nav aria-label="Principal" className="relative mt-10 flex-1">
              <motion.div
                className="absolute bottom-6 left-[13px] top-6 w-1.5 origin-top rounded-full bg-yo"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
                aria-hidden="true"
              />
              <ol className="relative flex h-full flex-col justify-between">
                {estaciones.map((e, i) => (
                  <motion.li
                    key={e.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      ref={i === 0 ? primerEnlace : undefined}
                      href={`/#${e.id}`}
                      onClick={() => setAbierto(false)}
                      aria-current={i === actual ? "location" : undefined}
                      className="flex min-h-12 items-center gap-5"
                    >
                      <span
                        className={`h-8 w-8 shrink-0 rounded-full border-4 ${
                          i === actual ? "border-tinta bg-tinta" : "border-tinta bg-plano"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="rotulo text-4xl">{e.texto}</span>
                    </a>
                  </motion.li>
                ))}
              </ol>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
