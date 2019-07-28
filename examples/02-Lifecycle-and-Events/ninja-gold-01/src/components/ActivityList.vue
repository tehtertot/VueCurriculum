<template>
  <div class="activities-container">
    <ActivityListItem v-for="(singleActivity, index) in activities" :activity="singleActivity" :key="index"/>
  </div>
</template>

<script>
import ActivityListItem from '@/components/ActivityListItem.vue';

export default {
  name: 'ActivityList',
  components: {
    ActivityListItem,
  },
  props: {
    activities: Array
  },
  updated() {
    console.log(this.activities);
  }
}
</script>

<style scoped>
.activities-container {
  text-align: left;
  border: 1px solid black;
  padding: 20px;
  margin-top: 20px;
  height: 200px;
  overflow-y: auto;
}
</style>
