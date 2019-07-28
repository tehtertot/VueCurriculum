<template>
  <div id="app">
    <button v-on:click="onClick()">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    onClick: function() {
      // eslint-disable-next-line
      console.log('clicked');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
