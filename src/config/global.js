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
        titulo: 'Management process in counter / Proceso de manejo en counter',
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
              'Making of boarding announcements at the boarding gate área / Manejo de anuncios en sala de abordaje',
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
      referencia: 'COPA Airlines Incorporated. (2020). Carry-on baggage.',
      link: 'https://www.copaair.com/en/web/ca/carry-on-luggage',
    },
    {
      referencia:
        'LATAM Airlines Group. (2020). Travel Information – Baggage – Carry-on.',
      link:
        'https://www.latam.com/en_us/travel-information/baggage/carry-on-baggage/',
    },
    {
      referencia:
        'U.S. Department of Homeland Security. (2007). <i>DHS Pre-departure Aircraft Operator Compliance Requirements Reference Guide.</i> U.S. Customs and Border Protection Office of Information and Technology.',
    },
  ],
  glosario: [
    {
      termino: 'Airport special services',
      significado: '&nbsp; Servicios especiales en el aeropuerto.',
    },
    {
      termino: 'Associated EMD (EMD-A)',
      significado: '&nbsp; EMD asociado.',
    },
    {
      termino: 'Boarding announcements',
      significado: '&nbsp; Anuncios de abordaje / embarque.',
    },
    {
      termino: 'Boarding process',
      significado: '&nbsp; Proceso de abordaje / embarque.',
    },
    {
      termino: 'Boarding process forms and reports',
      significado:
        '&nbsp; Formularios e informes del proceso de abordaje / embarque.',
    },
    {
      termino: 'Carry-on baggage',
      significado:
        '&nbsp; Equipaje de mano (también, <i>hand luggage o cabin baggage</i>).',
    },
    {
      termino: 'EMD (Electronic Miscellaneous Document)',
      significado: '&nbsp; documento electrónico misceláneo',
    },
    {
      termino: 'Passenger security interview',
      significado: '&nbsp; Entrevista de seguridad del pasajero.',
    },
    {
      termino: 'Standalone EMD (EMD-s)',
      significado: '&nbsp; EMD separado.',
    },
    {
      termino: 'Travel documents',
      significado: '&nbsp; Documentos de viaje.',
    },
  ],
  complementario: [
    {
      texto: 'Pearson. (s.f.). <i>Inglés para Turismo Internacional</i>.',
      tipo: 'Página web',
      link:
        'https://www.pearson.com/english/catalogue/business-english/english-international-tourism.html',
    },
    {
      texto:
        'Amadeus Get On Board. (2012). <i>Amadeus Altea Customer Management Solution - Part 1.</i> Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Sap7uNPgNdk',
    },
    {
      texto:
        'Amadeus Get On Board. (2012). <i>Amadeus Altea Customer Management Solution - Part 2.</i> Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J_-F1tmDCxs&t=2s',
    },
    {
      texto:
        'Amadeus Get On Board. (2012). <i>Amadeus Altea Customer Management Solution - Part 3.</i> Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i1nh9lEFaLY',
    },
    {
      texto:
        'Amadeus IT Group. (2015). <i>Altéa Compensation Management.</i> Youtube.',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
