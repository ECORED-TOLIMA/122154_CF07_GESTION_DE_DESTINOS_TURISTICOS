<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Saberes culturales y artísticos

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los saberes culturales y artísticos incluyen conocimientos, prácticas, tradiciones y expresiones creativas que reflejan la historia y la identidad de una comunidad. Se transmiten de generación en generación y evolucionan en respuesta a factores sociales, económicos y ambientales.
          br
          br
          | En el contexto municipal, estos saberes representan un recurso intangible clave para fortalecer la cohesión social y fomentar el desarrollo cultural, contribuyendo al sentido de pertenencia y a la valorización de la diversidad cultural en el territorio.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipología de saberes culturales y artísticos

    p.mb-5(data-aos="fade-left") Los saberes culturales y artísticos pueden clasificarse en función de su origen, forma de expresión, funcionalidad y nivel de formalización. A continuación, se presentan las principales categorías y sus características:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        span <em>Tipología de saberes culturales y artísticos</em>
      .tabla-a.clstabla.color-acento-contenido
        table
          thead
            tr
              th(style= "width: 25%,") Criterio
              th(style= "width: 25%") Categoría
              th(style= "width: 25%") Características
              th(style= "width: 25%") Ejemplos
          tbody
            tr
              td(rowspan="2")(style="background-color: #FEF7EB") Según su origen y contexto
              td(style="background-color: #F6F6F6") Saberes tradicionales y ancestrales
              td(style="background-color: #F6F6F6") Transmitidos oralmente o mediante prácticas comunitarias. Reflejan la relación histórica con el entorno.
              td(style="background-color: #F6F6F6") Mitos, rituales, artesanías autóctonas y técnicas agrícolas tradicionales.
            tr
              td Saberes contemporáneos
              td Manifestaciones modernas que adaptan la identidad cultural a nuevas dinámicas.
              td Danza urbana, grafiti con mensajes sociales y música contemporánea con influencias locales.
            tr
              td(rowspan="5")(style="background-color: #FFE7BA") Según su forma de expresión artística
              td(style="background-color: #F6F6F6") Arte visual
              td(style="background-color: #F6F6F6") Representaciones gráficas y plásticas.
              td(style="background-color: #F6F6F6") Pintura, escultura, muralismo y fotografía.
            tr
              td Arte escénico
              td Expresiones corporales y teatrales.
              td Teatro, danza, títeres y <i>performance</i>.
            tr
              td(style="background-color: #F6F6F6") Arte musical
              td(style="background-color: #F6F6F6") Producción sonora tradicional y moderna.
              td(style="background-color: #F6F6F6") Música folclórica, canto tradicional y festivales musicales.
            tr
              td Arte literario
              td Creación narrativa y poética.
              td Poesía, cuentos y relatos orales.
            tr
              td(style="background-color: #F6F6F6") Arte audiovisual y digital
              td(style="background-color: #F6F6F6") Uso de medios tecnológicos para la creación artística.
              td(style="background-color: #F6F6F6") Cine, animación y documentales sobre cultura local.
            tr
              td(rowspan="4")(style="background-color: #FEF7EB") Según su funcionalidad o propósito
              td Saberes rituales o ceremoniales
              td Asociados a prácticas religiosas o espirituales.
              td Ceremonias indígenas y celebraciones religiosas tradicionales.
            tr
              td(style="background-color: #F6F6F6") Saberes recreativos
              td(style="background-color: #F6F6F6") Destinados al entretenimiento y cohesión social.
              td(style="background-color: #F6F6F6") Juegos tradicionales y festividades populares.
            tr
              td Saberes utilitarios
              td Conocimientos prácticos aplicados a la vida cotidiana.
              td Técnicas de tejido, alfarería y carpintería tradicional.
            tr
              td(style="background-color: #F6F6F6") Saberes conmemorativos
              td(style="background-color: #F6F6F6") Vinculados con la memoria histórica de la comunidad.
              td(style="background-color: #F6F6F6") Monumentos históricos y actos simbólicos en fechas especiales.
            tr
              td(rowspan="3")(style="background-color: #FFE7BA") Según su nivel de formalización
              td Saberes formales
              td Transmitidos en contextos educativos estructurados.
              td Escuelas de música y danza con metodología establecida.
            tr
              td(style="background-color: #F6F6F6") Saberes informales
              td(style="background-color: #F6F6F6") Aprendidos en entornos familiares o comunitarios.
              td(style="background-color: #F6F6F6") Recetas tradicionales transmitidas por generaciones.
            tr
              td Saberes mixtos
              td Combinación de formación autodidacta con aprendizaje estructurado.
              td Artistas locales que complementan su formación con talleres o cursos.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Importancia de la tipología en municipios
    
    p.mb-5(data-aos="fade-left") La clasificación de los saberes culturales y artísticos permite reconocer su impacto en el desarrollo social, económico y cultural de los municipios. Esta tipología facilita su preservación, difusión y aprovechamiento en diversas iniciativas, promoviendo la identidad local y fortaleciendo la cohesión comunitaria. A continuación, se presentan los principales beneficios de su aplicación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img02.svg' alt='AvatarTop')
          h4.text-center Preservación del patrimonio cultural
          p.text-center Facilita la identificación, documentación y protección de los saberes locales, evitando su pérdida y asegurando su transmisión a futuras generaciones.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop')
          h4.text-center Fomento del turismo cultural
          p.text-center Permite diseñar rutas turísticas, festivales y eventos basados en expresiones artísticas y tradiciones locales, atrayendo visitantes y fortaleciendo la identidad territorial.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
          h4.text-center Desarrollo económico
          p.text-center Los saberes culturales pueden convertirse en oportunidades de empleo y emprendimiento, impulsando sectores como la artesanía, la gastronomía tradicional y la producción de espectáculos.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img05.svg' alt='AvatarTop')
          h4.text-center Cohesión social
          p.text-center Promueve el sentido de pertenencia, la integración comunitaria y el fortalecimiento de las relaciones entre los habitantes, favoreciendo el reconocimiento y la valoración de la diversidad cultural.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')
          h4.text-center Educación e identidad
          p.text-center Contribuye a la enseñanza de valores, costumbres y conocimientos tradicionales a través de espacios formales e informales de aprendizaje, garantizando la continuidad del legado cultural.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Aplicaciones prácticas en territorios o municipios

    p.mb-5(data-aos="fade-left") La tipología de los saberes culturales y artísticos permite diseñar estrategias efectivas para su preservación, promoción y desarrollo en los municipios. Su aplicación práctica se refleja en diversas iniciativas que fortalecen la identidad local y generan oportunidades para la comunidad. Algunas de estas iniciativas incluyen:

    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Inventarios culturales
            p Creación de catálogos que clasifiquen y describan los saberes locales según la tipología establecida, con el fin de documentar, proteger y difundir el patrimonio cultural del municipio. Estos inventarios pueden ser gestionados por entidades gubernamentales, académicas o comunitarias.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Espacios para la creación y el aprendizaje
            p Implementación de centros culturales, casas de la cultura o talleres comunitarios donde se fomenten prácticas artísticas locales, como la música, la danza, la artesanía o la gastronomía tradicional. Estos espacios también pueden incluir residencias artísticas, bibliotecas especializadas y laboratorios creativos.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img08.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Festivales y eventos culturales
            p Organización de celebraciones que visibilicen la diversidad de expresiones culturales del municipio, como ferias de artesanías, encuentros de narradores orales, festivales de danza o muestras de cine comunitario. Estas iniciativas no solo fortalecen la identidad local, sino que también impulsan el turismo cultural y dinamizan la economía.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img09.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Programas educativos
            p Incorporación de los saberes culturales y artísticos en el currículo escolar para garantizar su transmisión intergeneracional. Esto puede incluir asignaturas específicas, proyectos pedagógicos en escuelas rurales y urbanas, y alianzas con portadores de tradición para compartir conocimientos en el aula.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img10.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Rutas de turismo cultural
            p Desarrollo de circuitos turísticos que integren sitios históricos, talleres artesanales, gastronomía local y expresiones artísticas vivas, promoviendo el patrimonio inmaterial como un atractivo turístico sostenible.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Plataformas digitales y medios de difusión
            p Creación de sitios web, aplicaciones móviles y documentales que permitan la divulgación de los saberes culturales y artísticos del municipio a nivel local, nacional e internacional, facilitando el acceso a información y promoviendo la participación comunitaria.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen decorativa')
              
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Programas de salvaguardia y protección
            p Implementación de políticas y normativas para la conservación de los saberes en riesgo de desaparición, a través del apoyo institucional, el reconocimiento legal y la transmisión del conocimiento a nuevas generaciones mediante programas de formación y mentoría.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
