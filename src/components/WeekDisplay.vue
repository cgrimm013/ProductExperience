<template>
<div>
  <div v-for="log in toDisplay">
    <week-view v-bind:log="log"/>
    <br />
    <hr class="center"/>
  </div>
</div>
</template>

<script>
import WeekView from './WeekView'
export default {
  name: 'WeekDisplay',
  components: {WeekView},
  data() {
    return {}
  },
  computed: {
    range: function(){
      return this.$route.params.range;
    },
    toDisplay: function(){
      var logs = this.$store.getters.logs;
      if(this.range == '1-3'){
        return logs.slice(0,3);
      }else if(this.range == '4-6'){
        return logs.slice(3, 6);
      }else if(this.range == '7-10'){
        return logs.slice(6,9);
      }
      return []
    }
  }
}
</script>

<style scoped>
hr{
  border-color: #621EA0;
}

.center{
  width: 70%;
  margin: auto;
}
</style>
