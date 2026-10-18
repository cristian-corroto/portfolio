export type GrupoAptitudes = {
  titulo: string;
  nota?: string;
  items: string[];
};

export const destacadas = ["Java", "Desarrollo web", "Desarrollo asistido por IA"];

export const grupos: GrupoAptitudes[] = [
  {
    titulo: "Programación y datos",
    nota: "Por formación",
    items: ["Java", "Programación orientada a objetos", "SQL", "Bases de datos", "HTML", "CSS", "XML"],
  },
  {
    titulo: "Desarrollo web y móvil",
    nota: "En proyectos, con apoyo de IA",
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
    titulo: "IA y herramientas",
    items: ["Desarrollo asistido por IA", "Inteligencia artificial", "Git", "GitHub"],
  },
  {
    titulo: "Sistemas y soporte",
    items: ["Soporte técnico", "Windows", "Instalación y configuración de equipos", "Linux (introductorio)"],
  },
];
