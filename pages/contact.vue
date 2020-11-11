<template>
  <div>
    <subHeader />
    <div class="bg-gray-100 text-gray-100 px-8 pb-12 pt-1">
      <div
        class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg"
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
                  <a href="mailto:catidiver@gmail.com">
                    {{ $t('common.send_email') }}
                  </a>
                </button>
                <button
                  class="button mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-4 shadow-lg"
                >
                  <a href="tel:625458704">
                    {{ $t('common.call') }}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="mt-8 text-center">
            <img src="~assets/img/contact.svg?inline" alt slot="svg" />
          </div>
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">
              {{ $t('common.name') }}
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">
              {{ $t('common.email') }}
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">{{
              $t('common.message')
            }}</span>
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="mt-8">
            <vue-recaptcha
              sitekey="6LfTEgkUAAAAABWd3RBJdha8aEC58-vnvZuFeqtB"
              :loadRecaptchaScript="true"
            >
              <button
                class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                {{ $t('common.send_email') }}
              </button>
            </vue-recaptcha>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import SubHeader from '@/components/SubHeader'
export default {
  name: 'SearchPage',
  components: {
    VueRecaptcha,
    subHeader: SubHeader
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Castillos hinchablesmallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mallorca DiverPark es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Mallorca Diverpark es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  },
}
</script>
