---
target: portfolio publicado
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "url:https://cristian-corroto.netlify.app/"
timestamp: 2026-10-23T19-49-46Z
slug: cristian-corroto-netlify-app
---
Method: dual-agent (A: revisión de diseño · B: detector y navegador)

## Puntuación (Nielsen): 22/32 — Aceptable (69 %). n/a: 7, 10.
1 Visibilidad 2 (menú sin sección activa) · 2 Lenguaje 4 · 3 Control 3 (fichas sin pie ni siguiente proyecto) · 4 Consistencia 2 (anchos max-w-6xl/4xl alternos; tarjeta JothanPh sin icono) · 5 Prevención 3 · 6 Reconocimiento 3 · 7 n/a · 8 Estética 2 (repeticiones, muro de módulos DAM, 7 tarjetas en IA) · 9 Errores 3 · 10 n/a.

## Identidad
Armazón intercambiable de portfolio dev: negro + cuadrícula + nombre metálico + eyebrow mono verde + tarjetas iguales + Geist + mismo fade-up. Acento = emerald-400 por defecto. Lo propio es el contenido (honestidad sobre la IA), dibujado igual que todo lo demás.
Detector: gradient-text (.nombre-metal, app/globals.css:36-41, components/Portada.tsx:11); codex-grid-background advisory (app/globals.css:28); line-length ~114 car. (components/ComoTrabajo.tsx:109). Sin errores de consola; contraste correcto. Inyección en HTTPS bloqueada (loopback); overlay hecho sobre out/ desactualizado.

## Lo que funciona
1. Enfoque honesto sobre la IA (yo / IA / sin IA; recuadro por proyecto).
2. Tipografía de portada; palabra rotatoria accesible.
3. Fichas de proyecto bien estructuradas.

## Problemas prioritarios
- [P1] Aspecto de plantilla sin identidad → convertir «yo / IA» en sistema visual, acento propio, nombre sin degradado. bolder → colorize, typeset.
- [P1] Proyectos se quedan cortos: JothanPh con placeholder, 2/3 tarjetas son SafeRouteAI, «Hecho con apoyo de IA» repetido → portada diseñada para JothanPh, SafeRouteAI destacada, quitar repetición. layout.
- [P2] Secciones medias monótonas y densas (IA ~1970px y Formación ~1850px en móvil) → pasos como secuencia, banda comparativa, módulos agrupados, anchos unificados. distill → layout.
- [P2] Movimiento genérico idéntico; reduced motion solo en PalabraRotatoria → 2–3 momentos con sentido, menú móvil animado. animate.
- [P3] Botón menú móvil 28px; sin sección activa; viuda «yo.»; ~190px vacíos antes de Contacto; CTAs de ficha al final en móvil; badges azules con puntos verdes. polish.

## Personas
Seleccionador: portada no dice qué has construido; primer proyecto bajo el pliegue; sin LinkedIn; exceso de «IA».
Accesibilidad: animaciones ignoran reduced motion; menú móvil sin gestión de foco; botón pequeño.
Móvil: ~8230px; nombre dos veces en primera pantalla; insignia de Netlify tapa contenido.

## Menores
Pastilla rotatoria desalineada; badges tapan la captura de la web de SafeRouteAI; aptitud «Inteligencia artificial» vaga; Idiomas suelto.

## Preguntas
1. ¿Por qué la honestidad sobre la IA no es el concepto visual de la portada?
2. ¿Qué imagen o interacción recordaría un seleccionador una hora después?
3. ¿Mejor un caso de estudio a fondo + lista corta que tres tarjetas?
