<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-01
      .row.p-4.mb-5
        .col-12.col-md-4
          figure
            img(src="@/assets/curso/introduccion/img1.png", alt="alt")
        .col-12.col-md-8.d-flex.align-items-center
          .bgr_1.p-5.position-relative
            span En este nivel de nuestra formación bilingüe, para hablar de situaciones de nuestra vida personal ocurridas en el pasado, no solo debemos entender los conceptos más básicos del pasado simple, como lo es la conjugación tanto del verbo 
            span.colr “to be” 
            | como de los demás verbos en pasado, sino que también debemos concebir ideas y oraciones más complejas con la ayuda de expresiones que solo se encuentran en tiempo pasado, como
            span.colr “used to”, 
            | conectores para crear oraciones compuestas y expresiones que nos permitan ubicar esas vivencias en el tiempo; todo esto apoyado con vocabulario nuevo sobre actividades de ocio, viajes y experiencias de vida. Le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:	
            img.img80.pst(src="@/assets/curso/introduccion/img2.svg", alt="alt")
            img.img80.pst_1(src="@/assets/curso/introduccion/img3.svg", alt="alt")
            img.img100.pst_2(src="@/assets/curso/introduccion/img4.svg", alt="alt")

    .bg_grad-02
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
