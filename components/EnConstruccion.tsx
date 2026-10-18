export default function EnConstruccion({ id, titulo }: { id: string; titulo: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-24">
      <p className="font-mono text-sm text-acento">{titulo}</p>
      <div className="mt-4 rounded-tarjeta border border-borde bg-tarjeta p-10 text-suave">
        Sección en construcción.
      </div>
    </section>
  );
}
