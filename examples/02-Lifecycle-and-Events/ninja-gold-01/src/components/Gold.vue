<template>
  <div class="gold-container">
    <p>Your Gold:</p>
    <div class="gold">{{ goldAmount }}</div>
  </div>
</template>

<script>
export default {
  name: 'Gold',
  props: {
    goldAmount: Number,
  }
}
</script>

<style scoped>
.gold-container {
  display: flex;
  align-items: center;
}

.gold {
  border: 1px solid black;
  padding: 2px;
  text-align: right;
  width: 10%;
}
</style>
