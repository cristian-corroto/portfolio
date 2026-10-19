export type Proyecto = {
  slug: string;
  titulo: string;
  tipo: string;
  fecha: string;
  resumen: string;
  imagen?: string;
  icono?: string;
  estado: string;
  estadoCorto: string;
  objetivo: string;
  como: string[];
  estadoDetalle: string[];
  tecnologias: string[];
  ia: string;
  enlaces: { texto: string; href: string }[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "saferouteai",
    titulo: "SafeRouteAI",
    tipo: "App Android + API",
    fecha: "Proyecto final de DAM · jun. 2026",
    resumen:
      "App Android que muestra en un mapa de Madrid el nivel de riesgo de una zona según la hora y el día.",
    imagen: "/proyectos/saferoute-app.webp",
    icono: "/proyectos/saferoute-icono.webp",
    estado: "Funcional · APK descargable",
    estadoCorto: "Funcional",
    objetivo:
      "Mostrar en un mapa de Madrid el nivel de riesgo de una zona (verde, amarillo o rojo) según la hora y el día, con un consejo claro para el usuario.",
    como: [
      "La app está hecha en Kotlin, con Google Maps, GPS y un buscador de direcciones. Un deslizador permite cambiar la hora.",
      "Consulta por HTTP (Retrofit) a un backend en Python con FastAPI, que devuelve el nivel de riesgo, un porcentaje y un consejo.",
      "El backend aplica un modelo Random Forest (scikit-learn) entrenado con 10.000 registros simulados que generé con un script a partir de 6 zonas.",
      "El servidor de demostración está en un plan gratuito, así que la primera consulta puede tardar.",
    ],
    estadoDetalle: [
      "Funciona: la app se instala desde el APK y consulta al servidor.",
      "Datos simulados, no datos delictivos reales: es un proyecto de aprendizaje y no sirve para decisiones de seguridad.",
      "Cubre 6 zonas de referencia; cualquier punto se asigna a la más cercana.",
    ],
    tecnologias: ["Kotlin", "Android", "Google Maps SDK", "Retrofit", "Python", "FastAPI", "scikit-learn"],
    ia: "Apoyo intensivo de IA en casi todas sus partes, sobre todo en el backend en Python, que no estudié en el ciclo.",
    enlaces: [
      { texto: "Código de la app (GitHub)", href: "https://github.com/cristian-corroto/saferoute-ai-android" },
      { texto: "Código del backend (GitHub)", href: "https://github.com/cristian-corroto/saferoute-ai-backend" },
      { texto: "Web y descarga del APK", href: "https://saferouteai-app.netlify.app/" },
    ],
  },
  {
    slug: "web-saferouteai",
    titulo: "Web de SafeRouteAI",
    tipo: "Web sencilla animada",
    fecha: "2026",
    resumen: "Página de presentación de la app, con animaciones y descarga del APK.",
    imagen: "/proyectos/saferoute-web.webp",
    icono: "/proyectos/saferoute-icono.webp",
    estado: "Publicada",
    estadoCorto: "Publicada",
    objetivo:
      "Presentar SafeRouteAI de forma clara y permitir descargar el APK sin pasar por una tienda de aplicaciones.",
    como: [
      "Página de una sola pantalla en HTML, CSS y JavaScript, con secciones que explican cómo funciona la app y qué significan sus tres niveles de alerta.",
      "Animaciones al hacer scroll y un mockup del móvil con la interfaz de la app.",
      "Publicada en Netlify, en un plan gratuito.",
    ],
    estadoDetalle: ["Publicada y accesible desde cualquier dispositivo."],
    tecnologias: ["HTML", "CSS", "JavaScript", "Netlify"],
    ia: "Hecha con apoyo de IA.",
    enlaces: [{ texto: "Ver la web", href: "https://saferouteai-app.netlify.app/" }],
  },
  {
    slug: "jothanph-fotografia",
    titulo: "JothanPh Fotografía",
    tipo: "Web completa",
    fecha: "En desarrollo · 2026",
    resumen:
      "Web de un fotógrafo profesional de Madrid, con área de clientes, sesiones privadas y panel de administración.",
    estado: "En desarrollo · funciona en local",
    estadoCorto: "En desarrollo",
    objetivo:
      "Construir la web de un fotógrafo profesional de Madrid (el negocio de mi hermano) y llevarla a un estado en el que pueda usarse de verdad.",
    como: [
      "Hecha con Next.js (React) y TypeScript, con SQLite (Drizzle) para los datos y NextAuth para el inicio de sesión.",
      "Incluye portfolio de fotos, agenda de sesiones con pedidos de fotos, área de clientes con login, sesiones privadas visibles solo para el cliente con permiso, reseñas y un panel de administración con cobros y estadísticas.",
      "Tiene 449 tests automáticos y está preparada para desplegarse con Docker.",
    ],
    estadoDetalle: [
      "Todas las funcionalidades funcionan en local.",
      "Pendiente: cargar las fotos y los datos reales, y desplegarla en un servidor.",
      "El código es privado.",
    ],
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind", "SQLite", "Drizzle", "NextAuth", "Docker"],
    ia: "Apoyo intensivo de IA: yo defino lo que necesita la web, pruebo las funcionalidades y reviso el resultado.",
    enlaces: [],
  },
];
