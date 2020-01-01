<template>
  <article class="post-card text-center bg-teal-900 text-white relative">
    <header class="pt-10">
      <small>— {{ $static.metadata.siteName }} —</small>
      <h3 class="font-thin pt-0 mt-0">
        <g-link :to="record.path">{{ record.title }}</g-link>
      </h3>
    </header>

    <div class="justify-center self-center">
    <div class="text-transparent fill-current stroke-white w-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"
        />
      </svg>
    </div>
    </div>
    <div class="post-card-content pt-2">

      <ul>
        <li v-for="element in record.belongsTo.edges" :key="element.node.id" class="border-b border-b-teal-700 py-2 mx-4">
          <g-link :to="element.node.path">{{ element.node.title }}</g-link>
        </li>
      </ul>

    </div>
    <div class="absolute inset-x-0 bottom-0 py-5 text-center text-sm">
      <g-link :to="record.path">Show all items ( {{ record.belongsTo.totalCount }} )</g-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ["record"]
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>