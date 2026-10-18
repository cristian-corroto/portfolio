import Cabecera from "@/components/Cabecera";
import Portada from "@/components/Portada";
import SobreMi from "@/components/SobreMi";
import EnConstruccion from "@/components/EnConstruccion";
import Proyectos from "@/components/Proyectos";
import ComoTrabajo from "@/components/ComoTrabajo";
import Trayectoria from "@/components/Trayectoria";

export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main>
        <Portada />
        <SobreMi />
        <Proyectos />
        <ComoTrabajo />
        <Trayectoria />
        <EnConstruccion id="contacto" titulo="Contacto" />
      </main>
    </>
  );
}
