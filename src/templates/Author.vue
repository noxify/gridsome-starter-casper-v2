<template>
  <Layout>
    <div class="flex relative text-gray-400 mx-auto bg-black px-4 h-auto">
      <div class="container w-full mx-auto flex flex-wrap my-5">  
        
          <div class="items-center mx-auto p-0">
              <g-image
                :src="$page.author.image"
                width="100"
                height="100"
                class="h-32 w-32 rounded-full bg-gray-600 border-6 border-gray-800 self-center"
              ></g-image>
            
          </div>
          <div class="w-full text-center pb-5">
            <h2 class="text-white pb-0 mb-0">{{ $page.author.name}}</h2>
            <span class="text-lg">{{ $page.author.bio }}</span>
            <span>{{ $page.author.belongsTo.totalCount }} {{ postLabel }}</span> 
          </div>
          <div class="w-full text-center pb-32">

              {{ $page.author.belongsTo.totalCount }} {{ postLabel }} 
              &nbsp;&middot;&nbsp;
              <a :href="$page.author.facebook" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                <font-awesome :icon="['fab', 'facebook']"/>
              </a>
              &nbsp;
              <a :href="$page.author.twitter" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                <font-awesome :icon="['fab', 'twitter']"/>
              </a>
              &nbsp;
              <a :href="$page.author.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                <font-awesome :icon="['fab', 'linkedin']"/>
              </a>


          </div>
      </div>
    </div>

    <div class="container mx-auto px-6 sm:px-0">
      <div class="post-feed">
        <ListItem v-for="edge in $page.author.belongsTo.edges" :key="edge.node.id" :record="edge.node" />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.author.path"
          :currentPage="$page.author.belongsTo.pageInfo.currentPage"
          :totalPages="$page.author.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.author.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
    

   
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    author(id: $id) {
      name
      bio
      image
      facebook
      twitter
      linkedin
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
      return pluralize('post',this.$page.author.belongsTo.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$page.author.name,
      bodyAttrs: {
        class: "bg-white"
      }
    };
  }
};
</script>