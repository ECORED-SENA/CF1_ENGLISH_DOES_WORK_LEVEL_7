<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.bgr.p-5.mb-5
      .col-12.col-md-3
        figure
          img(src="@/assets/curso/sintesis/img1.png", alt="alt")
      .col-12.col-md-9.d-flex.align-items-center
        div  
          p <em>Up to this point, we have been able to appreciate everything that has to do with the simple past tense, when it is used and how it is structured, the use of the verb "used to", the connectors, the expressions of the past, and other grammatical elements and vocabulary that complement these topics. For this reason, you are invited to appreciate the following conceptual scheme that summarizes the subject matter:</em>
          p.mb-0 Hasta este punto, hemos podido apreciar todo lo que tiene que ver con el tiempo pasado simple, cuándo se usa y cómo se estructura, el uso del verbo "<em>used to</em>", los conectores, las expresiones de pasado, y demás elementos gramaticales y vocabulario que complementan estos temas. Por ello, se invita a que aprecie el siguiente esquema conceptual que resume la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
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
