<template>
  <div class="container">
    <h1>Star Wars Example</h1>
    <ul>
      <li v-for="planet in planets" :key="planet.id">{{ planet.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data, err } = await axios.get("https://swapi.co/api/planets");
    return {
      planets: data.results
    };
  }
};
</script>