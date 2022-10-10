<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Use of “used to”</em> (Uso del "<em>used to</em>") 

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/t3-1.png", alt="alt")
      .col-12.col-md-7
        TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo1")(data-aos="flip-up") 

    p.mb-5 Se invita a explorar el video que se presenta a continuación:  

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ni_fGjSGgIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo2")(data-aos="flip-up") 

    .row.mb-5.bgr_11.p-3.p-lg-5
      p.text-bold.text-center <em>Dialogue</em> / Diálogo
      .col-12.col-md-3(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img250(src="@/assets/curso/tema3/t3-2.svg", alt="alt")
      .col-12.col-md-6(data-aos="zoom-in")
        TraduccionChat.color-acento-botones(:dialogo="traduccionChat") 
      .col-12.col-md-3(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img250(src="@/assets/curso/tema3/t3-3.svg", alt="alt")
    
    span.text-bold.etiqueta <em>When to use</em>
    br
    br
    span.colr <em>These are the cases in which we can use the verb "used to": </em> 
    span / Estos son los casos en los que podemos utilizar el verbo <em>"used to"</em>:

    .row.mt-5.mb-5
      .col-sm-6.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta--boton.bgr_7.p-4.h-100
          p.text-center <b><em>Past habits</em></b>
          span.text-center.colr_3 <em>The expression "used to" is used to talk about things that happened repeatedly in the past, but are no longer happening.</em> 
          p.mt-3.text-center.text-bold <em>Example</em> / Ejemplo
          TarjetaAudio.color-acento-botones.mb-3.bgr_8(
            texto="<i>I used to ride</i> my bike every weekend, but now I don't do it very often." 
            :audio="require('@/assets/componentes/audios/dialogo9/01.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          figure
            img(src="@/assets/curso/tema3/t3-4.svg", alt="alt")
      .col-sm-6.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.bgr_7.p-4.h-100
          p.text-center <b><em>Past states</em></b>
          span.text-center.colr_3 <em>The expression "used to" is used with stative verbs to talk about things that were true in the past, but are no longer true.</em> 
          p.mt-3.text-center.text-bold <em>Example</em> / Ejemplo
          TarjetaAudio.color-acento-botones.mb-3.bgr_8(
            texto="<i>Monica used to have</i> long hair, but now she has short hair.."   
            :audio="require('@/assets/componentes/audios/dialogo9/02.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          figure
            img(src="@/assets/curso/tema3/t3-5.svg", alt="alt")
    
    p.mb-5.text-center A continuación, se nombran algunas advertencias para identificar el uso correcto del <em>“Used to”</em>

    .row.mb-5
      .col-12.col-md-6(data-aos="flip-up")
        .bgr_14.p-3.p-lg-5.h-100
          figure.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/t3-6.png", alt="alt")
          .row.justify-content-center.mb-3
            .col-12.col-lg-3.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img.img90(src="@/assets/curso/tema3/t3-8.svg", alt="alt")
            .col-12.col-lg-3.d-flex.align-items-end.justify-content-center
              div
                p.mb-0 <em>Warning #1</em>
                p.mb-0.colr_2 Advertencia #1
          span.colr <em>"Used to" is not used for things that happened only once, for this the simple past is used. </em> 
          span.colr_2 / No se utiliza "<em>used to</em>" para cosas que ocurrieron una sola vez, para esto se utiliza el pasado simple.

          p.mt-3.mb-3.text-bold.text-center <em>For example</em> / Por ejemplo:

          TarjetaAudio.color-acento-botones.mb-3.bgr_8(
            texto="<em>Last year I went on vacation to Cancun and I had a lot of fun.<br>(NOT “Last year I used to go on vacation…)</em>"   
            :audio="require('@/assets/componentes/audios/dialogo9/03.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          
      .col-12.col-md-6(data-aos="flip-down")
        .bgr_14.p-3.p-lg-5  
          figure.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/t3-7.png", alt="alt")
          .row.justify-content-center.mb-3
            .col-12.col-lg-3.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img.img90(src="@/assets/curso/tema3/t3-8.svg", alt="alt")
            .col-12.col-lg-3.d-flex.align-items-end.justify-content-center
              div
                p.mb-0 <em>Warning #2</em>
                p.mb-0.colr_2 Advertencia #2
          span.colr <em>"Used to" is an expression that is only used in the past simple. It has no present form. </em> 
          span.colr_2 / <em>"Used to"</em> es una expresión que solo es usada en pasado simple. No tiene forma en presente.

          p.mt-3.mb-3.text-bold.text-center <em>For example</em> / Por ejemplo:

          TarjetaAudio.color-acento-botones.mb-3.bgr_8(
            texto="<em> ❌ I use to study here. – Present tense, this is wrong <br>✅ I study here. – Present tense, this is correct <br>✅ I used to study here. – Past tense, this is correct</em>"   
            :audio="require('@/assets/componentes/audios/dialogo9/04.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
  
    .bg_grad-07.pst_8
      span.text-bold.etiqueta <em>How to use</em>
      .row.mt-3.mb-5
        .col-12.col-lg-4(data-aos="flip-up")
          .bgr_2.p-4.mb-3
            TraduccionAudio.color-acento-contenido(:dialogo="dialogo3")
        .col-12.col-lg-8(data-aos="zoom-in")
          .tarjeta.bgr_1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-12.col-lg-10
                  p.mb-0.text-center.text-bold <em>Affirmative structure</em>
                  p.mb-5.text-center.text-bold <em>Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema3/t3-9.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center
                        img.img140(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="You <em>used to</em> <i>practice extreme sports.</i>"  
                          :audio="require('@/assets/componentes/audios/dialogo9/05.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Tú solías practicar deportes extremos.
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>Negative</em> / Negativa
                  p.mb-5.text-center.text-bold <em>Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center
                        img.img140(src='@/assets/curso/tema3/t3-14.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="You <i>didn’t</i> <em>use to</em> <i>practice extreme sports. </i>"  
                          :audio="require('@/assets/componentes/audios/dialogo9/06.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Tú no solías practicar deportes extremos.
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>“Yes” or “No” Questions</em> / Preguntas de “Sí” y “No”
                  p.mb-5.text-center.text-bold <em>Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema3/t3-11.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center
                        img.img140(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>Did</i> you <em>use to</em> <i>practice extreme sports?</i>" 
                          :audio="require('@/assets/componentes/audios/dialogo9/07.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Tú solías practicar deportes extremos?
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>Information Questions</em> / Preguntas de información
                  p.mb-5.text-center.text-bold <em>Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema3/t3-12.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3.mb-3.mb-lg-0
                      figure.d-flex.justify-content-center
                        img.img140(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>When did</i> you <em>use to</em> <i>practice extreme sports?</i>"  
                          :audio="require('@/assets/componentes/audios/dialogo9/08.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Cuándo solías practicar deportes extremos?

      p.mb-5.text-center A continuación, se nombran algunas advertencias para identificar el uso correcto del <em>“used to”</em> 

      .row.pst_7
        .col-12.col-md-6.mb-3.mb-lg-0(data-aos="flip-down")
          .bgr_14.p-3.p-lg-5.h-100
            figure.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/t3-15.png", alt="alt")
            .row.justify-content-center.mb-3
              .col-12.col-lg-3.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.img90(src="@/assets/curso/tema3/t3-8.svg", alt="alt")
              .col-12.col-lg-3.d-flex.align-items-end.justify-content-center
                div
                  p.mb-0 <em>Warning # 3</em>
                  p.mb-0.colr_2 Advertencia #3
            span.colr <em>"Be careful with negative and interrogative sentences because, when the auxiliary "did" is present, it is not written "used to" but "USE to" </em> 
            span.colr_2 / Ten cuidado con las oraciones negativas e interrogativas, ya que, cuando el auxiliar <em>“did”</em> está presente, no se escribe <em>“used to”</em> sino <em>“USE to”</em>

            p.mt-3.mb-3.text-bold.text-center <em>For example</em> / Por ejemplo:

            TarjetaAudio.color-acento-botones.mb-3.bgr_8(
              texto="<em>Did he use to travel abroad on vacation when he was a child?</em>"   
              :audio="require('@/assets/componentes/audios/dialogo9/09.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 ¿Él solía viajar al extranjero de vacaciones cuando era niño?
        .col-12.col-md-6(data-aos="flip-up")
          .bgr_14.p-3.p-lg-5  
            figure.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/t3-16.png", alt="alt")
            .row.justify-content-center.mb-3
              .col-12.col-lg-3.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.img90(src="@/assets/curso/tema3/t3-8.svg", alt="alt")
              .col-12.col-lg-3.d-flex.align-items-end.justify-content-center
                div
                  p.mb-0 <em>Warning # 4</em>
                  p.mb-0.colr_2 Advertencia #4
            span.colr <em>"You can always use the past simple instead of "used to". In this case, it is recommended to accompany the sentence with an adverb of frequency. </em> 
            span.colr_2 / Siempre se puede usar el pasado simple en lugar de <em>"used to"</em>. Se recomienda, en este caso, acompañar la oración con un adverbio de frecuencia.

            p.mt-3.mb-3.text-bold.text-center <em>For example</em> / Por ejemplo:

            TarjetaAudio.color-acento-botones.mb-3.bgr_8(
              texto="<em> I used to go to concerts in the summer.</em>"   
              :audio="require('@/assets/componentes/audios/dialogo9/10.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p Yo solía ir a conciertos en el verano.
            
            TarjetaAudio.color-acento-botones.mb-3.bgr_8(
              texto="<em>I usually went to concerts in the summer.</em>"   
              :audio="require('@/assets/componentes/audios/dialogo9/11.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 Yo usualmente iba a conciertos en el verano.
    
    span.colr <em>Now let's test how much you learned about the verb "used to". Complete the following dialogue. </em>
    span / Ahora probemos cuánto aprendió del verbo <em>"used to"</em>. Complete el siguiente diálogo.

    Dialogo.color-acento-contenido.mt-5.mb-5.pst_5(:dialogo="dialogo4")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Practice dialogue</em> / Diálogo de práctica amigos
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionAudio,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>The verb <b>"used to"</b> is a "marginal" modal verb (a verb that displays some but not all of the properties of a modal). Unlike the other modal verbs (such as can, could, may, might, will, etc.), the verb <b>"used to"</b> is only found in the <b>past tense.</b></em>',
        textoEsp:
          'El verbo "<em>used to</em>" es un verbo modal "marginal" (un verbo que muestra algunas, pero no todas las propiedades de un modal). A diferencia de los otros verbos modales (<em>can, could, may, might, will</em>, etc.), el verbo "<em>used to</em>" solo se encuentra en tiempo pasado.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>In this thematic unit we are going to interact with some examples such as seeing dialogues and other elements that will allow us to know when and how to use the verb "used to".</em>',
        textoEsp:
          'En esta unidad temática, vamos a interactuar con algunos ejemplos, como diálogos y otros elementos, que nos permitirán saber cuándo y cómo usar el verbo <em>"used to"</em>.',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>To form sentences with "used to", certain grammatical details must be taken into account, like it is a semi-modal verb and that is why it is used together with another main verb that is in base form, and since it is only found in the past tense, for negative and interrogative structures it is used with the auxiliary "did". <br><br> These are the sentence structures with the verb "used to":</em>',
        textoEsp:
          'Para formar oraciones con "<em>used to</em>", hay que tener en cuenta ciertos detalles gramaticales, como que es un verbo semimodal y por eso se utiliza en conjunto con otro verbo principal que va en forma base, y que, como solo se encuentra en tiempo pasado, para las estructuras negativas e interrogativas se utiliza con el auxiliar "<em>did</em>".<br><br>Estas son las estructuras de las oraciones con el verbo "<em>used to</em>":',
      },
    ],
    dialogo4: {
      personajes: [
        {
          nombre: 'Sebastian',
          img: require('@/assets/curso/tema3/t3-17.svg'),
        },
        {
          nombre: 'Nicole',
          img: require('@/assets/curso/tema3/t3-18.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sebastian',
          textoIng:
            '*** <em>you use to hike in the savannah or just in the mountains?</em>',
          textoEsp:
            '¿Tú solías hacer caminatas en la sabana o solo en montañas?',
          audio: require('@/assets/componentes/audios/dialogo9/12.mp3'),
          palabra: 'did',
        },
        {
          personaje: 'Nicole',
          textoIng:
            '<em>Yes, before I specialized in mountain climbing, I</em> *** <em>to hike in the savannah and also in forests and nature reserves.</em>',
          textoEsp:
            'Sí, antes de especializarme en montañismo, solía hacer caminatas por la sabana y también en bosques y reservas naturales.',
          audio: require('@/assets/componentes/audios/dialogo9/13.mp3'),
          palabra: 'used',
        },
      ],
    },
    traduccionChat: {
      personajes: [
        {
          //nombre: '<em>Charlie</em><br>Empleado',
          //img: require('@/assets/curso/tema2/t2-11.svg'),
        },
        {
          //nombre: '<em>Customer</em><br>Cliente',
          //img: require('@/assets/curso/tema2/t2-12.svg'),
        },
      ],
      dialogo: [
        {
          textoIng: '<em>Nicole, how was your hike last week?</em>',
          textoEsp: 'Nicole, ¿cómo estuvo tu caminata la semana pasada?',
          audio: require('@/assets/componentes/audios/dialogo8/01.mp3'),
        },
        {
          textoIng:
            '<em>It wasn’t a good hike. I got to the top of the mountain very tired and took me more time than I thought</em>',
          textoEsp:
            'No fue una buena caminata. Llegué a la cima de la montaña muy cansada y tardé más de lo que pensaba.',
          audio: require('@/assets/componentes/audios/dialogo8/02.mp3'),
        },
        {
          textoIng: '<em>Why? You climbed that same mountain 3 years ago.</em>',
          textoEsp: '¿Por qué? Escalaste esa misma montaña hace 3 años.',
          audio: require('@/assets/componentes/audios/dialogo8/03.mp3'),
        },
        {
          textoIng:
            '<em>Yes, but that was before I enrolled in the master’s degree. Before the master’s degree I used to train 5 days a week, now, if I’m lucky, I can train 1 or 2 days a week.</em>',
          textoEsp:
            'Sí, pero eso fue antes de matricularme en la maestría. Antes de la maestría, solía entrenar 5 días a la semana, ahora, si tengo suerte, puedo entrenar 1 o 2 días a la semana.',
          audio: require('@/assets/componentes/audios/dialogo8/04.mp3'),
        },
      ],
    },
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
