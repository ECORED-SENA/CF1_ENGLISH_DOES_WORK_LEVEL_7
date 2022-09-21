<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Simple Past</em> (Pasado Simple)
    
    .row.mb-5
      .col-12.col-md-5
        .bgr_3.p-4.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/t2-1.svg", alt="alt")
      .col-12.col-md-7
        .bgr_2.p-4
          TraduccionAudio.color-acento-contenido(:dialogo="dialogo")
          .bgr_1.p-4
            .titulo-sexto.color-acento-botones
              h5 Figura 1
              span <em>Simple Past</em>
            figure
              img(src="@/assets/curso/tema2/t2-2.svg", alt="alt")
    
    p.text-center.mb-5 A continuación, escucharemos el audio de la historia de supervivencia de Eva Hart sobre el hundimiento del Titanic.

    .row.mb-5
      .col-12.col-md-7
        TraduccionAudio.color-acento-contenido.pst_6(:dialogo="dialogo1")
      .col-12.col-md-4
        figure
          img(src="@/assets/curso/tema2/t2-3.svg", alt="alt")
    
    .bg_grad-05
      .row.mb-5
        .col-12.col-md-4
          figure
            img(src="@/assets/curso/tema2/t2-4.png", alt="alt")
        .col-12.col-md-8
          .bgr_4
            .d-flex.mb-5.p-5.justify-content-end
              Audio.color-acento-botones.mx-3(
                :audio="require('@/assets/componentes/audios/dialogo4/01.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
          TraduccionAudio.color-acento-contenido.pst_6(:dialogo="dialogo2")
    
    .tarjeta.color-secundario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/t2-6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Después de escuchar la historia de Eva Hart, se evidencian en el texto algunas palabras subrayadas, que nos permiten identificar algunos verbos en pasado simple que fueron utilizados en algunos párrafos del texto. 
    
    span.colr Now, you are invited to listen to the following BBC Learning English Podcast where the grammatical concepts and the use of regular and irregular verbs using the simple past will be explained. 
    span.colr_2 / Ahora, le invitamos a escuchar el podcast de la BBC Learning English, donde se explicarán los conceptos gramaticales y el uso de los verbos regulares e irregulares utilizando el pasado simple.

    .bg_grad-06
      .tarjeta.bgr_1.p-4.mb-5
        SlyderA(tipo="b")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              TarjetaAudio.color-acento-contenido.bgr_5.mb-3(
                :audio="require('@/assets/componentes/audios/dialogo5/01.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>Hello. Welcome to 6 Minute Grammar with me, Finn.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>And me, Sophie. Hello.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>In today’s programme we’re talking about the past simple tense…</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>… when we use it, how we form it for regular verbs…</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>… we’ll take a look at some irregular verbs, negative sentences and questions.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>… and we’ll finish as usual with a quiz.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>Ok - so let’s get started!</em>
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              TarjetaAudio.color-acento-contenido.bgr_5.mb-3(
                :audio="require('@/assets/componentes/audios/dialogo5/02.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>…The past simple is a tense in English that we use to talk about an event that happened and finished in the past. Here’s Neil with our first example:</em>
              p.mb-0.text-bold.colr_1 <em>Neil</em>
              p <em>Jack Dorsey invented Twitter in 2006.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>Thanks, Neil. Now, we often find the past simple in stories like this:</em>
              p.mb-0.text-bold.colr_1 <em>Neil</em>
              p <em>The boy started running. Suddenly, he stopped and listened…</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>Wow - sounds like an exciting story! And it had three past simple verbs: started, stopped, and listened. </em>
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              TarjetaAudio.color-acento-contenido.bgr_5.mb-3(
                :audio="require('@/assets/componentes/audios/dialogo5/03.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>… and they are all regular verbs. We make the past simple of regular verbs by adding an ‘e’ and a ‘d’ to the infinitive.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>… so the past simple of start is started,</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>… the past simple of stop is stopped</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>… and the past simple of listen is listened…</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>… did you spot the difference in the pronunciation there?</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>Yes, sometimes the ‘e’ and ‘d’ at the end sounds like a ‘t’. ‘t’. Listen: Stopped. Stopped.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>Sometimes it sounds more like ‘id’. ‘id’. Started. Started.</em>

            
    

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionAudio,
  },
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    dialogo: [
      {
        textoIng:
          '<em>The simple past is one of the main verb tenses in the English language, and is used to describe an action that happened before the present tense and is no longer happening. <br><br> In this thematic unit we are going to see when it is used and how to form sentences in the past simple.</em>',
        textoEsp:
          'El pasado simple es uno de los tiempos verbales principales del idioma inglés, y es usado para describir una acción que sucedió antes del tiempo presente y que ya no está sucediendo. <br><br> En esta unidad temática, vamos a ver cuándo se usa y cómo formar oraciones en pasado simple.',
      },
    ],
    dialogo1: [
      {
        textoIng:
          '<em><b>What happened to the Titanic?</b> <br><br> Eva´s story of survival <br><br> In this session, we heard the incredible tale of how seven-year-old <b>Eva Hart</b> survived the Titanic disaster. Now you´ll get a chance to study the grammar of the simple past and learn how to use these verb forms to tell stories. Listen to audio.</em>',
        textoEsp:
          '¿Qué pasó con el Titanic? <br><br> La historia de supervivencia de Eva Hart. <br><br> En esta sesión, escucharemos la increíble historia de cómo Eva Hart, de siete años, sobrevivió al desastre del Titanic. Ahora tendrá la oportunidad de estudiar la gramática del pasado simple y aprenderá a usar estas formas verbales para contar historias. Escuche el audio.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Before it <b>sank</b>, it <b>was</b> a very beautiful ship: stationary on the ocean, with all her lights on. It was dreadfully cold but the sea was the calmest I´d ever seen. The starlit night was the brightest I´d ever seen. <br> I <b>looked</b> back and <b>saw</b> the whole of that tragedy. And I <b>saw</b> that ship break in half. The front part <b>went</b> down and <b>left</b> the stern sticking up in a horrifying fashion. It <b>was</b> enormous. It <b>seemed</b> to stick up in the air for a long time. And then it gradually <b>went</b> down, turning over. <br><br> And after that there <b>was</b> the sound of the whole disaster. And that <b>was</b> people drowning. That is something you <b>could</b> never forget. And then the dreadful silence that <b>followed</b> it. It <b>seemed</b> as if the whole world <b>was</b> standing still.</em>',
        textoEsp:
          'Antes de hundirse, era un barco muy hermoso: inmóvil en el océano, con todas sus luces encendidas. Hacía un frío espantoso, pero el mar era el más tranquilo que haya visto alguna vez. La noche estrellada fue la más brillante que jamás haya visto. <br>Miré hacia atrás y vi toda esa tragedia. Y vi ese barco partirse por la mitad. La parte delantera se hundió y dejó la popa sobresaliendo de forma espantosa. Era enorme. Pareció mantenerse en el aire durante mucho tiempo. Y luego fue bajando gradualmente, volteándose. <br><br> Y después de eso, permaneció el sonido de todo el desastre. Se trataba de gente ahogándose. Es algo que nunca podrías olvidar. Y luego el espantoso silencio que siguió. Parecía como si el mundo entero se hubiese detenido.',
      },
    ],
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
