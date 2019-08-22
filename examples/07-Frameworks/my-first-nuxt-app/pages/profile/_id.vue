<template>
  <div class="container">
    <h1>User {{ id }}'s profile</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null
    }
  },
  created() {
    const _id = this.$route.params.id
    this.id = _id
  }
}
</script>
