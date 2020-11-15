
<template>
  <div>
    <subHeader />
    <atracciones :posts="posts" />
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'
import Atracciones from '@/components/Atracciones'
export default {
  name: 'Atracciones',
  components: {
    subHeader: SubHeader,
    atracciones: Atracciones,
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