import Cabecera from "@/components/Cabecera";
import Portada from "@/components/Portada";
import SobreMi from "@/components/SobreMi";
import EnConstruccion from "@/components/EnConstruccion";

export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main>
        <Portada />
        <SobreMi />
        <EnConstruccion id="proyectos" titulo="Proyectos" />
        <EnConstruccion id="ia" titulo="Cómo trabajo con IA" />
        <EnConstruccion id="formacion" titulo="Formación y experiencia" />
        <EnConstruccion id="contacto" titulo="Contacto" />
      </main>
    </>
  );
}
