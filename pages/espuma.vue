<template>
  <div>
    <subHeader />
    <div class="bg-white text-gray-600">
      <div class="max-w-screen-lg mx-auto">
        <div class="mx-auto relative">
          <div class="px-4 :px-0 text-center">
            <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
              FIESTA ESPUMA MALLORCA
            </h2>
            <a
              class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              Alquiler Cañón de Espuma
            </a>
          </div>

          <img
            async
            class="w-full object-cover lg:rounded"
            style="height: 28em"
            src="~/assets/background/espuma.jpg"
            alt="diverpark alquiler castillos hinchables, toro mecánico fiesta espuma  para comuniones fiestas o bautizos en palma de mallorca"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div
            class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full"
          >
            <p class="pb-6">
              Da el golpe este año y opta por el alquiler del cañón de espuma de
              diverpark. La Fiesta de la Espuma es la reina de las fiestas del
              verano, siempre divertida y refrescante. Sumérgete con tus amigos
              en una gran montaña de espuma.Toda Fiesta de la Espuma da la
              bienvenida al buen tiempo. Válida para niños, jóvenes y adultos,
              ¿a qué esperar para decir SI, al alquiler de nuestro cañón de
              espuma y celebrar este evento en tu pueblo o ciudad?
            </p>

            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Fiesta de la Espuma para todos los públicos
            </h2>

            <p class="pb-6">
              Instalamos el cañón de espuma tanto en espacios abiertos, calles,
              plazas, como en recintos cerrados, discotecas, pabellón deportivo…
              siempre que dispongan de salida de agua. El equipo se monta sobre
              un soporte para disparar la espuma desde una altura óptima,
              colocándose más alto, sobre escenarios o andamios, para dar más
              vistosidad a la celebración. El servicio de alquiler de cañón de
              espuma para este tipo de fiestas tiene una duración de entre 45
              minutos y 2 horas, dependiendo el servicio contratado. Asimismo,
              pero podemos ajustar el horario al tipo de evento.
            </p>

            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              ¿Qué es una fiesta de espuma con diverpark?
            </h2>

            <p class="pb-6">
              Una fiesta de espuma es como jugar en un gran baño de burbujas.
              Puede ser tan simple como la espuma que sale de una máquina a tu
              patio trasero. Puedes contener la espuma en un área, puedes
              hacerlo en una colchoneta hinchable. Para que tu fiesta sea aún
              más elaborada, ¿por qué no agregar algunas luces, música alta y
              bolas de discoteca? El único límite es tu imaginación y podemos
              ayudarte con eso también. Es posible que haya oído hablar de las
              fiestas de espuma en las discotecas, pero se están convirtiendo en
              una alternativa muy popular a la tradicional fiesta en el patio
              trasero y en fiestas de cumpleaños. Si está planeando un festival
              o carnaval, un área de cañón de espuma atrae a enormes multitudes.
              Es un complemento a los castillos hinchables. Un cañón de espuma
              crea un área de juego imaginativa para niños de todas las edades.
              Idealmente, las fiestas de espuma deben instalarse en una
              superficie no resbaladiza. La espuma puede volverse resbaladiza y
              causar caídas. La espuma es una solución especial que no es
              tóxica, no es alergénica y es inofensiva para el césped, las
              plantas y la ropa.
            </p>
          </div>
        </div>
      </div>
      <gallery categoryFilter="castillos-agua" />
      <!-- main ends here -->
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/SubHeader'
import Gallery from '@/components/PhotoGallery'
export default {
  name: 'SearchPage',
  components: {
    gallery: Gallery,
    subHeader: SubHeader,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
         title: 'Diverpark | Fiesta espuma | Mallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Alquiler de Cañón de Espuma capaz de crear una gran cantidad de espuma en muy poco tiempo elemente ideal en las fiestas de la espuma en Mallorca baleares',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Fiesta de la espuma, Un cañón que convertirá todo a tu alrededor en un mundo nevado de espuma. Preparada para hasta 500 personas. Incluye monitor.',
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
