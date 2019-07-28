<template>
  <div class="locations-container">
    <LocationListItem v-for="(singleLocation, index) in locations" :location="singleLocation" :key="index"/>
  </div>
</template>

<script>
import LocationListItem from '@/components/LocationListItem.vue';

export default {
  name: 'LocationList',
  components: {
    LocationListItem,
  },
  props: {
    locations: Array
  }
}
</script>

<style scoped>
  .locations-container {
    display: flex;
  }
</style>