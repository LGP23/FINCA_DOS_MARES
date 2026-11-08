# BRIEF — Finca dos Mares (index ES)

## Kind
**place** (hotel boutique + restaurante + casa rural + camper de alquiler). `<html data-type="place">`, `page-kind: place`, `site-kind: other`.

## Fact sheet (del brief real: web archivada 2021–2026, contacto archivado 14-jun-2026, capturas del cliente)

| Campo | Dato | Fuente |
|---|---|---|
| Qué es | Finca con hotel boutique, cocina de mercado, casa rural completa y furgoneta de alquiler | Web archivada |
| Dónde | Ferrol, A Coruña (costa atlántica gallega). **Calle no verificada — solo ciudad** | Web archivada |
| Tagline real | "Casa Rural con Encanto en Ferrol" | meta description del sitio |
| Datos de contacto | fincadosmares@gmail.com · +34 610 86 61 50 · +34 672 23 26 28 | Página /contacto/ archivada (jun-2026) |
| Horario real | Restaurante todos los días, del desayuno a la cena. **Lunes cerrado** | Web archivada |
| Otras ofertas reales | Masajes y tratamientos; zonas ajardinadas | Web archivada |
| Habitaciones | 7, todas con vistas al mar (Hotel Boutique en Ferrol) | Captura Hotel Boutique |
| Carta real | grupos: Entrantes, Carnes selectas, Mariscos y Pescados. Precios por clasificación | Captura carta |
| Camper | Furgoneta equipada, alquiler en Ferrol, contacto WhatsApp | Web archivada + captura |
| Casa rural | Casa completa, cerca de playas de Ferrol | Web archivada |
| Fotos propias del cliente | 4 (comedor acristalado, dormitorio boutique, la ría desde la camper, casa rural con vigas) — recuperadas de Wayback 1536px | Wayback Machine |

## Voice card (voz del cliente, de su propia web)
- Registro: cálido en 2ª persona, como escribía el cliente ("Te cuidamos en cuerpo y alma", "Te estamos esperando"). Directo, sin ironía.
- Personas: "tú" el huésped, "te esperamos" nosotros.
- Hechos primero: horario real, lunes cerrado, 7 habitaciones, contactos.
- Nunca: virtudes sobre nosotros, frases de plantilla, exclamaciones.

## Plan (líneas 1 y 2)
1. kind: **place** — casa rural/hotel boutique; paleta **warm-paper-walnut** (papel cálido + nogal: responde a las vigas de madera y suelos de madera de las fotos del cliente); tipos **Besley/Albert Sans**; radios **soft**.
2. deal: nav **nav-split** (re-deal de nav-cards: sin páginas hermanas aún — se re-deala a nav-cards cuando existan), footer **footer-visit**, rhythm **surface-pairs**, botones **solid**, marca **ring**, oferta **pair→cards de 3 kinds**, Lugar (bleed) **no usado** (sin foto panorámica limpia de terreno), momento(type) **address**, habitaciones **rows**; momentos dealt: **word-highlight** + **picture-develops** (foto del hero del comedor).

## Secciones (6 pantallas, 7 fotos)
| # | id | idea | foto | kind | pantallas |
|---|---|---|---|---|---|
| 1 | hero | Qué es y dónde (h1 categoría+lugar) | comedor acristalado (CLIENTE) | object | 1 |
| 2 | visit | Dónde, horario real, teléfono | dormitorio cliente + momento "Ferrol" | object | 1 |
| 3 | finca | Las tres estancias como tarjetas | dormitorio stand-in · casa cliente · camper cliente | object ×3 | 1 |
| 4 | habitaciones | 7 habitaciones, vistas al mar, precios | (lista de precios: sin foto, excepción) | rows | 1 |
| 5 | mesa | Cocina de mercado: grupos y desayuno | pan (lib) + granola (lib) pair | rows+pair | 1 |
| 6 | reservar+footer | Formulario de reserva + footer-visit | (formulario: excepción sin foto) | form | 1 |

## Fotos en uso (data-source)
1. hero: `hall` — foto del COMEDOR acristalado del cliente (hero object full-bleed) recursos `assets/img/source/finca_37.jpg` → renombrada
2. visit: `bedroom` — dormitorio del cliente
3. tarjeta Hotel Boutique: `room-standin` — **stand-in** f59466255 (CC BY 2.0, Curt Smith) — sustituir por foto real de otra habitación
4. tarjeta Casa Rural: cliente
5. tarjeta Camper: cliente
6. mesa pair: `library` bread (m150619721) + granola (m61665613)
**Falta del cliente (shot list)**: fachada/entrada de la finca a luz de día, cocina abierta del restaurante, otras habitaciones.

## Avisos del informe
- la plana usa datos reales publicados por el propio negocio (teléfonos, email en mailto del formulario, horario) — si el gate marca `phone-number`, waiver con el brief como razón.
- Dirección sin calle: solo "Ferrol, A Coruña" → sin botón de direcciones ni enlace a mapa.
- Los precios de habitaciones/carta son `data-assumed` (no hay precios reales en las fuentes) y el desayuno incluido también.
- Los stand-ins (habitación) se listan en el informe final para sustituir.
