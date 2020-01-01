<template>
  <header>  
    
    <div class="flex w-full relative text-gray-400 mx-auto bg-black px-4 sm:px-0">
      <div class="container w-full mx-auto flex flex-wrap">  
        <div class="w-3/12 sm:w-2/12 my-5">
          <span>
            <font-awesome :icon="['fas', 'ghost']" class="mt-2 mr-6 sm:mr-3"></font-awesome>
          </span>
          <span class=" text-white">{{ $static.metadata.siteName }}</span>
        </div>
        <div class="w-9/12 sm:w-10/12">
          <div class="flex-1 text-gray-500 text-xs text-center my-6 pt-1">
            <HeaderNavigation/>
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
  }
}
</static-query>



<script>

import HeaderNavigation from "~/layouts/partials/HeaderNavigation.vue";
export default {

  components: {
    HeaderNavigation
  }

}
</script>
