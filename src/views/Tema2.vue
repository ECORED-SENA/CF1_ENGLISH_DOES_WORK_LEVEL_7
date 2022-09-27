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
    
    div.pst_7
      span.colr Now, you are invited to listen to the following BBC Learning English Podcast where the grammatical concepts and the use of regular and irregular verbs using the simple past will be explained. 
      span.colr_2 / Ahora, le invitamos a escuchar el podcast de la BBC Learning English, donde se explicarán los conceptos gramaticales y el uso de los verbos regulares e irregulares utilizando el pasado simple.

    .bg_grad-06
      .tarjeta.bgr_1.p-4.mb-5.mt-5
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
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              TarjetaAudio.color-acento-contenido.bgr_5.mb-3(
                :audio="require('@/assets/componentes/audios/dialogo5/04.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>… or like a ‘d’: Listened. Listened.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>Let’s hear all three again:</em>
              p.mb-0.text-bold.colr_1 <em>Neil</em>
              p <em>Stopped, started, listened. Stopped, started, listened.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>So, listen out for those 3 different pronunciations of the past simple e-d ending. It’s simple, isn’t it?</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>Yes, well we are talking about the past simple, … but … irregular verbs are not quite so simple.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>That's true: can you give us some examples of irregular verbs, please, Neil?</em>
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              TarjetaAudio.color-acento-contenido.bgr_5.mb-3(
                :audio="require('@/assets/componentes/audios/dialogo5/05.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0.text-bold.colr_1 <em>Neil</em>
              p <em>I went to the interview yesterday and got the job!</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>And another one please?</em>
              p.mb-0.text-bold.colr_1 <em>Neil</em>
              p <em>Kurosawa made some wonderful films.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>So the past simple of go is went.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>...get is got.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>...and make is made</em>
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              TarjetaAudio.color-acento-contenido.bgr_5.mb-3(
                :audio="require('@/assets/componentes/audios/dialogo5/06.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>And I’m afraid you just have to learn irregular verbs. There is no one simple rule for them.</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>But the good news is that the past simple is the same for all people.</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>Yes - it’s I got the job, you got the job, he got the job…</em>
              p.mb-0.text-bold.colr_1 <em>Finn</em>
              p <em>We got the job… they got the job…</em>
              p.mb-0.text-bold.colr_1 <em>Sophie</em>
              p <em>Everybody got the job!</em>
              p.mb-0.text-bold.colr_1 <em>Both</em>
              p <em>Hooray!</em>
    
    .row.mb-5.justify-content-center.pst_8
      .col-12.col-md-10
        .row.bgr_6.p-5
          .col-12.col-md-7.d-flex.align-items-center
            p.mb-0 En la siguiente imagen, podemos observar algunas expresiones de tiempo y de lugar que nos permiten identificar el momento en que estamos hablando del pasado simple en inglés.
          .col-12.col-md-5
            figure
              img(src="@/assets/curso/tema2/t2-8.svg", alt="alt")
    
    p.mb-5.text-center These are the cases in which we can use the past simple: 
      span.colr_2 / Estos son los casos en los que podemos usar el pasado simple:
    
    .row.pst_7
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bgr_7.p-4.h-100
          h4.text-center.colr CASE 1
          p.text-center.colr <b><em>Use</em> / Uso</b>
          span.text-center.colr <em>To express a completed action in the past (that started and finished in the past): </em> 
          span.text-center.colr_3 / Para expresar una acción completada en el pasado (que comenzó y terminó en el pasado):
          p.mt-3.text-center.text-bold <em>Example</em> / Ejemplo
          TarjetaAudio.color-acento-botones.bgr_8(
            texto="Yesterday, <i>my brother told me</i> that I should go on a student exchange in Canada."
            :audio="require('@/assets/componentes/audios/dialogo6/01.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bgr_7.p-4.h-100
          h4.text-center.colr CASE 2
          p.text-center.colr <b><em>Use</em> / Uso</b>
          span.text-center.colr <em>To list a series of completed actions in the past. </em> 
          span.text-center.colr_3 / Para enlistar una serie de acciones completadas en el pasado.
          p.mt-3.text-center.text-bold <em>Example</em> / Ejemplo
          TarjetaAudio.color-acento-botones.bgr_8(
            texto="<i>She had</i> a great vacation because <i>she took</i> a cable car, <i>went</i> snowboarding, <i>skied</i> and <i>climbed</i> a mountain this winter."
            :audio="require('@/assets/componentes/audios/dialogo6/02.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bgr_7.p-4.h-100
          h4.text-center.colr CASE 3
          p.text-center.colr <b><em>Use</em> / Uso</b>
          span.text-center.colr <em>To express habits or routines in the past. </em> 
          span.text-center.colr_3 / Para expresar hábitos o rutinas en el pasado.
          p.mt-3.text-center.text-bold <em>Example</em> / Ejemplo
          TarjetaAudio.color-acento-botones.bgr_8(
            texto="<i>Samuel wrote</i> on his resume that <i>he practiced</i> a lot of extreme sports every summer before <i>he hurt</i> his knee."
            :audio="require('@/assets/componentes/audios/dialogo6/03.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bgr_7.p-4.h-100
          h4.text-center.colr CASE 4
          p.text-center.colr <b><em>Use</em> / Uso</b>
          span.text-center.colr <em>For stative verbs. </em> 
          span.text-center.colr_3 / Para verbos estáticos.
          p.mt-3.text-center.text-bold <em>Example</em> / Ejemplo
          TarjetaAudio.color-acento-botones.bgr_8(
            texto="<i>You forgot</i> to bring the invitation and that's why <i>you couldn't get</i> into the party."
            :audio="require('@/assets/componentes/audios/dialogo6/04.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    .bg_grad-07
      span.text-bold.etiqueta <em>How to form</em>
      .row.mt-3
        .col-12.col-md-4
          .bgr_2.p-4.mb-3
            TraduccionAudio.color-acento-contenido(:dialogo="dialogo3")
          figure
            img(src="@/assets/curso/tema2/t2-9.svg", alt="alt")
        .col-12.col-md-8
          .tarjeta.bgr_1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-5.text-center.text-bold <em>Affirmative structure - Verb “to be”</em> / Verbo <em>“to be”</em>
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-10.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="Sandra <em>was</em> <i>a student several years ago.</i>"
                          :audio="require('@/assets/componentes/audios/dialogo6/05.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Sandra fue una estudiante hace varios años.
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-21.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="They <em>were</em> <i>in the pool on Sunday.</i>"
                          :audio="require('@/assets/componentes/audios/dialogo6/06.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Ellos estaban en la piscina el domingo.
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-5.text-center.text-bold <em>Affirmative structure - Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-11.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-20.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="Sara <em>studied</em> <i>English for a long time.</i>"
                          :audio="require('@/assets/componentes/audios/dialogo6/07.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Sara estudió inglés durante mucho tiempo.
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-22.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="They <em>swam</em> <i>all day.</i>" 
                          :audio="require('@/assets/componentes/audios/dialogo6/08.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Ellos nadaron todo el día.
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-5.text-center.text-bold <em>Negative structure - Verb “to be”</em> / Verbo <em>“to be”</em>
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-12.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-19.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="Sandra <em>wasn’t</em> <i>a student several years ago.</i>"
                          :audio="require('@/assets/componentes/audios/dialogo6/09.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Sandra no fue una estudiante hace varios años.
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-23.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="They <em>weren’t</em> <i>in the pool on Sunday.</i>" 
                          :audio="require('@/assets/componentes/audios/dialogo6/10.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Ellos no estuvieron en la piscina el domingo.
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-5.text-center.text-bold <em>Negative structure -  Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-13.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="Sandra <i>didn’t</i> <em>study</em> <i>English for a long time.</i>"
                          :audio="require('@/assets/componentes/audios/dialogo6/11.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Sandra no estudió inglés durante mucho tiempo.
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-23.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="They <i>didn’t</i> <em>swim</em> <i> all day.</i>"  
                          :audio="require('@/assets/componentes/audios/dialogo6/12.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 Ellos no nadaron todo el día.
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>“Yes” or “No” Questions</em> / Preguntas de “Sí” y “No”
                  p.mb-5.text-bold.text-center <em>Verb “to be”</em> / Verbo <em>“to be”</em> 
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-14.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<em>Was</em> Sandra <i>a student several years ago?</i>" 
                          :audio="require('@/assets/componentes/audios/dialogo6/13.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Sandra era estudiante hace varios años?
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-21.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<em>Were</em> they <i>in the pool on Sunday?</i>"
                          :audio="require('@/assets/componentes/audios/dialogo6/14.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Ellos estuvieron en la piscina el domingo?
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>“Yes” or “No” Questions</em> / Preguntas de “Sí” y “No” 
                  p.mb-5.text-bold.text-center <em>Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-15.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>Did</i> Sandra <em>study</em> <i>English for a long time?</i>"   
                          :audio="require('@/assets/componentes/audios/dialogo6/15.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Sandra estudió inglés durante mucho tiempo?
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-21.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>Did</i> they <em>swim</em> <i>all day?</i>" 
                          :audio="require('@/assets/componentes/audios/dialogo6/16.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Ellos nadaron todo el día?
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>Information Questions</em> / Preguntas de información
                  p.mb-5.text-bold.text-center <em>Verb “to be”</em> / Verbo “to be”
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-16.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>When</i> <em>was</em> Sandra <i>a student?</i>" 
                          :audio="require('@/assets/componentes/audios/dialogo6/17.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Cuándo fue una estudiante Sandra?
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-21.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>Why</i> <em>were</em> they <i>in the pool on Sunday?</i>"    
                          :audio="require('@/assets/componentes/audios/dialogo6/18.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Por qué estuvieron en la piscina el domingo?
              .row.justify-content-center
                .col-12.col-md-10
                  p.mb-0.text-center.text-bold <em>Information Questions</em> / Preguntas de información
                  p.mb-5.text-bold.text-center <em>Other verbs</em> / Otros verbos
                  figure.mb-5
                    img(src='@/assets/curso/tema2/t2-17.svg', alt='Texto que describa la imagen')
                  .row.mb-3
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>Where</i> <em>did</em> Sandra <i>study English for a long time?</i>"   
                          :audio="require('@/assets/componentes/audios/dialogo6/19.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Dónde estudió inglés Sandra durante mucho tiempo?
                  .row
                    .col-md-3
                      figure
                        img(src='@/assets/curso/tema2/t2-21.svg', alt='Texto que describa la imagen')
                    .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
                      div
                        TarjetaAudio.color-acento-botones.bgr_10.mb-3(
                          texto="<i>Why</i> <em>did</em> they <i>swim all day?</i>"       
                          :audio="require('@/assets/componentes/audios/dialogo6/20.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.mb-0 ¿Por qué nadaron todo el día?

    .pst_8
      TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo4")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IBLKkW632nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    span.colr Let's practice a little with the structure of the simple past. Complete the following dialogue. 
    span.colr_2 / Vamos a practicar un poco con la estructura del pasado simple. Complete el siguiente diálogo. 

    Dialogo.color-acento-contenido.mt-5.mb-5.pst_5(:dialogo="dialogo5")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Practice dialogue</em> / Diálogo de práctica amigos
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


    
    

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
          '<em><b>What happened to the Titanic?</b> <br><br> Eva’s story of survival <br><br> In this session, we heard the incredible tale of how seven-year-old <b>Eva Hart</b> survived the Titanic disaster. Now you’ll get a chance to study the grammar of the simple past and learn how to use these verb forms to tell stories. Listen to audio.</em>',
        textoEsp:
          '¿Qué pasó con el Titanic? <br><br> La historia de supervivencia de Eva Hart. <br><br> En esta sesión, escucharemos la increíble historia de cómo Eva Hart, de siete años, sobrevivió al desastre del Titanic. Ahora tendrá la oportunidad de estudiar la gramática del pasado simple y aprenderá a usar estas formas verbales para contar historias. Escuche el audio.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Before she <b>sank</b>, she <b>was</b> a very beautiful ship: stationary on the ocean, with all her lights on. It was dreadfully cold but the sea was the calmest I’d ever seen. The starlit night was the brightest I’d ever seen. <br> I <b>looked</b> back and <b>saw</b> the whole of that tragedy. And I <b>saw</b> that ship break in half. The front part <b>went</b> down and <b>left</b> the stern sticking up in a horrifying fashion. It <b>was</b> enormous. It <b>seemed</b> to stick up in the air for a long time. And then it gradually <b>went</b> down, turning over. <br><br> And after that there <b>was</b> the sound of the whole disaster. And that <b>was</b> people drowning. That is something you <b>could</b> never forget. And then the dreadful silence that <b>followed</b> it. It <b>seemed</b> as if the whole world <b>was</b> standing still.</em>',
        textoEsp:
          'Antes de hundirse, era un barco muy hermoso: inmóvil en el océano, con todas sus luces encendidas. Hacía un frío espantoso, pero el mar era el más tranquilo que haya visto alguna vez. La noche estrellada fue la más brillante que jamás haya visto. <br>Miré hacia atrás y vi toda esa tragedia. Y vi ese barco partirse por la mitad. La parte delantera se hundió y dejó la popa sobresaliendo de forma espantosa. Era enorme. Pareció mantenerse en el aire durante mucho tiempo. Y luego fue bajando gradualmente, volteándose. <br><br> Y después de eso, permaneció el sonido de todo el desastre. Se trataba de gente ahogándose. Es algo que nunca podrías olvidar. Y luego el espantoso silencio que siguió. Parecía como si el mundo entero se hubiese detenido.',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>With the simple past tense, you have to be careful when forming sentences with the verb "to be" and with any of the other verbs, since there are some small differences in the grammar of the sentence. These are the sentence structures in the simple past tense:</em>',
        textoEsp:
          'Con el tiempo pasado simple, hay que tener cuidado a la hora de formar oraciones con el verbo "<em>to be</em>" y con cualquiera de los otros verbos, porque existen unas pequeñas diferencias en la gramática de la oración.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>After having studied the structures of the simple past in the affirmative, negative, and interrogative forms, with information questions of the verb "to be" and other verbs, we invite you to watch the following video that will allow you to strengthen your knowledge.</em>',
        textoEsp:
          'Después de estudiar las estructuras del pasado simple en forma afirmativa, negativa e interrogativa, con preguntas de información del verbo <em>“to be”</em>  y de otros verbos, lo invitamos a ver el siguiente video, el cual le permitirá fortalecer sus conocimientos.',
      },
    ],
    dialogo5: {
      personajes: [
        {
          nombre: 'Flight attendant',
          img: require('@/assets/curso/tema2/t2-24.svg'),
        },
        {
          nombre: 'Passenger',
          img: require('@/assets/curso/tema2/t2-25.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Flight attendant',
          textoIng: '<em>Sir, *** you enjoy your flight?</em>',
          textoEsp: 'Señor, ¿disfrutó su vuelo?',
          audio: require('@/assets/componentes/audios/dialogo7/01.mp3'),
          palabra: 'did',
        },
        {
          personaje: 'Passenger',
          textoIng:
            '<em>Yes, it *** very quiet and I slept the whole trip.</em>',
          textoEsp: 'Sí, estuvo muy tranquilo y dormí todo el viaje.',
          audio: require('@/assets/componentes/audios/dialogo7/02.mp3'),
          palabra: 'was',
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
