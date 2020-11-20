<template>
  <div>
    <sub-header />
    <div class="bg-gray-100 text-gray-100 px-8 pb-12 pt-1 text-center">
      <div
        class="max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg"
      >
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
              {{ $t('contact.title') }}
            </h2>
            <div class="text-gray-700 mt-8">
              {{ $t('contact.subtitle') }}

              <br />
              <div class="inline-flex">
                <button
                  class="button mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-4 shadow-lg"
                >
                  <a href="mailto:catidiver@hotmail.com">
                    {{ $t('common.send_email') + ' : catidiver@hotmail.com'  }}
                  </a>
                </button>
                <button
                  class="button mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-4 shadow-lg"
                >
                  <a href="tel:625458704">
                    {{ $t('common.call') + ' : 625458704' }}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="mt-8 text-center">
            <img async src="~assets/img/contact.svg?inline"   alt="diverpark baleaares alquiler animaciones infantiles, castillos hinchables toro mecánico fiesta espuma  para comuniones fiestas o bautizos en palma de mallorca"  class="w-auto" slot="svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
import SubHeader from '@/components/SubHeader'
export default {
  name: 'SearchPage',
  components: {
     'sub-header': SubHeader,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
      const metaData = {
      title: this.$t('seo.contact.title'),
      description: this.$t('seo.contact.description'),
    }
    return {
      htmlAttrs:{
          ...i18nSeo.htmlAttrs
      },
      title: this.$t('seo.contact.title'),
      meta: [
        ...getSiteMeta(metaData),
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  },
}
</script>
