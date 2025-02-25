<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Seguimiento a acciones de formación y capacitación

    .col-12.mb-5(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')

    p(data-aos="fade-left") El seguimiento a las acciones de formación y capacitación es fundamental para garantizar que las actividades educativas en turismo cumplan con sus objetivos, fortalezcan el talento humano y respondan a las necesidades del territorio. Este proceso permite evaluar su impacto en la calidad de los servicios turísticos, el desarrollo local y la promoción del patrimonio cultural y natural.
    p(data-aos="fade-left") A continuación, se detalla el proceso adaptado a las funciones de una oficina de turismo territorial:

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Herramientas

    p.mb-5(data-aos="fade-left") El uso de herramientas adecuadas facilita la planificación, monitoreo y evaluación de las acciones formativas en el sector turístico. Algunas de las más relevantes incluyen:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/img02.svg', alt='Imagen decorativa')
          .tarjeta.color3.p-3(x="14.2%" y="32.6%" numero="+")
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Documentos comparativos entre las habilidades actuales y las requeridas en roles turísticos como guías, operadores y hoteleros.
          .tarjeta.color3.p-3(x="46.8%" y="7.8%" numero="+")
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Control de asistencia en talleres, charlas y actividades prácticas.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Seguimiento individualizado para garantizar la inclusión de actores clave del territorio. 
          .tarjeta.color3.p-3(x="85.8%" y="32.6%" numero="+")
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Sistemas de gestión del aprendizaje (LMS), como Moodle o Google Classroom para registrar la participación y avances.
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Herramientas de encuestas como Google Forms o Typeform para recopilar retroalimentación de los participantes.
          .tarjeta.color3.p-3(x="85.8%" y="72.7%" numero="+")
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Simulaciones o actividades en campo para medir el desempeño en situaciones reales del turismo.
          .tarjeta.color3.p-3(x="14.2%" y="72.7%" numero="+")
            ul.lista-ul
              li.mb-3 
                i.lista-ul__vineta
                p.mb-0 Sesiones cualitativas para obtener perspectivas de los participantes y actores clave del sector.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-8.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema6/img03.svg', alt='Imagen decorativa')

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Indicadores

    p.mb-5(data-aos="fade-left") Los indicadores permiten medir el impacto y la efectividad de las acciones formativas. Algunos de los más relevantes en turismo incluyen:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center 
            b Indicadores de participación
          ul.lista-ul
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Porcentaje de asistentes frente al total convocado.
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Número de actores clave involucrados (empresarios, guías, comunidades indígenas, etc.).

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center 
            b Indicadores de aprendizaje
          ul.lista-ul
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Porcentaje de participantes que lograron los objetivos formativos.
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Resultados en pruebas o evaluaciones de competencias adquiridas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center 
            b Indicadores de impacto turístico
          ul.lista-ul
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Mejora en la calidad del servicio turístico (evaluado mediante encuestas a turistas).
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Aumento en la satisfacción de los visitantes respecto a las experiencias turísticas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones-especial.p-5
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center 
            b Indicadores de sostenibilidad
          ul.lista-ul(style= "color: #12263F")
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Inclusión de buenas prácticas ambientales y culturales en actividades turísticas.
            li.mb-3 
              i.lista-ul__vineta
              p.mb-0 Integración de comunidades locales en la cadena de valor del turismo.
    
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Informes de Seguimiento

    p.mb-5(data-aos="fade-left") Los informes consolidan la información recopilada y permiten la toma de decisiones basadas en datos. Una estructura recomendada incluye:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema6/img04.svg' alt='AvatarTop')
        h4.text-center Resumen ejecutivo
        ul.lista-ul
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Descripción breve de las actividades realizadas y principales resultados.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema6/img05.svg' alt='AvatarTop')
        h4.text-center Análisis de participación
        ul.lista-ul
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Desglose por grupos (guías turísticos, hoteleros y asociaciones comunitarias).
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Identificación de actores ausentes y razones de su no participación.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema6/img06.svg' alt='AvatarTop')
        h4.text-center Resultados por indicadores
        ul.lista-ul
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Comparación de datos recolectados con las metas iniciales.
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Visualización de avances mediante gráficos o tablas.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema6/img07.svg' alt='AvatarTop')
        h4.text-center Retroalimentación cualitativa
        ul.lista-ul
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Opiniones de los participantes sobre contenidos, facilitadores y logística.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema6/img08.svg' alt='AvatarTop')
        h4.text-center Recomendaciones
        ul.lista-ul
          li.mb-3 
            i.lista-ul__vineta
            p.mb-0 Propuestas de mejora para futuras acciones formativas.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Planes de Mejora
    
    p.mb-5(data-aos="fade-left") El plan de mejora responde a las debilidades identificadas durante el seguimiento y propone soluciones estratégicas. Su desarrollo sigue estos pasos:


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Identificación de problemas") Análisis de informes para detectar brechas en competencias o fallos en la ejecución de la capacitación.

              p(numero="2" titulo="Definición de objetivos") Por ejemplo: “mejorar la formación de guías turísticos en historia local o fortalecer la atención al cliente en el sector hotelero”.

              p(numero="3" titulo="Propuestas de acciones") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Reprogramar capacitaciones en temas poco dominados.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Implementar actividades prácticas en escenarios reales.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Involucrar expertos reconocidos para mejorar la calidad de las sesiones.

              p(numero="4" titulo="Asignación de recursos y responsables") 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Designar personal y aliados estratégicos para la ejecución.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Establecer alianzas con el SENA, universidades o entidades culturales.

              p(numero="5" titulo="Cronograma y seguimiento") Establecer fechas específicas para implementar mejoras y realizar nuevas evaluaciones.
          .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img09.png', alt='Imagen decorativa')

    //.row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones
              //.tarjeta.color5.p-4(titulo="Identificación de problemas")
                p Análisis de informes para detectar brechas en competencias o fallos en la ejecución de la capacitación.

              //.tarjeta.color5.p-4(titulo="Definición de objetivos")
                p Por ejemplo: “mejorar la formación de guías turísticos en historia local o fortalecer la atención al cliente en el sector hotelero”.

              //.tarjeta.color5.p-4(titulo="Propuestas de acciones")
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Reprogramar capacitaciones en temas poco dominados.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Implementar actividades prácticas en escenarios reales.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Involucrar expertos reconocidos para mejorar la calidad de las sesiones.

              //.tarjeta.color5.p-4(titulo="Asignación de recursos y responsables")
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Designar personal y aliados estratégicos para la ejecución.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Establecer alianzas con el SENA, universidades o entidades culturales.

              //.tarjeta.color5.p-4(titulo="Cronograma y seguimiento")
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Establecer fechas específicas para implementar mejoras y realizar nuevas evaluaciones.
            
          .col-lg-3.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img09.png', alt='Imagen decorativa')

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Ejemplos de mejoras en turismo

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.order-lg-1.order-1.mb-lg-0
        .cajon.c1.p-4.mb-3
          .row.justify-content-text-center.p-4
            .col-lg-9.col-12.order-lg-1.order-2.mb-lg-0
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta.v--green
                    span a
                  p.mb-0 Incorporación de capacitación sobre turismo accesible e inclusivo.
                li.mb-4 
                  .lista-ol--cuadro__vineta.v--green
                    span b
                  p.mb-0 Actualización de contenidos según nuevas tendencias digitales en promoción turística.
                li.mb-4 
                  .lista-ol--cuadro__vineta.v--green
                    span c
                  p.mb-0 Implementación de prácticas en manejo de conflictos con turistas.
            .col-lg-3.col-5.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img10.svg', alt='Imagen decorativa')

    p(data-aos="fade-left") El seguimiento y la mejora continua garantizan que las acciones de formación en turismo no solo sean efectivas, sino que también contribuyan al desarrollo sostenible y competitivo del territorio.

</template>

<script>
export default {
  name: 'Tema6',
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
