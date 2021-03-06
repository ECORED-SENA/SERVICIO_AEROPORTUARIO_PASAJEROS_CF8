export default {
  global: {
    componenteFormativo:
      'Procedimiento para la aceptación del pasajero en lengua inglesa',
    descripcionCurso:
      'El inglés aeronáutico es especializado, es en inglés por ser la lengua estándar establecida por la OACI; cuyos códigos, terminologías y vocabularios envuelven situaciones particulares, esto último indica que la enseñanza de este tipo de inglés está enfocado a una población específica, es una herramienta básica para desenvolverse mejor y para poder ofrecer una atención al cliente completa y competitiva.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introduction / Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Management process in counter / Proceso de manejo en <i>counter</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Passenger security interview / Entrevista de seguridad del pasajero',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Airport information / Información del aeropuerto',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Validation of information in travel documents / Validación de la información de los documentos del viaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Offer and charging of special services / Oferta y cobro de servicios especiales',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Passenger boarding process / Proceso de embarque del pasajero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Making of boarding announcements at the boarding gate area / Manejo de anuncios en sala de abordaje',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Completion of reports and forms for the boarding process / Diligenciamiento de informes y formatos para el proceso de abordaje',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amadeus S.A.S. (2016). <i>Amadeus Altéa Reservation Desktop Web – User Guide. Edition 3.3.</i> Amadeus Learning Services.',
    },
    {
      referencia:
        'Amadeus S.A.S. (2016). <i>Amadeus Ancillary Services – Guía de Referencia Rápida.</i> Amadeus Soluciones Tecnológicas S.A.',
    },
    {
      referencia: 'Avianca S.A. (2021). <i>Carry-on baggage.</i>',
      link:
        'https://www.avianca.com/otr/en/before-your-trip/prepare-your-baggage/carry-on/',
    },
    {
      referencia:
        'COPA Airlines Incorporated. (2020). <i>Carry-on baggage.</i>',
      link: 'https://www.copaair.com/en/web/ca/carry-on-luggage',
    },
    {
      referencia:
        'LATAM Airlines Group. (2020). <i>Travel Information – Baggage – Carry-on.</i>',
      link:
        'https://www.latam.com/en_us/travel-information/baggage/carry-on-baggage/',
    },
    {
      referencia:
        'U.S. Department of Homeland Security. (2007). <i>DHS Pre-departure Aircraft Operator Compliance Requirements Reference Guide.U.S. Customs and Border Protection Office of Information and Technology.</i>',
    },
  ],
  glosario: [
    {
      termino: 'Airport special services',
      significado: 'servicios especiales en el aeropuerto.',
    },
    {
      termino: 'Associated EMD (EMD-A)',
      significado: '<span>EMD asociado.</span>',
    },
    {
      termino: 'Boarding announcements',
      significado: 'anuncios de abordaje / embarque.',
    },
    {
      termino: 'Boarding process',
      significado: 'proceso de abordaje / embarque.',
    },
    {
      termino: 'Boarding process forms and reports',
      significado: 'formularios e informes del proceso de abordaje / embarque.',
    },
    {
      termino: 'Carry-on baggage',
      significado:
        'equipaje de mano (también, <i>hand luggage o cabin baggage</i>).',
    },
    {
      termino: 'EMD (Electronic Miscellaneous Document)',
      significado: 'documento electrónico misceláneo.',
    },
    {
      termino: 'Passenger security interview',
      significado: 'entrevista de seguridad del pasajero.',
    },
    {
      termino: 'Standalone EMD (EMD-S)',
      significado: '<span>EMD separado.</span>',
    },
    {
      termino: 'Travel documents',
      significado: 'documentos de viaje.',
    },
  ],
  complementario: [
    {
      texto: 'Pearson. (s.f.). Inglés para Turismo Internacional.',
      tipo: 'Página web',
      link:
        'https://www.pearson.com/english/catalogue/business-english/english-international-tourism.html',
    },
    {
      texto:
        'Amadeus Get On Board. (2012). <i>Amadeus Altea Customer Management Solution - Part 1.</i> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Sap7uNPgNdk',
    },
    {
      texto:
        'Amadeus Get On Board. (2012). <i>Amadeus Altea Customer Management Solution - Part 2.</i> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J_-F1tmDCxs&t=2s',
    },
    {
      texto:
        'Amadeus Get On Board. (2012). <i>Amadeus Altea Customer Management Solution - Part 3.</i> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i1nh9lEFaLY',
    },
    {
      texto:
        'Amadeus IT Group. (2015). <i>Altéa Compensation Management.</i> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XPjAy-9i1Kk',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yoao Salazar De La Cruz',
        cargo: 'Instructor bilingüismo',
        centro: 'Centro Industrial y de Aviación - Regional Atlántico',
      },
      {
        nombre: 'Claudia Marcela Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
