<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade-left") La capacitación, como eje estratégico en los territorios, se convierte en una herramienta clave para impulsar el desarrollo local, fortaleciendo habilidades en áreas como cultura y turismo. A través de herramientas diagnósticas, sondeos de interés y procedimientos bien definidos, es posible estructurar criterios y métodos que respondan a las necesidades y potencialidades de cada región. Esto permite que las acciones formativas se alineen con las características culturales y artísticas propias del territorio, promoviendo identidad y sostenibilidad.

    .row.mb-5(data-aos="fade-left")
      .bloque-texto-b.color-primario
        .bloque-texto-b__texto
          p.mb-5(data-aos="fade-left") Un plan de capacitación territorial debe integrar componentes esenciales como aliados locales, normativa específica y facilitadores que conozcan la realidad regional. Además, el seguimiento a estas acciones, mediante indicadores y planes de mejora, garantiza su efectividad. Las muestras culturales y los grupos focales permiten, a su vez, involucrar a las comunidades, destacando su riqueza cultural y fortaleciendo su participación activa en el desarrollo de su entorno. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZApvr99nzuE?si=GIw9WmsRc5udkpkX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota. <span style="font-weight: 400">Capacitación cultural y turística.</span>
        

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
