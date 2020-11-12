<template>
  <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
    <div class="container mx-auto flex justify-between">
      <div class="relative block p-2 lg:p-3 text-xl text-blue-600 font-bold">
        <NuxtLink
          :to="localePath('index')"
          class="inline-block py-2 px-4 text-black font-bold no-underline"
        >
          DIVERPARK
        </NuxtLink>
      </div>
      <ul class="flex">
        <!--Regular Link-->
        <li class="hover:bg-blue-800 hover:text-white">
          <NuxtLink
            v-for="locale in availableLocales"
            class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.code }}
          </NuxtLink>
   

        <!--Toggleable Link-->
        <li class="toggleable hover:bg-blue-800 hover:text-white">
          <input
            type="checkbox"
            value="selected"
            id="toggle-one"
            class="toggle-input"
          />
          <label
            for="toggle-one"
            class="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
          >
            {{ $t('common.gallery') }}
          </label>
          <div
            role="toggle"
            class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 z-50"
          >
            <div
              class="container mx-auto w-full flex flex-wrap justify-between mx-2"
            >
              <ul
                class="px-4 w-full sm:w-1/2 lg:w-1/3 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
              >
                <h3 class="font-bold text-xl text-white text-bold mb-2">
                  Castillos Hinchables
                </h3>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'gallery',
                        query: { category: 'castillos-pequeños' },
                      })
                    "
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    Pequeños
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'gallery',
                        query: { category: 'castillos-medianos' },
                      })
                    "
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    Medianos
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath('castillosgrandes')"
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    Grandes
                  </NuxtLink>
                </li>
              </ul>
              <ul
                class="px-4 w-full sm:w-1/2 lg:w-1/3 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
              >
                <h3 class="font-bold text-xl text-white text-bold mb-2">
                  Fiestas con agua
                </h3>
                <li>
                  <NuxtLink
                    :to="localePath('espuma')"
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    Cañon Espuma
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                    >Xop Park</a
                  >
                </li>
                <li>
                  <NuxtLink
                    :to="localePath('castillosagua')"
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    Castillos de agua
                  </NuxtLink>
                </li>
              </ul>
              <ul
                class="px-4 w-full sm:w-1/2 lg:w-1/3 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3"
              >
                <h3 class="font-bold text-xl text-white text-bold">
                  Animaciones
                </h3>
                <li>
                  <a
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                    >Ponys</a
                  >
                </li>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'gallery',
                        query: { category: 'animaciones' },
                      })
                    "
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    magos
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'gallery',
                        query: { category: 'animaciones' },
                      })
                    "
                    class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                  >
                    Payasos
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li class="hover:bg-blue-800 hover:text-white">
          <NuxtLink
            :to="localePath('contact')"
            class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
          >
            {{ $t('common.booking') }}
          </NuxtLink>
        </li>


      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
  },
  data() {
    return {}
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
<style scoped>
/* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
}

/* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.hoverable {
  position: static;
}

.hoverable > a:after {
  content: '\25BC';
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.hoverable:hover .mega-menu {
  display: block;
}

/* #toggle Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.toggleable > label:after {
  content: '\25BC';
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.toggle-input {
  display: none;
}
.toggle-input:not(checked) ~ .mega-menu {
  display: none;
}

.toggle-input:checked ~ .mega-menu {
  display: block;
}

.toggle-input:checked + label {
  color: white;
  background: #2c5282; /*@apply bg-blue-800 */
}

.toggle-input:checked ~ label:after {
  content: '\25B2';
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}
</style>