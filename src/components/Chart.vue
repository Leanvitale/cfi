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
        type: Object,
        default() {
          return {
            labels: 
              ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6",  "Jan7"],
            datasets: [
              {
                label: "Data 1",
                data: [2, 12, 9, 21, 3, 31, 21],
                backgroundColor: "#0e37ec7e",
                borderColor: "#0e37ec",
                lineTension: 0,
                pointBackgroundColor: "#0e2794",
              },
              {
                label: "Data 2",
                data: [7, 2, 19, 16, 30, 1, 15],
                backgroundColor: "#df80148a",
                borderColor: "#df8013",
                lineTension: 0,
                pointBackgroundColor: "#864f0f",
              },
              {
                label: "Date 3",
                data: [5, 6, 2, 9, 8, 12, 9],
                borderColor: "#212121",
                lineTension: 0,
                type: 'line',
                pointBackgroundColor: "#333333",
              },
            ],
          }
        }
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