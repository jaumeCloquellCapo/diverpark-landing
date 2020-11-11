import languages from './static/lang/languages'

export default {
  components: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Diverpark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-svg-loader',
    [
      'nuxt-i18n',
      {
        // Options
        //to make it seo friendly remove below line and add baseUrl option to production domain
        seo: true,
        baseUrl: 'https://diverpark.net',
        lazy: true,
        locales: languages,
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es'
        },
        //detectBrowserLanguage: {
        //  useCookie: true,
        //  cookieKey: 'i18n_redirected',
        //  alwaysRedirect: true
        //},
        langDir: 'static/lang/'
      }
    ]
  ],
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
