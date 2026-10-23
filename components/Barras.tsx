// Las dos líneas en pequeño bajo un título de sección, encendidas en neón.
export default function Barras() {
  return (
    <div className="mt-5 flex gap-1.5" aria-hidden="true">
      <span className="neon-yo h-1.5 w-14 rounded-full bg-yo" />
      <span className="neon-ia h-1.5 w-8 rounded-full bg-ia" />
    </div>
  );
}
