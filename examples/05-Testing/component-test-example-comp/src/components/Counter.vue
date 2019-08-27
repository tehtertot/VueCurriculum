<template>
  <div class="counter">
    <h1>{{ count }}</h1>
    <button @click="incrementCount()">Increment Count</button>
    <button @click="resetCount()">Reset Count</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.$data.count += 1;
    },
    resetCount() {
      this.$data.count = 0;
    }
  }
};
</script>
