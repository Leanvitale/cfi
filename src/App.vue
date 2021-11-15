<template>
  <v-app>
    <LineChart></LineChart>
  </v-app>
</template>

<script>
import LineChart from './components/LineChart.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    LineChart
  }
};
</script>
