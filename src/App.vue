<template>
  <v-app>
    <Chart :type="type" :options="options" :json="dataChart" style="width: 100%"></Chart>
    <button @click="changeJSON()">Change URL</button>
  </v-app>
</template>

<script>
import Chart from './components/Chart.vue';

export default {
  name: 'App',
  data() {
    return {
      api: null,
      type: 'bar',
      options: {
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: { display: false },
            },
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 1,
                callback: function(value, index, values) {
                  if (value % Math.round(values[0] / 6) == 0) {
                    return value;
                  } else if (value === 0) {
                    return value;
                  }
                },
              },
              // stacked: true
            },
          ],
        },
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 10,
          },
          position: "top",
        },
        animation: {
          duration: 2000,
          easing: "easeInOutQuart",
        },
      },
      dataChart: {
        labels: 
          ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6",  "Jan7"],
        datasets: [
          {
            label: "This week",
            data: [12, 19, 10, 17, 6, 3, 7],
            backgroundColor: "rgba(224, 248, 255, 0.4)",
            borderColor: "#5cddff",
            lineTension: 1,
            order: 0,
            pointBackgroundColor: "#5cddff",
          },
          {
            label: "Last week",
            data: [10, 25, 3, 25, 17, 4, 9],
            backgroundColor: "rgba(241, 225, 197, 0.4)",
            borderColor: "#ffc764",
            lineTension: 0,
            type: 'line',
            order: 1,
            pointBackgroundColor: "#ffc764",
          },
        ],
      },
    }
  },
  components: {
    Chart
  },
  methods: {
    changeURL() {
      this.api = 'https://api.cloudframework.io/public/data/demo/chart/line?v1'
    },
    changeJSON() {
      this.dataChart = {
        labels: 
          ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6",  "Jan7"],
        datasets: [
          {
            label: "Data 1",
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
            backgroundColor: "#0e37ec7e",
            borderColor: "#0e37ec",
            lineTension: 0,
            pointBackgroundColor: "#0e2794",
          },
          {
            label: "Data 2",
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
            backgroundColor: "#df80148a",
            borderColor: "#df8013",
            lineTension: 0,
            pointBackgroundColor: "#864f0f",
          },
          {
            label: "Date 3",
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
            borderColor: "#212121",
            lineTension: 0,
            type: 'line',
            pointBackgroundColor: "#333333",
          },
        ],
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
};
</script>

<style scoped>
.lala {
  color: #34801100;
}
</style>