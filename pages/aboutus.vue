<template>
  <div>
    <subHeader />
    <div class="bg-white text-gray-600">
      <div class="max-w-screen-lg mx-auto">
        <div class="mx-auto relative">
          <div class="px-4 :px-0 text-center">
            <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
              {{ $t('aboutus.title') }}
            </h2>
            <a
              class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              DIVERPARK MALLORCA
            </a>
          </div>

          <img
            async
            class="w-full object-cover lg:rounded"
            style="height: 28em"
            src="https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2FdiverPark.jpg?alt=media&token=f77cf89f-37fe-49fd-8f1a-2a01db98d667"
            alt="diverpark alquiler castillos hinchables, toro mecánico fiesta espuma  para comuniones fiestas o bautizos en palma de mallorca"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div
            class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full"
          >
            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              DIVERPARK
            </h2>
            <p class="pb-6">
              {{ $t('aboutus.description') }}
            </p>

            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              {{ $t('aboutus.src') }}
            </h2>

            <p class="pb-6">
              {{ $t('aboutus.description_2') }}
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
    subHeader: SubHeader,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Diverpark Mallorca | Castillos hinchables | Sobre Nosotros',
      meta: [
      {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.aboutus.title'),
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:this.$t('seo.aboutus.description'),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
