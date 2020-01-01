<template>
  <article class="post-card bg-white">
    <a class="post-card-image-link" :href="record.path">
      <div class="post-card-image">
        <g-image :src="record.image" class="object-cover h-full w-full"></g-image>
      </div>
    </a>
    <div class="post-card-content">
      <a class="post-card-content-link" :href="record.path">
        <header class="post-card-header">
          <span
            class="text-gray-500 uppercase text-xs font-medium tracking-wide"
          >{{ record.category.title }}</span>
          <h2 class="post-card-title text-xl">{{ record.title }}</h2>
        </header>
        <section class="post-card-excerpt">
          <p>{{ record.excerpt }}</p>
        </section>
      </a>
      <footer class="post-card-meta mt-4">
        <ul class="author-list">
          <li v-for="author in record.author" :key="author.id" class="author-list-item">
            <g-link :to="author.path" v-tooltip="author.name">
              <g-image
                :src="author.image"
                :alt="author.name"
                class="w-6 h-6 rounded-full bg-gray-200"
              />
            </g-link>
          </li>
        </ul>

        <span class="text-xs uppercase text-gray-700">{{record.timeToRead}} min read</span>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: ["record"]
};
</script>
