<template>
  <div>
    <search />
    <div class="w-full flex flex-col lg:flex-row lg:px-6 bg-white">
      <div class="py-6 px-6">
        <h1 class="text-3xl font-bold">Recommended For You</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          <a href="#"
            ><div
              class="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full border border-gray-300 rounded-sm bg-white"
            >
              <div class="w-full h-48">
                <img
                  src="https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <div class="text-sm">
                  <h3 class="font-bold text-base">Burritown</h3>
                  <div class="flex items-center text-green-400">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="svg-inline--fa fa-star fa-w-18 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    4.7
                  </div>
                  <p class="mt-1">
                    <span>Burritos · </span><span>Salads · </span
                    ><span>Mexican · </span><span>Chicken </span>
                  </p>
                  <p>1.5 miles away · $$</p>
                </div>
              </div>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
export default {
  name: 'SearchPage',
  components: {
    search: Search
  }
}
</script>
