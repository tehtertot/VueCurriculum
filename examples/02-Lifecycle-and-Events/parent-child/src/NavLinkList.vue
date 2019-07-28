<template>
  <div id="app">
    <LinkListItem v-for="currLink in links" :link="currLink" :key="currLink.url"/>
  </div>
</template>

<script>
import LinkListItem from '@/components/LinkListItem.vue'

export default {
  name: 'NavLinkList',
  components: {
    LinkListItem
  },
  data: function() {
    return {
      links: [
        {
          name: 'other',
          url: 'other.com'
        },
        {
          name: 'example',
          url: 'example.com'
        },
        {
          name: 'codingdojo',
          url: 'codingdojo.com'
        },
      ],
    }
  }
}
</script>

<style>
</style>
