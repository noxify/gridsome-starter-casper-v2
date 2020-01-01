<template>
  <Layout>
    <section class="post-header container mx-auto px-6 sm:px-0 text-center mt-20 mb-10">
      <p class="text-blue-500 uppercase tracking-wide text-sm">
        <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
        <span class="text-gray-500">&nbsp; / &nbsp;</span>
        <span>
          <g-link
            :to="$page.blog.category.path"
            class="hover:underline"
          >{{ $page.blog.category.title }}</g-link>
        </span>
      </p>
      <h1 class="text-4xl font-bold">{{ $page.blog.title}}</h1>
    </section>
    <section class="post-image mx-auto w-full xl:px-20">
      <g-image :src="$page.blog.image"></g-image>
    </section>

    <section class="post-content container mx-auto bg-white relative p-10 font-serif text-gray-700">
      <div class="post-content-excerpt text-xl border-b pb-10 mb-10" v-html="$page.blog.excerpt"></div>
      <div class="post-content-text text-xl" v-html="$page.blog.content"></div>
    </section>

    <section class="post-tags container mx-auto bg-white relative p-10">
      <g-link 
        v-for="tag in $page.blog.tags" 
        :key="tag.id" 
        :to="tag.path"
      class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"  
      >{{ tag.title }}</g-link>
    </section>

    <section class="post-author container p-10 mx-auto border-t">
      <Author v-for="author in $page.blog.author" :key="author.id" :author="author"></Author>
    </section>

    <section class="post-related bg-gray-200 py-20 pb-10">

      <div class="container mx-auto px-6 sm:px-0 flex flex-wrap">

        <BlogRelatedCategory :record="$page.blog.category"></BlogRelatedCategory>
        <ListItem v-if="$page.previous" :record="$page.previous"></ListItem>
        <ListItem v-if="$page.next" :record="$page.next"></ListItem>

      </div>

    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      title
      path
      image(width:1600, height:800)
      image_caption
      excerpt
      content
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      tags {
        id
        title
        path
      }
      category {
        id
        title
        path
        belongsTo(limit:4) {
          totalCount
          edges {
            node {
              ... on Blog {
                title
                path
              }
            }
          }
        }
      }
      author {
        id
        name
        bio
        image
        path
      }
      tags {
        id
        title
        path
      }
    }

    previous: blog(id: $previousElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      category {
        id
        title
      }
      author {
        id
        name
        image(width:24, height:24, fit:inside)
        path
      }
    }

    next: blog(id: $nextElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      category {
        id
        title
      }
      author {
        id
        name
        image(width:24, height:24, fit:inside)
        path
      }
    }


    
  }
</page-query>

<script>
import Author from "~/components/Author.vue";
import ListItem from "~/components/ListItem.vue";
import BlogRelatedCategory from "~/components/BlogRelatedCategory.vue";

export default {
  components: {
    Author,
    ListItem,
    BlogRelatedCategory
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
      bodyAttrs: {
        class: "bg-white"
      }
    };
  }
};
</script>