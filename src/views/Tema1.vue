<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Skiing in the Alps was not that fun!</em> (¡Esquiar en los Alpes no fue tan divertido!)
    
    .row.mb-5
      .col-12.col-md-7
        p.colr.text-bold <em>When we talk about leisure activities, trips and life experiences, it is important to take into account all those activities that we do to have fun and discover other horizons, and that marked us for life. It is not about all those unimportant obligations and activities that we have in our daily lives.</em>
        p Cuando hablamos de actividades de ocio, viajes y experiencias de vida, es importante tener en cuenta todas aquellas actividades que realizamos para divertirnos,  conocer otros horizontes, y que nos marcaron de por vida. No se trata de todas esas obligaciones y actividades sin importancia que tenemos en nuestra vida diaria.
      .col-12.col-md-5
        figure
          img(src="@/assets/curso/tema1/t1-1.svg", alt="alt")
    
    span.colr.text-bold Below is the following dialogue between two friends who have not seen each other for a long time. 
    | /A continuación, se presenta el siguiente diálogo entre dos amigos que hace tiempo no se veían.

    Dialogo.color-acento-contenido.mt-5.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue meeting of friends</em> / Diálogo encuentro de amigos
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.
    
    TraduccionAudio.color-acento-contenido.mb-5(:dialogo="dialogo1")

    .bg_grad-03.p-5
      .row.bg_grad-04
        .col-12.col-md-3
          figure
            img(src="@/assets/curso/tema1/t1-4.svg", alt="alt")
        .col-12.col-md-9
          span.colr.text-bold <em>Expressions used in our daily lives, such as practicing a sport, going on a trip, or doing an activity,</em>
          p.mb-5 Expresiones utilizadas en nuestra vida cotidiana, como practicar un deporte, salir de viaje, o hacer una actividad.
          SlyderF.slyder-arrows.mb-5(columnas="col-lg-3 col-xl-3")(data-aos="fade-left")
            .pst_4.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-5.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/01.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Go to a concert</em>
                  p.mb-0.text-center Ir a un concierto
            .pst_4.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-6.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/02.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Do karaoke</em>
                  p.mb-0.text-center Hacer karaoke
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-7.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/03.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Run in a car race</em>
                  p.mb-0.text-center  Correr en una carrera automovilística
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-8.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/04.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Practice scuba diving</em>
                  p.mb-0.text-center Bucear en el océano, practicar submarinismo
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-9.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/05.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Go whale watching</em>
                  p.mb-0.text-center Ir a observar ballenas
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-10.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/06.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Travel in a cruise</em>
                  p.mb-0.text-center Viajar en un crucero
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-11.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/07.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Go on a student exchange</em>
                  p.mb-0.text-center Irse de intercambio estudiantil
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-12.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/08.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Try exotic food</em>
                  p.mb-0.text-center Probar comida exótica
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-13.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/09.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Take a cable car</em>
                  p.mb-0.text-center Tomar un teleférico
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-14.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/10.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Climb a mountain</em>
                  p.mb-0.text-center Escalar una montaña
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-15.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/11.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Practice extreme sport</em>
                  p.mb-0.text-center Practicar deportes extremos
            .tarjeta.p-2.d-flex.align-items-end.tarjeta-bg.pst_8(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-16.png')})`}" style='height: 347px')
              .tarjeta.bg-white.p-2.w-100.text-small
                div
                  Audio.color-acento-botones.pst_3(
                    :audio="require('@/assets/componentes/audios/dialogo2/12.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.mb-0.colr_2.text-bold.text-center.colr_1 <em>Snow skiing</em>
                  p.mb-0.text-center Esquiar en la nieve
    
    div.mt-5.mb-5
      span.colr.text-bold Now it's your turn to use the new vocabulary. Complete the following dialogue.
      | / Ahora es su turno de usar el nuevo vocabulario. Complete el siguiente diálogo. 

    Dialogo.color-acento-contenido.mt-5.mb-5.pst_5(:dialogo="dialogo2")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Practice dialogue</em> / Diálogo de práctica amigos
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionAudio,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Susana',
          img: require('@/assets/curso/tema1/t1-2.svg'),
        },
        {
          nombre: 'Jimmy',
          img: require('@/assets/curso/tema1/t1-3.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Susana',
          textoIng:
            '<em>Hello, Jimmy! Long time no see. You look very tan… *** were you?</em>',
          textoEsp:
            '¡Hola, Jimmy! Tiempo sin verte. Te ves muy bronceado... ¿Dónde estabas?',
          audio: require('@/assets/componentes/audios/dialogo1/01.mp3'),
          palabra: 'WHERE',
        },
        {
          personaje: 'Jimmy',
          textoIng:
            '<em>Hi, Susana! I was in San Andrés with my family. We *** by plane and spent some days by the sea last week.</em>',
          textoEsp:
            '¡Hola, Susana! Estuve en San Andrés con mi familia. Viajamos en avión y pasamos unos días junto al mar la semana pasada.',
          audio: require('@/assets/componentes/audios/dialogo1/02.mp3'),
          palabra: 'TRAVELED',
        },
        {
          personaje: 'Susana',
          textoIng:
            '<em>That is great! I lived in Nuqui when I was a kid, a long time ago, and I really miss the ***. By the time I was there, I used to practice scuba diving and go whale watching.</em>',
          textoEsp:
            '¡Eso es genial! Yo viví en Nuquí cuando era niña, eso hace mucho tiempo, y extraño mucho la costa. Cuando estuve allí, solía practicar buceo e ir a observar ballenas.',
          audio: require('@/assets/componentes/audios/dialogo1/03.mp3'),
          palabra: 'COAST',
        },
        {
          personaje: 'Jimmy',
          textoIng:
            '<em>Really? It sounds amazing! I grew up in a Swiss city, so the best plans for me were going to a concert, doing karaoke, watching car races at the autodrome and sometimes *** in the Alps.</em>',
          textoEsp:
            '¿En serio? ¡Suena increíble! Yo crecí en una ciudad suiza, así que los mejores planes para mí eran ir a un concierto, hacer karaoke, ver carreras de autos en el autódromo y, a veces, esquiar en los Alpes.',
          audio: require('@/assets/componentes/audios/dialogo1/04.mp3'),
          palabra: 'SKIING',
        },
      ],
    },
    dialogo1: [
      {
        textoIng:
          '<em>After having listened to the dialogue between Susana and Jimmy where they talked about their plans they made in the past, next we can see vocabulary that is used in everyday expressions.</em>',
        textoEsp:
          'Después de escuchar el diálogo entre Susana y Jimmy, donde hablaban acerca de los planes que realizaron en un tiempo pasado, a continuación, podemos ver vocabulario que es utilizado en expresiones cotidianas.',
        audio: require('@/assets/componentes/audios/audio-ej.mp3'),
      },
    ],
    dialogo2: {
      personajes: [
        {
          nombre: 'Susana',
          img: require('@/assets/curso/tema1/t1-2.svg'),
        },
        {
          nombre: 'Jimmy',
          img: require('@/assets/curso/tema1/t1-3.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Susana',
          textoIng: '<em>What was the best *** you had?</em>',
          textoEsp: '¿Cuáles fueron las mejores vacaciones que tuviste?',
          audio: require('@/assets/componentes/audios/dialogo3/01.mp3'),
          palabra: 'VACATION',
        },
        {
          personaje: 'Jimmy',
          textoIng:
            '<em>My best vacation was when I was 8 years old. We traveled on a cruise and tried exotic ***.</em>',
          textoEsp:
            '¡Mis mejores vacaciones fueron cuando tenía 8 años. Viajamos en un crucero y probamos comida exótica.',
          audio: require('@/assets/componentes/audios/dialogo3/02.mp3'),
          palabra: 'FOOD',
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
