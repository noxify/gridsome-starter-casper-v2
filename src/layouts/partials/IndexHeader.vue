<template>
  <header class="header relative">
    <g-image
      src="~/assets/img/header-image.jpg"
      width="1400"
      height="400"
      class="object-cover w-full absolute -z-10 h-full w-full"
    ></g-image>

    <div class="flex w-full relative text-center text-gray-400 mx-auto">
      <div class="logo mx-auto">
        <h2 class="m-0">
          <span class="text-4xl">
            <font-awesome :icon="['fas', 'ghost']" class="mb-1 mr-3"></font-awesome>
          </span>
          <span class="text-5xl text-white">{{ $static.metadata.siteName }}</span>
        </h2>
        <div class="text-gray-400 font-thin text-xl">{{ $static.metadata.siteDescription }}</div>
      </div>
    </div>

    <div class="flex w-full relative text-center text-gray-400 mx-auto px-6 sm:px-0">
      <div class="flex-1 text-gray-500 text-xs text-center md:pb-2 md:mt-8 md:mb-20">
        <div>
          <div class="container mx-auto flex flex-wrap">
            <div class="w-full md:w-1/2">
              <ul class="flex justify-left uppercase">
                <li
                  :key="element.name"
                  v-for="(element,index) in $static.metadata.navigation"
                  class="hover:text-white"
                  v-bind:class="{'mr-6' : index != Object.keys($static.metadata.navigation).length - 1}"
                >
                  <a
                    :href="element.link"
                    v-if="element.external"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ element.name }}</a>
                  <g-link v-else :to="element.link">{{element.name}}</g-link>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 invisible md:visible">
              <ul class="flex justify-center md:justify-end">
                <li
                  :key="element.name"
                  v-for="(element,index) in $static.metadata.social"
                  class="hover:text-white"
                  v-bind:class="{'mr-6' : index != Object.keys($static.metadata.social).length - 1}"
                >
                  <span class="text-sm">
                    <a :href="element.link" target="_blank" rel="noopener noreferrer">
                      <font-awesome :icon="['fab', element.icon]" />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    navigation : headerNavigation {
      name
      link
      external
    }
    social {
      icon
      link
    }
  }
}
</static-query>



<script>
import HeaderNavigation from "~/layouts/partials/HeaderNavigation.vue";
export default {
  components: {
    HeaderNavigation
  }
};
</script>
