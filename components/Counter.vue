<template>
  <section class="text-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
              {{$t('counter.title')}}
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <p class="sm:text-2xl mx-auto leading-relaxed text-base">
         {{$t('counter.subtitle')}}
        </p>
      </div>
      <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
            <img
              async
              src="~/assets/img/calendar.svg?inline"
              class="text-blue-500 w-12 h-12 mb-3 inline-block"
              alt="diverpark animaciones infantiles palma de mallorca baleares"
            />

            <p class="title-font font-medium text-3xl text-gray-800">+10000</p>
            <p class="leading-relaxed text-gray-600"> {{$t('counter.events')}}</p>
          </div>
        </div>
        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
            <img
              async
              src="~/assets/img/castle-svgrepo-com.svg?inline"
              class="text-blue-500 w-12 h-12 mb-3 inline-block"
              alt="diverpark castillos hinchables alquiler baleares"
            />
            <p class="title-font font-medium text-3xl text-gray-800">+40</p>
            <p class="leading-relaxed text-gray-600">{{$t('counter.castle')}}</p>
          </div>
        </div>
        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
            <img
              async
              src="~/assets/img/user.svg?inline"
              class="text-blue-500 w-12 h-12 mb-3 inline-block"
              alt="diverpark castillos hinchables palma de mallorca baleares"
            />
            <p class="title-font font-medium text-3xl text-gray-800">+2500</p>
            <p class="leading-relaxed text-gray-600">{{$t('counter.clients')}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LandingPage',
  components: {},
}
</script>
