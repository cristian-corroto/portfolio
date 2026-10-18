export type Hito = {
  tipo: "Formación" | "Experiencia" | "Siguiente paso";
  periodo: string;
  titulo: string;
  lugar: string;
  puntos: string[];
};

// De más reciente a más antiguo.
export const trayectoria: Hito[] = [
  {
    tipo: "Siguiente paso",
    periodo: "Ahora",
    titulo: "FCT (prácticas finales de DAM)",
    lugar: "Busco empresa en Madrid o en remoto",
    puntos: [
      "Formación académica superada; la FCT está pendiente.",
      "Puedo empezar en cuanto una empresa me ofrezca plaza.",
    ],
  },
  {
    tipo: "Experiencia",
    periodo: "may. 2025 – jun. 2025",
    titulo: "Prácticas en informática y web",
    lugar: "Despacho de abogados · Madrid",
    puntos: [
      "Desarrollé con HTML y CSS páginas web internas para organizar la información del despacho, como inventarios, con apoyo puntual de IA.",
      "Presenté la información de forma visual para facilitar su consulta.",
    ],
  },
  {
    tipo: "Formación",
    periodo: "2024 – 2026",
    titulo: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    lugar: "IES María Moliner (Segovia, a distancia) · primer curso en el IES Lázaro Cárdenas",
    puntos: [
      "Programación (Java y programación orientada a objetos: clases, herencia, polimorfismo), Bases de datos y Acceso a datos.",
      "Lenguajes de marcas y sistemas de gestión de información (HTML, CSS, XML, XSD) y Desarrollo de interfaces.",
      "Programación multimedia y de dispositivos móviles, Programación de servicios y procesos, Entornos de desarrollo, Sistemas informáticos, Sistemas de gestión empresarial e Inglés profesional para informática.",
      "Proyecto final: SafeRouteAI.",
    ],
  },
  {
    tipo: "Experiencia",
    periodo: "mar. 2023 – jun. 2023",
    titulo: "Prácticas en informática",
    lugar: "Hospital Universitario General de Villalba · Collado Villalba",
    puntos: [
      "Preparé y configuré ordenadores portátiles y de sobremesa para trabajadores del hospital: instalación de sistemas operativos y software.",
      "Optimicé el software de los equipos antes de entregarlos.",
      "Realicé consultas SQL sobre bases de datos del hospital.",
      "Utilicé el sistema de gestión interno del hospital para buscar registros y rellenar formularios.",
    ],
  },
  {
    tipo: "Formación",
    periodo: "2021 – 2023",
    titulo: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
    lugar: "IES Carmen Martín Gaite · Moralzarzal",
    puntos: [
      "Módulos que más me han servido: Sistemas operativos monopuesto, Aplicaciones web, Servicios en red, Seguridad informática, Aplicaciones ofimáticas y Redes locales.",
      "Creé una página web con WordPress en segundo curso.",
    ],
  },
];
