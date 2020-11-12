<template>
  <div>
    <subHeader />
    <div class="bg-white text-gray-600">
      <div class="max-w-screen-lg mx-auto">
        <div class="mx-auto relative">
          <div class="px-4 :px-0 text-center">
            <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
              Alquiler de Castillos Hinchables grandes en Mallorca
            </h2>
            <a
              class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              Alquiler castillos hinchables grandes
            </a>
          </div>

          <img
            async
            class="w-full object-cover lg:rounded"
            style="height: 28em"
            src="~/assets/background/avion.jpg"
            alt="diverpark alquiler castillos hinchables, toro mecánico fiesta espuma  para comuniones fiestas o bautizos en palma de mallorca"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div
            class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full"
          >
            <p class="pb-6">
              En DiverPark tenemos una amplia variedad de castillos con tobogán
              para responder a las exigencias de todos nuestros clientes de
              Palma de Mallorca. Nos hemos comprometido con cumplir tus
              necesidades en materia de entretenimiento, por ello, somos una
              opción segura y eficiente en el área. Nuestros castillos tienen
              diferentes tamaños y los hay en distintos modelos, por ello se
              pueden adaptar de manera integral a las medidas de la superficie
              donde se colocarán, garantizando la diversión de todos sus
              invitados. El precio de nuestros castillos incluye el servicio de
              entrega, montaje y recogida, así como de un seguro de
              responsabilidad civil que es necesario para el uso de este tipo de
              montajes para el entretenimiento. Para cualquier consulta, ponte
              en contacto con nosotros, te daremos información detallada sobre
              nuestros castillos hinchables con toboganes.
            </p>
          </div>
        </div>
      </div>
      <gallery categoryFilter="castillos-grandes"/>
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
    subHeader: SubHeader,
    gallery: Gallery,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Diverpark | Castillos hinchables con tobogan | Mallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Alquiler de Castillos Hinchables con tobogan en Mallorca, actuales y económicos Perfectos para comuniones y fiestas de cumpleaños ✓',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Alquiler de Castillos Hinchables con tobogan  en Mallorca, actuales y económicos Perfectos para comuniones y fiestas de cumpleaños ✓',
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
