<template>
  <div class="flex flex-wrap">
    <div class="w-full flex md:w-10/12 mb-4 text-center">
      <div class="mb-2 sm:mb-0 w-full">
        <div class="md:flex p-6 pl-0 self-center">
          <g-image
            :src="author.image"
            class="h-16 w-16 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6 rounded-full bg-gray-200"
          ></g-image>

          <div class="text-center md:text-left">
            <g-link
        :to="author.path" class="text-black"><h2 class="text-lg my-1 mt-2">{{ author.name }}</h2></g-link>
            <div class="text-gray-600">{{ author.bio }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-2/12 mb-4 self-center md:text-right text-center">
      <g-link
        :to="author.path"
        class="text-xs bg-transparent hover:text-blue-700 font-semibold py-2 px-4 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
      >Show more</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["author"]
};
</script>

<style>
</style>