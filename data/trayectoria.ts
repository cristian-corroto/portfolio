export type Hito = {
  tipo: "Formación" | "Experiencia";
  periodo: string;
  titulo: string;
  lugar: string;
  puntos: string[];
  // Detalle plegado (por ejemplo, la lista de asignaturas).
  detalle?: { titulo: string; items: string[] };
};

// De más reciente a más antiguo.
export const trayectoria: Hito[] = [
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
      "Formación académica superada.",
      "Lo más importante: Java y programación orientada a objetos (clases, herencia, polimorfismo), bases de datos y acceso a datos.",
      "Proyecto final: SafeRouteAI.",
    ],
    detalle: {
      titulo: "Ver todas las asignaturas",
      items: [
        "Programación",
        "Bases de datos",
        "Acceso a datos",
        "Lenguajes de marcas (HTML, CSS, XML, XSD)",
        "Desarrollo de interfaces",
        "Programación multimedia y de dispositivos móviles",
        "Programación de servicios y procesos",
        "Entornos de desarrollo",
        "Sistemas informáticos",
        "Sistemas de gestión empresarial",
        "Inglés profesional para informática",
      ],
    },
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
