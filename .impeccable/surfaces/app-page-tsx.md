---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/proyectos/[slug]/page.tsx"]
---

# Portfolio — página de inicio y fichas de proyecto

Modo: Experience (portfolio). Público: quien puede contratar a un junior en Madrid/remoto y gente cercana desde el móvil. Acción: ver los proyectos y escribir por correo. Prueba: proyectos reales con portada y la explicación honesta de qué hizo la IA y qué hizo Cristian. Restricciones: PRODUCT.md (honestidad, sin foto, sin «busco prácticas», sin marcas de IA). Cristian pidió decidir sin consultarle; dirección asignada por la tirada, sin ronda de decisión.

## Direction contract

THESIS: La web es un plano de metro de Madrid. Dos líneas recorren la página, «Yo» (rojo) e «IA» (azul), y cada proyecto es una estación de correspondencia donde se cruzan. Rechaza el portfolio oscuro con acento neón, cuadrícula y nombre metálico sobre una rejilla de tarjetas.

OWN-WORLD: blanco de plano como fondo; trazos gruesos octilineales a 45° en rojo Yo, azul IA, amarillo Formación y verde Experiencia; estaciones con tick o anillo blanco con borde negro; rótulos de andén en azul marino con texto blanco condensado; una sola familia (Archivo de anchura variable, condensada para rótulos y normal para texto); cifras tabulares. Andén oscuro con carteles retroiluminados para los proyectos. Estado como marca: estación en servicio con punto lleno, «en obras» con anillo discontinuo.

STORY: el visitante entiende en el primer vistazo que Cristian construye con IA y lo separa con honestidad. Recorre las estaciones, abre un proyecto y le escribe desde «Final de trayecto».

FIRST VIEWPORT: a la izquierda, arriba, el nombre en un rótulo condensado enorme y una línea que dice qué hace. Ocupando el ancho, el plano: las líneas Yo e IA se dibujan desde el borde izquierdo y se cruzan en cuatro estaciones con los nombres reales de los proyectos, que son enlaces. Al pasar por una estación aparece su portada. Abajo a la derecha, la leyenda de las líneas y la acción «Ver proyectos». En móvil, el plano va en vertical.

FORM: plano de metro de Madrid, puesto 4 de la lista propia. seed:269ca55c55de3e3f. Mejoras tomadas de las alternativas descartadas:
- banda de datos idéntica en cada estación (periodo · estado · tecnologías), del calendario de encurtidos;
- un único recorrido ligado al scroll mueve el tren de la navegación y dibuja las líneas, del autómata de manivela;
- en cada proyecto se resalta la frase que dice qué hizo Cristian, del fanzine;
- el estado se marca con un signo y no con un color, del banco de montaje;
- el aviso «Próxima estación» se escribe línea a línea, del terminal;
- las marcas aparecen una vez y se quedan quietas, del pasaporte.

Interacción principal: el tren de la navegación avanza con el scroll y anuncia la próxima estación. Movimiento: las líneas se dibujan con el trazo y las estaciones se fijan con un golpe; con movimiento reducido, todo aparece ya dibujado.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisiones abiertas
- Web para un negocio real: ficha y portada preparadas fuera del repo hasta tener el permiso del cliente.
- URL de LinkedIn: pendiente del desbloqueo de la cuenta.
