<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Castillos hinchables</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                :to="localePath('/blog/castillos-pequeños')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Castillos pequeños
              </nuxt-link>
            </li>
               <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                :to="localePath('/blog/castillos-tobogan')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Castillos con tobogan
              </nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                :to="localePath('/blog/castillos-grandes')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Castillos grandes
              </nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                :to="localePath('/blog/castillos-agua')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Castillos de agua
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Atracciones</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                :to="localePath('/blog/toro-mecanico')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Toro mecánico
              </nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                :to="localePath('/blog/fiesta-espuma')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Fiesta de espuma
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.facebook.com/people/Diverpark-Diverpark/100007428406595"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Facebook</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                :to="localePath('aboutus')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                {{ $t('common.aboutus') }}
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                :to="localePath('contact')"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                {{ $t('common.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo,
  },
}
</script>
