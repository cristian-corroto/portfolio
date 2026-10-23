---
name: Cristian Corroto · Portfolio
description: Un plano de metro de Madrid, de noche y en neón, donde la línea Yo y la línea IA se cruzan en cada proyecto.
colors:
  plano: "#07080c"
  plano-2: "#12151e"
  tinta: "#eef1f7"
  suave: "#9aa3b8"
  hilo: "rgb(255 255 255 / 0.1)"
  yo: "#ff3d4a"
  ia: "#2ab3ff"
  formacion: "#ffd23f"
  experiencia: "#3ddc84"
  rotulo: "#0d1734"
  rotulo-suave: "#b9c4e6"
  anden: "#030407"
  anden-texto: "#e9ecf4"
  anden-suave: "#a3aac0"
  ia-rotulo: "#8fd3ff"
  texto-neon: "#000000"
  blanco: "#ffffff"
  metal-medio: "#e3e7ef"
  metal-bajo: "#8a93a8"
  boton-claro-base: "#b8bfcc"
  fondo-cartel: "#05070d"
  carril: "#2a2f3d"
  velo-cristal: "rgb(0 0 0 / 0.45)"
  borde-cristal: "rgb(255 255 255 / 0.15)"
typography:
  nombre:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "168px"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.6rem, 11vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  subtitle:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.6vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "'tnum' 1"
  body-lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.556
    letterSpacing: "normal"
    fontFeature: "'tnum' 1"
  chip:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 90"
  label-sm:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 90"
  label-xs:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 90"
rounded:
  sm: "6px"
  pastilla: "8px"
  md: "12px"
  lg: "16px"
  cartel: "22px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  seccion: "96px"
  seccion-md: "128px"
  portada-arriba: "112px"
  portada-arriba-md: "144px"
  contenedor: "72rem"
  contenedor-ficha: "64rem"
  cabecera: "64px"
  desfase-paso: "48px"
  cuadricula: "56px"
  cuadricula-esquina: "28px"
components:
  boton-claro:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.texto-neon}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "48px"
  boton-cristal:
    backgroundColor: "rgb(0 0 0 / 0.4)"
    textColor: "{colors.tinta}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "48px"
  boton-correo:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.texto-neon}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "56px"
  boton-contorno:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "56px"
  boton-contorno-tinta:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  boton-contorno-tinta-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.plano}"
  boton-yo:
    backgroundColor: "{colors.yo}"
    textColor: "{colors.texto-neon}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "48px"
  pastilla-neon:
    backgroundColor: "{colors.ia}"
    textColor: "{colors.texto-neon}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.pastilla}"
    padding: "2px 12px"
  ficha-tecnologia:
    backgroundColor: "{colors.plano-2}"
    textColor: "{colors.tinta}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  ficha-tecnologia-destacada:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.plano}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  panel-cristal:
    backgroundColor: "{colors.velo-cristal}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.lg}"
    padding: "24px"
  tarjeta-paso:
    backgroundColor: "{colors.plano}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.lg}"
    padding: "24px"
  rotulo-estacion:
    backgroundColor: "{colors.rotulo}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.lg}"
    padding: "32px"
  cartel:
    backgroundColor: "{colors.fondo-cartel}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.cartel}"
---

# Design System: Cristian Corroto · Portfolio

## Overview

**Creative North Star: "El plano de noche"**

La web es un plano de metro de Madrid visto de noche: un papel carbono casi negro con su cuadrícula de delineante, y encima dos líneas encendidas como tubos de neón. La línea Yo, en rojo, y la línea IA, en azul, recorren la página de principio a fin; cada proyecto es una estación de correspondencia donde las dos se cruzan, y cada sección es una parada. La gramática sigue siendo la de la señalización de transporte: trazos gruesos con extremos redondos que giran solo a 45°, estaciones en cápsula, rótulos con letra condensada, cifras tabulares y una leyenda que explica cada signo. Lo nuevo es la luz: las líneas brillan, el resto del plano queda en penumbra.

El recorrido tiene cuatro materiales. El plano carbono para leer, con una cuadrícula que se desvanece hacia los bordes y dos luces de color que derivan despacio detrás; el andén, aún más negro, donde los proyectos cuelgan como carteles retroiluminados por su propia imagen y rotulados con paneles de cristal negro; los paneles y fichas en carbono claro (plano-2); y el azul rótulo para los letreros de estación. La densidad es baja y el ritmo vertical amplio: titulares enormes y estrechos, texto a ancho normal, mucho aire entre secciones. La portada va centrada: el nombre trazado en neón y relleno de metal, una frase con una pastilla de neón que cambia de palabra, y el plano debajo.

El movimiento es el de un plano que se enciende: el contorno del nombre se traza letra a letra y el metal lo barre después, las líneas se dibujan una vez, las estaciones se fijan con un golpe, las anotaciones a mano se trazan sobre la frase. Solo cuatro cosas se mueven en bucle, y todas son luz: las dos luces de fondo, el anillo del paso activo, la palabra de la pastilla y la luz del borde de un cartel en hover. Con movimiento reducido todo aparece ya dibujado y quieto. El sistema actual sustituye por decisión del dueño al anterior en papel claro («colores más negros, carbono, rollo neón»).

**Key Characteristics:**
- Fondo carbono (#07080c) con cuadrícula de plano desvanecida y dos luces de color que derivan.
- Dos colores de línea con significado fijo (rojo Yo, azul IA) y dos secundarios (amarillo Formación, verde Experiencia), todos en neón y con halo.
- Una sola familia, Archivo de anchura variable: condensada para nombres, normal para el texto.
- Trazos de 8–10 px con extremos redondos, giros a 45°, estaciones en cápsula.
- Estado indicado con un signo (cápsula llena o discontinua), nunca solo con color.
- Texto negro sobre cualquier relleno neón o claro.
- El nombre de la portada es la única pieza con contorno trazado y relleno metálico.
- Animaciones de una sola vez; los únicos bucles son de luz, y todos se detienen con movimiento reducido.

## Colors

Paleta de señal nocturna: un carbono azulado casi negro, tinta casi blanca, velos de blanco translúcido para todos los bordes y cuatro colores de línea saturados que brillan y siempre significan lo mismo.

### Primary
- **Rojo neón Yo** (yo): la línea de lo que hace Cristian. Trazo de la línea Yo en el plano y en contacto, roundel «Yo», tren del plano y de la cabecera, relleno de la vía de la cabecera, barra larga bajo cada título de sección, luz de fondo de la izquierda de la portada, caja a mano alzada alrededor de «qué hizo ella y qué hice yo», raya de «Ver proyecto», primer enlace externo de una ficha. Sobre el carbono tiene 5,7:1, así que puede escribir texto («Paso 1 · Vía Yo»).
- **Azul neón IA** (ia): la línea de lo que hace la IA. Trazo de la línea IA, roundel «IA», barra corta bajo cada título, luz de fondo de arriba a la derecha, contorno trazado del nombre de la portada, subrayado a mano bajo «con IA», pastilla de la palabra rotatoria. Es también el color de la mano del sistema: anillo de foco, selección de texto, cursor de escritura y `accent-color` de los controles nativos.

### Secondary
- **Amarillo neón Formación** (formacion): línea de estudios en Trayectoria y grupos de Aptitudes. Sobre el carbono escribe con 13,9:1, así que el periodo de cada hito va en este color.
- **Verde neón Experiencia** (experiencia): línea de prácticas y trabajos; mismo uso que el amarillo (11,2:1 sobre el plano).

### Tertiary
- **Azul rótulo** (rotulo): marino profundo de los letreros de estación. Letrero «Proyectos» del andén, cabecera de la ficha de proyecto, panel de vista previa del plano. Sobre el carbono casi no se separa del suelo (1,13:1), por eso solo se usa como panel que lleva contenido, nunca como botón.
- **Lavanda de rótulo** (rotulo-suave): texto secundario sobre rótulo y dentro de los paneles de cristal de los carteles.
- **Cian de rótulo** (ia-rotulo): el tipo de proyecto en versalitas dentro de un panel («Web animada», «App Android»). Es el azul IA aclarado. Hoy es un valor literal en el código, sin token en `@theme`.

### Neutral
- **Carbono de plano** (plano): fondo de toda la página, color del tema del navegador (`themeColor`, `colorScheme: dark`), relleno de las estaciones «en obras» y de los anillos.
- **Carbono claro** (plano-2): fondo de fichas de tecnología, paneles Yo/IA de la ficha.
- **Tinta** (tinta): texto principal, estaciones en servicio, topes, trayecto de «Cómo trabajo», contornos de botón, aptitudes destacadas.
- **Tinta suave** (suave): texto secundario y párrafos largos (7,9:1 sobre el plano).
- **Hilo** (hilo): blanco al 10 %. Divisorias, borde de la cabecera y de las tarjetas, vías sin recorrer, estaciones aún no alcanzadas, anillo de los carteles.
- **Andén** (anden), **Texto de andén** (anden-texto), **Andén suave** (anden-suave): el suelo más negro de la sección de proyectos y sus dos tonos de texto.
- **Fondo de cartel** (fondo-cartel): el negro de cada cartel antes de que cargue su imagen.
- **Negro de neón** (texto-neon): texto sobre la pastilla azul, sobre la selección, sobre el botón claro y sobre el botón de correo.
- **Blanco** (blanco), **Metal medio** (metal-medio), **Metal bajo** (metal-bajo): las tres paradas del degradado metálico del nombre (0 %, 55 %, 100 %, de arriba abajo). El blanco también es el tope de contacto, el borde de los trenes y el texto de los paneles.
- **Base del botón claro** (boton-claro-base): el final del degradado vertical del botón «Ver proyectos».
- **Carril** (carril): pulgar de la barra de desplazamiento sobre el plano.
- **Velo de cristal** (velo-cristal) y **Borde de cristal** (borde-cristal): negro al 45 % y blanco al 15 % de los paneles de cristal.

Los bordes y velos son una escala de blanco translúcido: 4 % (degradado de las tarjetas de paso), 5 % (líneas de la cuadrícula, fondo del icono y del botón Menú), 6 % (cuadrícula de esquina, icono grande de fondo), 10 % (hilo), 15 % (cristal), 20 % (anillo de las capturas, borde del botón de cristal), 25 % (tarjeta en hover), 40 % (contorno en contacto) y 50–100 % (contornos en hover).

### Named Rules
**The Two Lines Rule.** Rojo es Yo y azul es IA en todo el sitio. No se intercambian ni se usan como decoración suelta; donde aparecen juntos (franja del andén, luces de fondo, luz del borde de un cartel, barras de sección, líneas de contacto) representan las dos líneas.

**The Black On Neon Rule.** El texto sobre un relleno neón o claro va en negro (#000). El blanco no pasa contraste sobre ellos (2,3:1 sobre azul IA, 3,5:1 sobre rojo Yo); el negro sí (9:1 y 6:1).

**The Carbon Grounds Rule.** Solo hay cuatro suelos: plano carbono para leer, andén para los proyectos, carbono claro para paneles y fichas, azul rótulo para letreros. No se añaden fondos de sección intermedios.

## Typography

**Display Font:** Archivo (anchura variable, eje `wdth`), con ui-sans-serif, system-ui
**Body Font:** Archivo, con ui-sans-serif, system-ui
**Label Font:** Archivo en versalitas

**Character:** Una sola familia que cambia de anchura según el papel, como la señalética de un metro: estrecha y negra en los rótulos de estación, normal y tranquila en el texto. Todas las cifras son tabulares.

### Hierarchy
- **Nombre** (rótulo: 800, anchura 68 %, 168 unidades en un SVG de 932 de ancho que escala hasta 56rem): solo «Cristian Corroto» en la portada, repartido a lo ancho con `textLength`.
- **Display** (rótulo: 800, anchura 68 %, clamp(3.6rem, 11vw, 6rem), interlineado 0,92): «¿Hablamos?» y, a clamp(3rem, 10vw, 6rem), «Esta estación no existe».
- **Headline** (rótulo: 800, anchura 68 %, clamp(2.8rem, 7vw, 5.5rem), interlineado 0,92): títulos de sección y de ficha. La misma voz baja a clamp(2.4rem, 6vw, 4rem) en el letrero «Proyectos», a clamp(1.9rem, 3.2vw, 2.6rem) en los títulos de cartel y a 2.25rem en los pasos de «Cómo trabajo» y el menú móvil.
- **Subtitle** (rótulo medio: 700, anchura 80 %, clamp(1.5rem, 3.6vw, 2.4rem)): la frase «Desarrollo …» de la portada, con la pastilla de neón dentro.
- **Title** (rótulo medio: 700, anchura 80 %, 1.5–1.875rem, interlineado ajustado): subtítulos dentro de sección (hitos, grupos de Aptitudes, columnas de «Cómo trabajo», apartados de la ficha), nombres de estación en el plano (22 px, 19 px en móvil) y el nombre en la cabecera (1.125rem).
- **Body** (400, 1rem, 1,5): texto corriente en tinta suave, limitado a 52–65ch. La entradilla de sección sube a 1.125rem; la de la portada a 1.25rem desde sm, centrada y limitada a 40rem. Las frases que dicen qué hizo Cristian van en 600 y en tinta. Los textos de apoyo de tarjeta y panel bajan a 0.875rem.
- **Chip** (400, 0.95rem; 600 si está destacada): fichas de Aptitudes. Las fichas de tecnología de la ficha de proyecto van a 0.875rem.
- **Label** (versalitas: 600, anchura 90 %, mayúsculas, espaciado 0,14em): 12 px para «Tecnologías», «Vía Yo / Vía IA», «Ver proyecto» y el tipo dentro del rótulo de la ficha; 11 px para el tipo dentro del panel de cristal de un cartel; 10 px para «Próxima estación» en la cabecera.

### Named Rules
**The One Family Rule.** Solo Archivo. La jerarquía se construye con el eje de anchura (68 / 80 / 90 / 100 %) y el peso, nunca con una segunda familia.

**The Station Sign Rule.** La anchura del 68 % con peso 800 es para nombres: personas, proyectos, estaciones y secciones. Las frases y párrafos van siempre a anchura normal.

**The Panel Label Rule.** Las versalitas son datos de un panel (estado, tipo, vía). No se colocan como antetítulo encima de un titular.

**The Metal Name Rule.** El contorno trazado en azul IA y el relleno metálico (degradado vertical blanco → metal-medio → metal-bajo) son una excepción pedida por el dueño y exclusiva del nombre de la portada. Ningún otro titular lleva contorno, degradado ni relleno metálico.

## Layout

Una columna centrada de 72rem (contenedor) con márgenes laterales de 16 px que pasan a 24 px desde sm. Las fichas de proyecto se estrechan a 64rem. Las secciones respiran con 96 px arriba y abajo, 128 px desde md, y se separan con una línea de hilo o con un cambio de suelo. La cabecera mide 64 px, es fija y translúcida (plano al 75 % con desenfoque de 24 px), y cada sección con ancla deja 5rem de margen al desplazarse.

La portada va centrada: arranca a 112 px (144 px desde md), apila nombre, subtítulo y entradilla en el eje, y debajo el plano a todo el ancho del contenedor; las dos acciones y la leyenda (dos columnas desde sm) van centradas bajo el plano. Detrás, la cuadrícula de 56 px se desvanece con una elipse centrada arriba, y dos luces de 28–30rem se salen por los lados. Desde md el plano corre en horizontal; en móvil se redibuja en vertical, con las estaciones a la derecha del trazo.

Los proyectos se ordenan en dos columnas desde md, una en móvil. Desde sm cada cartel tiene proporción 16:9 con el panel de cristal flotando sobre la imagen a 20 px de los bordes; en móvil la imagen va arriba y el panel debajo, solapándose 48 px. El resumen del panel se pliega solo en dispositivos con hover; en táctil siempre está visible.

Los pasos de «Cómo trabajo» son cuatro tarjetas en fila desde md, con los pasos pares bajados 48 px para que la fila escalone como el trayecto que salta de vía; en móvil se apilan con su estación en el lateral.

Puntos de corte: sm 640 px, md 768 px (cambio de plano, navegación y fila de pasos), lg 1024 px (aparece el aviso de próxima estación).

### Named Rules
**The 45° Rule.** Las líneas van rectas y giran solo a 45°. No hay curvas libres ni diagonales de otro ángulo. Las anotaciones a mano alzada no son líneas del plano: son la mano que escribe encima.

**The Blueprint Rule.** La cuadrícula es el papel del plano, pedida por el dueño como superficie de delineante. Va a 56 px y desvanecida en la portada y en contacto (al 70 %), y a 28 px en la esquina superior derecha de las tarjetas de paso. No cubre la página entera ni entra en el andén.

## Elevation & Depth

La profundidad viene de la luz, no de la altura. El plano es plano; lo que brilla son las líneas y sus marcas, con un halo doble de su propio color. Las luces de fondo son manchas de color desenfocadas (110 px de desenfoque, 32 % de opacidad). Sobre las imágenes, los paneles son de cristal negro con desenfoque de fondo. Las sombras negras con dispersión negativa quedan para lo que cuelga sobre el andén o flota sobre una imagen.

### Shadow Vocabulary
- **Halo de línea** (`filter: drop-shadow(0 0 6px rgb(255 61 74 / 0.75)) drop-shadow(0 0 18px rgb(255 61 74 / 0.35))`, y lo mismo con `rgb(42 179 255)` para IA): trazos del plano y de contacto, trenes del plano, barras de sección, signos de la leyenda.
- **Halo blanco** (`filter: drop-shadow(0 0 5px rgb(255 255 255 / 0.55))`): trayecto de «Cómo trabajo» y tope de contacto.
- **Aura del nombre** (`filter: drop-shadow(0 0 18px rgb(42 179 255 / 0.18))`): el nombre de la portada.
- **Brillo de pastilla** (`box-shadow: 0 0 28px rgb(42 179 255 / 0.45)`): la pastilla de la palabra rotatoria.
- **Brillo de botón claro** (`box-shadow: 0 0 0 1px rgb(255 255 255 / 0.4), 0 10px 30px -10px rgb(42 179 255 / 0.6)`; el correo usa solo la segunda capa): acciones principales.
- **Brillo Yo** (`box-shadow: 0 0 24px rgb(255 61 74 / 0.45)`): primer enlace externo de la ficha.
- **Estación pasada / tren de cabecera** (`box-shadow: 0 0 10px rgb(255 61 74 / 0.7)` / `0 0 14px rgb(255 61 74 / 0.9)`).
- **Líneas de Trayectoria** (`box-shadow: 0 0 12px rgb(255 210 63 / 0.6)` y `0 0 12px rgb(61 220 132 / 0.6)`).
- **Franja del andén** (`box-shadow: 0 0 24px rgb(255 61 74 / 0.45), 0 0 24px rgb(42 179 255 / 0.45)`).
- **Captura colgada** (`box-shadow: 0 30px 60px -20px rgb(0 0 0 / 0.8)`): capturas sobre el andén, en cartel y en ficha.
- **Panel de cristal** (`box-shadow: 0 20px 40px -16px rgb(0 0 0 / 0.8)`): el panel que flota sobre la imagen del cartel.
- **Letrero de sección** (`box-shadow: 0 10px 30px -12px rgb(0 0 0 / 0.8)`): el letrero «Proyectos».

### Named Rules
**The Neon Halo Rule.** El halo pertenece a las líneas y a sus marcas (trazos, trenes, barras, estación pasada, franja, tope) y a las acciones principales. El texto corrido, las tarjetas y los paneles no brillan.

**The Backlight Rule.** En el andén la luz sale de la imagen: un duplicado desenfocado (40 px, saturación 150 %, opacidad 60 % que sube a 90 % en hover) detrás de cada cartel y figura.

**The Glass Caption Rule.** Lo que se lee encima de una imagen va en cristal negro: velo de cristal, desenfoque de fondo de 40 px y borde de cristal. Solo sobre imágenes; sobre el carbono liso, los paneles son carbono claro o hilo.

## Shapes

Todo lo que es una marca tiene extremos redondos: botones, fichas, segmentos de leyenda (32 × 10 px), barras de sección (56 × 6 y 32 × 6 px), viñetas (12 × 6 px), estaciones y trazos (`strokeLinecap: round`). Las estaciones de correspondencia son cápsulas con borde de tinta de 3,5 px; las paradas de una sola línea son ticks; las paradas de Trayectoria y de los pasos son anillos de carbono con borde de color de 5–6 px. Las superficies usan radios suaves: 22 px para carteles y figuras del andén, 16 px para paneles de cristal, tarjetas de paso, rótulos y paneles, 12 px para la vista previa y el letrero de sección, 8 px para la pastilla de neón (la única marca de esquina casi recta, como un rótulo luminoso), 6 px para el anillo de foco. Los iconos son trazos de 1,8 px dentro de un círculo de 48 px.

### Named Rules
**The Sign Not Color Rule.** El estado de un proyecto se marca con la forma: cápsula llena para «en servicio», cápsula vacía con borde discontinuo para «en obras». El color no basta.

## Components

### Buttons
Píldoras de 48 px de alto como mínimo (56 px en contacto), texto en 600 a 14 px (16 px el correo). El foco es global: anillo azul IA de 2 px separado 3 px.
- **Botón claro (principal):** píldora con relieve, degradado vertical de blanco a base del botón claro, texto negro, 28 px laterales, anillo blanco al 40 % y brillo azul debajo; en hover sube 2 px en 200 ms. «Ver proyectos» lleva una flecha de trazo.
- **Botón de cristal:** negro al 40 % con desenfoque y borde blanco al 20 % que pasa al 50 % en hover. «Escribirme».
- **Correo:** píldora blanca maciza con texto negro y brillo azul; sube 2 px en hover.
- **Contorno claro:** borde de 2 px blanco al 40 % que se completa al 100 % en hover. Copiar correo, GitHub, LinkedIn.
- **Contorno de tinta:** borde de 2 px en tinta; en hover se rellena de tinta con texto carbono. Desplegables de Trayectoria, enlaces secundarios de la ficha, «Cerrar» del menú.
- **Botón Yo:** el primer enlace externo de una ficha (ver la web, descargar la APK). Rojo Yo con brillo Yo; en hover se aclara un 10 %. Su texto sigue The Black On Neon Rule.

### Chips
- **Pastilla de neón:** azul IA, texto negro, 8 px de radio, 2 × 12 px de relleno y brillo azul. Lleva la palabra que rota cada 2,6 s; las letras salen hacia arriba y entran desde abajo girando sobre el eje X (0,28 s cada una, 30 ms entre letras al entrar y 15 ms al salir). Con movimiento reducido se queda en la primera palabra. El lector de pantalla oye todas las palabras de una vez.
- **Fichas de tecnología:** píldoras de carbono claro, texto tinta, 6 × 14 px; en Aptitudes llevan además borde de hilo. Las aptitudes destacadas se invierten: fondo tinta, texto carbono en 600. No son interactivas.

### Cards / Containers
**El cartel de andén** es la pieza de proyecto.
- **Corner Style:** 22 px.
- **Background:** fondo de cartel con la imagen del proyecto desenfocada detrás; la portada o la captura encima, y un degradado a negro al 85 % en la parte baja.
- **Shadow Strategy:** retroiluminación y sombras de andén (ver Elevation & Depth).
- **Border:** anillo de hilo. En hover o foco, una luz recorre el borde con un degradado cónico de rojo Yo a azul IA, girando cada 3,2 s; con movimiento reducido queda fija a 200°.
- **Internal Padding:** el panel de cristal interior (16 px de radio) lleva 20–24 px de relleno. Contiene el título, la marca de estado, la banda de datos (tipo en cian de rótulo a 11 px · año · tres tecnologías, en lavanda de rótulo) y el resumen que se despliega en hover.
- **Entrada:** cada cartel sube 40 px y se enciende desde un brillo del 20 % en 0,9 s, el segundo de cada fila 0,12 s después.
- **Hover:** el cartel crece un 1,5 % en 700 ms, la captura sube 6 px o la portada se amplía un 5 %, el panel sube 4 px y la raya roja de «Ver proyecto» pasa de 32 a 56 px.

**La tarjeta de paso** («Cómo trabajo»): 16 px de radio, borde de hilo que pasa a blanco al 25 % en hover, degradado de blanco al 4 % hacia transparente, 24 px de relleno. Arriba a la derecha, la cuadrícula de esquina. El icono va en un círculo de 48 px de blanco al 5 %; cuando el trayecto llega al paso, un anillo cónico del color de su vía gira a su alrededor cada 2,6 s. En la esquina inferior derecha, el mismo icono a 112 px en blanco al 6 % (10 % en hover). Debajo, el título condensado y «Paso n · Vía …» en el color de la vía.

**Paneles Yo / IA de la ficha:** dos paneles de carbono claro separados por una línea de hilo, cada uno encabezado por su roundel y un trazo de su color. El de Yo lleva el texto en 600 y tinta; el de IA, en tinta suave.

### Navigation
- **Escritorio:** la cabecera es una línea con las seis secciones como estaciones (anillos de 22 px con borde de 3 px). La vía es de hilo y se llena de rojo Yo con el scroll; un tren (cápsula roja con borde carbono y brillo rojo) avanza sobre ella. Las estaciones pasadas tienen el anillo rojo con brillo; la actual lleva su nombre en 600 y tinta. A la derecha, desde lg, el panel «Próxima estación» (versalitas a 10 px) escribe el destino letra a letra.
- **Móvil:** el nombre de la estación actual junto a un botón «Menú» de cristal (blanco al 5 %, borde blanco al 15 %). El menú ocupa toda la pantalla sobre el carbono: se descubre de arriba abajo, dibuja una línea roja vertical y lista las secciones como estaciones con rótulos de 2.25rem. Se cierra con Escape.

### El nombre de neón (componente firma)
Un SVG con el nombre dos veces. Primero el contorno en azul IA (1,6 px) se traza letra a letra, cada una 55 ms después de la anterior y en 1,1 s; a los 1,15 s el relleno metálico barre de izquierda a derecha en 0,9 s. Todo en CSS: funciona sin JavaScript, y el texto real va en un `sr-only` dentro del `h1`.

### Anotación a mano
Un trazo SVG que se dibuja sobre una frase en 0,8 s: subrayado ondulado (3 px) o caja torcida (2 px), con el color de la línea a la que pertenece la frase. Es CSS puro y la frase se lee aunque no cargue.

### El plano
Un SVG con las líneas Yo e IA a 10 px (8 px en vertical) y su halo, que se dibujan desde la izquierda en 1,7 s a partir de 1,3 s, se juntan en dos tramos compartidos y acaban en un tope de tinta con el rótulo «Contacto · Final de trayecto». Cada proyecto es una estación de correspondencia enlazada; las paradas de una sola línea llevan a «Cómo trabajo» y «Trayectoria». Al pasar por una estación su borde engorda a 6 px, su nombre se subraya y, en escritorio, aparece la portada en un panel de azul rótulo. Dos trenes con borde blanco recorren el plano una vez, paran 0,6 s en cada estación y se quedan en el final.

### Barras de sección
Bajo cada título de sección, las dos líneas en pequeño y encendidas: una barra roja de 56 × 6 px y una azul de 32 × 6 px, separadas 6 px, a 20 px del título.

### Esquemas de recorrido
«Cómo trabajo» y «Trayectoria» reutilizan el plano como diagrama ligado al scroll: vías en hilo o en color al 18 %, un trazo que se rellena con el avance (con resorte) y estaciones que se marcan al llegar y ya no se desmarcan. En Trayectoria las dos líneas de relleno brillan con su color.

### Named Rules
**The Light Loop Rule.** Solo la luz se mueve en bucle: las luces de fondo (18 s), el anillo del paso activo (2,6 s), la palabra de la pastilla (2,6 s) y la luz del borde de un cartel en hover (3,2 s). Las marcas aparecen una vez y se quedan quietas.

## Do's and Don'ts

### Do:
- **Do** usar rojo Yo y azul IA solo para las dos líneas y para lo que representan (The Two Lines Rule).
- **Do** poner el texto en negro (#000) sobre la pastilla, el botón claro, el correo y cualquier relleno neón.
- **Do** escribir los nombres de estación, sección y proyecto con el rótulo condensado (anchura 68 %, peso 800) y el texto corrido a anchura normal.
- **Do** marcar el estado con una cápsula llena o discontinua y su texto, como en la leyenda del plano.
- **Do** dibujar las líneas con extremos redondos y giros a 45°, con trazos de 8–10 px y su halo de línea.
- **Do** construir bordes y velos con blanco translúcido de la escala (10 % hilo, 15 % cristal, 25–50 % en hover).
- **Do** usar la curva de llegada `cubic-bezier(0.16, 1, 0.3, 1)` para entradas y cambios de estado, y `cubic-bezier(0.65, 0, 0.35, 1)` para trazar líneas, contornos y anotaciones.
- **Do** dar a cada animación su versión quieta: con movimiento reducido el nombre y las anotaciones aparecen dibujados, el plano aparece trazado, los trenes no se crean, las luces y el anillo se detienen, la palabra no rota y la luz del borde queda fija.
- **Do** mantener las zonas táctiles en 44–56 px de alto.

### Don't:
- **Don't** poner texto blanco sobre un relleno rojo Yo o azul IA.
- **Don't** usar el contorno trazado ni el relleno metálico fuera del nombre de la portada.
- **Don't** extender la cuadrícula a toda la página ni al andén.
- **Don't** dar halo neón al texto corrido, a las tarjetas ni a los paneles.
- **Don't** usar el azul rótulo como botón: sobre el carbono casi no se distingue del suelo (1,13:1).
- **Don't** añadir una segunda familia tipográfica.
- **Don't** colocar versalitas como antetítulo encima de un titular.
- **Don't** añadir bucles de animación fuera de los cuatro de luz; las marcas aparecen una vez y se quedan quietas.
