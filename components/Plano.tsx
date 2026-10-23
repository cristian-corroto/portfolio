"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { proyectos } from "@/data/proyectos";

// Geometría del plano en unidades abstractas: «u» a lo largo de la línea, «v» de través.
// Las dos líneas van separadas, se juntan en dos tramos compartidos (las correspondencias)
// y vuelven a separarse. Las curvas son a 45°, como en un plano de metro.
type Mapa = {
  ancho: number;
  alto: number;
  vertical: boolean;
  punto: (u: number, v: number) => [number, number];
  tramo: [number, number][];
  // Estación de cada proyecto, en el orden de la lista.
  posiciones: number[];
  // Estaciones de una sola línea en el bucle del medio (enlaces a secciones).
  paradas: { u: number; v: number; texto: string; href: string }[];
  uFinal: number;
  uRotulos: number;
};

const ESCRITORIO: Mapa = {
  ancho: 1200,
  alto: 340,
  vertical: false,
  punto: (u, v) => [20 + u, 170 + v],
  tramo: [
    [-20, 80],
    [150, 80],
    [224, 6],
    [480, 6],
    [554, 80],
    [700, 80],
    [774, 6],
    [1040, 6],
  ],
  posiciones: [290, 880, 985, 400],
  paradas: [
    { u: 627, v: -80, texto: "Cómo trabajo", href: "#ia" },
    { u: 627, v: 80, texto: "Trayectoria", href: "#formacion" },
  ],
  uFinal: 1040,
  uRotulos: 60,
};

// En móvil el bucle del medio es corto: lo importante son las estaciones.
const MOVIL: Mapa = {
  ancho: 360,
  alto: 560,
  vertical: true,
  punto: (u, v) => [110 + v * 0.7, 24 + (u + 20) * 0.55],
  tramo: [
    [-20, 44],
    [96, 44],
    [134, 6],
    [420, 6],
    [458, 44],
    [520, 44],
    [558, 6],
    [920, 6],
  ],
  posiciones: [230, 680, 790, 330],
  paradas: [],
  uFinal: 920,
  uRotulos: 40,
};

const trazo = (m: Mapa, pts: [number, number][]) =>
  pts
    .map(
      ([u, v], i) =>
        `${i ? "L" : "M"}${m
          .punto(u, v)
          .map((n) => n.toFixed(1))
          .join(" ")}`,
    )
    .join(" ");

// El plano empieza a dibujarse cuando el nombre de la portada ya está escrito.
const INICIO = 1.3;

const retraso = (m: Mapa, u: number) => INICIO + 0.25 + ((u + 20) / (m.uFinal + 20)) * 1.5;

// Fracción del recorrido (0–1) en la que cae cada u de una línea, para que el tren pare en las estaciones.
function fracciones(m: Mapa, pts: [number, number][], us: number[]) {
  const p = pts.map(([u, v]) => m.punto(u, v));
  const tramos = p.slice(1).map((b, i) => Math.hypot(b[0] - p[i][0], b[1] - p[i][1]));
  const total = tramos.reduce((a, b) => a + b, 0);
  return us.map((u) => {
    let acum = 0;
    for (let i = 0; i < tramos.length; i++) {
      const [u0] = pts[i];
      const [u1] = pts[i + 1];
      if (u >= u0 && u <= u1) return (acum + tramos[i] * ((u - u0) / (u1 - u0 || 1))) / total;
      acum += tramos[i];
    }
    return 1;
  });
}

// Recorrido del tren: avanza, para 0,6 s en cada estación y se queda en el final.
function horario(fr: number[], viaje: number) {
  const parada = 0.6;
  const puntos = [0];
  const tiempos = [0];
  let t = 0;
  let previo = 0;
  for (const f of [...fr].sort((a, b) => a - b)) {
    t += (f - previo) * viaje;
    puntos.push(f, f);
    tiempos.push(t, t + parada);
    t += parada;
    previo = f;
  }
  t += (1 - previo) * viaje;
  puntos.push(1);
  tiempos.push(t);
  return {
    dur: `${t.toFixed(2)}s`,
    keyPoints: puntos.map((n) => n.toFixed(4)).join(";"),
    keyTimes: tiempos.map((n) => (n / t).toFixed(4)).join(";"),
  };
}

function PlanoSvg({ m, alVer }: { m: Mapa; alVer: (i: number | null) => void }) {
  const ref = useRef<SVGSVGElement>(null);
  const quieto = useReducedMotion();
  // Los trenes se crean tras montar: en el servidor no se sabe si el usuario prefiere menos movimiento.
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  // Con movimiento reducido el plano aparece ya dibujado.
  const t = (tr: Transition): Transition => (quieto ? { duration: 0 } : tr);
  const tramoIa = m.tramo.map(([u, v]) => [u, -v] as [number, number]);
  const dYo = trazo(m, m.tramo);
  const dIa = trazo(m, tramoIa);

  const linea = (d: string, color: string, inicio: number, neon: string) => (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={m.vertical ? 8 : 10}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={neon}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={t({ duration: 1.7, delay: INICIO + inicio, ease: [0.65, 0, 0.35, 1] })}
    />
  );

  const [fx, fy] = m.punto(m.uFinal, 0);
  const trenes = [
    {
      d: dYo,
      tramo: m.tramo,
      color: "var(--color-yo)",
      paradas: m.paradas.filter((p) => p.v > 0),
      empieza: "3.4s",
      neon: "neon-yo",
    },
    {
      d: dIa,
      tramo: tramoIa,
      color: "var(--color-ia)",
      paradas: m.paradas.filter((p) => p.v < 0),
      empieza: "3.8s",
      neon: "neon-ia",
    },
  ];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${m.ancho} ${m.alto}`}
      className="h-auto w-full overflow-visible"
      role="group"
      aria-label="Plano de proyectos: la línea Yo y la línea IA se cruzan en cada proyecto"
    >
      {linea(dIa, "var(--color-ia)", 0.15, "neon-ia")}
      {linea(dYo, "var(--color-yo)", 0, "neon-yo")}

      {/* Un tren por línea: recorre el plano una vez, para en cada estación y se queda en el final */}
      {montado &&
        !quieto &&
        trenes.map((tr) => {
          const us = [...m.posiciones, ...tr.paradas.map((p) => p.u)];
          const h = horario(fracciones(m, tr.tramo, us), m.vertical ? 4.5 : 6);
          return (
            <g key={tr.color} aria-hidden="true" opacity={0} className={tr.neon}>
              <set attributeName="opacity" to="1" begin={tr.empieza} />
              <rect x={-14} y={-6} width={28} height={12} rx={6} fill={tr.color} stroke="#fff" strokeWidth={2.5} />
              <animateMotion
                begin={tr.empieza}
                dur={h.dur}
                keyPoints={h.keyPoints}
                keyTimes={h.keyTimes}
                calcMode="linear"
                fill="freeze"
                rotate="auto"
                path={tr.d}
              />
            </g>
          );
        })}

      {/* Rótulos de línea al principio de cada una */}
      {[
        { v: m.tramo[0][1], texto: "Yo", color: "var(--color-yo)" },
        { v: -m.tramo[0][1], texto: "IA", color: "var(--color-ia)" },
      ].map((r) => {
        const [x, y] = m.punto(m.uRotulos, r.v);
        return (
          <motion.g
            key={r.texto}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={t({ duration: 0.45, delay: retraso(m, m.uRotulos), ease: [0.16, 1, 0.3, 1] })}
            style={{ transformOrigin: `${x}px ${y}px` }}
            aria-hidden="true"
          >
            <circle cx={x} cy={y} r={m.vertical ? 16 : 19} fill={r.color} stroke="var(--color-plano)" strokeWidth={4} />
            <text
              x={x}
              y={y}
              dy="0.35em"
              textAnchor="middle"
              fill="#000"
              className="rotulo-medio"
              style={{ fontSize: m.vertical ? 14 : 16 }}
            >
              {r.texto}
            </text>
          </motion.g>
        );
      })}

      {/* Paradas de una sola línea en el bucle: llevan a las secciones */}
      {m.paradas.map((p) => {
        const [x, y] = m.punto(p.u, p.v);
        const fuera = p.v > 0 ? 1 : -1;
        return (
          <motion.a
            key={p.texto}
            href={p.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t({ duration: 0.3, delay: retraso(m, p.u) })}
            className="group outline-none"
          >
            <rect x={x - 70} y={fuera > 0 ? y - 4 : y - 44} width={140} height={48} fill="transparent" />
            <rect x={x - 3} y={fuera > 0 ? y + 4 : y - 16} width={6} height={12} rx={2} fill="var(--color-tinta)" />
            <text
              x={x}
              y={y + fuera * 36}
              dy={fuera > 0 ? "0.35em" : "0.2em"}
              textAnchor="middle"
              fill="var(--color-tinta)"
              className="rotulo-medio group-hover:underline group-focus-visible:underline"
              style={{ fontSize: 18 }}
            >
              {p.texto}
            </text>
          </motion.a>
        );
      })}

      {/* Estaciones de correspondencia: un proyecto en cada una */}
      {proyectos.slice(0, m.posiciones.length).map((p, i) => {
        const u = m.posiciones[i];
        const [x, y] = m.punto(u, 0);
        const arriba = i % 2 === 0;
        const ancho = m.vertical ? 34 : 18;
        const alto = m.vertical ? 18 : 40;
        const [lx, ly] = m.vertical ? [x + 34, y] : [x, arriba ? y - 32 : y + 48];
        const obras = p.marca === "obras";
        return (
          <motion.a
            key={p.slug}
            href={`/proyectos/${p.slug}/`}
            aria-label={`${p.titulo}: ${p.estadoCorto}`}
            onMouseEnter={() => alVer(i)}
            onMouseLeave={() => alVer(null)}
            onFocus={() => alVer(i)}
            onBlur={() => alVer(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t({ duration: 0.3, delay: retraso(m, u) })}
            className="group cursor-pointer outline-none"
          >
            {/* Zona de clic: estación y rótulo juntos */}
            {m.vertical ? (
              <rect x={x - 24} y={y - 22} width={m.ancho - x + 24} height={44} fill="transparent" />
            ) : (
              <rect
                x={x - 95}
                y={arriba ? ly - 30 : y - alto / 2}
                width={190}
                height={arriba ? y + alto / 2 - ly + 30 : ly + 10 - (y - alto / 2)}
                fill="transparent"
              />
            )}
            {/* Estado como signo: lleno en servicio, discontinuo en obras */}
            <motion.rect
              x={x - ancho / 2}
              y={y - alto / 2}
              width={ancho}
              height={alto}
              rx={Math.min(ancho, alto) / 2}
              fill={obras ? "var(--color-plano)" : "var(--color-tinta)"}
              stroke="var(--color-tinta)"
              strokeWidth={3.5}
              strokeDasharray={obras ? "5 4" : undefined}
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={t({ duration: 0.5, delay: retraso(m, u), ease: [0.16, 1, 0.3, 1] })}
              style={{ transformOrigin: `${x}px ${y}px` }}
              className="transition-[stroke-width] duration-200 group-hover:[stroke-width:6] group-focus-visible:[stroke-width:6]"
            />
            <text
              x={lx}
              y={ly}
              dy={m.vertical ? "0.35em" : undefined}
              textAnchor={m.vertical ? "start" : "middle"}
              fill="var(--color-tinta)"
              className="rotulo-medio underline-offset-4 group-hover:underline group-focus-visible:underline"
              style={{ fontSize: m.vertical ? 19 : 22 }}
            >
              {p.titulo}
            </text>
          </motion.a>
        );
      })}

      {/* Final de trayecto: las dos líneas acaban en Contacto, con el rótulo tras el tope */}
      <motion.a
        href="#contacto"
        aria-label="Final de trayecto: contacto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t({ duration: 0.4, delay: retraso(m, m.uFinal) })}
        className="group outline-none"
      >
        {m.vertical ? (
          <rect x={fx - 26} y={fy - 4} width={52} height={8} rx={4} fill="var(--color-tinta)" />
        ) : (
          <rect x={fx - 4} y={fy - 26} width={8} height={52} rx={4} fill="var(--color-tinta)" />
        )}
        <rect
          x={m.vertical ? fx - 26 : fx - 8}
          y={m.vertical ? fy - 8 : fy - 30}
          width={m.vertical ? m.ancho - fx + 26 : m.ancho - fx + 8}
          height={m.vertical ? 46 : 60}
          fill="transparent"
        />
        <text
          x={m.vertical ? fx + 34 : fx + 18}
          y={m.vertical ? fy : fy - 6}
          dy={m.vertical ? "0.35em" : undefined}
          textAnchor="start"
          fill="var(--color-tinta)"
          className="rotulo-medio group-hover:underline group-focus-visible:underline"
          style={{ fontSize: m.vertical ? 19 : 22 }}
        >
          Contacto
        </text>
        <text
          x={m.vertical ? fx + 34 : fx + 18}
          y={m.vertical ? fy + 20 : fy + 16}
          dy={m.vertical ? "0.35em" : undefined}
          textAnchor="start"
          fill="var(--color-suave)"
          style={{ fontSize: 13 }}
        >
          Final de trayecto
        </text>
      </motion.a>
    </svg>
  );
}

export default function Plano() {
  const [visto, setVisto] = useState<number | null>(null);
  const p = visto === null ? null : proyectos[visto];
  const u = visto === null ? 0 : ESCRITORIO.posiciones[visto];
  const [x, y] = ESCRITORIO.punto(u, 0);

  return (
    <div className="relative">
      <div className="hidden md:block">
        <PlanoSvg m={ESCRITORIO} alVer={setVisto} />
      </div>
      <div className="mx-auto max-w-sm md:hidden">
        <PlanoSvg m={MOVIL} alVer={() => {}} />
      </div>

      {/* Vista previa de la portada al pasar por una estación (solo escritorio) */}
      {p?.imagen && (
        <motion.div
          key={p.slug}
          className="pointer-events-none absolute z-10 hidden w-64 -translate-x-1/2 overflow-hidden rounded-xl bg-rotulo shadow-[0_18px_40px_-12px_rgb(0_0_0/0.9)] ring-1 ring-white/15 md:block"
          style={{
            left: `${(x / ESCRITORIO.ancho) * 100}%`,
            ...(visto! % 2 === 0
              ? { top: `${((y + 34) / ESCRITORIO.alto) * 100}%` }
              : { bottom: `${((ESCRITORIO.alto - y + 34) / ESCRITORIO.alto) * 100}%` }),
          }}
          initial={{ opacity: 0, y: visto! % 2 === 0 ? -8 : 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.imagen} alt="" className="aspect-video w-full object-cover object-top" />
          <p className="px-3 py-2 text-sm text-white">
            <span className="rotulo-medio">{p.titulo}</span>
            <span className="text-rotulo-suave"> · {p.estadoCorto}</span>
          </p>
        </motion.div>
      )}
    </div>
  );
}
