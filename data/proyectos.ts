export type Proyecto = {
  slug: string;
  titulo: string;
  tipo: string;
  fecha: string;
  resumen: string;
  imagen?: string;
  // «cartel»: la imagen es una pieza de presentación y ocupa todo el panel.
  // «captura»: la imagen es la web en pantalla y se enmarca dentro del panel.
  encuadre?: "cartel" | "captura";
  pieImagen?: string;
  // Vídeo vertical de presentación (opcional), con su imagen de portada.
  video?: { src: string; poster: string; pie?: string };
  icono?: string;
  estado: string;
  estadoCorto: string;
  // «servicio»: funciona o está publicada. «obras»: en desarrollo.
  marca: "servicio" | "obras";
  objetivo: string;
  como: string[];
  estadoDetalle: string[];
  tecnologias: string[];
  ia: string;
  // La frase que dice qué hizo Cristian; se resalta en la tarjeta y en la ficha.
  yo: string;
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
    imagen: "/proyectos/saferoute-portada.webp",
    encuadre: "cartel",
    pieImagen: "Portada de presentación del proyecto.",
    icono: "/proyectos/saferoute-icono.webp",
    estado: "Funcional · APK descargable",
    estadoCorto: "Funcional",
    marca: "servicio",
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
    yo: "Yo decidí qué tenía que hacer la app, probé cada funcionalidad y la llevé hasta un APK que se instala.",
    enlaces: [
      { texto: "Web y descarga del APK", href: "https://saferouteai-app.netlify.app/" },
      { texto: "Código de la app", href: "https://github.com/cristian-corroto/saferoute-ai-android" },
      { texto: "Código del backend", href: "https://github.com/cristian-corroto/saferoute-ai-backend" },
    ],
  },
  {
    slug: "jothanph-fotografia",
    titulo: "JothanPh Fotografía",
    tipo: "Web completa",
    fecha: "2026",
    resumen:
      "Web de un fotógrafo de Madrid, con área de clientes, sesiones privadas y panel de administración.",
    imagen: "/proyectos/jothanph-portada.webp",
    encuadre: "captura",
    pieImagen: "Página de inicio, funcionando en local.",
    estado: "En desarrollo · funciona en local",
    estadoCorto: "En desarrollo",
    marca: "obras",
    objetivo:
      "Construir la web de un fotógrafo de Madrid (el negocio de mi hermano) y llevarla a un estado en el que pueda usarse de verdad.",
    como: [
      "Hecha con Next.js (React) y TypeScript, con SQLite (Drizzle) para los datos y NextAuth para el inicio de sesión.",
      "Incluye portfolio de fotos, agenda de sesiones con pedidos de fotos, área de clientes con login, sesiones privadas visibles solo para el cliente con permiso, reseñas y un panel de administración con cobros y estadísticas.",
      "Tiene más de 450 tests automáticos y está preparada para desplegarse con Docker.",
    ],
    estadoDetalle: [
      "Todas las funcionalidades funcionan en local.",
      "Pendiente: cargar las fotos y los datos reales, y desplegarla en un servidor.",
      "El código es privado.",
    ],
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind", "SQLite", "Drizzle", "NextAuth", "Docker"],
    ia: "Apoyo intensivo de IA en el código.",
    yo: "Yo defino lo que necesita la web, pruebo cada funcionalidad y reviso el resultado.",
    enlaces: [],
  },
  {
    slug: "redline-26",
    titulo: "REDLINE/26",
    tipo: "Web animada",
    fecha: "2026",
    resumen:
      "Web sobre el Mundial de MotoGP 2026, con animaciones al hacer scroll, efectos 3D y los datos de la temporada.",
    imagen: "/proyectos/redline-portada.webp",
    encuadre: "captura",
    pieImagen: "Página de inicio.",
    estado: "En desarrollo · publicada, se actualiza tras cada GP",
    estadoCorto: "En desarrollo",
    marca: "obras",
    objetivo:
      "Hacer una web del Mundial de MotoGP 2026 que se vea como una retransmisión: calendario, resultados y clasificación de MotoGP, Moto2 y Moto3.",
    como: [
      "Web estática en HTML, CSS y JavaScript, sin compilar, con cinco páginas: inicio, calendario, resultados, clasificación y circuitos.",
      "Animaciones con GSAP y ScrollTrigger, desplazamiento suave con Lenis y efectos 3D con Three.js (WebGL).",
      "Los datos de la temporada están en un solo archivo; a partir de ellos se calculan solas las estadísticas: victorias por piloto y por fábrica, quién puede ser campeón todavía y los kilómetros de viaje entre circuitos.",
      "La página de circuitos dibuja la ruta del Mundial en un mapa SVG hecho a mano, con una ampliación de Europa.",
    ],
    estadoDetalle: [
      "Publicada en Netlify, con las cinco páginas funcionando en ordenador y en móvil.",
      "Sigue en desarrollo: los datos se actualizan a mano después de cada carrera hasta el final de la temporada, y la web irá cambiando según evolucione el campeonato.",
      "Sin logos, fotos ni marcas oficiales: el trazado de la portada es una ilustración.",
    ],
    tecnologias: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "Lenis", "Three.js", "SVG"],
    ia: "Apoyo intensivo de IA en el código, en las animaciones y en la búsqueda de datos de la temporada.",
    yo: "Yo planteé la idea: que la web se sintiera como una retransmisión de televisión. Elegí el estilo y las animaciones, revisé cada pantalla y pedí cambios hasta que la portada estuvo a la altura; después llevé ese mismo estilo al resto de páginas.",
    enlaces: [{ texto: "Ver la web", href: "https://redline-26.netlify.app/" }],
  },
  {
    slug: "web-saferouteai",
    titulo: "Web de SafeRouteAI",
    tipo: "Web de presentación",
    fecha: "2026",
    resumen: "Página de presentación de la app, con animaciones y descarga del APK.",
    imagen: "/proyectos/saferoute-web.webp",
    encuadre: "captura",
    icono: "/proyectos/saferoute-icono.webp",
    estado: "Publicada",
    estadoCorto: "Publicada",
    marca: "servicio",
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
    yo: "Yo decidí qué contar y revisé que cada dato fuera cierto: sin «tiempo real» ni cifras infladas.",
    enlaces: [{ texto: "Ver la web", href: "https://saferouteai-app.netlify.app/" }],
  },
  {
    slug: "tigeros",
    titulo: "TigerOS",
    tipo: "App de escritorio para Windows",
    fecha: "2026",
    resumen:
      "Aplicación para optimizar Windows 10 y 11 con tres niveles, que apunta cada cambio y mide el rendimiento antes y después.",
    imagen: "/proyectos/tigeros-portada.webp",
    encuadre: "captura",
    pieImagen: "Página Optimizar con el nivel Extremo: cada ajuste dice qué toca y qué se pierde.",
    video: {
      src: "/proyectos/tigeros-short.mp4",
      poster: "/proyectos/tigeros-short-poster.webp",
      pie: "La app en menos de un minuto: niveles, qué toca cada ajuste, medición e historial. Voz generada.",
    },
    estado: "Terminada · en pruebas con más usuarios",
    estadoCorto: "Terminada",
    marca: "servicio",
    objetivo:
      "Bajar procesos y carga de CPU en Windows para rendir más en juegos, sabiendo en todo momento qué se ha cambiado y pudiendo deshacerlo.",
    como: [
      "Aplicación de escritorio en C# con .NET y WPF, distribuida como un único ejecutable portable.",
      "Tres niveles: Básico, Avanzado y Extremo (pensado para jugar). Antes de aplicar, cada ajuste explica qué toca, qué se pierde y si pide reinicio.",
      "Antes de cambiar nada guarda el estado anterior, comprueba cada cambio y lo apunta en un historial desde el que se deshace; lo que no tiene vuelta atrás lo avisa antes de aplicar.",
      "Mide el rendimiento antes y después en el propio PC en lugar de prometer cifras, y tiene más de 700 pruebas automáticas.",
    ],
    estadoDetalle: [
      "Terminada y funcionando en mi PC; ahora la están probando más usuarios.",
      "Todavía no hay mediciones de FPS en juegos, así que no doy cifras de mejora.",
      "Sin descarga pública por ahora.",
    ],
    tecnologias: ["C#", ".NET", "WPF", "Windows"],
    ia: "Apoyo intensivo de IA en el código y en la investigación de cada ajuste de Windows.",
    yo: "Yo decidí qué tenía que hacer y cómo controlar cada cambio, probé cada nivel en mi PC y pedí cambios hasta que nunca quedara duda de qué había tocado la app.",
    enlaces: [],
  },
];
