const films = [
  {
    id: 1,
    recomendador: "Lucy",
    titulo: "What we do in the shadows",
    descripcion:
      "Serie de TV (2019-Actualidad). Ambientada en Nueva York, sigue a tres vampiros que han sido compañeros de piso durante cientos y cientos de años, y cuenta sus experiencias en ese periodo en un formato de falso documental.",
    pais: "Nueva Zelanda",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt3416742",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/7/70/What_We_Do_in_the_Shadows_poster.jpg",
    plataforma: "Amazon Prime",
    generos: "Comedia",
  },
  {
    id: 2,
    recomendador: "Lucy",
    titulo: "The Way Way Back",
    descripcion:
      "Una antigua estrella del baloncesto caída en desgracia y sumido en el terrible mundo de las adicciones trata de volver al sendero correcto como entrenador de un equipo de instituto cuya mayor peculiaridad es estar compuesto por un variopinto grupo de estudiantes.",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1727388",
    imagen:
      "https://resizing.flixster.com/yZsBTZp054ZFRWmH6HBtixlC530=/206x305/v1.bTsxMTE3NTM5NTtqOzE4MjY0OzEyMDA7ODAwOzEyMDA",
    plataforma: "YouTube Pago",
    generos: "Comedia,Drama",
  },
  {
    id: 3,
    recomendador: "Lucy",
    titulo: "Garden State",
    descripcion:
      "Andrew Largeman (Braff) vuelve a su casa natal, en Nueva Jersey, después de diez años de ausencia para asistir al funeral de su madre. Allí rememora su pasado y conoce a una chica, Samantha (Portman), que quizá pueda cambiar su vida. Largeman, que acaba de dejar los antidepresivos que ha estado tomando durante años, comienza a redescubrirse a sí mismo, lo que incluye enfrentarse a su padre, psicólogo, y ayudar a Samantha a superar sus propios problemas pisicológicos.",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0333766",
    imagen:
      "https://resizing.flixster.com/B0PxyP5c68lg64rD-bdXowiS-Ac=/fit-in/200x296.2962962962963/v1.bTsxMTIwODQ3MTtqOzE4MjY0OzEyMDA7MTIwMDsxNjAw",
    plataforma: "YouTube Pago",
    generos: "Comedia,Drama,Romance",
  },
  {
    id: 4,
    recomendador: "Lucy",
    titulo: "Dans la maison",
    descripcion:
      "Un profesor de literatura francesa, desalentado y hastiado por las insulsas y torpes redacciones de sus nuevos alumnos, descubre entusiasmado que, por el contrario, el chico que se sienta al fondo de la clase, muestra en sus trabajos un agudo y sutil sentido de la observación. Este chico, que se siente extrañamente fascinado por la familia de uno de sus compañeros, escribirá, animado por el profesor, una especie de novela sobre esa familia (y también sobre el profesor), en la que es difícil distinguir entre realidad y ficción. ",
    pais: "Francia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1964624/",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/71JONlVvglL._SL1170_.jpg",
    plataforma: "Filmin",
    generos: "Thriller,Drama",
  },
  {
    id: 5,
    recomendador: "Lucy",
    titulo: "Le premier jour du reste de ta vie",
    descripcion:
      "Repasa cinco días decisivos en la vida de un matrimonio y sus tres hijos, repartidos a lo largo de doce años. Cada uno de los días del film corresponde a un miembro de la familia, cuyos pasos se siguen de la mañana a la noche. Un hijo que se marcha del hogar familiar; una adolescente a punto de perder la virginidad que entra en guerra con su madre; a su vez, en el umbral de una crisis, al aproximarse a los 50 años, un padre taxista que ya no le dirige la palabra a uno de sus hijos, mientras que el otro vive inmerso en sus fantasías amorosas.",
    pais: "Francia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0926759",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYjc3MzI4OTMtMWZjMS00YTkyLThmMDAtMTJhYzViMDk4MmI5XkEyXkFqcGdeQXVyNjcyNjE2OTk@._V1_.jpg",
    plataforma: "N/A",
    generos: "Drama",
  },
  {
    id: 6,
    recomendador: "Loretus",
    titulo: "Submarine",
    descripcion:
      "Oliver Tate (Craig Roberts) es un peculiar chico de 15 años que tiene dos objetivos: impedir que su madre abandone a su padre y encontrarse a sí mismo aunque sea a través de una chica.",
    pais: "Reino Unido",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1440292/",
    imagen:
      "http://es.web.img3.acsta.net/c_215_290/medias/nmedia/18/93/96/48/20290497.jpg",
    plataforma: "Filmin",
    generos: "Comedia,Drama,Romance",
  },
  {
    id: 7,
    recomendador: "Paula",
    titulo: "The Club",
    descripcion:
      "Bajo la atenta mirada de una mujer que los cuida, cuatro sacerdotes viven en una pequeña casa en la localidad de La Boca, comuna de Navidad, Región de O'Higgins, Chile. Todos ellos cometieron actos censurables y se encuentran en este retirado hogar castigados por las autoridades eclesiásticas. La mujer es una monja y la casa sirve de escondite para sacerdotes pecadores.",
    pais: "Chile",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt4375438/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTY2OTE4NTUzMl5BMl5BanBnXkFtZTgwNDY3NzA1NzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    plataforma: "Netflix",
    generos: "Comedia,Thriller,Drama",
  },
  {
    id: 8,
    recomendador: "Lucy",
    titulo: "Taxi Teherán",
    descripcion:
      "Un taxi recorre las vibrantes y coloridas calles de Teherán. Pasajeros muy diversos entran en el taxi y expresan abiertamente su opinión mientras charlan con el conductor, que no es otro que el director del film, Jafar Panahi. Su cámara, colocada en el salpicadero del vehículo, captura el espíritu de la sociedad iraní a través de este viaje.",
    pais: "Irán",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt4359416/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Taxi_poster.png/220px-Taxi_poster.png",
    plataforma: "Filmin",
    generos: "Comedia,Drama",
  },
  {
    id: 9,
    recomendador: "Sara",
    titulo: "Lion",
    descripcion:
      "Saroo Brierley es un niño que con tan sólo cinco años se perdió en las calles de Calcuta, a miles de kilómetros de casa. Tras un largo viaje acabó siendo adoptado por una pareja australiana. Veinticinco años después, con la única ayuda de Google Earth, Saroo intentará encontrar a su familia biológica.",
    pais: "Australia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt3741834/",
    imagen: "https://comentamoscine.files.wordpress.com/2017/02/lion.jpg",
    plataforma: "YouTube Pago",
    generos: "Drama",
  },
  {
    id: 10,
    recomendador: "Sara",
    titulo: "Force Majeure",
    descripcion:
      "Philippe y Daniel deciden irse de vacaciones el sureste asiático, dónde conocen a Hans, un europeo afincado en la zona que les hará de guía y anfitrión. Una vez las vacaciones han terminado, antes de salir de volver a París, deciden hacerle un pequeño obsequio a Hans: un pequeño trozo de hachís de la zona. 18 meses después, un abogado de Amnístia Internacional presenta un informe en el cual se detalla que Hans fue arrestado por posesión de drogas y posteriormente fue condenado a muerte. Entonces los dos franceses verán que hay una oportunidad de salvar a Hans confesando que fueron ellos los que se hicieron con el hachís, con lo cual serían ellos los que pagarían la consecuencias.",
    pais: "Suecia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt2121382",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/8/89/Force_Majeure_poster.jpg",
    plataforma: "Filmin",
    generos: "Comedia,Drama,Queer",
  },
  {
    id: 11,
    recomendador: "Clara",
    titulo: "El Ángel",
    descripcion:
      "Carlitos es un joven de diecisiete años con fama de estrella de cine, rizos rubios y cara de bebé. Ya en su primera adolescencia manifestó su verdadera vocación: ser un ladrón. Cuando conoce a Ramón en su nueva escuela, Carlitos se siente inmediatamente atraído por él y quiere llamar su atención. Juntos se embarcarán en un viaje de descubrimientos, amor y crimen. Debido a su apariencia angelical, la prensa llama a Carlitos 'El ángel de la muerte'. Llama la atención por su belleza, y se convierte en una celebridad de la noche a la mañana. En total se cree que cometió más de cuarenta robos y once asesinatos. Hoy, después de más de cuarenta y cinco años en la cárcel, Carlos Robledo Puch es el preso que más tiempo lleva en prisión en la historia de Argentina.",
    pais: "Argentina",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt7204348/",
    imagen:
      "https://www.filo.news/export/sites/claro/img/2018/07/03/image005.jpg_146221291.jpg",
    plataforma: "Netflix",
    generos: "Comedia,Thriller,Drama",
  },
  {
    id: 12,
    recomendador: "Julia",
    titulo: "La piedra de la paciencia",
    descripcion:
      "Jean-Claude Carrière coescribe la adaptación de la novela de Atiq Rahimi, también guionista y director, que narra la historia de una mujer, en un país de Oriente Medio, que tiene que quedarse en casa a cuidar de su marido, herido en una reyerta y en estado de coma. La mujer, joven y con dos hijas, alterna el tiempo que pasa en la casa, evitando a las guerrillas que siguen luchando en la calle, con el tiempo que pasa con su tía, una mujer liberada que se queda a cargo de las niñas.",
    pais: "Afganistán",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1638353/",
    imagen:
      "http://es.web.img3.acsta.net/c_215_290/pictures/210/301/21030173_20130822165100601.jpg",
    plataforma: "Filmin",
    generos: "Drama",
  },
  {
    id: 13,
    recomendador: "Clara",
    titulo: "Killing Eve",
    descripcion:
      "Serie de TV (2018-Actualidad). Una asesina en serie y una detective se enfrentan en una persecución a nivel internacional en la que ambas mujeres se obesionarán la una con la otra. Por un lado está Villanelle (Jodie Comer), una asesina piscópata sumida en el lujo de su profesión, y por otro lado, Eve Polastri (Sandra Oh), una agente del MI6. Cansada y aburrida de pasarse los días sentada en su escritorio, la perspicaz criminóloga Eve busca más acción en su vida profesional y un día se encuentra al mando de un grupo secreto cuyo objetivo es dar caza a Villanelle.",
    pais: "Estados Unidos",
    formato: "Serie",
    linkito: "https://www.imdb.com/title/tt7016936/",
    imagen:
      "https://unsoloclic.info/wp-content/uploads/2019/05/Killing-Eve-Season-2.jpg",
    plataforma: "HBO",
    generos: "Comedia,Thriller,Queer",
  },
  {
    id: 14,
    recomendador: "Mani",
    titulo: "Capharnaúm",
    descripcion:
      "Ante un tribunal, Zain, un niño de 12 años, declara ante el juez. -¿Por qué has demandado a tus propios padres? -Por darme la vida.",
    pais: "Líbano",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt8267604/",
    imagen:
      "https://m.cinesargentinos.com.ar/poster/8201-cafarnaum.jpg?1549384117",
    plataforma: "YouTube Pago",
    generos: "Drama",
  },
  {
    id: 15,
    recomendador: "Clara",
    titulo: "Juste la Fin du Monde",
    descripcion:
      "Tras doce años de ausencia, un joven escritor regresa a su pueblo natal para anunciar a su familia que pronto morirá. Vive entonces un reencuentro con su entorno familiar, una reunión en la que las muestras de cariño son sempiternas discusiones y la manifestación de rencores y reproches. Adaptación de una obra teatral de Jean-Luc Lagarce.",
    pais: "Francia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt4645368/",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtsZ7V2HrrH8h4kK2vgmdK-lYZuuA0n857-6IKkbyShWhBg9u",
    plataforma: "Filmin",
    generos: "Drama,Queer",
  },
  {
    id: 16,
    recomendador: "Sara",
    titulo: "On body and soul",
    descripcion:
      "María comienza a trabajar como supervisora en un matadero de Budapest, pero pronto comienzan a surgir cotilleos y rumores sobre ella. Durante el almuerzo opta siempre por sentarse sola, y es consciente de sus deberes y obligaciones, con un estricto apego a las normas. Su mundo se compone de cifras y datos impresos en su memoria desde la primera infancia. Endre, su jefe, es un tipo tranquilo. Ambos empezarán a conocerse lentamente.",
    pais: "Hungría",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt5607714/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTA1NmIxMmEtNTdhNS00MmVkLWI1ZTEtN2FhNTU2NDAzYzNhXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_UY268_CR3,0,182,268_AL_.jpg",
    plataforma: "YouTube Pago",
    generos: "Thriller,Drama,Romance,Documental",
  },
  {
    id: 17,
    recomendador: "Clara",
    titulo: "El diablo es magnífico",
    descripcion:
      "Manu (33), inmigrante trans chilena, cansada de la hostilidad e inestabilidad de París, decide volver a Chile tras diez años en Francia. En sus últimos días recorrerá distintas rutas que hablan de amor y sexo. Daniel (57) le propondrá retirarse juntos, casarse y resolver su problema de papeles. Pero cuando Manu cree que su futuro quizás no sea romántico sino filial, aparecerá un viajero que devolverá el romanticismo a su vida.",
    pais: "Chile",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt6582868/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNGQxNDgwZjgtOTZjYS00ZTM3LThkZjgtMzQ4NGNiZjRjNTk1XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    plataforma: "N/A",
    generos: "Comedia,Drama,Queer",
  },
  {
    id: 18,
    recomendador: "Lucy",
    titulo: "Free Solo",
    descripcion:
      "Documental que narra la hazaña de Alex Honnold al escalar sin ningún tipo de ayuda la formación rocosa vertical 'El Capitán', ubicada dentro del Parque Nacional Yosemite (Mariposa County, Estados Unidos), de unos 900 metros de altura. Fue el primer escalador en lograrlo.",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt7775622/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjMwYjcwNWQtNTQ5YS00MzVlLTkxYzMtNDIwZWIxZTE4Zjg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    plataforma: "N/A",
    generos: "Drama,Documental",
  },
  {
    id: 19,
    recomendador: "Lucy",
    titulo: "Incendies",
    descripcion:
      "Jeanne y Simon Marwan son dos gemelos que viven en Canadá cuya madre Nawal, tras pasar sus últimos días sin hablar, acaba de fallecer. En el acto de apertura del testamento, el notario les da dos cartas que deben ser entregadas a un padre al que creían muerto y a un hermano cuya existencia desconocían. Jeanne decide entonces emprender un viaje al Líbano para intentar localizarlos y encontrar respuestas a su existencia, pero Simon no quiere saber nada del tema... Basada en una obra de teatro de Wajdi Mouawad.",
    pais: "Canadá",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1255953/",
    imagen:
      "https://cinepsicoanalisisycultura.files.wordpress.com/2016/11/62.jpg?w=648",
    plataforma: "Filmin",
    generos: "Thriller,Drama",
  },
  {
    id: 20,
    recomendador: "Julia",
    titulo: "God's Own Country",
    descripcion:
      "Johnny Saxby es un joven granjero de Yorkshire que intenta evadirse de sus problemas con el alcohol y el sexo. Cuando llega al pueblo durante la primavera un inmigrante rumano para trabajar en la cría de ovejas, su visión de la vida cambiará de forma radical.",
    pais: "Reino Unido",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt5635086/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNjRhYzk2NDAtYzA1Mi00MmNmLWE1ZjQtMDBhZmUyMTdjZjBiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    plataforma: "YouTube Pago",
    generos: "Drama,Queer",
  },
  {
    id: 21,
    recomendador: "Anonymous",
    titulo: "Dogman",
    descripcion:
      "El dueño de una peluquería canina a las afueras de Roma se deja influenciar por un delincuente local hasta que su vida personal se complica y decide tomar las riendas de la situación.",
    pais: "Italia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt6768578/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Dogman_poster.png/220px-Dogman_poster.png",
    plataforma: "Movistart+",
    generos: "Thriller,Drama",
  },
  {
    id: 22,
    recomendador: "Julia",
    titulo: "Weekend",
    descripcion:
      "El largo encuentro de fin de semana de un homosexual (Tom Cullen) con un artista (Chris New) cambia su vida para siempre de algunas formas inesperadas.",
    pais: "Reino Unido",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1714210/",
    imagen:
      "http://es.web.img3.acsta.net/c_215_290/medias/nmedia/18/95/31/68/20396213.jpg",
    plataforma: "Filmin",
    generos: "Queer,Drama",
  },
  {
    id: 23,
    recomendador: "Paula",
    titulo: "Gloria",
    descripcion:
      "Gloria Cumplido (Paulina García) tiene 58 años y está sola en la vida. Para compensar el vacío, llena sus días de actividades y por las noches busca el amor en el mundo de las fiestas para solteros adultos, donde solo consigue perderse en una serie de aventuras sin sentido. Esta frágil felicidad en la que vive se altera cuando conoce a Rodolfo (Sergio Hernández), un hombre de 65 años, recientemente separado, que se obsesiona con ella. Gloria comienza un romance, pero éste se complica por la enfermiza dependencia de Rodolfo hacia sus hijas y su ex mujer. Esta relación, a la que Gloria se entrega porque intuye que podría ser la última, acabará por hacerla estrellarse contra la cruel realidad del mundo. Gloria deberá reconstruirse para enfrentar con nuevas fuerzas su definitiva entrada a la vejez.",
    pais: "Chile",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt2425486/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Gloria_poster.jpg/220px-Gloria_poster.jpg",
    plataforma: "YouTube Pago",
    generos: "Drama,Comedia",
  },
  {
    id: 24,
    recomendador: "Anonymous",
    titulo: "Midnight Traveler",
    descripcion:
      "En el año 2015, el director afgano Hassan Fazili y su mujer Fatima Hussaini recibieron amenazas de muerte por parte de los talibanes. Junto a sus dos hijas, Nargis y Zahra, se vieron obligados a huir de su tierra natal hacia Europa para protegerse de un posible ataque. El viaje, que duraría varios años, fue filmado en vídeo por la familia, algo que les ayudaría a superar los momentos más difíciles que vivieron en los distintos campos de refugiados en los que se tuvieron que alojar durante algunas etapas de su travesía. Pese a los problemas, los padres no perdieron nunca su sentido de la humanidad. El resultado de su sufrimiento se plasma en un documental que sirve como reflexión no sólo del terrorismo, sino también de los lazos familiares que vinculan a las familias que se han visto obligadas a abandonar sus hogares presa del miedo y del terror.",
    pais: "Rusia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt8923500/",
    imagen:
      "https://www.docandfilm.com/wp-content/uploads/2015/11/P_1871-440x656.jpg",
    plataforma: "N/A",
    generos: "Drama",
  },
  {
    id: 25,
    recomendador: "Blanca",
    titulo: "Brief encounter",
    descripcion:
      "Laura Jesson es un ama de casa algo aburrida de la rutina que vive con su marido y familia. Una vez a la semana, suele ir a la ciudad de compras. En uno de esos viajes rutinarios, Laura coincide con el Dr. Alec Harvey en la sala de espera de la estación de ferrocarril. Ambos son de mediana edad, casados y tienen dos hijos cada uno. Comienzan a hablar, y tras disfrutar cada uno de la compañía del otro, ambos continúan reuniéndose semanalmente para tomar café en la sala de espera de la estación mientras esperan sus respectivos trenes de regreso a casa. Pero pronto ambos se dan cuenta de que su relación inocente y casual se está convertiendo en un amor tan intenso como prohibido.",
    pais: "EEUU",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0037558/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYWQ0MGNjOTYtMWJlNi00YWMxLWFmMzktYjAyNTVkY2U1NWNhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    plataforma: "Filmin",
    generos: "Romance,Documental,Drama",
  },
  {
    id: 26,
    recomendador: "Blanca",
    titulo: "Oleg y las raras artes",
    descripcion:
      "A los 89 años, Oleg Nikolaevich Karavaichuk sigue siendo una figura controvertida y enigmática para la cultura rusa. ¿Quién es ese hombre que parece sacado de un cuento de Gogol? ¿Es acaso un siervo del Zar Nicolás II a quien le fue confiado el piano del palacio para mantener vivo el espíritu de otros tiempos? Oleg desafía con su arte la identidad de su país transformándose y reinventándose a cada instante. Nacido en 1927, Oleg fue un niño prodigio que tocó el piano para Stalin, fue alumno del Conservatorio de Leningrado y, a lo largo de su carrera, escribió música principalmente para teatro y cine -por ejemplo, para Paradjanov y Muratova-. En Rusia es admirado por su música y su forma de tocar, pero también por su singular y excéntrica personalidad.",
    pais: "España",
    formato: "Documental",
    linkito: "https://www.imdb.com/title/tt5489948/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZmRmNDI4ZDMtZTMyNy00MDM5LWE0NjAtMGZkZTFmYzUzZGY5XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    plataforma: "Filmin",
    generos: "Documental,Biográfico",
  },
  {
    id: 27,
    recomendador: "Blanca",
    titulo: "La mujer de arena",
    descripcion:
      "Un entomólogo en busca de insectos en un desierto de arena se ve de repente atrapado conviviendo con una mujer que vive sola en una vieja casa, y con la que establecerá una extraña relación.",
    pais: "Japón",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0058625/",
    imagen:
      "https://http2.mlstatic.com/la-mujer-de-la-arena-hiroshi-teshigahara-pelicula-dvd-D_NQ_NP_761096-MLM28975843988_122018-F.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 28,
    recomendador: "Blanca",
    titulo: "Konopielka",
    descripcion:
      "Kaziuk es un testarudo campesino que vive con su esposa embarazada en una aldea. Un día varios funcionarios públicos llegan a su apacible pueblo para promover la introducción de energía eléctrica, el desarrollo y la educación, y al día siguiente se encuentra hospedando a una maestra que provoca fantasías eróticas en él...",
    pais: "Polonia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0085807/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNGUzYzBlMTgtODQ5OC00NDdmLWIzN2ItNTNjOGQzMjhlYTllXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 29,
    recomendador: "Blanca",
    titulo: "Sayat Nova",
    descripcion:
      "Biografía del trovador y poeta armenio del siglo XVIII Sayat Nova. En lugar de hacer una narración lineal, el director se encarga de realizar una serie de cuadros vivientes que representan episodios importantes de la vida del poeta en clave simbólica: su infancia, su juventud, su entrada a un monasterio, o su enfrentamiento con el ángel de la muerte. Estos capítulos están desarrollados a partir de fragmentos de sus obras, los cuales aparecen en intertítulos o se escuchan mediante una voz en off.",
    pais: "URSS",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0063555/",
    imagen: "https://www.chisholm-poster.com/large/CL45414.jpg",
    plataforma: "Filmin",
    generos: "Thriller",
  },
  {
    id: 30,
    recomendador: "Blanca",
    titulo: "Soy curiosa",
    descripcion:
      "Censurada en numerosos países, 'Soy Curiosa' de Vilgot Sjöman es una de las películas más controvertidas del cine sueco. Este destacado documento sobre la sociedad sueca durante la revolución sexual ha sido catalogado como obsceno y revolucionario. Soy Curiosa nos cuenta la historia de Lena, una insistente y rebelde joven y su cruzada personal por entender la condiciones sociales y políticas en Suecia en los años sesenta, así como su determinación de explorar su propia identidad sexual. Soy curiosa rompe en pedazos los tabúes y traspasa la línea que separa realidad y ficción. Por primera vez podemos ver esta película tal como la pensó su director: dos películas en paralelo, con los mismos personajes y la misma historia... Aunque dos películas diferentes.",
    pais: "Suecia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0061834/",
    imagen: "https://www.uv.es/capelo/soy_curiosa.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 31,
    recomendador: "Blanca",
    titulo: "Smithereens",
    descripcion:
      "Una adolescente de Nueva Jersey decide hacer fortuna dentro de la emergente escena punk neoyorkina. Así conoce a un joven que vive en una caravana y con el que mantiene una estrecha amistad.",
    pais: "EEUU",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0084698/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/DVD_cover_of_Smithereens.jpg/220px-DVD_cover_of_Smithereens.jpg",
    plataforma: "YouTube Sin Subtitulos",
    generos: "Drama,Romance,Comedia",
  },
  {
    id: 32,
    recomendador: "Blanca",
    titulo: "The House Holder",
    descripcion:
      "Un maestro de escuela hindú usa un romance con una mujer americana como un ejemplo de la necesidad por la responsabilidad en el matrimonio.",
    pais: "India",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0057162/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/The_Householder%2C_1963_English_film.jpg/220px-The_Householder%2C_1963_English_film.jpg",
    plataforma: "YouTube Sin Subtitulos",
    generos: "Romance,Drama",
  },
  {
    id: 33,
    recomendador: "Blanca",
    titulo: "John and Mary",
    descripcion:
      "John (Dustin Hoffman) conoce a Mary (Mia Farrow) en un bar para solteros de Nueva York. Ambos simpatizan y esa misma noche se acuestan juntos, pero a la mañana siguiente es cuando empiezan a conocerse realmente... ",
    pais: "EEUU",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0064513/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/John_and_mary_poster.jpg/220px-John_and_mary_poster.jpg",
    plataforma: "YouTube Sin Subtitulos",
    generos: "Romance,Drama",
  },
  {
    id: 34,
    recomendador: "Blanca",
    titulo: "De amor se vive",
    descripcion:
      "La película se divide en varias secciones, dedicadas a diversos aspectos y formas de vida, el amor, la ternura, y la sensualidad. El documental es un resumen de más de 9 horas de entrevistas a una madre, un niño, un transexual, un travesti y una prostituta. Cada uno de ellos explica en sus propias palabras su forma de ver la vida.",
    pais: "Italia",
    formato: "Documental",
    linkito: "https://www.imdb.com/title/tt0167863/",
    imagen:
      "https://www.bacanalnica.com/wp-content/uploads/images/stories/blog/administrator/ijorge/deamorsevive2.jpg",
    plataforma: "N/A",
    generos: "Queer,Drama",
  },
  {
    id: 35,
    recomendador: "Blanca",
    titulo: "Sed de amor",
    descripcion:
      "Adaptación de la novela de Yukio Mishima, 'Sed de amor', un tenso drama psicológico sobre una joven mujer que debe lidiar con varios problemas familiares.",
    pais: "Japón",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0060082/",
    imagen:
      "https://s3.amazonaws.com/criterion-production/films/f76173d3f5473423552f4b424ded54d5/So7htIvAtFIwFKJsuv6yCcb8CYU7vr_large.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 36,
    recomendador: "Blanca",
    titulo: "Un chant d'amour",
    descripcion:
      "Dos presos en celdas contiguas tratan de pasarse por las rejas de la ventana una guirnalda de flores, mientras un carcelero observa sus movimientos. No logran intercambiar el objeto, por lo que la frustración les lleva al onanismo retorcido, plagado de danzas, caricias, y gestos anhelantes. Una paja a través de un minúsculo agujero en el muro que separa sus celdas es utilizada en un sensual intercambio de humo, y junto a los golpes a puño cerrado en el muro se comunican, siempre observados por el carcelero, en el que acaban por surgir unos celos descarnados que le llevan a acosar a uno de ellos, incluso utilizando su arma reglamentaria en una dramática escena que roza el sadismo.",
    pais: "Francia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0043084/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTI4MzA3MDM0N15BMl5BanBnXkFtZTcwNjQxODE0MQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 37,
    recomendador: "Blanca",
    titulo: "Whos that knoking at my door?",
    descripcion:
      "R (Harvey Keitel) es un joven italoamericano sin trabajo, a pesar de lo cual está satisfecho de la vida que lleva con sus compañeros en el barrio neoyorquino de la “Pequeña Italia”. Pero, cuando se enamora de una mujer con estudios (Zina Bethune), se verá obligado a replantearse la vida.",
    pais: "EEUU",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0063803/",
    imagen:
      "https://static.rogerebert.com/uploads/movie/movie_poster/whos-that-knocking-at-my-door-1969/large_1iuAhETd7dpBzv6FnDq5gSyxXkW.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 38,
    recomendador: "Clara",
    titulo: "Liquid Sky",
    descripcion:
      "Unos aliens invisibles llegan a la Tierra en una pequeña nave espacial en busca de heroína. Los extraterrestres aterrizan en la azotea de un apartamento de Nueva York habitado por una traficante de drogas y su amante, una modelo andrógina, bisexual y ninfómana.",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0085852/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/LiquidSkyPoster3.jpg/220px-LiquidSkyPoster3.jpg",
    plataforma: "YouTube",
    generos: "Queer,Thriller",
  },
  {
    id: 39,
    recomendador: "Clara",
    titulo: "Sunday, Bloody Sunday",
    descripcion:
      "rlanda del Norte. Docudrama sobre los trágicos sucesos ocurridos en Londonderry el domingo 30 de enero de 1972. Ese día soldados británicos dispararon contra civiles desarmados que participaban en una manifestación: catorce personas murieron y más de treinta fueron heridas. Los manifestantes protestaban contra un decreto del Gobierno británico que autorizaba la detención y encarcelamiento sin juicio previo a los sospechosos de pertenencer al IRA. El 'Bloody Sunday' o 'Domingo Sangriento' fue crucial para Irlanda del Norte porque hizo que el conflicto se recrudeciera, animó a muchos jóvenes a integrarse en el IRA y fue la causa de 25 años de violencia. Obra de carácter coral en la que destaca el personaje de Ivan Cooper, un idealista que líderaba el movimiento por los derechos civiles y compartía el sueño de Martin Luther King de lograr un cambio pacífico.",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0067805/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMWFmMzQ3ZmUtMzliMi00Y2ZiLWEzNzUtOGMzZTM4OTlhODgxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    plataforma: "N/A",
    generos: "Romance,Queer,Drama",
  },
  {
    id: 40,
    recomendador: "Anonymous",
    titulo: "A quiet place",
    descripcion:
      "Sigue la historia de una familia que vive en una casa en el bosque cuidándose de no emitir ningún sonido. Si no te escuchan, no pueden cazarte...",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt6644200/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
    plataforma: "Netflix",
    generos: "Drama,Thriller",
  },
  {
    id: 41,
    recomendador: "Clara",
    titulo: "Amor Eterno",
    descripcion:
      "Profesor en una escuela de idiomas, cuando el horario laboral ha terminado, Carlos se pasea por la zona de cruising de Montjuïc. Allí encontrará a Toni, uno de sus estudiantes, un chico que parece distinto a todos los demás y por el que Carlos comenzará a sentir atracción, dando pie a una cinta con una envolvente banda sonora de Don the Tiger.",
    pais: "España",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt4077768/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTk4MTc3NzE2Nl5BMl5BanBnXkFtZTgwNjUwMTA5MjE@._V1_SY1000_CR0,0,699,1000_AL_.jpg",
    plataforma: "N/A",
    generos: "Queer,Thriller",
  },
  {
    id: 42,
    recomendador: "Julia",
    titulo: "La Dictadura Perfecta",
    descripcion:
      "Tras un error cometido por el presidente de la república, una televisora intenta desviar la atención de su error revelando un video que involucra crímenes del Gobernador Carmelo Vargas. Posteriormente el gobernador decide negociar con la televisora para cambiar su imagen y convertirlo en una estrella política.",
    pais: "México",
    formato: "Pelicula",
    linkito: "https://www.filmaffinity.com/es/film854174.html",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BOTcwODIwNzk1MF5BMl5BanBnXkFtZTgwMDI3MzY1MjE@._V1_UY268_CR2,0,182,268_AL_.jpg",
    plataforma: "Netflix",
    generos: "Drama,Comedia",
  },
  {
    id: 43,
    recomendador: "Clara",
    titulo: "El Sabor de las Cerezas",
    descripcion:
      "Un hombre de mediana edad decide suicidarse. Su única preocupación es encontrar a alguien que le ayude y se comprometa a enterrarlo. Esta situación le permite conocer a una gran variedad de personajes.",
    pais: "Irán",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0120265/",
    imagen:
      "https://siete-artes-multimedia.webnode.com/_files/200000055-22dd323d84/700/poster_0_3_900x0.jpg",
    plataforma: "Filmin",
    generos: "Drama",
  },
  {
    id: 44,
    recomendador: "Loretus",
    titulo: "La chica del puente",
    descripcion:
      "Gabor, un lanzador de cuchillos, le salva la vida a Adèle cuando estaba a punto de arrojarse desde uno de los puentes del Sena. Adèle siempre ha sido una mujer desdichada. Gabor es un poco mentiroso, pero en el fondo tiene buen corazón. Finalmente, los dos se van a vivir juntos, pero Adèle tiene un problema: es una persona mentalmente inestable que se cansa pronto de todo.",
    pais: "Francia",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0144201/",
    imagen:
      "http://es.web.img3.acsta.net/c_215_290/medias/nmedia/18/91/66/55/20156908.jpg",
    plataforma: "N/A",
    generos: "Romance,Drama",
  },
  {
    id: 45,
    recomendador: "Loretus",
    titulo: "3-Iron",
    descripcion:
      "Tae-suk es un joven que ocupa temporalmente viviendas cuyos habitantes están ausentes. Nunca roba ni ocasiona daños en los hogares de sus involuntarios anfitriones. En realidad, es una especie de fantasma que duerme en camas ajenas, come algo de las neveras de esos extraños y retribuye su forzada hospitalidad haciendo la colada o arreglando alguna que otra avería doméstica. Sun-hwa, que en tiempos fue una hermosa modelo, se ha visto convertida en una sombra viviente por un marido que la maltrata, encerrándola en una casa ostentosa. El destino cruza los caminos de Tae-suk y Sun-hwa, aunque sus existencias están abocadas a no dejar huella en el mundo. Se conocen cuando Tae-suk entre en casa de Sun-hwa, y enseguida saben que son almas gemelas. Como si estuvieran unidos por vínculos invisibles, descubren que no pueden separarse y aceptan en silencio su nuevo y extraño destino.",
    pais: "Corea del Sur",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt0423866/",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTM1ODIwNzM5OV5BMl5BanBnXkFtZTcwNjk5MDkyMQ@@._V1_.jpg",
    plataforma: "Filmin",
    generos: "Romance,Drama",
  },
  {
    id: 46,
    recomendador: "Loretus",
    titulo: "Stoker",
    descripcion:
      "Cuando India Stoker (Mia Wasikowska), una adolescente, pierde a su padre (Dermot Mulroney) en un trágico accidente de coche el día en que cumple 18 años, su vida se hace añicos. Su impasible comportamiento oculta profundos sentimientos que sólo su padre comprendía. Su tío Charlie (Matthew Goode), cuya existencia desconocía, aparece por sorpresa en el funeral y decide quedarse una temporada en casa de India y de su inestable madre (Nicole Kidman). Aunque al principio desconfía de él, pronto se da cuenta de que tienen mucho en común. Debut en EEUU del director coreano Park Chan-wook (Old Boy).",
    pais: "Estados Unidos",
    formato: "Pelicula",
    linkito: "https://www.imdb.com/title/tt1682180/",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/71ZQX%2BQakeL._SY550_.jpg",
    plataforma: "HBO",
    generos: "Thriller",
  },
];

module.exports = films;
