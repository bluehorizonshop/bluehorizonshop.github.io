// 🔒 NÚMERO DE WHATSAPP PROTEGIDO (Cámbialo por el tuyo)
const NUMERO_PARTE1 = '536';
const NUMERO_PARTE2 = '326';  // Pon aquí tus 3 primeros dígitos
const NUMERO_PARTE3 = '3899'; // Pon aquí tus 4 últimos dígitos
const NUMERO_BLUE_HORIZON = NUMERO_PARTE1 + NUMERO_PARTE2 + NUMERO_PARTE3;

// 📦 PRODUCTOS DE BLUE HORIZON (Clasificados para los filtros)
const productos = [

    // ============================================
    // FILTRO: BODYS (Todo lo que es Body, Playera, Camiseta)
    // ============================================
    {
        id: 1,
        nombre: "Body con tirantes y corbata",
        descripcion: "🐰 Body gris de manga larga con un diseño súper divertido: corbata azul de conejo y tirantes con la leyenda 'Happy Easter'. ¡Perfecto para fotos y celebraciones!",
        precio: "500 cup",
        foto: "body-conejo.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 2,
        nombre: "Playera Ballena 'Fin-tastic'",
        descripcion: "🐳 ¡I'm so FIN-tastic! Playera celeste de manga corta con un tierno diseño de ballena en 3D. El mensaje es un juego de palabras súper cute. Fresca, suave y con botones en el hombro para facilitar el cambio de ropa.",
        precio: "500 cup",
        foto: "playera-ballena.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 3,
        nombre: "Body Manga Larga (Gris/Azul)",
        descripcion: "🔵 Básico imprescindible. Body de manga larga con raglán en dos tonos: cuerpo gris y mangas azul marino. El algodón es súper elástico, lo que permite que el bebé se mueva con total libertad.",
        precio: "400 cup",
        foto: "body-gris-azul.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 4,
        nombre: "Body Blanco Carters",
        descripcion: "⚪ Limpio y básico. Body de manga larga en color blanco puro de la marca Carters. Impecable.",
        precio: "500 cup",
        foto: "body-blanco-carters.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 5,
        nombre: "Body 'Friends with all kinds'",
        descripcion: "🐻 Amigos de todas las especies. Body de manga corta en color crema con caritas de ositos y el texto 'friends with all kinds'. Súper tierno, hecho de algodón suave, ideal para la primavera o el verano.",
        precio: "300 cup",
        foto: "body-friends.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 6,
        nombre: "Body 'Aquí duerme un príncipe'",
        descripcion: "👑 ¡Para el príncipe de la casa! Precioso body celeste de manga corta con una corona y el lema 'AQUÍ DUERME UN PRÍNCIPE'. Algodón suave, con botones en la entrepierna. ¡Un regalo perfecto o una prenda súper tierna para las fotos!",
        precio: "300 cup",
        foto: "body-principe.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 7,
        nombre: "Body Puma gris",
        descripcion: "🐆 Look deportivo original. Body de manga corta en gris jaspeado con el logotipo de PUMA en grande en el pecho (efecto reflejante/impreso). Algodón suave, con botones en el hombro y la entrepierna. ¡En excelente estado!",
        precio: "400 cup",
        foto: "body-puma-gris.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 8,
        nombre: "Body Puma a rayas naranjas",
        descripcion: "🍊 Colorido y fresco. Body de manga corta con rayas anchas en naranja y blanco de la marca PUMA. Tiene el pequeño logo del gato bordado en el pecho. Un básico deportivo y muy alegre para los días de calor. Súper suavecito.",
        precio: "400 cup",
        foto: "body-puma-naranja.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 9,
        nombre: "Body Puma naranja con logo azul",
        descripcion: "🔷 Estilo retro y moderno. Body de manga corta en color naranja con ribetes celestes y el logotipo de PUMA en azul marino (letras y felino). El algodón es de excelente calidad y muy suave. ¡Un look urbano y lleno de estilo!",
        precio: "400 cup",
        foto: "body-puma-azul.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 10,
        nombre: "Body Rey León 'It's Snack Time'",
        descripcion: "🦁 ¡Hakuna Matata! Body de manga larga color verde menta con los personajes de El Rey León (Pumba y Simba) y el texto 'IT'S SNACK TIME!'. Imprescindible para los fans de Disney, con algodón suave y brillante.",
        precio: "400 cup",
        foto: "body-rey-leon.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 11,
        nombre: "Body Nike de Béisbol",
        descripcion: "⚾ ¡Rookie del año! Body de manga corta en un azul rey brillante con el logotipo de Nike en el pecho combinado con una pelota de béisbol. Súper deportivo, original y de excelente calidad. ¡Los papás fanáticos del deporte lo van a amar!",
        precio: "500 cup",
        foto: "body-nike-beisbol.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 12,
        nombre: "Body de ballenas azules",
        descripcion: "🐳 Marea de ternura. Body de manga corta en color crema con un precioso estampado de ballenitas y pececitos en tonos azules. Tiene un pequeño bolsillo en el pecho. Algodón fresco y súper suave, perfecto para los días soleados.",
        precio: "300 cup",
        foto: "body-ballenas.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 13,
        nombre: "Body de Winnie Pooh 'Rumbly in my Tumbly'",
        descripcion: "🍯 ¡Clásico de Disney! Body blanco de manga corta con un tierno Winnie Pooh levantando los brazos y el texto 'I've got a RUMBLY in my TUMBLY'. Es un algodón grueso y de excelente calidad. ¡Perfecto para los fans de Disney!",
        precio: "300 cup",
        foto: "body-winnie.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 14,
        nombre: "Body de ositos y estrellas",
        descripcion: "🐻 Cálido y adorable. Body de manga larga en color crema con un delicado estampado de ositos sentados con moños y estrellitas. Tiene ribetes en color celeste en cuello, mangas y piernitas. El tejido es suavecito y calientito. ¡Un básico perfecto para el invierno!",
        precio: "400 cup",
        foto: "body-ositos-estrellas.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 15,
        nombre: "Body Gris marca Puma",
        descripcion: " Body de manga corta gris con su logo. Tiene costuras y ribetes en color naranja brillante. ¡Único y divertido!",
        precio: "400 cup",
        foto: "body-hueso.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 16,
        nombre: "Body de patitos 'Love'",
        descripcion: "🐥 Puro amor. Body de manga corta en color gris jaspeado con dos adorables patitos amarillos mirándose y la palabra 'Love'. Un diseño súper tierno para los más pequeños. Algodón suave y fresco.",
        precio: "300 cup",
        foto: "body-patitos.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 17,
        nombre: "Body 'Dino-Mite Little Dude'",
        descripcion: "🦕 ¡Un pequeño dinosaurio! Body de manga corta en gris claro con un tierno dinosaurio azul en el pecho y el juego de palabras 'DINO-MITE LITTLE DUDE'. Súper suave, con botones en la parte baja. ¡Perfecto para los amantes de los dinosaurios!",
        precio: "300 cup",
        foto: "body-dino.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 18,
        nombre: "Body de dinosaurios",
        descripcion: "🦕 ¡Dino aventura! Body de manga corta en color crema con un estampado precioso de dinosaurios y palmeras en tonos grises y amarillos. El tejido es de algodón muy suave, ideal para los días de calor. Tiene botones en la entrepierna.",
        precio: "300 cup",
        foto: "body-dinosaurios.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 19,
        nombre: "Body de bosque y montañas",
        descripcion: "⛰️ Aventura al aire libre. Body de manga corta en un tono verde pálido con un estampado de montañas y bosques y pequeños en tonos grises. Súper delicado, con textura suave y botones en la parte inferior.",
        precio: "300 cup",
        foto: "body-bosque.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 20,
        nombre: "Body de colores",
        descripcion: "🌈 Un arcoíris de colores. Body de manga corta en tono celeste con un diseño central que hace función de babero y detalles en rosa mexicano en los laterales. Algodón súper suave y fresco, ideal para el verano.",
        precio: "300 cup",
        foto: "body-colores.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 21,
        nombre: "Body de rayas azul y gris verdoso",
        descripcion: "👕 El clásico marinero. Body de manga corta con rayas anchas en azul marino y gris verdoso. Es súper fresco y suave, con broches en la parte inferior. Un básico adorable para combinar con todo. ¡En excelente estado!",
        precio: "300 cup",
        foto: "body-rayas-azul.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 22,
        nombre: "Body blanco básico (Manga corta)",
        descripcion: "⚪ Básico imprescindible. Body de algodón blanco puro de manga corta. Súper suave, elástico y perfecto para usar debajo de la ropa o para los días de calor. Cuenta con botones en la entrepierna para facilitar el cambio de pañal. ¡Impecable!",
        precio: "350 cup",
        foto: "body-blanco.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 23,
        nombre: "Body de rayas multicolor (Amarillo, azul, gris)",
        descripcion: "🌈 ¡Color y alegría! Body de manga corta con finas rayas en tonos amarillo, azul, celeste y gris. Tiene el cuello y la parte inferior con ribetes en color mostaza que le dan un toque especial. Súper colorido, suave y fresco.",
        precio: "300 cup",
        foto: "body-rayas-multicolor.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 24,
        nombre: "Body de camuflaje Timberland",
        descripcion: "🌲 Estilo outdoor. Body sin mangas (tipo camiseta) con estampado de camuflaje en grises, beige y blanco. Lleva el logotipo original de la marca Timberland. Es de un algodón grueso y muy resistente. ¡Un look moderno y de marca!",
        precio: "300 cup",
        foto: "body-timberland.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 25,
        nombre: "Body Nike",
        descripcion: "✔️ Deportivo y original. Body de manga corta con el famoso 'swoosh' (check) de Nike en color durazno/coral. Un básico deportivo de excelente calidad, súper suave y con botones en la parte inferior. ¡Marca original!",
        precio: "300 cup",
        foto: "body-nike.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 26,
        nombre: "Body verde menta 'Cool friends together'",
        descripcion: "🐊 Amigos geniales. Body de manga larga en un tono verde menta muy suave. En el pecho tiene un dibujo de tres dinosaurios apilados con la frase 'COOL FRIENDS TOGETHER'. Perfecto para el entretiempo, con botones en la entrepierna.",
        precio: "400 cup",
        foto: "body-cool-friends.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 27,
        nombre: "Body gris con letras neón 'HUNK'",
        descripcion: "💪 ¡Un pequeño galán! Body (tipo camiseta) de manga corta en gris con el estampado de la palabra 'HUNK' en letras amarillo neón. Tiene en la parte de las pompas un monito que se ve chulo y se abre completamente con botones de presión al frente. ¡Moderno, divertido y en muy buen estado!",
        precio: "300 cup",
        foto: "body-hunk.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 28,
        nombre: "Body 'Fishing for Trouble' (Pesca)",
        descripcion: "🎣 ¡Un pescador en casa! Body de manga corta en color celeste con un divertido diseño de tiburón pescando con caña. Tiene los ribetes y mangas con estampado de mezclilla azul y el texto 'FISHING FOR TROUBLE'. Original, fresco y divertido.",
        precio: "300 cup",
        foto: "body-fishing.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 29,
        nombre: "Body azul 'Little but Loud'",
        descripcion: "🔊 ¡Pequeño pero ruidoso! Body de manga corta (tipo camiseta sin mangas) en un azul eléctrico precioso. Tiene un mensaje bordado en blanco súper divertido: 'LITTLE BUT LOUD'. Fresco, cómodo y con mucho carácter. ¡Imposible no sonreír al verlo!",
        precio: "300 cup",
        foto: "body-little-loud.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 30,
        nombre: "Body gris de manga larga",
        descripcion: "🧥 Básico de entretiempo. Body de manga larga en color gris medio de la marca Lefties. Es de un algodón grueso y suave, ideal para los días frescos. Tiene botones en la entrepierna. ¡Un imprescindible!",
        precio: "400 cup",
        foto: "body-letties.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 31,
        nombre: "Body blanco básico",
        descripcion: "☁️ Suavidad pura. Body blanco de manga corta. Es súper suave, con textura de algodón ligeramente afelpada. Un básico perfecto para usar solo en casa o debajo de cualquier ropita. Impecable y en excelente estado.",
        precio: "300 cup",
        foto: "body-blanco2.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 32,
        nombre: "Body verde de manga larga",
        descripcion: "Body de manga larga en un tono verde. Un básico cálido perfecto para el otoño y el invierno.",
        precio: "400 cup",
        foto: "body-verde.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 33,
        nombre: "Body amarillo de camiones",
        descripcion: "🚜 ¡A trabajar en la obra! Body de manga corta en color mostaza con un estampado de camiones y tractores dibujados en color negro. Colorido, fresco y súper llamativo. Perfecto para pequeños amantes de los vehículos.",
        precio: "300 cup",
        foto: "body-camiones.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 34,
        nombre: "Body celeste de manga larga",
        descripcion: "💙 Color pastel. Body de manga larga en un tono celeste muy suave. Es de un algodón elástico y fresco, perfecto para el entretiempo. Cuenta con botones en la entrepierna. Un básico sencillo e impecable.",
        precio: "400 cup",
        foto: "body-celeste.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 35,
        nombre: "Body gris con triangulitos blancos",
        descripcion: "⭐ Minimalista y moderno. Body de manga corta en un tono gris perla con un delicado estampado de pequeños triángulos blancos repartidos por toda la prenda. El tejido es de punto súper elástico. Un básico súper estético para el día a día.",
        precio: "300 cup",
        foto: "body-triangulitos.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 36,
        nombre: "Body con estampado de ositos y patitos",
        descripcion: "🧸 ¡Dulzura total! Body de manga corta en color crema con un estampado súper tierno de ositos, conejitos y patitos. Tiene frases escritas como 'patty cake', 'sweet one' y 'little bear'. Algodón suave, con botones en la parte inferior, ideal para la primavera.",
        precio: "300 cup",
        foto: "body-ositos.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 37,
        nombre: "Playera de color block BOSS",
        descripcion: "🎨 Vibrante y moderno. Playera de manga corta con diseño de bloques de color (beige, rojo, blanco y negro), para el jefe de la casa. ¡Un look súper original y llamativo para el bebé!",
        precio: "400 cup",
        foto: "playera-osos.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 38,
        nombre: "Playera Roja 'Petit Loup'",
        descripcion: "🐺 ¡Un lobito feroz! Playera roja de manga corta con un divertido diseño de lobo y la frase 'Petit Loup trop chou!' (Lobito demasiado lindo). Ideal para los días de calor, con un algodón fresquito y de excelente calidad.",
        precio: "400 cup",
        foto: "playera-roja.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 39,
        nombre: "Camiseta de Woody Woodpecker",
        descripcion: "🪵 Toque retro. Camiseta sin mangas blanca con el clásico dibujo animado 'Woody Woodpecker' en acción (andando en monociclo). Un diseño colorido y alegre para los días de mucho calor.",
        precio: "300 cup",
        foto: "camiseta-woody.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },

    // ============================================
    // FILTRO: MAMELUCOS (Mamelucos, Conjuntos, Batas, Suéteres, Pantalones)
    // ============================================
    {
        id: 40,
        nombre: "Mameluco de rinocerontes (Cierre)",
        descripcion: "Práctico y calientito. Mameluco de color blanco con estampado repetitivo de pequeños rinocerontes. Tiene cierre de cremallera completo para cambiarle la ropa en segundos, incluye 'piecitos' cubiertos y botón en el cuello. ¡Tejido grueso ideal para el frío!",
        precio: "500 cup",
        foto: "mameluco-rinocerontes.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 41,
        nombre: "Mameluco de pollito con capucha (Carter's)",
        descripcion: "¡El favorito de la guardería! Disfraz/mameluco de pollito con capucha. Se abre con cremallera y es ideal para bebés recién nacidos (Newborn). ¡La marca Carter's garantiza calidad y suavidad!",
        precio: "500 cup",
        foto: "mameluco-pollito.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 42,
        nombre: "Mameluco de oso verde",
        descripcion: "🐻 Aventura en el bosque. Mameluco de manga larga color verde militar con un tierno diseño de oso. Tiene unas orejitas y unas mangas de color gris súper suaves. El diseño dice 'SAVE OUR TREES PLEASE!'. ¡Calientito y muy original!",
        precio: "500 cup",
        foto: "mameluco-oso-verde.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 43,
        nombre: "Mameluco de tirantes Mickey Mouse",
        descripcion: "🐭 ¡Mickey para el verano! Mameluco sin mangas en color gris jaspeado con estampado all-over de Mickey Mouse en blanco, negro y rojo. Tiene botones en los hombros. Súper fresco, cómodo y con la licencia original de Disney. ¡Perfecto para los días de calor!",
        precio: "500 cup",
        foto: "mameluco-mickey.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 44,
        nombre: "Mameluco de elefantes",
        descripcion: "Dulce y esponjoso. Mameluco de felpa con estampado de elefantes y lunares de colores (verde, naranja, azul). Se abrocha completamente al frente con broches de presión, ¡súper práctico para cambiar al bebé! El tejido es de tacto muy suave.",
        precio: "500 cup",
        foto: "mameluco-elefante.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 45,
        nombre: "Mameluco de animales",
        descripcion: "🦒 ¡Aventura salvaje! Mameluco estampado con animales de la selva (jirafas, leopardos, elefantes) en tonos azules sobre fondo crema. Se abre totalmente con broches metálicos. Muy fresco y cómodo para el día a día.",
        precio: "500 cup",
        foto: "mameluco-animales.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 46,
        nombre: "Mameluco gris de bosque (Cierre de cremallera)",
        descripcion: "🌲 Bosque y aventuras. Mameluco de manga larga en color gris con un estampado de árboles y animalitos. Tiene cierre de cremallera central para vestirlo súper rápido y un botón en el cuello para proteger la barbilla. Suave y calientito.",
        precio: "500 cup",
        foto: "mameluco-bosque.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 47,
        nombre: "Bata de baño de ratoncito",
        descripcion: "🌟 ¡Abrígate con estilo! Preciosa bata de baño tipo toalla a rayas verde menta y blanco. Tiene una capucha adorable y un ratoncito de peluche aplicado en el frente. Perfecta para después del baño o para mantener calentito al bebé. ¡Suave, absorbente y en excelente estado!",
        precio: "300 cup",
        foto: "bata-ratoncito.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 48,
        nombre: "Chaleco azul acolchado",
        descripcion: "🧥 Calidez y estilo urbano. Chaleco sin mangas color azul marino con textura acolchada (tipo rombos). Tiene cierre de cremallera crema y un bolsillo con botón. Ideal para las medias estaciones o para poner encima de una sudadera. ¡Comodísimo y muy moderno!",
        precio: "400 cup",
        foto: "chaleco-azul.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 49,
        nombre: "Pantalón de pelo (Polar esponjoso)",
        descripcion: "🐑 Suavidad extrema. Pantaloncito de felpa súper esponjoso en color amarillo claro. ¡Abriga muchísimo y es como una nube! Tiene un diseño de cintura y piernas anchas para que el bebé esté súper cómodo y calentito en invierno.",
        precio: "300 cup",
        foto: "pantalon-pelo.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 50,
        nombre: "Mameluco blanco con lazo",
        descripcion: "👶 Elegante para casa. Mameluco de algodón blanco. Tiene un bordado dorado precioso en el pecho y cintas para atar. Perfecta para el momento de dormir o para salir del baño. Puro algodón, súper suave con la piel del bebé.",
        precio: "500 cup",
        foto: "bata-blanca.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 51,
        nombre: "Suéter verde acolchado",
        descripcion: "🍂 Calidez con estilo. Suéter de manga larga en color verde con textura acolchada (tipo rombos). Tiene cuello redondo, puños y bajo de canalé. Ideal para las mañanas frescas de otoño o para poner sobre un body. ¡Súper cómodo y abrigador!",
        precio: "500 cup",
        foto: "sueter-gris.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 52,
        nombre: "Chaleco con capucha de Mapache",
        descripcion: "🦝 ¡El más tierno de la guardería! Chaleco acolchado con capucha de color gris que parece un mapache. Tiene caritas de mapache aplicadas en las bolsas delanteras y una capucha forrada en color oscuro. Calientito, original y súper adorable.",
        precio: "500 cup",
        foto: "chaleco-mapache.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },
    {
        id: 53,
        nombre: "Pantalón de estrellas azules",
        descripcion: "🌟 Cómodo y estrellado. Pantalón de algodón en color azul con un estampado de estrellas azules. Tiene cintura elástica súper suave y un diseño holgado y fresquito para que el bebé se mueva con total libertad. ¡Perfecto para combinar con cualquier body!",
        precio: "400 cup",
        foto: "pantalon-estrellas.jpg",
        tieneFoto: true,
        categoria: "mamelucos"
    },

    // ============================================
    // FILTRO: GORROS Y MEDIAS (Gorros, Calcetines, Manoplas)
    // ============================================
    {
        id: 54,
        nombre: "Lote de 11 pares de calcetines",
        descripcion: "🧦 ¡Paquete de calcetines! Lote de calcetines para bebé en perfecto estado. Incluye diseños de rayas, animalitos, estrellas y colores sólidos (azul, crema, gris y naranja). ¡Un básico que nunca sobra! Se venden juntos.",
        precio: "1000 cup",
        foto: "lote-11-calcetines.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 55,
        nombre: "Lote de 7 calcetines variados",
        descripcion: "🧦 ¡Todo el mes con calcetines! Lote de 8 pares de calcetines con muchísimos diseños: coches, dinosaurios, rayas, color rojo sólido, animalitos tiernos y más. Todos en excelente estado, súper suaves y elásticos para no marcar el pie del bebé.",
        precio: "800 cup",
        foto: "lote-7-calcetines.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 56,
        nombre: "Lote de 10 calcetines variados",
        descripcion: "🎁 Lote Súper Pack de calcetines. 10 pares de calcetines con diseños súper llamativos: ranitas verdes, estrellas rojas, ositos, rayas, mariposas, un lindo panda y más. Todos en buen estado, perfectos para tener siempre de reserva.",
        precio: "1000 cup",
        foto: "lote-10-calcetines.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 57,
        nombre: "Lote de 5 calcetines nuevos",
        descripcion: "🧦 ¡Nuevos con etiqueta! Paquete original de la marca Duck Duck Goose. Vienen en diseño marinero (rayas, estrellas y anclas) en tonos azules, blancos y rojos. Son talla 0-6 meses y están completamente nuevos, sin estrenar.",
        precio: "500 cup",
        foto: "calcetines-marinero.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 58,
        nombre: "Lote de accesorios Recién Nacido (Gorro y 3 manoplas)",
        descripcion: "🍼 Set completo para recién nacido. Incluye un gorro de algodón blanco con nudo en la parte superior y 3 pares de manoplas antiarañazos: un par blanco, un par con estampado de elefantitos y un par verde de tejido acanalado. ¡Todo súper suave y perfecto para proteger al bebé!",
        precio: "250 cup",
        foto: "lote-gorro-manoplas.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 59,
        nombre: "Lote de gorros y manoplas de osito",
        descripcion: "🐻 ¡Ternura invernal! Lote de 2 sets: Uno de gorro a rayas grises y blancas con su par de manoplas a juego. Y otro set de gorro tipo 'orejitas de osito' en gris y azul con carita bordada y su par de manoplas de felpa. ¡Calientitos y adorables!",
        precio: "400 cup",
        foto: "lote-gorros-manoplas.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 60,
        nombre: "Lote de 5 gorros variados",
        descripcion: "🧢 Paquete de gorritos para toda ocasión. Lote de 5 gorros de algodón: uno gris a rayas, uno blanco con estrellitas, uno blanco con nubes, uno azul marino con la frase 'Beep Vroom' y vehículos, y uno beige con animalitos de la selva (cebras, leones). ¡Todos suaves y elásticos!",
        precio: "400 cup",
        foto: "lote-5-gorros.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 61,
        nombre: "Lote de 4 gorros de algodón",
        descripcion: "🎨 Colores y diversión. Lote de 4 gorros: uno celeste con camiones, uno crema con montañas geométricas de colores, uno blanco con estrellas y otro blanco con orejitas y estrellas. Perfectos para el día a día y súper cómodos.",
        precio: "300 cup",
        foto: "lote-4-gorros.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 62,
        nombre: "Lote de 5 gorros de algodón (Animalitos)",
        descripcion: "🦊 Dulzura para la cabeza. Lote de 5 gorritos: uno con elefantes y patitos, uno blanco liso, uno de rayas beige y blanco, uno blanco con zorritos naranjas y uno celeste liso. Todos de tejido suave y elástico. ¡Nunca sobran!",
        precio: "400 cup",
        foto: "lote-5-gorros-animales.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },
    {
        id: 63,
        nombre: "Lote de 3 gorros (Gris, Rojo y Spiderman)",
        descripcion: "🕷️ ¡Poderes arácnidos! Lote de 3 gorros de algodón: uno gris jaspeado liso, uno rojo liso y uno espectacular de Spiderman con la máscara y las telarañas. ¡Perfecto para los pequeños súper héroes!",
        precio: "200 cup",
        foto: "lote-gorros-spiderman.jpg",
        tieneFoto: true,
        categoria: "gorros"
    },

    // ============================================
    // FILTRO: CALZADO (Zapatos, Tenis, Sandalias)
    // ============================================
    {
        id: 64,
        nombre: "Zapatos negros de vestir (Talla 4)",
        descripcion: "👞 Elegancia para eventos especiales. Zapatitos negros de vestir en charol (brillantes) con agujetas. Son súper clásicos y perfectos para bodas, eventos o salidas formales. Lo verde en la foto es un reflejo, son nuevos, perfectos para dar sus primeros pasos con estilo.",
        precio: "5000 cup",
        foto: "zapatos-negros-vestir.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 65,
        nombre: "Tenis de Mickey Mouse #1(0-6 meses)",
        descripcion: "🐭 ¡Los favoritos de Disney! Preciosos zapatitos tipo tenis blancos con detalles en azul mezclilla. Tienen la carita de Mickey Mouse en el velcro y agujetas decorativas. La punta es blanca con perforaciones de aire (súper frescos). ¡Ideales para el uso diario y muy fáciles de poner gracias a su doble cierre!",
        precio: "800 cup",
        foto: "tenis-mickey.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 66,
        nombre: "Tenis Fila #1(0-6 meses) (Oferta especial por desgaste)",
        descripcion: "⚠️ ¡OFERTA ESPECIAL POR DESGASTE! Tenis originales de la marca Fila en color blanco con suela azul marino y logo rojo. Nota importante: Tienen la parte trasera del borde de la suela pelada. La parte superior y el interior están impecables. ¡Precio especial por su estado!",
        precio: "300 cup",
        foto: "tenis-fila.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 67,
        nombre: "Zapatitos de lona azul #2(3-6 meses)(Estilo náutico)",
        descripcion: "⚓ Puro estilo marinero. Adorables zapatitos de lona azul claro con agujetas gruesas color crema, punta redonda y suela blanca. Son súper cómodos, flexibles y perfectos para combinar con pantalones vaqueros o shorts. ¡Un clásico que nunca falla!",
        precio: "800 cup",
        foto: "zapatos-lona-azul.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 68,
        nombre: "Sandalias de mezclilla #2(3-6 meses)(Estilo pescador)",
        descripcion: "☀️ Listos para el verano. Sandalias estilo pescador en tela de mezclilla azul con estampado de rayas en el interior. Tienen doble velcro para un ajuste perfecto y una suela antiderrapante. Muy frescas para los días de calor y súper fáciles de calzar.",
        precio: "800 cup",
        foto: "sandalias-mezclilla.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 69,
        nombre: "Tenis beige con punta blanca #2(3-6 meses)",
        descripcion: "🤍 Minimalistas y versátiles. Tenis de tela color beige/arena con punta de goma blanca. De diseño sencillo y limpio, combinan absolutamente con todo. Son ligeros, con cierre de agujetas elásticas para no batallar al ponerlos.",
        precio: "800 cup",
        foto: "tenis-beige.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 70,
        nombre: "Tenis bicolor #2(3-6 meses)(Marrón/Gris)",
        descripcion: "🎨 Diseño moderno. Tenis con la parte superior en color marrón/rosa empolvado y la punta y suela en color gris. Tienen agujetas planas color beige y un interior súper acolchado. ¡Ideales para el entretiempo y con un look muy actual!",
        precio: "800 cup",
        foto: "tenis-bicolor.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 71,
        nombre: "Tenis blancos de velcro (#16)",
        descripcion: "⚪ Comodidad garantizada. Tenis blancos de piel suave con doble cierre de velcro (súper prácticos para que no se los quiten). En excelente estado, perfectos para el día a día.",
        precio: "1500 cup",
        foto: "tenis-velcro.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 72,
        nombre: "Tenis grises de malla # 15",
        descripcion: "🌬️ ¡Súper frescos! Tenis de malla (tipo tela de red) en color gris con cierres de velcro anchos. Su diseño de malla los hace perfectos para primavera y verano, evitando el sudor en los piececitos. Ligeros, flexibles y en muy buen estado.",
        precio: "1500 cup",
        foto: "tenis-grises-malla.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 73,
        nombre: "Sandalias azul marino de piel #12",
        descripcion: "🩵 Duraderas y elegantes. Sandalias de piel (material sintético de calidad) en azul marino con costuras visibles en hilo blanco y cierre lateral. Tienen una plantilla interna súper suave y acolchada. ¡Perfectas para proteger los deditos en el verano!",
        precio: "1000 cup",
        foto: "sandalias-azules.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 74,
        nombre: "Zapatitos de mezclilla con cordón café (6-12 meses)",
        descripcion: "🏇 ¡Marca premium! Adorables zapatitos. Son de tela vaquera tipo mezclilla de dos tonos con agujetas de color café y el clásico logo en la plantilla. Estilo casual y súper tierno.",
        precio: "800 cup",
        foto: "zapatos-lauren.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 75,
        nombre: "Sandalias de ante color durazno (6-12 meses)",
        descripcion: "🍑 Verano con estilo. Sandalias de ante sintético en un tono durazno/rosa suave. Tienen un diseño con múltiples tiras y un cierre de velcro en el tobillo. ¡Súper cómodas y lindas para los días de calor!",
        precio: "500 cup",
        foto: "sandalias-ante.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },
    {
        id: 76,
        nombre: "Lote de 4 pares de zapatitos y escarpines",
        descripcion: "👟 ¡Piezas llenas de ternura! Lote de 4 pares de zapatitos y escarpines para bebé. Incluye unos calientitos azules de oso con peluche, unos blancos de gatito/conejo súper suaves, unos blancos de tejido con flores y unos calcetín-tejido azul claro. ¡Perfectos para proteger los piececitos con mucho estilo!",
        precio: "600 cup",
        foto: "lote-zapatitos-bebe.jpg",
        tieneFoto: true,
        categoria: "calzado"
    },

    // ============================================
    // FILTRO: ACCESORIOS (Biberones, Baberos, Toallas, Chupetes, Sets)
    // ============================================
    {
        id: 77,
        nombre: "Pack de 3 biberones Disney Mickey Mouse",
        descripcion: "🍼 ¡Nuevos en paquete! Pack original de 3 biberones de 9oz de Disney Baby con estampados de Mickey Mouse. Vienen sellados de fábrica, con tapas de colores (celeste y blanco). Libres de BPA, perfectos para regalar o para tener de repuesto.",
        precio: "3000 cup",
        foto: "pack-biberones-disney.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 78,
        nombre: "Lote de 3 biberones Dr. Brown's",
        descripcion: "🍼 ¡La marca favorita de los papás! Lote de 3 biberones Dr. Brown's con sistema anticólicos. Incluye dos biberones grandes y uno pequeño, nuevos. ¡Calidad garantizada para la alimentación del bebé!",
        precio: "4000 cup",
        foto: "lote-dr-browns.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 79,
        nombre: "Lote de 2 biberones",
        descripcion: "🍼 Lote de biberones súper prácticos. Incluye un biberón pequeño (5 oz) de la marca Little Steps con dibujos de nubes y arcoíris nuevo, y otro biberón de color verde azulado translúcido en excelente estado, resistente.",
        precio: "800 cup",
        foto: "lote-biberones.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 80,
        nombre: "Lote de 3 baberos (Dinosaurio, Rayas y Carita)",
        descripcion: "🦖 ¡A comer sin ensuciarse! Lote de 3 baberos súper prácticos: uno de rayas blanco y negro con un dinosaurio bordado (¡Grrr!), uno de rayitas finas grises de la marca Carter's, y uno blanco con una tierna carita de animalito. Todos con cierre de velcro fácil de usar.",
        precio: "300 cup",
        foto: "lote-baberos.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 81,
        nombre: "Lote de 4 baberos dobles",
        descripcion: "🎀 Absorción total. Lote de 4 baberos de doble capa (tipo tela de toalla) en tonos azul marino, beige, gris y verde menta. Son de la marca TheAZBaby, súper absorbentes, ajustables con botones de metal y perfectos para la etapa de la dentición.",
        precio: "400 cup",
        foto: "lote-baberos-dobles.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 82,
        nombre: "Lote de 3 baberos con animales",
        descripcion: "🐶 Babiando con estilo. Lote de 3 baberos de toalla: uno celeste con rayas y Mickey Mouse, otro de rayas multicolor con un perrito azul (texto 'Time to Eat'), y uno blanco con una carita de perrito beige aplicada. Súper suaves, absorbentes y con broche de botón.",
        precio: "300 cup",
        foto: "lote-baberos-animales.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 83,
        nombre: "Babero de toalla de Toy Story (Woody)",
        descripcion: "🤠 ¡Yee-haw! Diversión de vaqueros. Babero de toalla absorbente en azul claro con un súper colorido estampado de Woody montando a caballo y la frase 'I'm in Charge'. Tiene un cuello circular con borde rojo. ¡Perfecto para la hora de la comida de los pequeños fans de Toy Story!",
        precio: "100 cup",
        foto: "babero-toy-story.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 84,
        nombre: "Lote de 3 baberos (Caracol, Estrellas y Calvin Klein)",
        descripcion: "👶 Trío de baberos súper prácticos. Incluye: 1) Azul con ribete amarillo y un tierno caracol bordado. 2) Azul marino con estrellas blancas. 3) Blanco con estampado de nubes y lunas de la marca Calvin Klein. Todos de algodón suave, absorbentes y con cierre de botón o velcro.",
        precio: "300 cup",
        foto: "lote-3-baberos.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 85,
        nombre: "Chupetes en blister (Cohete y Panda)",
        descripcion: "🚀 Set de 2 piezas de la marca Munchkin para bebés. Incluye un chupete de anillo con un cohete espacial en el centro y otro con forma de lazo y un panda. Vienen en su empaque original, libres de BPA. ¡Listos para regalar!",
        precio: "500 cup",
        foto: "set-mordedores.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 86,
        nombre: "Toalla con capucha de Elefante",
        descripcion: "🐘 La hora del baño más tierna. Preciosa toalla con capucha en color gris claro que simula la carita de un elefante, con orejas y trompa en relieve. Perfecta para secar y abrigar al bebé después del baño!",
        precio: "500 cup",
        foto: "toalla-elefante.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 87,
        nombre: "Cobertor de encaje y moños",
        descripcion: "🎀 Elegancia clásica. Hermoso cobertor de algodón blanco con un precioso borde de encaje celeste con diseño de flores. Para niño o niña",
        precio: "800 cup",
        foto: "manta-encaje.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 88,
        nombre: "Paquete de 4 tetinas de silicón (Babyking)",
        descripcion: "🍼 ¡Nuevas en paquete! Paquete original de 4 tetinas de silicón de la marca Babyking. Son de flujo medio y se adaptan a la mayoría de los biberones estándar. Libres de BPA, selladas de fábrica y listas para usar.",
        precio: "600 cup",
        foto: "pack-tetinas.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 89,
        nombre: "Toallitas para bebé (Le bébé FAVORITE)",
        descripcion: "🧴 Suavidad garantizada. Paquete original sellado de toallitas para bebé de la marca Le bébé FAVORITE. Vienen presentadas en un lindo empaque redondo con tela de tul y moño. ¡Perfectas para regalar!",
        precio: "1000 cup",
        foto: "toallitas-regalo.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 90,
        nombre: "Toalla con capucha de Cohete (Nueva con etiqueta)",
        descripcion: "🚀 ¡Nueva y sellada! Toalla con capucha para bebé de la marca Angel of Mine. Es de color blanco con un bordado de cohete azul y tiene el borde con costuras celestes. Es talla Newborn a 6 meses (20x24'). Viene en su empaque original, ¡lista para estrenar!",
        precio: "1000 cup",
        foto: "toalla-cohete.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 91,
        nombre: "Paquete de 2 chupetes de silicón (Babyking)",
        descripcion: "👶 ¡Nuevos en su empaque! Paquete de 2 chupetes de silicón de la marca Babyking. Son de color azul claro, con tetina de silicón suave, para bebés de 0+ meses. Libres de BPA, sellados de fábrica. ¡Un básico que nunca debe faltar!",
        precio: "600 cup",
        foto: "pack-chupetes.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 92,
        nombre: "Set de regalo de Elefantes (10 piezas)",
        descripcion: "🐘 ¡Set de regalo completo! Espectacular set de ajuar de la temática 'Sweet Dreams' con elefantitos. Incluye 10 piezas: sabana/cobija, body, mameluco, gorro, pantalón, babero y manoplas, todo a juego con lunas y estrellas. Perfecto para regalo de baby shower o nacimiento. ¡Pura ternura!",
        precio: "3000 cup",
        foto: "set-elefantes.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 93,
        nombre: "Almohadita cervical de estrellas",
        descripcion: "⭐ ¡Dulces sueños estrellados! Almohadita cervical para bebé en color crema con un hermoso estampado de estrellas en tonos azul marino, celeste y gris. Tiene un diseño ergonómico con una pequeña hendidura en el centro que ayuda a mantener la posición correcta de la cabecita, brindando máximo confort y seguridad. El tejido es súper suave y acogedor, perfecto para la cuna, el moisés o el carrito. ¡Un básico ideal para el descanso del pequeño!",
        precio: "300 cup",
        foto: "almohadita-estrellas.jpg",
        tieneFoto: true,
        categoria: "accesorios"
    },
    {
        id: 94,
        nombre: "Lote de 2 Bodies de Disney (Mickey y Amigos)",
        descripcion: "🏰 ¡Dúo Disney para los fans! Incluye un body rojo de manga corta con un gran estampado de Mickey abrazando a Pluto con estrellas, y un body blanco con la pandilla completa (Donald, Mickey, Pluto y Goofy). Ambos de algodón suave y con botones en la entrepierna. ¡Imprescindibles!",
        precio: "600 cup",
        foto: "lote-bodies-disney.jpg",
        tieneFoto: true,
        categoria: "bodys"
    },
    {
        id: 95,
        nombre: "Body Rosa Palo",
        descripcion: "🌸 Sutil y cómodo. Body de manga corta en un tono rosa palo muy delicado, liso y súper suave. Un básico perfecto para combinar con cualquier prenda.",
        precio: "200 cup",
        foto: "body-rosa-palo.jpg",
        tieneFoto: true,
        categoria: "bodys"
    }
];