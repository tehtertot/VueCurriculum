<template>
  <div class="location">
    <h2>{{ location.name }}</h2>
    <p>Earns between {{ location.minGold }} and {{ location.maxGold }} golds</p>
    <button @click="onClick()">Find Gold</button>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'LocationListItem',
  props: {
    location: {
      name: String,
      minGold: Number,
      maxGold: Number
    }
  },
  methods: {
    onClick() {
      const randomNumber = Math.round(Math.random() * (this.location.maxGold - this.location.minGold) + this.location.minGold);
      store.addGold(randomNumber);
      store.addActivity(this.location, randomNumber);
    }
  }
}
</script>

<style scoped>
.location {
  border: 1px solid black;
  padding: 20px;
}
</style>
