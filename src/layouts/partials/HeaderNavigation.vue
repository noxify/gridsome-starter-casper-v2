<template>
  <div>
    <div class="container flex flex-wrap">
      <div class="w-full md:w-1/2">
        <ul class="flex justify-left uppercase">
          <li 
          :key="element.name" 
          v-for="(element,index) in $static.metadata.navigation" 
          class="hover:text-white"
          v-bind:class="{'mr-6' : index != Object.keys($static.metadata.navigation).length - 1}"
        >
          <a :href="element.link" v-if="element.external" target="_blank" rel="noopener noreferrer">{{ element.name }}</a>
          <g-link v-else :to="element.link" >{{element.name}}</g-link>
        </li>  
        </ul>
      </div>
      <div class="w-full md:w-1/2 hidden md:block">
        <ul class="flex justify-center md:justify-end">
          <li 
          :key="element.name" 
          v-for="(element,index) in $static.metadata.social" 
          class="hover:text-white"
          v-bind:class="{'mr-6' : index != Object.keys($static.metadata.social).length - 1}"
        >
          <span class="text-sm">
          <a :href="element.link" target="_blank" rel="noopener noreferrer">
            <font-awesome :icon="['fab', element.icon]"/>
          </a>
          </span>
        </li>  
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
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