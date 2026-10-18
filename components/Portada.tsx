import PalabraRotatoria from "./PalabraRotatoria";

export default function Portada() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <div className="fondo-cuadricula pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="nombre-metal text-[clamp(3rem,11vw,9rem)] font-extrabold px-[0.05em] pb-[0.08em] leading-[0.95] tracking-tighter">
          Cristian Corroto
        </h1>
        <p className="mt-6 text-xl font-semibold sm:text-2xl md:text-3xl">
          Desarrollador junior en{" "}
          <PalabraRotatoria palabras={["Java", "desarrollo web", "IA aplicada"]} />
        </p>
        <p className="mt-4 max-w-xl text-suave">
          Técnico Superior en DAM. Busco prácticas (FCT) o un puesto junior en Madrid, en remoto o híbrido.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#proyectos"
            className="rounded-full bg-texto px-5 py-2.5 text-sm font-medium text-black transition hover:bg-acento"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-borde px-5 py-2.5 text-sm font-medium transition hover:border-acento hover:text-acento"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
