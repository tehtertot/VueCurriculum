<template>
  <div id="app">
    <MovieList :movies="familyMovies" genre="Comedy" />
    <MovieList :movies="comedyMovies" genre="Family" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieList from "./components/MovieList.vue";

export default {
  name: "app",
  components: {
    MovieList
  },
  computed: {
    ...mapGetters(["comedyMovies", "familyMovies"])
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
