// Anotación a mano alzada sobre una frase: un subrayado ondulado o una caja torcida.
// El dibujo es CSS (stroke-dashoffset), así que la frase se lee aunque no cargue JavaScript.
const FORMAS = {
  // Proporciones parecidas a la frase que marcan, para que el trazo no se deforme.
  subrayado: { viewBox: "0 0 60 12", d: "M2 5 Q 26 11, 58 4" },
  caja: {
    viewBox: "0 0 300 60",
    d: "M8 6 C 90 2, 210 4, 294 7 C 297 22, 296 40, 293 54 C 200 57, 100 56, 5 53 C 3 38, 4 20, 9 4",
  },
};

export default function Trazo({
  children,
  forma,
  color,
  retraso = 0,
}: {
  children: React.ReactNode;
  forma: keyof typeof FORMAS;
  color: string;
  retraso?: number;
}) {
  const f = FORMAS[forma];
  const caja = forma === "caja";
  return (
    <span className={`relative inline-block whitespace-nowrap ${caja ? "px-1.5" : ""}`}>
      {children}
      <svg
        viewBox={f.viewBox}
        preserveAspectRatio="none"
        className={`trazo-mano pointer-events-none absolute ${
          caja ? "-left-1 -top-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)]" : "-bottom-2.5 -left-1 h-3.5 w-[calc(100%+0.5rem)]"
        }`}
        aria-hidden="true"
      >
        <path
          d={f.d}
          pathLength={1}
          fill="none"
          stroke={color}
          strokeWidth={caja ? 2.5 : 3}
          strokeLinecap="round"
          style={{ animationDelay: `${retraso}s` }}
        />
      </svg>
    </span>
  );
}
