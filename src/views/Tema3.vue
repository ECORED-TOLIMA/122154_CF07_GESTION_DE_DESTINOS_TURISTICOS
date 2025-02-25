<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Plan de capacitación

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

        .cajon.c2.color-primario.p-4.mb-5
          p.mb-0  El sondeo de interés es una consulta directa con la población objetivo para identificar sus necesidades, preferencias y expectativas en relación con la capacitación cultural y turística. Su propósito es asegurar que las formaciones respondan a los intereses de la comunidad y contribuyan a su desarrollo. Este proceso se caracteriza por la participación activa de los interesados, quienes expresan qué temas consideran prioritarios.

        p(data-aos="fade-left") Este tipo de plan busca garantizar la transmisión de conocimientos mediante acciones formativas estructuradas, adaptadas a las particularidades sociales, económicas y culturales del territorio. Además, integra una red de aliados estratégicos que fortalecen la implementación y sostenibilidad de la capacitación.
        p.mb-5(data-aos="fade-left") El enfoque del plan debe ser flexible y dinámico, permitiendo la actualización de contenidos y metodologías en función de la evolución del contexto local. De igual forma, debe considerar tanto la formación técnica y profesional como el rescate de los saberes ancestrales y tradicionales, generando un impacto positivo en la comunidad.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Componentes de un plan de capacitación territorial
    
    p.mb-5(data-aos="fade-left") Para que un plan de capacitación sea efectivo, debe contar con una estructura clara que garantice su éxito en la implementación. A continuación, se presentan sus principales componentes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Diagnóstico de necesidades")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Consiste en la identificación de las brechas de conocimiento, capacidades y competencias en la comunidad mediante encuestas, entrevistas, grupos focales y observaciones. También permite reconocer las oportunidades de crecimiento y desarrollo del territorio.

              .row(numero="2" titulo="Objetivos formativos")
                .col-12.mb-4.mb-md-0
                  P.mb-0 Son las metas específicas que se desean alcanzar con la capacitación. Deben ser medibles, alcanzables y alineadas con las necesidades detectadas en el diagnóstico.

              .row(numero="3" titulo="Estrategias y métodos de capacitación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se deben seleccionar metodologías activas e inclusivas, como talleres prácticos, aprendizaje basado en proyectos, mentorías, cursos presenciales y virtuales, o experiencias en campo.

              .row(numero="4" titulo="Contenidos temáticos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Los temas deben estar alineados con las prioridades del territorio e incluir áreas como cultura, turismo, emprendimiento, sostenibilidad ambiental, desarrollo económico y fortalecimiento comunitario.

              .row(numero="5" titulo="Recursos humanos y materiales")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Es clave contar con facilitadores calificados, guías didácticas, materiales de aprendizaje y herramientas tecnológicas que permitan el desarrollo efectivo de las capacitaciones.

              .row(numero="6" titulo="Aliados estratégicos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La participación de entidades gubernamentales, empresas, ONG, instituciones educativas y organizaciones comunitarias es fundamental para el éxito del plan.

              .row(numero="5" titulo="Seguimiento y evaluación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se deben establecer indicadores de impacto, aplicar encuestas y evaluar el aprendizaje adquirido para mejorar continuamente la oferta de capacitación.
          .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Aliados de la capacitación en un territorio

    p.mb-5(data-aos="fade-left") La implementación de un plan de capacitación territorial requiere la articulación de diversos actores que aportan conocimientos, recursos y redes de apoyo. Entre los principales aliados se encuentran:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img03.svg' alt='AvatarTop')
        h4.text-center Entidades gubernamentales locales
        p.text-center Incluyen alcaldías, gobernaciones y secretarías (cultura, turismo, educación y desarrollo económico), que pueden facilitar infraestructura, financiación y apoyo logístico.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img04.svg' alt='AvatarTop')
        h4.text-center Organismos No Gubernamentales (ONGs)
        p.text-center Organizaciones que impulsan el desarrollo comunitario y brindan asistencia técnica, formación y financiamiento.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img05.svg' alt='AvatarTop')
        h4.text-center Instituciones educativas
        p.text-center Universidades, colegios, institutos técnicos y tecnológicos que pueden aportar formación especializada, certificaciones y metodologías innovadoras.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img06.svg' alt='AvatarTop')
        h4.text-center Sector empresarial
        p.text-center Empresas locales y gremios económicos que pueden colaborar con la capacitación de la mano de obra local y generar oportunidades de empleo.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img07.svg' alt='AvatarTop')
        h4.text-center Organizaciones comunitarias
        p.text-center Juntas de acción comunal, asociaciones culturales y colectivos ciudadanos que aseguran la participación de la población en la capacitación.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img08.svg' alt='AvatarTop')
        h4.text-center Instituciones nacionales
        p.text-center Organismos como el SENA, que ofrecen formación técnica y profesional para el desarrollo productivo y social de la comunidad.

      .tarjeta.tarjeta--BG07.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img09.svg' alt='AvatarTop')
        h4.text-center Agencias de cooperación internacional
        p.text-center Programas y entidades extranjeras que financian y apoyan iniciativas de formación para el desarrollo territorial.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Beneficios de un plan de capacitación territorial

    p.mb-5(data-aos="fade-left") Implementar un plan de capacitación bien estructurado y con aliados estratégicos genera múltiples beneficios, entre ellos:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-10
        LineaTiempoE.color-acento-contenido.mb-5
          .row(titulo="01")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Fortalecimiento de la identidad cultural
                p.mb-0 Se protege y promueve el conocimiento de saberes tradicionales y contemporáneos.
          .row(titulo="02")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Desarrollo económico
                p.mb-0 Se generan nuevas oportunidades de empleo y emprendimiento, impulsando el crecimiento productivo del territorio.

          .row(titulo="03")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Inclusión y participación comunitaria
                p.mb-0 Se fomenta la equidad en el acceso al conocimiento, garantizando que todas las personas puedan beneficiarse de la formación.

          .row(titulo="04")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Mejoramiento de la calidad de vida
                p.mb-0 La capacitación en áreas clave como turismo, cultura, medioambiente y emprendimiento contribuye a mejorar el bienestar de la comunidad.

          .row(titulo="05")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Sostenibilidad del territorio
                p.mb-0 Se fortalece la capacidad de la comunidad para gestionar su propio desarrollo, asegurando la continuidad de las iniciativas locales.
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.c2.color-primario.p-4.mb-5
          p.mb-0  Un plan de capacitación integral y bien articulado es clave para empoderar a la comunidad y fomentar el progreso sostenible del territorio, permitiendo que sus habitantes se conviertan en protagonistas de su propio desarrollo.



</template>

<script>
export default {
  name: 'Tema3',
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
