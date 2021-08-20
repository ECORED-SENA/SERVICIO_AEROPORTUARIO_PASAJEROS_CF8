export default {
  global: {
    componenteFormativo:
      'Procedimiento para la aceptación del pasajero en lengua inglesa',
    descripcionCurso:
      'El inglés aeronáutico es especializado, es en ingles por ser la lengua estándar establecida por la OACI; cuyos códigos, terminologías y vocabularios envuelven situaciones particulares, esto último indica que la enseñanza de este tipo de inglés está enfocado a una población específica, es una herramienta básica para desenvolverse mejor y para poder ofrecer una atención al cliente completa y competitiva.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Encabezados',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Párrafos',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Botones',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Listas',
            hash: 'listas',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Passenger boarding process // <i>Proceso de embarque del pasajero</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Infografía Animada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Video Motion',
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
        'Amadeus s.a.s. (2016). <i>Amadeus Altéa Reservation Desktop Web – User Guide. Edition 3.3.</i> Amadeus Learning Services.',
    },
    {
      referencia:
        'Amadeus s.a.s. (2016). <i>Amadeus Ancillary Services – Guía de Referencia Rápida.</i> Amadeus Soluciones Tecnológicas SA.',
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
      significado: 'Servicios Especiales en el Aeropuerto.',
    },
    {
      termino: 'Associated emd (emd-a)',
      significado: 'EMD Asociado.',
    },
    {
      termino: 'Boarding announcements',
      significado: 'Anuncios de Abordaje/Embarque.',
    },
    {
      termino: 'Boarding process',
      significado: 'Proceso de Abordaje/Embarque.',
    },
    {
      termino: 'Boarding process forms and reports',
      significado: 'Formularios e Informes del Proceso de Abordaje/Embarque.',
    },
    {
      termino: 'Carry-on baggage',
      significado: 'Equipaje de mano (también, Hand Luggage o Cabin Baggage).',
    },
    {
      termino: 'Passenger security interview',
      significado: 'Entrevista de Seguridad del Pasajero.',
    },
    {
      termino: 'Standalone emd (emd-s)',
      significado: 'EMD Separado.',
    },
    {
      termino: 'Travel documents',
      significado: 'Documentos de Viaje.',
    },
  ],
  complementario: [
    {
      texto:
        'Management process in counter // <i>[Proceso de manejo en counter]</i>: Pearson. (s.f.). <i>Inglés para Turismo Internacional</i>.',
      tipo: 'Página web',
      link:
        'https://www.pearson.com/english/catalogue/business-english/english-international-tourism.html',
    },
    {
      texto:
        'Management process in counter // <i>[Proceso de manejo en counter]</i>: Amadeus Get On Board. (2012) Amadeus Altea Customer Management Solution - Parts 1. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Sap7uNPgNdk',
    },
    {
      texto:
        'Management process in counter // <i>[Proceso de manejo en counter]</i>: Amadeus Get On Board. (2012) Amadeus Altea Customer Management Solution - Parts 2. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J_-F1tmDCxs&t=2s',
    },
    {
      texto:
        'Management process in counter // <i>[Proceso de manejo en counter]</i>: Amadeus Get On Board. (2012) <i>Amadeus Altea Customer Management Solution - Parts 3.</i> [video]. Youtube.',
      tipo: 'Página web',
      link: 'https://www.youtube.com/watch?v=i1nh9lEFaLY',
    },
    {
      texto:
        'Management process in counter // <i>[Proceso de manejo en counter]</i>: Amadeus IT Group. (2015). <i>Altéa Compensation Management.</i> [video]. Youtube.',
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
