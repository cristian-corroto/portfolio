import Link from "next/link";

export default function NoEncontrada() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-12">
      <div className="flex items-center gap-4" aria-hidden="true">
        <span className="h-2.5 w-24 rounded-full bg-yo" />
        <span className="h-10 w-5 rounded-full border-[3px] border-dashed border-tinta bg-plano" />
        <span className="h-2.5 w-24 rounded-full bg-ia" />
      </div>
      <h1 className="rotulo mt-8 text-[clamp(3rem,10vw,6rem)]">Esta estación no existe</h1>
      <p className="mt-5 max-w-md text-lg text-suave">
        Puede que la dirección esté mal escrita o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-tinta px-6 text-sm font-semibold text-plano transition-colors hover:bg-ia"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
