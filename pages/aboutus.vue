<template>
  <div>
    <sub-header />
    <about-us />
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
import SubHeader from '@/components/SubHeader'
//import Aboutus from '@/components/Aboutus'
export default {
  name: 'SearchPage',
  components: {
    'sub-header': SubHeader,
    'about-us': () => import('@/components/Aboutus'),
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.$t('seo.aboutus.title'),
      description: this.$t('seo.aboutus.description'),
      url: 'https://diverpark.net' + this.$route.fullPath,
    }

    return {
      title: this.$t('seo.aboutus.title'),
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
      link: [...i18nSeo.link],
    }
  },
}
</script>
