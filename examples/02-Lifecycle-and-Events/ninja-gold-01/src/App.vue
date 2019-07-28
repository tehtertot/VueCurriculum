<template>
  <div id="app">
    <Gold :goldAmount="goldAmount" />
    <LocationList :locations="locations" />
    <ActivityList :activities="activities" />
  </div>
</template>

<script>
import Gold from '@/components/Gold.vue';
import ActivityList from '@/components/ActivityList.vue';
import LocationList from '@/components/LocationList.vue';
import store from '@/store';

export default {
  name: 'app',
  components: {
    ActivityList,
    LocationList,
    Gold
  },
  data: function() {
    return store.state;
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
