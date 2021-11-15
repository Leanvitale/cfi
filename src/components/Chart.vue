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
    props: ['type', 'json', 'api', 'options'],
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
          console.log(this.chartData);
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