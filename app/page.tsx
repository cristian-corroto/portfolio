import Cabecera from "@/components/Cabecera";
import Portada from "@/components/Portada";
import SobreMi from "@/components/SobreMi";
import Proyectos from "@/components/Proyectos";
import ComoTrabajo from "@/components/ComoTrabajo";
import Trayectoria from "@/components/Trayectoria";
import Aptitudes from "@/components/Aptitudes";
import Contacto from "@/components/Contacto";
import Pie from "@/components/Pie";

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
        <Aptitudes />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
