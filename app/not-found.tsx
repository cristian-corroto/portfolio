import Link from "next/link";

export default function NoEncontrada() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-acento">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Esta página no existe</h1>
      <p className="mt-4 max-w-md text-suave">
        Puede que la dirección esté mal escrita o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-texto px-5 py-2.5 text-sm font-medium text-black transition hover:bg-acento"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
