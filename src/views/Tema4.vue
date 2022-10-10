<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Linking ideas in the past</em> (Conectar ideas en el pasado)
    
    .row
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/t4-1.png", alt="alt")
      .col-12.col-md-7(data-aos="flip-up")
        TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo1")

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 <em>Connectors</em> (Conectores)
    
    .row.mb-5
      .col-12.col-md-7.mb-3.mb-md-0(data-aos="flip-up")
        TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo2")
      .col-12.col-md-5(data-aos="fade-up-left")
        figure
          img(src="@/assets/curso/tema4/t4-2.svg", alt="alt")
    
    .row.mb-5.bgr_11.p-3.p-lg-5
      p.text-bold.text-center.text-white <em>Dialogue</em> / Diálogo
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img250(src="@/assets/curso/tema4/t4-3.svg", alt="alt")
      .col-12.col-md-6.mb-3.mb-md-0(data-aos="zoom-in")
        TraduccionChat.color-acento-botones(:dialogo="traduccionChat") 
      .col-12.col-md-3(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img250(src="@/assets/curso/tema4/t4-4.svg", alt="alt")
    
    span.text-bold.etiqueta <em>How to use</em>
    br
    br
    span.colr <em>In the following table, we will see how to use some of the most common connectors in the past tense to connect an action or an event to a point in time; to join two clauses (or smaller sentences) to create one big complex sentence. </em> 
    span / En la siguiente tabla, veremos cómo usar algunos de los conectores más comunes en el tiempo pasado para conectar una acción o un evento a un punto en el tiempo; para unir dos cláusulas (u oraciones más pequeñas) para crear una gran oración compleja.

    .row.mb-3.mt-5.justify-content-center
      .col-12.col-md-10.col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 1
          span Conectores
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header.p-0.bgr_17
            figure
              img(src="@/assets/curso/tema4/t4-5.svg", alt="alt")
          table
            thead
              tr.text-center.colr_1
                th.bgr_15 <em>Action</em> / event
                th.bgr_15 <em>Connector</em>
                th.bgr_15 <em>Time</em>
            tbody
              tr.text-center
                td.bgr_15 <b><em>We already had plans</em></b>
                  p Nosotros ya teníamos planes
                td.bgr_15 <b><em>by the time</em></b>
                  p para cuando
                td.bgr_15 <b><em>they invited us.</em></b>
                  p nos invitaron.
              tr.text-center
                td.bgr_15 <b><em>Susana used to practice tennis</em></b>
                  p Susana solía practicar tenis
                td.bgr_15 <b><em>when</em></b>
                  p cuando
                td.bgr_15 <b><em>she was a child.</em></b>
                  p era niña.
              tr.text-center
                td.bgr_15 <b><em>Customers waited</em></b>
                  p Los clientes esperaban
                td.bgr_15 <b><em>while</em></b>
                  p mientras
                td.bgr_15 <b><em>the waiter served the wine.</em></b>
                  p el camarero servía el vino.
              tr.text-center
                td.bgr_15 <b><em>He was very successful</em></b>
                  p Él fue muy exitoso
                td.bgr_15 <b><em>before</em></b>
                  p antes de que
                td.bgr_15 <b><em>the pandemic hit.</em></b>
                  p llegara la pandemia.
              tr.text-center
                td.bgr_15 <b><em>The dog was always happy</em></b>
                  p El perro siempre estaba feliz
                td.bgr_15 <b><em>after</em></b>
                  p después de
                td.bgr_15 <b><em>eating a good meal.</em></b>
                  p comer una buena comida.
              tr.text-center
                td.bgr_15 <b><em>I called my sister</em></b>
                  p Yo llamé a mi hermana
                td.bgr_15 <b><em>as soon as</em></b>
                  p tan pronto como
                td.bgr_15 <b><em>the plane landed.</em></b>
                  p aterrizó el avión.
    
    span.colr <em>Now let's see what you have learned so far about the past tense and its connectors. Complete the following dialogue. </em>
    span / Ahora veamos qué ha aprendido hasta el momento sobre el tiempo pasado y sus conectores. Complete el siguiente diálogo. 

    Dialogo.color-acento-contenido.mt-5.mb-5.pst_5(:dialogo="dialogo3")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Practice dialogue</em> / Diálogo de práctica amigos
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 <em>Expressions in the past</em> (Expresiones del pasado)
    
    .row.mb-5
      .col-12.col-lg-7(data-aos="flip-up")
        TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo4")
      .col-12.col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/t4-8.png", alt="alt")
    
    .row.mb-5.bgr_11.p-3.p-lg-5
      p.text-bold.text-center.text-white <em>Dialogue: how was the concert yesterday?</em> / Diálogo: ¿cómo estuvo el concierto ayer?
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img250(src="@/assets/curso/tema4/t4-9.svg", alt="alt")
      .col-12.col-md-6.mb-3.mb-md-0(data-aos="zoom-in")
        TraduccionChat.color-acento-botones(:dialogo="traduccionChat1") 
      .col-12.col-md-3(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img250(src="@/assets/curso/tema4/t4-10.svg", alt="alt")
    
    span.text-bold.etiqueta <em>How to use</em>
    
    .row.mb-5.mt-5
      .col-12.col-lg-4.mb-3.mb-lg-0
        TraduccionAudio.color-acento-contenido.pst_9.mb-5(:dialogo="dialogo5")(data-aos="flip-up")
      .col-12.col-lg-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta--boton.bgr_18.p-4.h-100
            figure.d-flex.justify-content-center
              img.img200(src="@/assets/curso/tema4/t4-11.svg", alt="alt")
            p.text-center.text-bold.colr_1 <em>Yesterday morning.</em>
            p.text-center.text-bold.colr_3 <b><em>I received the package yesterday morning.</em></b> 
            p.mt-3.text-center.colr_2 Recibí el paquete ayer por la mañana. 
          .tarjeta--boton.bgr_18.p-4.h-100
            figure.d-flex.justify-content-center
              img.img200(src="@/assets/curso/tema4/t4-12.svg", alt="alt")
            p.text-center.text-bold.colr_1 <em>Last night.</em>
            p.text-center.text-bold.colr_3 <b><em>Last night, we went dancing.</em></b> 
            p.mt-3.text-center.colr_2 Anoche fuimos a bailar.
          .tarjeta--boton.bgr_18.p-4.h-100
            figure.d-flex.justify-content-center
              img.img200(src="@/assets/curso/tema4/t4-13.svg", alt="alt")
            p.text-center.text-bold.colr_1 <em>Six months ago</em>
            p.text-center.text-bold.colr_3 <b><em>She got her visa six months ago.</em></b> 
            p.mt-3.text-center.colr_2 Ella obtuvo su visa hace seis meses. 
          .tarjeta--boton.bgr_18.p-4.h-100
            figure.d-flex.justify-content-center
              img.img200(src="@/assets/curso/tema4/t4-14.svg", alt="alt")
            p.text-center.text-bold.colr_1 <em>The other day.</em>
            p.text-center.text-bold.colr_3 <b><em>Samuel called me the other day.</em></b> 
            p.mt-3.text-center.colr_2 Samuel me llamó el otro día. 
          .tarjeta--boton.bgr_18.p-4.h-100
            figure.d-flex.justify-content-center
              img.img200(src="@/assets/curso/tema4/t4-15.svg", alt="alt")
            p.text-center.text-bold.colr_1 <em>A long time.</em>
            p.text-center.text-bold.colr_3 <b><em>They worked at the hospital for a long time.</em></b> 
            p.mt-3.text-center.colr_2 Ellos trabajaron en el hospital durante mucho tiempo.

    span.colr <em>Now, let's see what you have learned so far about the past tense and the past time expressions. Complete the following dialogue. </em> 
    spam.colr_2 / Ahora veamos lo que ha aprendido hasta ahora sobre el tiempo pasado y las expresiones de tiempo pasado. Complete el siguiente diálogo. 

    Dialogo.color-acento-contenido.mt-5.mb-5.pst_5(:dialogo="dialogo6")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Practice dialogue</em> / Diálogo de práctica amigos
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

    








</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema4',
  components: {
    TraduccionAudio,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>To link ideas in the past, we can use certain conjunctions, prepositions or adverbs. This helps us to form complex sentences, made up of more than one clause, thus creating more complete narratives.</em>',
        textoEsp:
          'Para enlazar ideas en el pasado, podemos usar ciertas conjunciones, preposiciones o adverbios. Esto nos ayuda a formar oraciones complejas, compuestas por más de una cláusula, creando así narrativas más completas.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Connectors, as the name implies, can be used to connect an action or an event to a point in time. At the same time, this point in time can be represented not as a single word (such as "yesterday") but as an entire clause, a complete idea in its own right. In this way, we create complex sentences with a very simple topic, such as the past simple.<br><br>Next, we are going to interact with a dialogue between Martin and Andrea, who will talk about their experiences using some connectors in the past tense.</em>',
        textoEsp:
          'Los conectores, como su nombre lo indica, pueden ser usados para conectar una acción o un evento a un punto en el tiempo. Al mismo tiempo, este punto en el tiempo puede estar representado no como una sola palabra (como, por ejemplo, "ayer"), sino como toda una cláusula, una idea completa por derecho propio. De esta forma, creamos oraciones complejas con un tema muy sencillo, como el pasado simple.<br><br>A continuación, vamos a interactuar con un diálogo entre Martin y Andrea, quienes  hablarán de sus vivencias utilizando algunos conectores en tiempo pasado.',
      },
    ],
    dialogo3: {
      personajes: [
        {
          nombre: 'Martin',
          img: require('@/assets/curso/tema4/t4-6.svg'),
        },
        {
          nombre: 'Andrea',
          img: require('@/assets/curso/tema4/t4-7.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Martin',
          textoIng:
            '<em>Oh, poor thing! I’m sorry you</em> *** <em>enjoy your vacation.</em>',
          textoEsp:
            '¡Oh, pobrecita! Lamento que no disfrutaras tus vacaciones.',
          audio: require('@/assets/componentes/audios/dialogo10/05.mp3'),
          palabra: 'didn’t',
        },
        {
          personaje: 'Andrea',
          textoIng:
            '<em>Don’t worry. I was able to visit some wonderful beaches</em> *** <em>I got sick.</em>',
          textoEsp:
            'No te preocupes. Pude visitar algunas playas maravillosas antes de enfermarme.',
          audio: require('@/assets/componentes/audios/dialogo10/06.mp3'),
          palabra: 'before',
        },
      ],
    },
    dialogo4: [
      {
        textoIng:
          '<em>The simple past is always used to say when something happened, so there are certain signal words or time expressions that are associated with the past tense.<br><br>Whether preparing a trip, a meeting, or simply during a trip or meeting with friends, we often need more than just words to speak English fluently. Actually, when learning English what we need is also to work on the oral part and listen to real conversations or examples of dialogues to practice speaking.<br><br>To begin with, we have decided to share some  examples of dialogues in English in the development of the Training Component:</em>',
        textoEsp:
          'El pasado simple siempre se usa cuando se dice en qué momento pasó algo, por lo que hay ciertas palabras o expresiones de tiempo claves que se asocian con el tiempo pasado.<br><br>Ya sea a la hora de preparar un viaje, una reunión, o simplemente durante un viaje o un encuentro con amigos, a menudo nos hacen falta algo más que simples palabras para hablar inglés con fluidez. En realidad, a la hora de aprender inglés, lo que necesitamos es trabajar también la parte oral y escuchar conversaciones de verdad o ejemplos de diálogos para practicar el habla.<br><br>Para empezar, hemos decidido compartir algunos ejemplos de diálogos en inglés en el desarrollo del Componente Formativo. Se invita a escucharlos con atención para comprender la gramática estudiada.',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>When it comes to saying when something happened, it can be done by pointing to a defined point in time, like <b>"last year, yesterday, two weeks ago"</b>, or it can be done by pointing to an indefinite point in time, like <b>"a long time ago, the other day, ages ago".</b> Let’s see some of the most common past expressions:</b>',
        textoEsp:
          'A la hora de decir cuándo ocurrió algo, se puede hacer señalando un punto definido en el tiempo, como "last year, yesterday, two weeks ago", o se puede hacer señalando un punto indefinido en el tiempo, como "a long time ago, the other day, ages ago". Veamos algunas de las expresiones más comunes del pasado:',
      },
    ],
    dialogo6: {
      personajes: [
        {
          nombre: 'Susana',
          img: require('@/assets/curso/tema4/t4-16.svg'),
        },
        {
          nombre: 'Jonathan',
          img: require('@/assets/curso/tema4/t4-17.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Susana',
          textoIng:
            '<em>You waited</em> *** <em>to go to a concert again.</em>',
          textoEsp: 'Esperaste mucho tiempo para volver a ir a un concierto.',
          audio: require('@/assets/componentes/audios/dialogo11/05.mp3'),
          palabra: 'a long time',
        },
        {
          personaje: 'Jonathan',
          textoIng:
            '<em>Yes. I was very excited to see this singer live. I bought the tickets months</em> ***<em>!</em>',
          textoEsp:
            'Sí. Estaba muy emocionado de ver a este cantante en vivo. ¡Compré las boletas hace meses!',
          audio: require('@/assets/componentes/audios/dialogo11/06.mp3'),
          palabra: 'ago',
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
          textoIng:
            '<em>Andrea, I saw some photos of very beautiful beaches on your social networks. Where did you take them?</em>',
          textoEsp:
            'Andrea, vi fotos de unas playas muy hermosas en tus redes sociales. ¿Dónde las tomaste?',
          audio: require('@/assets/componentes/audios/dialogo10/01.mp3'),
        },
        {
          textoIng:
            '<em> I traveled on a cruise in the Mediterranean Sea before the holidays were over. I saved for a long time to be able to afford it, as it was my dream vacation.</em>',
          textoEsp:
            'Viajé en un crucero por el mar Mediterráneo antes de que terminaran las vacaciones. Ahorré durante mucho tiempo para poder pagarlo, ya que eran las vacaciones de mis sueños.',
          audio: require('@/assets/componentes/audios/dialogo10/02.mp3'),
        },
        {
          textoIng: '<em>Sounds like it was an unforgettable vacation.</em>',
          textoEsp: 'Suena como que fueron unas vacaciones inolvidables.',
          audio: require('@/assets/componentes/audios/dialogo10/03.mp3'),
        },
        {
          textoIng:
            '<em> It was indeed, but for the wrong reasons. I felt awful for half of the trip. When I started puking, I thought I just got seasick, but I was wrong. Half of the passengers suffered food poisoning from spoiled shellfish. By the time we got to the port of Mallorca, my friends had also gotten ill.</em>',
          textoEsp:
            'Lo fueron de hecho, pero por las razones equivocadas. Me sentí horrible la mitad del viaje. Cuando comencé a vomitar, pensé que solamente me había mareado, pero estaba equivocada. La mitad de los pasajeros sufrieron intoxicación alimentaria por mariscos en mal estado. Para cuando llegamos al puerto de Mallorca, mis amigas también se habían enfermado.',
          audio: require('@/assets/componentes/audios/dialogo10/04.mp3'),
        },
      ],
    },
    traduccionChat1: {
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
          textoIng: '<em>Hey, Jonathan! How was the concert yesterday?</em>',
          textoEsp: '¡Hey, Jonathan! ¿Cómo estuvo el concierto de ayer?',
          audio: require('@/assets/componentes/audios/dialogo11/01.mp3'),
        },
        {
          textoIng:
            '<em> It was great! You can’t imagine how much fun I had. Especially since the last time I listened to live music was two years ago, before the pandemic.</em>',
          textoEsp:
            '¡Estuvo genial! No te imaginas lo bien que la pasé. Sobre todo porque la última vez que escuché música en vivo fue hace dos años, antes de la pandemia.',
          audio: require('@/assets/componentes/audios/dialogo11/02.mp3'),
        },
        {
          textoIng:
            '<em>Really? I dared to go to a music festival last year, but there were very few people and it wasn’t that much fun.</em>',
          textoEsp:
            '¿En serio? Yo me atreví a ir a un festival de música el año pasado, pero había muy poca gente y no fue tan divertido.',
          audio: require('@/assets/componentes/audios/dialogo11/03.mp3'),
        },
        {
          textoIng:
            '<em>Yeah, that’s why I waited until this year to go to a concert again. By the way, the other day I heard on the radio that our favorite band is performing. We should go!</em>',
          textoEsp:
            'Sí, por eso esperé hasta este año para volver a ir a un concierto. Por cierto, el otro día oí en la radio que nuestra banda favorita se presenta. ¡Deberíamos ir!',
          audio: require('@/assets/componentes/audios/dialogo11/04.mp3'),
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
