
<template>
  <div>
    <subHeader />
    <atracciones :posts="posts" />
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'
import Atracciones from '@/components/Atracciones'
import getSiteMeta from '~/utils/getSiteMeta.js'
export default {
  name: 'Atracciones',
  components: {
    subHeader: SubHeader,
    atracciones: Atracciones,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.$t('seo.atracciones.title'),
      description: this.$t('seo.atracciones.title'),
      url: 'https://diverpark.net' + this.$route.fullPath,
    }
    return {
      title: this.$t('seo.atracciones.title'),
          htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
      link: [...i18nSeo.link],
    }
  },

  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/atracciones`).fetch()

    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>