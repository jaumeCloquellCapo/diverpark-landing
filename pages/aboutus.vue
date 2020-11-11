<template>
  <div>
    <subHeader />
    <div class="bg-white text-gray-600 ">
      <div class="max-w-screen-lg mx-auto ">
        <div class="mx-auto relative">
          <div class="px-4  :px-0 text-center ">
            <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
           {{$t('aboutus.title')}}
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
              DIVERPARK
            </h2>
            <p class="pb-6">
                 {{$t('aboutus.description')}}
        
            </p>

            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                    {{$t('aboutus.src')}}
   
            </h2>

            <p class="pb-6">
                   {{$t('aboutus.description_2')}}
         
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
      title: 'alquiler animaciones mallorca',
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
