<template>
  <div id="app">
    <FamilyMovieList />
    <ComedyMovieList />
  </div>
</template>

<script>
import ComedyMovieList from "./components/ComedyMovieList.vue";
import FamilyMovieList from "./components/FamilyMovieList.vue";

export default {
  name: "app",
  components: {
    ComedyMovieList,
    FamilyMovieList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
