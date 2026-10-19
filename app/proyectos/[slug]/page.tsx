import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Cabecera from "@/components/Cabecera";
import { proyectos } from "@/data/proyectos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = proyectos.find((x) => x.slug === slug);
  return p ? { title: `${p.titulo} · Cristian Corroto`, description: p.resumen } : {};
}

export default async function PaginaProyecto({ params }: Props) {
  const { slug } = await params;
  const p = proyectos.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <Cabecera />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-28">
        <Link href="/#proyectos" className="text-sm text-suave transition hover:text-acento">
          ← Volver a proyectos
        </Link>

        <p className="mt-8 font-mono text-sm text-acento">{p.tipo}</p>
        <div className="mt-2 flex items-center gap-4">
          {p.icono && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.icono} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl bg-white object-contain" />
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{p.titulo}</h1>
        </div>
        <p className="mt-3 text-suave">{p.fecha}</p>

        {p.imagen && (
          <div
            className={`mt-8 overflow-hidden rounded-tarjeta border border-borde ${
              p.imagen.includes("-app") ? "mx-auto max-w-md" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.imagen} alt={`Captura de ${p.titulo}`} className="w-full" decoding="async" />
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-tarjeta border border-borde bg-tarjeta p-5">
            <p className="font-mono text-xs text-acento">Estado</p>
            <p className="mt-2 font-semibold">{p.estado}</p>
          </div>
          <div className="rounded-tarjeta border border-borde bg-tarjeta p-5">
            <p className="font-mono text-xs text-acento">Tecnologías</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tecnologias.map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Objetivo</h2>
          <p className="mt-3 text-suave">{p.objetivo}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Cómo lo hice</h2>
          <ul className="mt-3 space-y-3 text-suave">
            {p.como.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acento" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-tarjeta border border-acento/30 bg-acento/5 p-5">
          <h2 className="text-lg font-semibold text-acento">Qué hizo la IA y qué hice yo</h2>
          <p className="mt-2 text-suave">{p.ia}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Estado y límites</h2>
          <ul className="mt-3 space-y-3 text-suave">
            {p.estadoDetalle.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {p.enlaces.length > 0 && (
          <section className="mt-10 flex flex-wrap gap-3">
            {p.enlaces.map((e) => (
              <a
                key={e.href}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-borde px-5 py-2.5 text-sm font-medium transition hover:border-acento hover:text-acento"
              >
                {e.texto} ↗
              </a>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
