<template>
  <div>
    <subHeader />
    <div class="bg-white text-gray-600 ">
      <div class="max-w-screen-lg mx-auto ">
        <div class="mx-auto relative">
          <div class="px-4  :px-0 text-center ">
            <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
              Sobre nosotros
            </h2>
            <a
              class="py-2 text-green-700 inline-flex items-center justify-center mb-2 "
            >
              DIVERPARK MALLORCA
            </a>
          </div>

          <img
            class="w-full object-cover lg:rounded"
            style="height: 28em;"
            src="~/assets/background/diverPark.jpg"
            alt
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div
            class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full "
          >
             <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Diver Park
            </h2>
            <p class="pb-6">
              Somos una empresa dedicada principalmente al alquiler de Castillos
              Hinchables en Mallorca. Aunque esta no es nuestra única actividad.
              También disponemos a parte de los castillos hinchables un equipo
              especializado en espectáculos de entretenimiento para los mas
              pequeños. Desde animación con disfraces de sus personajes de
              dibujos animados favoritos, hasta sesión de pinta caras donde se
              lo pasarán en grande tanto los pequeños como los mayores.
              Procuramos seriedad y profesionalidad en nuestros servicios, para
              que la diversión siempre valla de la mano de la seguridad. Nuestro
              principal objetivo es ofrecer a nuestros clientes el mejor
              servicio, con precios muy competitivos. Nos desplazamos a toda la
              isla.
            </p>

            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Seguro de responsabilidad civil y revisiones continuas.
            </h2>

            <p class="pb-6">
              Para Mallorca DiverPark no hay nada más importante que la
              seguridad, especialmente por trabajar con niños y menores, con lo
              que todos nuestros castillos cuentan con seguros de
              responsabilidad civil, normas para la seguridad y bienestar de los
              niños, y sometemos nuestros castillos a estrictas revisiones para
              garantizar la calidad y seguridad. Además contamos con experiencia
              en el cuidado y control de niños, siendo un elemento de seguridad
              para evitar cualquier daño o problema que pueda surgir mientras
              los niños juegan con los castillos.
            </p>
          </div>
        </div>
      </div>
      <!-- main ends here -->
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/SubHeader'
export default {
  name: 'SearchPage',
  components: {
    subHeader: SubHeader
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'DIVERPARK Mallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Mallorca DIVERPARK es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Mallorca DIVERPARK es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  }
}
</script>
