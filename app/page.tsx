import Cabecera from "@/components/Cabecera";
import Portada from "@/components/Portada";
import Proyectos from "@/components/Proyectos";
import ComoTrabajo from "@/components/ComoTrabajo";
import Trayectoria from "@/components/Trayectoria";
import Aptitudes from "@/components/Aptitudes";
import Contacto from "@/components/Contacto";

export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main>
        <Portada />
        <Proyectos />
        <ComoTrabajo />
        <Trayectoria />
        <Aptitudes />
        <Contacto />
      </main>
    </>
  );
}
