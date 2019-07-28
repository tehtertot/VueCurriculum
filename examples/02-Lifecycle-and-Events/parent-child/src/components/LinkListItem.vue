<template>
  <a :href="this.link.url">{{ this.link.name }}</a>
</template>

<script>
export default {
  name: 'LinkListItem',
  props: {
    link: {
      url: String,
      name: String
    }
  }
}
</script>
<style>
a {
  display: block;
}
</style>
