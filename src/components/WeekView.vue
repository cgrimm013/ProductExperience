<template>
<div>
  <h2>Week {{log.week}}</h2>
  <h4>Lesson learned this week: </h4>
  <p class="center">
    {{log.learned}}
  </p>
  <h4>Application for this week: </h4>
  <p class="center">
    {{log.application}}
  </p>
  <br />
  <img v-bind:src="log.img" class="pic"/>
</div>
</template>

<script>
export default {
  name: 'WeekView',
  props: ['log'],
  data() {
    return {}
  },
  computed: {
  }
}
</script>

<style scoped>
.pic{
  max-width: 500px;
  max-height: 500px;
  box-shadow: 8px 8px 5px grey;
}
.center{
  width: 70%;
  margin: auto;
}
</style>
