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
  plugins: ['~/plugins/typed.js'],
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
    '@nuxtjs/firebase',
    'nuxt-svg-loader',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    'nuxt-purgecss',
    ['@nuxtjs/pwa', { meta: false, icon: false, manifest: false }]
  ],
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  pwa: {
    icon: {
      fileName: 'favicon.ico',
    },
    manifest: {
      name: 'DiverPark',
      lang: 'fa',
      useWebmanifestExtension: false
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://diverpark.net/.*',
          strategyOptions: {
            cacheName: 'dp-cache',
          },
          strategyPlugins: [{
             use: 'Expiration',
             config: {
               maxEntries: 10,
               maxAgeSeconds: 300
             }
           }]
        }
      ]
   }
  },
  i18n: {
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
    detectBrowserLanguage: false,
    //detectBrowserLanguage: {
    //  useCookie: true,
    //  cookieKey: 'i18n_redirected',
    //  alwaysRedirect: true
    //},
    langDir: 'static/lang/'
  },
  sitemap: {
    hostname: 'https://diverpark.net',
    // shortcut notation (basic)
    i18n: true,
    // nuxt-i18n notation (advanced)
    i18n: {
      locales: ['en', 'es'],
      routesNameSeparator: '___'
    }
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyDub0idsdL-ZRbaboLkwW8CF5BqDEuQXsI',
      authDomain: 'diverpark-836bc.firebaseapp.com',
      databaseURL: 'https://diverpark-836bc.firebaseio.com',
      projectId: 'diverpark-836bc',
      storageBucket: 'diverpark-836bc.appspot.com',
      messagingSenderId: '1086733662855',
      appId: '1:1086733662855:web:12f7cb7b9a109008ee1622',
      measurementId: 'G-6RG7EFH5WH'
    },
    services: {
      auth: false,
      firestore: false,
      functions: false,
      storage: true,
      database: false,
      messaging: false,
      performance: false,
      analytics: true,
      remoteConfig: false
    }
  },
  /*
   ** Build configuration
   */
  build: {
    parallel: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    
    optimization: {
      minimize: true,
      minimizer: [

        // terser-webpack-plugin
        // optimize-css-assets-webpack-plugin
      ],
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {},
        maxSize: 200000
      }
    },

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
