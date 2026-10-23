import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Cabecera from "@/components/Cabecera";
import Contacto from "@/components/Contacto";
import Flecha from "@/components/Flecha";
import Encendido from "@/components/Encendido";
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

function Lista({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="mt-4 space-y-3 text-suave">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className={`mt-[0.6em] h-1.5 w-3 shrink-0 rounded-full ${color}`} aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PaginaProyecto({ params }: Props) {
  const { slug } = await params;
  const i = proyectos.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = proyectos[i];
  const siguiente = proyectos[(i + 1) % proyectos.length];

  return (
    <>
      <Cabecera />
      <main className="px-4 pb-24 pt-28 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#proyectos"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-suave transition-colors hover:text-tinta"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13 8H3M7.5 3.5 3 8l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver a los proyectos
          </Link>

          {/* Rótulo de la estación */}
          <Encendido className="mt-6 rounded-2xl bg-rotulo p-6 text-white sm:p-8">
            <div className="flex items-center gap-5">
              {p.icono && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.icono} alt="" width={64} height={64} className="h-14 w-14 rounded-2xl bg-white object-contain sm:h-16 sm:w-16" />
              )}
              <h1 className="rotulo text-[clamp(2.8rem,8vw,5.5rem)]">{p.titulo}</h1>
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-rotulo-suave">
              <span className="versalitas text-xs text-[#8fd3ff]">{p.tipo}</span>
              <span>{p.fecha}</span>
              <span className="inline-flex items-center gap-2">
                <span
                  className={`h-3 w-5 rounded-full border-2 border-white ${p.marca === "obras" ? "border-dashed" : "bg-white"}`}
                  aria-hidden="true"
                />
                {p.estado}
              </span>
            </p>
          </Encendido>

          {p.enlaces.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {p.enlaces.map((e, k) => (
                <a
                  key={e.href + e.texto}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors duration-200 ${
                    k === 0 ? "bg-yo text-black shadow-[0_0_24px_rgb(255_61_74/0.45)] hover:brightness-110" : "border-2 border-tinta hover:bg-tinta hover:text-plano"
                  }`}
                >
                  {e.texto} <Flecha />
                </a>
              ))}
            </div>
          )}

          {p.imagen && (
            <figure className="mt-10">
              <div className="relative overflow-hidden rounded-[22px] bg-anden p-4 sm:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imagen} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl saturate-150" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imagen}
                  alt={p.encuadre === "cartel" ? `Portada de ${p.titulo}` : `Captura de ${p.titulo}`}
                  className="relative w-full rounded-xl shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/15"
                  decoding="async"
                />
              </div>
              {p.pieImagen && <figcaption className="mt-3 text-sm text-suave">{p.pieImagen}</figcaption>}
            </figure>
          )}

          {/* Las dos líneas: qué hice yo y qué hizo la IA */}
          <section className="mt-14" aria-labelledby="quien">
            <h2 id="quien" className="rotulo text-4xl sm:text-5xl">
              Qué hice yo y qué hizo la IA
            </h2>
            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-hilo md:grid-cols-2">
              <div className="bg-plano-2 p-6">
                <p className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-yo text-sm font-bold text-black">Yo</span>
                  <span className="h-2 flex-1 rounded-full bg-yo" aria-hidden="true" />
                </p>
                <p className="mt-4 text-lg font-semibold leading-snug">{p.yo}</p>
              </div>
              <div className="bg-plano-2 p-6">
                <p className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ia text-sm font-bold text-black">IA</span>
                  <span className="h-2 flex-1 rounded-full bg-ia" aria-hidden="true" />
                </p>
                <p className="mt-4 text-lg leading-snug text-suave">{p.ia}</p>
              </div>
            </div>
          </section>

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_18rem]">
            <div>
              <section>
                <h2 className="rotulo-medio text-3xl">Objetivo</h2>
                <p className="mt-4 max-w-[65ch] text-suave">{p.objetivo}</p>
              </section>
              <section className="mt-12">
                <h2 className="rotulo-medio text-3xl">Cómo lo hice</h2>
                <Lista items={p.como} color="bg-tinta" />
              </section>
              <section className="mt-12">
                <h2 className="rotulo-medio text-3xl">Estado y límites</h2>
                <Lista items={p.estadoDetalle} color="bg-suave" />
              </section>
            </div>

            <aside className="md:pt-2">
              <h2 className="versalitas text-xs text-suave">Tecnologías</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tecnologias.map((t) => (
                  <li key={t} className="rounded-full bg-plano-2 px-3 py-1.5 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {/* Siguiente estación */}
          {siguiente.slug !== p.slug && (
            <Link
              href={`/proyectos/${siguiente.slug}/`}
              className="group mt-20 flex items-center justify-between gap-6 border-y-2 border-tinta py-8"
            >
              <span>
                <span className="rotulo block text-[clamp(2.4rem,6vw,4.5rem)] transition-colors group-hover:text-yo">
                  {siguiente.titulo}
                </span>
                <span className="mt-2 block text-suave">Siguiente estación · {siguiente.tipo}</span>
              </span>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-tinta text-plano transition-transform duration-300 group-hover:translate-x-1.5">
                <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </main>
      <Contacto />
    </>
  );
}
