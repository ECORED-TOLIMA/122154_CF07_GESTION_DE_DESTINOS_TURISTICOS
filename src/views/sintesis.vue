<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe un enfoque general del componente formativo Capacitación cultural y turística, el cual aborda estrategias para diseñar, implementar y evaluar acciones formativas en el ámbito cultural y turístico. Inicialmente, se presentan herramientas diagnósticas, criterios de selección y métodos para estructurar procesos de capacitación efectivos. Posteriormente, se profundiza en los saberes culturales y artísticos, su tipología y aplicaciones en los territorios. Se desarrolla la planificación de la capacitación, identificando sus componentes, aliados estratégicos y beneficios. Además, se detallan los recursos disponibles, incluyendo normativa, facilitadores, infraestructura y financiamiento. Finalmente, se analiza la gestión de muestras culturales y los mecanismos de seguimiento y mejora continua para garantizar el impacto de la formación en el desarrollo territorial.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen decorativa")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
