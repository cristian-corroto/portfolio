// Flecha de «enlace externo», dibujada con el mismo trazo que el resto de iconos.
export default function Flecha({ tam = 14 }: { tam?: number }) {
  return (
    <svg width={tam} height={tam} viewBox="0 0 14 14" aria-hidden="true">
      <path d="M4 10 10 4M5 3.5h5.5V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
