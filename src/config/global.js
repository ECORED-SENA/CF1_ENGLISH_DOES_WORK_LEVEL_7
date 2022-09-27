export default {
  global: {
    componenteFormativo:
      '<em>It’s not the same as it was</em> <br> No es igual a como era antes',
    descripcionCurso:
      'Este componente va a ser un repaso del uso y las formas del tiempo pasado simple, pero con un grado de complejidad mayor. Para esto, integraremos el uso del verbo semimodal "<em>used to</em>", también enlazaremos más de una idea con la ayuda de conectores y le agregaremos expresiones del pasado; todo esto haciendo uso de vocabulario que hace referencia a las actividades de ocio, los viajes y las experiencias de vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>Skiing in the Alps was not that fun!</em> (¡Esquiar en los Alpes no fue tan divertido!)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Simple Past</em> (Pasado Simple)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Use of “used to”</em> (Uso del "<em>used to</em>")',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Linking ideas in the past</em> (Conectar ideas en el pasado)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<em>Connectors</em> (Conectores)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Expressions in the past</em> (Expresiones del pasado)',
            hash: 't_4_2',
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
      tema: '<em>Simple Past</em> (Pasado Simple)',
      referencia:
        'BBC <em>Learning English</em>. (2019).  <em>The past simple tense</em> - 6 <em>Minute Grammar</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PgsG98vByiw&t=10s',
    },
    {
      tema: '<em>Simple Past</em> (Pasado Simple)',
      referencia:
        '<em>British Council | LearnEnglish Teens</em> (2017). <em>Grammar Snacks: Past simple – regular verbs</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r2cf1qcltzY',
    },
    {
      tema: '<em>Simple Past</em> (Pasado Simple)',
      referencia:
        'BBC <em>Learning English</em>. (2020a). <em>Pronouncing ‘-ed’ endings - Learners’ Questions</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I-nMqycHubU ',
    },
    {
      tema: '<em>Simple Past</em> (Pasado Simple)',
      referencia:
        '<em>British Council | LearnEnglish Teens</em>. (2017). <em>Grammar Snacks: Past simple – irregular verbs</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PgsG98vByiw&t=10s',
    },
    {
      tema: '<em>Use of “Used to”</em> (Uso del "<em>Used to</em>")',
      referencia:
        'BBC <em>Learning English</em>. (2020b). <em>Used to</em> - 6 <em>Minute Grammar</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3dA7P5arkyc',
    },
    {
      tema: '<em>Expressions in the Past</em> (Expresiones del pasado)',
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia. (s. f.). <em>Past time expressions (yesterday, last week, last night, two years ago)</em>. Ambiente Virtual de Idiomas.',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html ',
    },
  ],
  glosario: [
    {
      termino: '<em>Connectors (of time)</em> / Conectores (de tiempo)',
      significado:
        'son palabras o frases que se usan para decirle al lector cuándo sucedió algo. Los conectores pueden ser conjunciones, preposiciones, adverbios, etc.',
    },
    {
      termino: '<em>Past simple</em> / Pasado simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Semi-modal verb</em> / Verbo semimodal',
      significado:
        'un semimodal es un verbo (como <em>dare, need, used to, ought to</em>) que muestra algunas, pero no todas, las propiedades de un modal, y se puede usar como verbo auxiliar o principal. Generalmente, tienen significados relacionados con la necesidad y el consejo.',
    },
    {
      termino: '"<em>Used to" expression / Expresión "used to"',
      significado:
        'verbo semimodal que se utiliza en el tiempo pasado y hace referencia a cosas del pasado que ya no son ciertas. Puede referirse a acciones repetidas o a un estado o situación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia. (s. f.). <em>Past time expressions (yesterday, last week, last night, two years ago)</em>. Ambiente Virtual de Idiomas.',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html',
    },
    {
      referencia:
        '<em>Cambridge University Press. (s. f.). Conjunctions: time. Cambridge Dictionary.</em>',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/conjunctions-time',
    },
    {
      referencia:
        '<em>Cambridge University Press. (s. f.). Modality: forms. Cambridge Dictionary.</em>',
      link:
        ' https://dictionary.cambridge.org/es-LA/grammar/british-grammar/modality-forms',
    },
    {
      referencia:
        '<em>Cambridge University Press. (s. f.). Used to: meaning and form. Cambridge Dictionary.</em>',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/used-to',
    },
    {
      referencia:
        '<em>Collins. (s. f.). When do you use "used to" in English? - Easy Learning Grammar. Gramática.</em>',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje/when-do-you-use-used-to-in-english#:~:text=The%20verb%20used%20to%20is,auxiliary%20verb%20is%20always%20did.',
    },
    {
      referencia:
        'Equipo académico. (2021). <em>Past simple</em> del inglés: uso, estructura y conjugación. <em>British Council Colombia</em>',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/past-simple',
    },
    {
      referencia:
        '<em>British Council. (s. f.). Used to. LearnEnglish Teens</em>',
      link:
        'https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/used',
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
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo <em>front-end</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de contenido',
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
