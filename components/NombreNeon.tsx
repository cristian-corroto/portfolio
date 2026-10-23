// El nombre se escribe en dos tiempos: primero se traza el contorno en neón, letra a letra,
// y después el relleno metálico barre de izquierda a derecha. Todo en CSS: funciona sin JavaScript.
export default function NombreNeon({ texto, className }: { texto: string; className?: string }) {
  const letras = [...texto];
  return (
    <h1 className={className}>
      <span className="sr-only">{texto}</span>
      <svg viewBox="-6 -6 932 192" className="nombre-neon block h-auto w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="relleno-nombre" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#e3e7ef" />
            <stop offset="100%" stopColor="#8a93a8" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="150"
          textLength="916"
          lengthAdjust="spacing"
          className="rotulo nombre-trazo"
          fill="none"
          stroke="var(--color-ia)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          style={{ fontSize: 168 }}
        >
          {letras.map((l, i) => (
            <tspan key={i} style={{ animationDelay: `${i * 55}ms` }}>
              {l}
            </tspan>
          ))}
        </text>
        <text
          x="0"
          y="150"
          textLength="916"
          lengthAdjust="spacing"
          className="rotulo nombre-relleno"
          fill="url(#relleno-nombre)"
          style={{ fontSize: 168 }}
        >
          {texto}
        </text>
      </svg>
    </h1>
  );
}
