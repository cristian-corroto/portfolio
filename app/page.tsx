import Cabecera from "@/components/Cabecera";
import Portada from "@/components/Portada";
import SobreMi from "@/components/SobreMi";
import EnConstruccion from "@/components/EnConstruccion";
import Proyectos from "@/components/Proyectos";
import ComoTrabajo from "@/components/ComoTrabajo";

export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main>
        <Portada />
        <SobreMi />
        <Proyectos />
        <ComoTrabajo />
        <EnConstruccion id="formacion" titulo="Formación y experiencia" />
        <EnConstruccion id="contacto" titulo="Contacto" />
      </main>
    </>
  );
}
