<template>
  <div>
    <subHeader />
    <aboutus />
  </div>
</template>

<script>
import SubHeader from '@/components/SubHeader'
import Aboutus from '@/components/Aboutus'
export default {
  name: 'SearchPage',
  components: {
    subHeader: SubHeader,
    aboutus: Aboutus,
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
          content: this.$t('seo.aboutus.description'),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
