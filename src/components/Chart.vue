<template>
  <div>
    <RootChart 
        :chartData="chartData" 
        :chartOptions="options" 
        :chartType="type"
        v-if="chartData" />
  </div>
</template>

<script>
  import RootChart from './RootChart.vue'

  export default {
    name: 'Chart',
    props: {
      type: {
        type: String
      },
      json: {
        type: Object
      },
      api: {
        type: String
      },
      options: {
        type: Object,
        // eslint-disable-next-line vue/require-valid-default-prop
        default() {
          return {
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
          }
        }
      }
    },
    components: {
      RootChart
    },
    data () {
      return {
        chartData: null
      }
    },
    watch: {
      api() {
        this.getChatData();
      },
      json(val) {
        this.chartData = val;
      }
    },
    created() {
      this.getChatData();
    },
    mounted() {
      if ( !this.chartData ) {
        this.chartData = {
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
        }
      }
    },
    methods: {
      async getChatData() {
        if ( this.json ) {
          this.chartData = this.json;
        } else if ( this.api ) {
          this.chartData = await this.getApiData();
        } else {
          this.chartData = null;
        }
      },
      getApiData() {
        return new Promise((resolve, reject) => {
          return fetch(this.api)
                .then( response => response.json() )
                .then( resp => resolve(resp.data) )
                .catch( err => reject(err) );
        })
      }
    }
  }
</script>