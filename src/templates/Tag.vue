<template>
  <Layout>
    <div class="flex w-full relative text-gray-400 mx-auto bg-black px-4 sm:px-0 md:h-64 h-48">
      <div class="container w-full mx-auto flex flex-wrap my-5">  
        
          <div class="text-center w-full">
            <h2 class="self-center text-white">{{ $page.tag.title}}</h2>
            A collection of <span class="self-center">{{ $page.tag.belongsTo.totalCount }} {{ postLabel }}</span> 
          </div>
        
      </div>
    </div>

    <div class="container mx-auto px-6 sm:px-0 hidden md:block">
      <div class="post-feed">
        <ListItem v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :record="edge.node" />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.tag.path"
          :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
          :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
    

   
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    tag(id: $id) {
      title
      path
      belongsTo(perPage: 5, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
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
        }
      }
    }  
  }
</page-query>

<script>
import ListItem from "~/components/ListItem.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pagination,
    ListItem
  },
  computed : {
    postLabel : function() {
      var pluralize = require('pluralize')
      return pluralize('post',this.$page.tag.belongsTo.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$page.tag.title,
      bodyAttrs: {
        class: "bg-white"
      }
    };
  }
};
</script>