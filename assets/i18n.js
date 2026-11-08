// Sistema bilingüe ES (por defecto) / EN para Finca dos Mares
(() => {
  const EN_MAP = {
    // Navegación y comunes
    "Estancias": "Stays",
    "Restaurante": "Restaurant",
    "Entorno": "Surroundings",
    "Reservar": "Book",
    "Dirección": "Address",
    "Contacto": "Contact",
    "Contacto directo": "Direct Contact",
    "Hotel boutique y restaurante · Cabo Prior": "Boutique hotel & restaurant · Cabo Prior",
    "© 2026 Finca dos Mares · Cabo Prior, Ferrol": "© 2026 Finca dos Mares · Cabo Prior, Ferrol",
    "Aviso Legal": "Legal Notice",
    "Privacidad": "Privacy",
    "Términos": "Terms",
    "Encuéntranos en Cabo Prior": "Find us in Cabo Prior",
    "Un rincón creado para la calma, el descanso y la buena mesa junto al Atlántico.": "A corner created for calm, rest and fine dining by the Atlantic.",
    "Nuestra Finca": "Our Estate",
    "15594 Covas, Ferrol (A Coruña)": "15594 Covas, Ferrol (A Coruña), Spain",
    "Horario de Atención": "Opening Hours",
    "Restaurante: del desayuno a la cena<br>Lunes: Cerrado por descanso": "Restaurant: from breakfast to dinner<br>Mondays: Closed for weekly rest",

    // HOME (index.html)
    "Cabo Prior · Covas, Ferrol": "Cabo Prior · Covas, Ferrol",
    "Donde el paisaje gallego se asoma al Atlántico": "Where the Galician landscape meets the Atlantic",
    "Un refugio íntimo entre acantilados y mar abierto. Despierta con la brisa salina, alarga la sobremesa en la finca y deja que los días marquen otro ritmo.": "An intimate retreat between cliffs and open sea. Wake up to the salt breeze, linger at the table on the estate and let your days move at a gentler pace.",
    "Hotel boutique": "Boutique hotel",
    "Cocina de mercado": "Market cuisine",
    "Ruta en camper": "Campervan routes",
    "La experiencia": "The experience",
    "Te cuidamos en cuerpo y alma, sin prisas ni artificios.": "We care for you body and soul, unhurried and unpretentious.",
    "Imagina abrir la ventana por la mañana y ver cómo levanta la bruma sobre el océano, salir a la finca con el primer café del día y decidir sobre la marcha si hoy toca sendero hacia el faro, lectura en calma o playa salvaje hasta el atardecer.": "Imagine opening the window in the morning as the mist lifts over the ocean, stepping out onto the estate with your first coffee of the day, and deciding on a whim whether today calls for a coastal trail to the lighthouse, quiet reading, or a wild beach until sunset.",
    "El descanso": "Rest",
    "Siete habitaciones con luz y carácter propio": "Seven rooms with their own light and character",
    "Ninguna es igual a otra: algunas miran hacia el Atlántico y otras se recogen sobre la calma de la finca, pero todas comparten la misma esencia de madera cálida, silencio y detalles cuidados para dormir profundo y despertar sin reloj.": "No two rooms are alike: some look out towards the Atlantic while others open onto the quiet calm of the estate, yet all share the same essence of warm wood, silence and thoughtful details for deep sleep and unhurried mornings.",
    "7 habitaciones únicas, cada una con su propia personalidad y esencia": "7 unique rooms, each with its own personality and essence",
    "Finca amplia y tranquila en el entorno natural de Cabo Prior": "Spacious, peaceful estate in the natural setting of Cabo Prior",
    "Luz natural, madera y descanso a pocos minutos del mar": "Natural light, warm wood and rest just minutes from the sea",
    "Tu refugio": "Your retreat",
    "Dos maneras de habitar el norte": "Two ways to experience the north",
    "Tanto si buscas el abrigo de una habitación con encanto en la finca como la libertad de despertar cada mañana frente a un acantilado distinto.": "Whether you seek the shelter of a charming room on the estate or the freedom of waking up each morning before a different cliff.",
    "En la finca": "On the estate",
    "El Hotel Boutique": "The Boutique Hotel",
    "Intimidad, silencio y el placer de volver después de la playa sabiendo que la mesa y el descanso te esperan a solo unos pasos.": "Intimacy, quietude and the pleasure of returning from the beach knowing that dinner and rest await just steps away.",
    "Sobre ruedas": "On wheels",
    "La Camper": "The Campervan",
    "Nuestra furgoneta equipada para perderte a tu aire por calas escondidas, faros y puestas de sol de la costa ártabra. Consulta disponibilidad por WhatsApp.": "Our fully equipped campervan to wander at your own pace through hidden coves, lighthouses and sunsets along the Ártabro coast. Check availability via WhatsApp.",
    "La mesa": "The table",
    "Cocina de mercado que sabe a lonja y a temporada": "Market cuisine shaped by the fish market and the season",
    "En nuestro comedor acristalado cocinamos al ritmo del producto fresco: pescados y mariscos del día, carnes selectas en su punto y entrantes pensados para compartir sin mirar la hora, desde el primer desayuno hasta la cena.": "In our glass-enclosed dining room we cook to the rhythm of fresh produce: catch of the day, prime meats cooked to perfection and starters meant for unhurried sharing, from the first breakfast to dinner.",
    "De martes a domingo, del desayuno a la cena · <strong>Lunes cerrado por descanso.</strong>": "Tuesday to Sunday, from breakfast to dinner · <strong>Closed on Mondays for weekly rest.</strong>",
    "El paisaje": "The landscape",
    "Entre el faro de Cabo Prior y las playas salvajes": "Between Cabo Prior lighthouse and wild beaches",
    "Cruzar la puerta de la finca es adentrarse en uno de los tramos más indómitos de Galicia: el viento en los acantilados de Prior, la arena abierta de Santa Comba y Ponzos, y la luz cambiante del océano a cada hora.": "Stepping outside the estate brings you into one of Galicia’s untamed coastlines: the wind along the cliffs of Prior, the open sands of Santa Comba and Ponzos, and the ever-changing Atlantic light.",
    "A pocos minutos del faro de Cabo Prior y los arenales de Covas": "Just minutes from Cabo Prior lighthouse and the beaches of Covas",
    "Senderos costeros, miradores, olas y naturaleza en estado puro": "Coastal trails, viewpoints, waves and untouched nature",

    // ESTANCIAS (estancias.html)
    "Estancias · Cabo Prior": "Stays · Cabo Prior",
    "Un descanso que lleva el nombre del mar": "Rest named after the moods of the sea",
    "Siete habitaciones únicas en nuestro hotel boutique y una furgoneta camper equipada para recorrer la costa atlántica gallega a tu propio ritmo.": "Seven unique rooms in our boutique hotel and a fully equipped campervan to explore the Galician Atlantic coast at your own pace.",
    "Alquiler de Camper": "Campervan Rental",
    "Siete estados del mar": "Seven states of the sea",
    "Cada habitación guarda su propia luz y su propia calma.": "Each room holds its own light and its own calm.",
    "En Finca dos Mares cada estancia toma su nombre de un estado del Atlántico, inspirándose en las mareas y en el paisaje que rodea la finca en Covas. Un guiño al territorio pensado para desconectar con privacidad, silencio y confort.": "At Finca dos Mares, every room is named after a state of the Atlantic Ocean, inspired by the tides and landscape surrounding our estate in Covas. A tribute to our coast, designed for privacy, silence and comfort.",
    "Hotel Boutique": "Boutique Hotel",
    "Siete habitaciones, siete estados del mar": "Seven rooms, seven states of the sea",
    "Algunas se asoman al horizonte del océano y otras se recogen sobre la serenidad de la finca, pero todas comparten calidez, luz natural y una personalidad irrepetible.": "Some look out to the ocean horizon while others rest over the serenity of the estate, yet all share warmth, natural light and an unmistakable personality.",
    "Habitación 01": "Room 01",
    "Mar liso como un espejo, sin oleaje. Una estancia serena y luminosa donde el tiempo parece detenerse desde primera hora de la mañana.": "A sea as smooth as glass, without swell. A serene, bright room where time seems to stand still from early morning.",
    "Habitación 02": "Room 02",
    "Olas largas con copetes de espuma blanca que al romper dejan un murmullo suave. Equilibrio entre calidez, amplitud y calma atlántica.": "Long waves with white foam crests that leave a gentle murmur as they break. A balance of warmth, space and Atlantic calm.",
    "Habitación 03": "Room 03",
    "Inspirada en el pulso constante del mar del norte. Un refugio acogedor de madera y tejidos suaves al que volver tras caminar por la costa.": "Inspired by the steady pulse of the northern sea. A cosy haven of wood and soft fabrics to return to after walking the coast.",
    "Habitación 04": "Room 04",
    "Olas altas y el sonido profundo del océano. Pensada para quienes buscan desconexión total, lectura sin prisa y descanso reparador.": "High waves and the deep sound of the ocean. Designed for those seeking complete disconnection, unhurried reading and restorative sleep.",
    "Habitación 05": "Room 05",
    "Carácter propio y detalles singulares que dialogan con la naturaleza de Cabo Prior, en un ambiente íntimo y silencioso.": "Distinct character and singular details in dialogue with the nature of Cabo Prior, within an intimate and quiet atmosphere.",
    "Habitación 06": "Room 06",
    "Donde la espuma dibuja líneas sobre el agua al compás del viento. Luminosa, envolvente y cuidada hasta el último detalle.": "Where sea foam traces lines across the water with the wind. Bright, enveloping and cared for down to the last detail.",
    "Habitación 07": "Room 07",
    "Recogida sobre la tranquilidad de la finca, combina tonos cálidos, luz natural y una atmósfera pensada para despertar sin reloj.": "Tucked into the quiet of the estate, combining warm tones, natural light and an atmosphere made for waking up without an alarm.",
    "Consultar disponibilidad": "Check availability",
    "Comodidades": "Amenities",
    "Servicios en todas las habitaciones": "In-room amenities",
    "Todo lo necesario para una escapada corta o una estancia larga en la costa de Galicia, con la tranquilidad de una propiedad íntima.": "Everything you need for a short getaway or a longer stay on the Galician coast, with the peace of an intimate property.",
    "WiFi de alta velocidad gratuito en toda la propiedad": "Free high-speed Wi-Fi throughout the property",
    "Sistema de climatización y habitaciones insonorizadas": "Climate control and soundproofed rooms",
    "Baño privado completo con ducha o bañera, toallas y amenities": "Full private bathroom with shower or bath, towels and amenities",
    "Agua embotellada de cortesía y hervidor eléctrico / cafetera": "Complimentary bottled water and electric kettle / coffee maker",
    "Servicio de limpieza diario": "Daily housekeeping service",
    "Sobre ruedas · Ferrol": "On wheels · Ferrol",
    "Alquiler de Camper: vive Galicia a tu ritmo": "Campervan Rental: experience Galicia at your own pace",
    "¿Buscas la libertad de explorar la costa sin ataduras? Nuestro servicio de alquiler de furgoneta camper te ofrece una forma única de viajar con comodidad, flexibilidad y autonomía total por playas, faros y acantilados.": "Looking for the freedom to explore the coast without ties? Our campervan rental offers a unique way to travel with comfort, flexibility and full autonomy across beaches, lighthouses and cliffs.",
    "Consultar por WhatsApp · +34 610 86 61 50": "Enquire via WhatsApp · +34 610 86 61 50",
    "Viaje a medida": "Tailor-made journey",
    "Elige tus propios destinos y cambia de plan cuando quieras. Desde las playas de Ferrol y Valdoviño hasta las rutas costeras más auténticas.": "Choose your own destinations and change plans whenever you wish—from the beaches of Ferrol and Valdoviño to authentic coastal routes.",
    "Comodidad total": "Complete comfort",
    "Totalmente equipada para garantizar una experiencia cómoda, con espacio para dormir, cocinar y disfrutar de cada parada frente al mar.": "Fully equipped to ensure a comfortable experience, with space to sleep, cook and enjoy every stop by the ocean.",
    "Lista para la aventura": "Ready for adventure",
    "Tanto para un fin de semana en pareja como para varios días recorriendo las rías, la camper se adapta a tu propio mapa.": "Whether for a romantic weekend or several days exploring the estuaries, the campervan adapts to your own map.",

    // RESTAURANTE (restaurante.html)
    "Restaurante · Finca dos Mares": "Restaurant · Finca dos Mares",
    "Cocina de mercado frente al Atlántico": "Market cuisine facing the Atlantic",
    "Una propuesta viva que nace en la lonja y en los productores locales de Galicia. Producto de temporada, fuego suave y sobremesas sin prisa con vistas al paisaje de Cabo Prior.": "A living culinary proposal born in the fish markets and local farms of Galicia. Seasonal produce, gentle fire and unhurried dining overlooking Cabo Prior.",
    "Ver nuestra carta": "View our menu",
    "Reservar mesa": "Book a table",
    "Filosofía": "Philosophy",
    "La suma del mar con la tradición de la tierra.": "Where the bounty of the sea meets the tradition of the land.",
    "Nuestra carta es viva y cambiante: trabajamos con <strong>producto fresco del día</strong>, por eso nuestras sugerencias evolucionan según lo que ofrecen cada mañana el mercado y la lonja.": "Our menu is alive and ever-changing: we work with <strong>fresh daily produce</strong>, so our suggestions evolve with what the market and fish auction bring each morning.",
    "Priorizamos ingredientes km 0, sostenibles y de temporada, procedentes de productores locales, apostando por una cocina de proximidad con auténtica identidad gallega.": "We prioritise zero-kilometre, sustainable and seasonal ingredients from local producers, committed to honest Galician proximity cuisine.",
    "Abierto de Martes a Domingo": "Open Tuesday to Sunday",
    "Lunes cerrado por descanso": "Closed Mondays for weekly rest",
    "Cocina abierta todo el día": "Kitchen open all day",
    "Desde el desayuno hasta la cena": "From breakfast through dinner",
    "Reservas de mesa": "Table reservations",
    "El espacio y la bodega": "The space & cellar",
    "Más que un restaurante": "More than a restaurant",
    "Abierto tanto a nuestros huéspedes como a quienes vienen a visitarnos para comer o cenar frente al paisaje de Covas. Acompañamos siempre tu mesa con la mejor selección de vinos de nuestra bodega.": "Open both to our hotel guests and to visitors joining us for lunch or dinner overlooking Covas. We pair every table with a curated selection of wines from our cellar.",
    "Y cuando cae la tarde, la sobremesa se alarga entre dulces caseros, destilados notables y una cuidada coctelería.": "And as evening falls, linger over homemade desserts, fine spirits and crafted cocktails.",
    "Comedor acristalado y terraza abierta al entorno de la finca": "Glass-enclosed dining room and terrace open to the estate",
    "Selección de vinos gallegos y nacionales de nuestra bodega": "Selection of Galician and Spanish wines from our cellar",
    "Abierto tanto a huéspedes del hotel como a público externo": "Open to both hotel guests and external visitors",
    "Nuestra Carta": "Our Menu",
    "Platos elaborados al momento con pescado y marisco de la ría, carnes seleccionadas y entrantes pensados para compartir.": "Dishes prepared to order with local seafood and fish from the estuary, prime meats and starters meant to be shared.",
    "Entrantes": "Starters",
    "Arenques en mostaza, picogallo y miel": "Herring in mustard, pico de gallo and honey",
    "Carpaccio de bacalao a feira": "Galician-style cod carpaccio ('a feira')",
    "Carpaccio de gambón y crispi de alga": "King prawn carpaccio with crispy seaweed",
    "Cecina, foie, almendras y trufa": "Cured beef cecina, foie, almonds and truffle",
    "Carnes Selectas": "Prime Meats",
    "Churrasco de cerdo": "Galician grilled pork ribs (churrasco)",
    "Chorizo rojo / criollo": "Artisan red or creole chorizo",
    "Solomillo de bellota": "Acorn-fed Iberian sirloin",
    "Secreto": "Iberian pork secreto",
    "Entrecot": "Ribeye steak (per kg)",
    "Mariscos y Pescados": "Seafood & Fish",
    "Volandeiras": "Galician queen scallops (volandeiras)",
    "Navajas": "Grilled razor clams",
    "Cigalas": "Norway lobsters (cigalas)",
    "Berberechos": "Steamed cockles from the estuary",
    "3 Vieiras": "3 Baked Galician scallops",
    "Lubina salvaje a la espalda": "Wild sea bass 'a la espalda' (per kg)",
    "Salmón en tataki": "Salmon tataki",
    "Merluza a la gallega": "Galician-style hake",
    "Bacalao a la brasa y ajada": "Chargrilled cod with Galician garlic oil",
    "Salmonetes": "Fresh red mullet",
    "Dorada": "Gilthead sea bream (per kg)",
    "Jibia a la brasa": "Chargrilled cuttlefish",
    "Fuera de carta · Peticiones": "Off-menu · Special requests",
    "¿Te apetece algo especial?": "Craving something special?",
    "Si tienes algún plato en mente, una petición especial o te gustaría disfrutar de algún producto fuera de carta, coméntanoslo al hacer tu reserva. Siempre que sea posible, estaremos encantados de prepararlo para ti.": "If you have a specific dish in mind, a dietary request or would like to enjoy a special seasonal catch off-menu, let us know when booking. Whenever possible, we will be delighted to prepare it for you.",
    "Reservar mesa · +34 610 86 61 50": "Book a table · +34 610 86 61 50",

    // ENTORNO (entorno.html)
    "Entorno · Cabo Prior, Ferrol": "Surroundings · Cabo Prior, Ferrol",
    "Entre acantilados, faros y playas salvajes": "Between cliffs, lighthouses and wild beaches",
    "Finca dos Mares se asienta en Prioiro (Covas), en uno de los tramos más indómitos y hermosos de la costa atlántica gallega, donde el monte y el océano se encuentran.": "Finca dos Mares sits in Prioiro (Covas), along one of the wildest and most breathtaking stretches of the Galician Atlantic coast, where green hills meet the open ocean.",
    "La Finca": "The Estate",
    "Playas cercanas": "Nearby Beaches",
    "Qué descubrir": "What to Discover",
    "Costa Ártabra": "Ártabro Coast",
    "Un territorio en estado puro a pocos minutos de tu habitación.": "Untouched coastal nature just minutes from your room.",
    "Aquí los días los marca la marea: mañanas de paseo entre senderos costeros hacia el faro de Cabo Prior, tardes de sol y brisa en los arenales infinitos de Covas y atardeceres inolvidables viendo caer el sol sobre el Atlántico.": "Here the tide sets the pace: morning walks along coastal trails to Cabo Prior lighthouse, sunlit afternoons on the endless beaches of Covas, and unforgettable sunsets over the Atlantic.",
    "Nuestra propiedad": "Our property",
    "La calma de la finca frente al océano": "The calm of the estate facing the ocean",
    "Rodeada de naturaleza atlántica y abierta a las vistas del mar de Covas, la finca ofrece más de 5.000 m² pensados para respirar hondo, leer al sol en la terraza o disfrutar de una sobremesa tranquila tras volver de la playa.": "Surrounded by Atlantic nature and open to the sea views of Covas, the estate offers over 5,000 m² designed to breathe deeply, read in the sun on the terrace or enjoy a quiet afternoon after the beach.",
    "Enclave privilegiado en Prioiro Núcleo (Covas, Ferrol)": "Privileged location in Prioiro Núcleo (Covas, Ferrol)",
    "Terrazas y rincones exteriores abiertos al paisaje costero": "Terraces and outdoor corners open to the coastal landscape",
    "Punto de partida ideal para recorrer toda la comarca de Ferrolterra": "Ideal base to explore the entire Ferrolterra region",
    "El Atlántico de cerca": "The Atlantic up close",
    "Las playas que nos rodean": "The beaches around us",
    "Arenales vírgenes de agua cristalina, dunas protegidas y calas escondidas a pocos minutos de Finca dos Mares.": "Pristine white-sand beaches, crystal-clear waters, protected dunes and hidden coves just minutes from Finca dos Mares.",
    "A los pies de Cabo Prior": "At the foot of Cabo Prior",
    "Playa de Santa Comba": "Santa Comba Beach",
    "Uno de los lugares más mágicos de Galicia: un gran arenal de arena blanca presidido por la pequeña ermita románica de Santa Comba sobre una isla a la que solo se puede cruzar a pie cuando baja la marea.": "One of Galicia’s most magical spots: a wide white-sand beach watched over by the Romanesque chapel of Santa Comba on a tidal island reachable on foot only at low tide.",
    "Naturaleza virgen": "Untouched nature",
    "Playa de Ponzos": "Ponzos Beach",
    "Amplia, salvaje y abierta al océano. Rodeada de dunas y acantilados, es perfecta para largos paseos junto a la orilla y para contemplar la fuerza del mar del norte en cualquier época del año.": "Wide, wild and open to the ocean. Surrounded by dunes and cliffs, it is ideal for long walks along the shore and admiring the power of the northern sea year-round.",
    "En el corazón de Covas": "In the heart of Covas",
    "Fragata y Esmelle": "Fragata & Esmelle",
    "El arenal vecino de Covas y Esmelle combina zonas resguardadas para el baño con olas muy apreciadas por los amantes del surf, rodeado de senderos litorales que conectan toda la bahía.": "The neighbouring beach of Covas and Esmelle combines sheltered swimming areas with waves prized by surfers, framed by coastal paths connecting the entire bay.",
    "Dunas y laguna costera": "Dunes & coastal lagoon",
    "Doniños y San Xurxo": "Doniños & San Xurxo",
    "Dos playas emblemáticas de Ferrol conectadas por un paisaje de dunas, pinares y la laguna de Doniños. Un escenario imprescindible para despedir el día viendo la puesta de sol sobre el mar.": "Two iconic Ferrol beaches linked by dunes, pine woods and Doniños lagoon—an unmissable setting to watch the sun sink into the ocean.",
    "El horizonte": "The horizon",
    "El Faro de Cabo Prior": "Cabo Prior Lighthouse",
    "A escasos minutos de la finca se alza el cabo que da carácter a toda esta costa. Sus acantilados cortados sobre el océano, sus antiguos puestos de observación y su faro ofrecen una de las panorámicas más sobrecogedoras del norte gallego.": "Just minutes from the estate rises the headland that defines this coast. Its sheer cliffs above the ocean, historic lookouts and lighthouse offer one of the most breathtaking panoramas in northern Galicia.",
    "Miradores naturales sobre el Golfo Ártabro y el océano abierto": "Natural viewpoints over the Ártabro Gulf and open ocean",
    "Rutas a pie desde Covas entre brezos y acantilados": "Walking trails from Covas through heather and sea cliffs",
    "Descubre Ferrolterra": "Discover Ferrolterra",
    "Rutas, cultura y mar": "Routes, heritage & sea",
    "Más allá de las playas de Covas, el entorno invita a explorar villas marineras, patrimonio histórico y senderos naturales.": "Beyond the beaches of Covas, the region invites you to explore fishing towns, historic heritage and nature trails.",
    "01 · Patrimonio": "01 · Heritage",
    "Ferrol Ilustrado y Canido": "Enlightenment Ferrol & Canido",
    "A pocos minutos en coche te esperan el trazado racionalista del barrio de A Magdalena, el histórico Arsenal Militar y el colorista barrio de Canido con sus célebres Meninas.": "A short drive takes you to the 18th-century grid of the A Magdalena quarter, the historic Naval Arsenal and the vibrant Canido neighbourhood famous for its Meninas street art.",
    "02 · Naturaleza": "02 · Nature",
    "Senda Ártabra y castillos": "Ártabro Trail & castles",
    "Recorre la entrada de la ría de Ferrol entre el Castillo de San Felipe y la costa de Brión, o sigue los caminos litorales hacia Valdoviño, Pantín y el faro de Meirás.": "Explore the entrance of the Ferrol estuary around San Felipe Castle, or follow the coastal paths north towards Valdoviño, Pantín and Meirás lighthouse.",
    "03 · Deporte y mar": "03 · Surf & Outdoors",
    "Surf, senderismo y calas": "Surfing, hiking & coves",
    "Desde bautismos de surf en las playas de Ferrol y Pantín hasta rutas de senderismo y ciclismo frente al Atlántico, con la tranquilidad de regresar después a descansar a la finca.": "From surf lessons on the beaches of Ferrol and Pantín to hiking and cycling routes by the Atlantic, with the peace of returning afterwards to rest on the estate.",

    // CONTACTO / RESERVAR (contacto.html)
    "Contacto y reservas": "Contact & bookings",
    "Hablemos directamente": "Let’s talk directly",
    "Sin intermediarios. Escríbenos o llámanos para reservar habitación en el hotel boutique, mesa en el restaurante o consultar fechas para la camper.": "No middlemen. Write or call us directly to book a room at the boutique hotel, a table at the restaurant, or check dates for our campervan.",
    "01 · Atención directa": "01 · Direct attention",
    "Teléfono y WhatsApp": "Phone & WhatsApp",
    "Llamar ahora": "Call now",
    "02 · Correo electrónico": "02 · Email",
    "Reservas y consultas": "Bookings & enquiries",
    "<a href=\"mailto:fincadosmares@gmail.com?subject=Reserva%20o%20consulta%20%C2%B7%20Finca%20dos%20Mares&amp;body=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20en%20Finca%20dos%20Mares%3A%0A%0A\">fincadosmares@gmail.com</a><br>Respondemos con rapidez a cualquier petición.": "<a href=\"mailto:fincadosmares@gmail.com?subject=Booking%20or%20enquiry%20%C2%B7%20Finca%20dos%20Mares&amp;body=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20at%20Finca%20dos%20Mares%3A%0A%0A\">fincadosmares@gmail.com</a><br>We reply promptly to every request.",
    "Enviar un correo": "Send an email",
    "03 · Dónde y cuándo": "03 · Where & when",
    "Ubicación y horario": "Location & hours",
    "Prioiro Núcleo, DP-3603 · 15594 Covas, Ferrol<br>Restaurante de martes a domingo (lunes cerrado por descanso).": "Prioiro Núcleo, DP-3603 · 15594 Covas, Ferrol<br>Restaurant open Tuesday to Sunday (closed Mondays).",
    "Cómo llegar en Maps": "Get directions in Maps",
    "Solicitud rápida": "Quick request",
    "Envíanos tu consulta": "Send us your enquiry",
    "Nombre": "Name",
    "Teléfono o email": "Phone or email",
    "¿Qué te gustaría reservar o consultar?": "What would you like to book or enquire about?",
    "Habitación en el Hotel Boutique": "Room at the Boutique Hotel",
    "Mesa en el Restaurante": "Table at the Restaurant",
    "Alquiler de Furgoneta Camper": "Campervan Rental",
    "Otra consulta": "General enquiry",
    "Fechas o detalles": "Dates or details",
    "Enviar solicitud": "Send request",

    // LEGALES (títulos principales)
    "Política de Privacidad": "Privacy Policy",
    "Términos y Condiciones": "Terms & Conditions"
  };

  const PLACEHOLDER_EN = {
    "Tu nombre": "Your name",
    "Para responderte": "So we can reply to you",
    "Indícanos fechas aproximadas, número de personas o cualquier petición...": "Let us know approximate dates, number of guests or any special request..."
  };

  function getLang() {
    try {
      return localStorage.getItem('fdm_lang') || 'es';
    } catch (_) {
      return 'es';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem('fdm_lang', lang);
    } catch (_) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    const selectors = 'h1, h2, h3, h4, p, li, a, span, button, option, label, .eyebrow, .note, .direct-label, .room-num, .place-tag';
    document.querySelectorAll(selectors).forEach(el => {
      // No tocar contenedores que tienen hijos de bloque complejos salvo los que están en el mapa
      if (el.children.length > 2) return;
      if (!el.dataset.origHtml) {
        el.dataset.origHtml = el.innerHTML.trim();
      }
      const orig = el.dataset.origHtml;
      if (lang === 'en' && EN_MAP[orig]) {
        el.innerHTML = EN_MAP[orig];
      } else if (lang === 'es') {
        el.innerHTML = orig;
      }
    });

    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(inp => {
      if (!inp.dataset.origPh) {
        inp.dataset.origPh = inp.getAttribute('placeholder');
      }
      const origPh = inp.dataset.origPh;
      if (lang === 'en' && PLACEHOLDER_EN[origPh]) {
        inp.setAttribute('placeholder', PLACEHOLDER_EN[origPh]);
      } else if (lang === 'es') {
        inp.setAttribute('placeholder', origPh);
      }
    });

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });
    const current = getLang();
    if (current === 'en') applyLang('en');
  });
})();
