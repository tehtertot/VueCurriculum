<template>
  <div class="hello">
    <p>{{ count }}</p>
    <button @click="onClick()">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    onClick() {
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
