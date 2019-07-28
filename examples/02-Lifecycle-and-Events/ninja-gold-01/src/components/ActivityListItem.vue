<template>
  <div class="activity">
    <p>Got {{ activity.gold }} golds at the {{ activity.locationName }} ({{ activity.time.getHours() }}:{{ activity.time.getMinutes() }})</p>
  </div>
</template>

<script>
export default {
  name: 'ActivityListItem',
  props: {
    activity: {
      gold: Number,
      locationName: String,
      time: Date,
    }
  }
}
</script>
