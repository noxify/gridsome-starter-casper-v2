<template>
  <div>
    <HeaderPartial></HeaderPartial>
    <slot/>
    <FooterPartial></FooterPartial>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

import HeaderPartial from '~/layouts/partials/IndexHeader.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'

export default {
  components : {
    HeaderPartial,
    FooterPartial
  }
}
</script>