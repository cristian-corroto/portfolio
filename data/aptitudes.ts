export type GrupoAptitudes = {
  titulo: string;
  nota?: string;
  // Color de línea con el que se rotula el grupo.
  linea: "yo" | "ia" | "formacion" | "experiencia" | "tinta";
  items: string[];
};

export const destacadas = ["Java", "Desarrollo web", "Desarrollo asistido por IA"];

export const grupos: GrupoAptitudes[] = [
  {
    titulo: "Programación y datos",
    nota: "Por formación",
    linea: "formacion",
    items: ["Java", "Programación orientada a objetos", "SQL", "Bases de datos", "HTML", "CSS", "XML"],
  },
  {
    titulo: "Desarrollo web y móvil",
    nota: "En proyectos, con apoyo de IA",
    linea: "ia",
    items: [
      "Desarrollo web",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Desarrollo de aplicaciones Android",
      "Kotlin",
      "Python",
      "FastAPI",
    ],
  },
  {
    titulo: "Forma de trabajar",
    nota: "En todos los proyectos",
    linea: "yo",
    items: ["Desarrollo asistido por IA", "Git", "GitHub"],
  },
  {
    titulo: "Sistemas y soporte",
    nota: "Por formación y prácticas",
    linea: "experiencia",
    items: ["Soporte técnico", "Windows", "Instalación y configuración de equipos", "Linux (introductorio)"],
  },
  {
    titulo: "Idiomas",
    linea: "tinta",
    items: ["Español nativo", "Inglés básico (inglés técnico cursado en DAM)"],
  },
];
