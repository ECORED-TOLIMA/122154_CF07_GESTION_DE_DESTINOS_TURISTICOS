export default {
  global: {
    Name: 'Capacitación cultural y turística',
    Description:
      'Este componente formativo fortalece las habilidades de los funcionarios de turismo en la gestión del patrimonio cultural, identidad local y recursos turísticos. Los aprendices comprenderán la riqueza del territorio e impulsarán su potencial turístico mediante la capacitación comunitaria en actividades culturales y turísticas, promoviendo estrategias que refuercen el sentido de pertenencia y la preservación del patrimonio local.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La capacitación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas diagnósticas de capacitación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios de selección de capacitación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sondeo de interés',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Métodos de capacitación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Procedimientos de capacitación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Estructuración de criterios de capacitación',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Saberes culturales y artísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipología de saberes culturales y artísticos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia de la tipología en municipios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicaciones prácticas en territorios o municipios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de capacitación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes de un plan de capacitación territorial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aliados de la capacitación en un territorio',
            hash: 't_2_2',
          },
          {
            numero: '3.3',
            titulo: 'Beneficios de un plan de capacitación territorial',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recursos para la capacitación en un territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normativa',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Facilitadores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Infraestructura y espacios de formación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Herramientas y materiales didácticos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Financiamiento y sostenibilidad de la capacitación',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Muestras culturales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Gestión para muestras culturales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Métodos de participación en muestras culturales',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguimiento a acciones de formación y capacitación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Herramientas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Indicadores',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Informes de Seguimiento',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Planes de Mejora',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1. La capacitación',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Proceso de capacitación [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MvICzVEr0F8',
    },
    {
      tema: '3. Plan de capacitación',
      referencia:
        'Rynoso Díaz, H. (2013, mayo 14). Modelo de un plan de capacitación. Escuela de Organización Industrial.',
      tipo: 'Página web',
      link:
        'https://www.eoi.es/blogs/mintecon/2013/05/14/modelo-de-un-plan-de-capacitacion-2/ ',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación cultural y turística',
      significado:
        'Proceso formativo que desarrolla competencias en la promoción del patrimonio cultural, la gestión turística sostenible y la interpretación cultural, fomentando el desarrollo comunitario y la mejora de los servicios turísticos.',
    },
    {
      termino: 'Diagnóstico de necesidades',
      significado:
        'Metodología para identificar carencias, intereses y áreas de mejora en los conocimientos o habilidades de un grupo, utilizada como base para diseñar acciones de capacitación efectivas.',
    },
    {
      termino: 'Grupo focal',
      significado:
        'Técnica de investigación cualitativa que reúne a un grupo representativo para explorar opiniones, necesidades o percepciones sobre un tema en particular, útil en el diseño de capacitaciones.',
    },
    {
      termino: 'Indicadores de seguimiento',
      significado:
        'Herramientas de medición que permiten evaluar el impacto, la calidad y los resultados de las acciones de formación, facilitando la toma de decisiones para su mejora continua.',
    },
    {
      termino: 'Plan de capacitación',
      significado:
        'Documento estructurado que detalla los objetivos, contenidos, métodos, recursos y cronograma para llevar a cabo acciones formativas dirigidas a un público específico.',
    },
    {
      termino: 'Saberes culturales',
      significado:
        'Conjunto de conocimientos relacionados con las tradiciones, expresiones artísticas, costumbres y prácticas culturales que conforman la identidad de una comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abascal Rojas, F. (2004). Cómo se hace un plan estratégico. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Touristology. (2016). Plan estratégico y de negocios del turismo cultural de Colombia. Ministerio de Comercio, Industria y Turismo.',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=87ecec49-94d1-4d58-a8f2-98a2731d03ff',
    },
    {
      referencia:
        'Cacuango Yánez, W. G. (2017). Elaboración de un foto libro para dar a conocer las costumbres, tradiciones y atractivos turísticos de los pueblos Kayambis en las comunidades de La Primavera, Ugsha y Zuleta en la provincia de Imbabura. Instituto Tecnológico Cordillera.',
      link:
        'https://apidspace.cordillera.edu.ec/server/api/core/bitstreams/27a92e53-2b28-4114-9e5c-281b0259319a/content',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nancy Esperanza Ruge Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
